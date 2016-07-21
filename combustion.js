/*eslint no-unused-vars: [2, "local"] */
/*global ParameterChanged:true, HandleMIDI:true,
  SetParameter, UpdatePluginParameters, MIDI, Note */

const MODELS = {}

// This object defines Drum Machine Designer's sound groups and
// each sound's pitch offset from C1. E.g. KICK 1 is C1+0 while
// KICK 2 is F2+17. It's used for a few things internally as
// well as specifying the groups' dropdown order in the UI.
const DRUMMER = {
  'KICK': [0, 17],
  'SNARE': [2, 4, 16],
  'RIM': [1],
  'CLAP': [3, 22],
  'PERC': [5, 7, 9, 11, 12],
  'CH': [6],
  'PH': [8],
  'OH': [10],
  'CRASH': [13],
  'RIDE': [15],
  'SHAKER': [18, 14],
  'FX': [19, 21, 23, 20]
}

const PITCH_INPUT_OFFSET = -36 // C1 will become array index 0
const PITCH_OUTPUT_OFFSET = 60 // C3

// begin UI with first two dropdowns
var PluginParameters = [{
  name: 'Model',
  type: 'menu',
  valueStrings: Object.keys(MODELS),
  defaultValue: 0
}, {
  name: 'Randomize',
  type: 'menu',
  defaultValue: 1,
  valueStrings: ['Reset default', '-', 'KICK', 'SNARE', 'CLAP', 'PERC', 'FX']
}]

var App = (function () {
  var model, modelName
  var Sounds = []
  var _initComplete
  var _skipUpdates

  // one-time init
  for (var group in DRUMMER) {
    DRUMMER[group].forEach(function (pitchOffset, alt) {
      // sound map dropdown placeholders prevent Logic
      // from complaining about param changes
      PluginParameters.push({
        name: group + (DRUMMER[group].length > 1 ? ' ' + (alt + 1) : ''),
        type: 'menu',
        defaultValue: 0,
        valueStrings: ['-'].concat(Array(16).fill(''))
      })

      // array of objects 0-indexed relative to C1's MIDI pitch
      Sounds[pitchOffset] = {
        group,
        alt,
        param: PluginParameters.length - 1, // current PluginParameter index
        pad: false // not mapped yet
      }
    })
  }

  /**
   * map a sound's pad using the specified method
   * @param  {[type]} sound  [description]
   * @param  {[type]} method [description]
   * @return {[type]}        [description]
   */
  function mapSound (sound, method) {
    if (Array.isArray(sound)) {
      sound.forEach(function (s) {
        mapSound(s, method)
      })

      return
    }

    var altOut = (function (altIn, group, method) {
      // if there's not much choice...
      if (model[group].length === 0) return false
      if (model[group].length === 1) return 0

      if (method === 'random') {
        return Math.floor(Math.random() * model[group].length)
      }

      // default (linear transform)
      return Math.floor(
        altIn / (DRUMMER[group].length - 1) * (model[group].length - 1)
      )
    })(sound.alt, sound.group, method)

    sound.pad = (altOut === false) ? false : model[sound.group][altOut]
    SetParameter(sound.param, (sound.pad === false) ? 0 : sound.pad + 1)
  }

  function setModel (key, setDefaults) {
    var opts = ['-']

    // avoid doing anything if we can
    if (key === modelName) return
    modelName = key

    // group model sounds like in DRUMMER
    model = {}
    for (var group in DRUMMER) {
      model[group] = []
    }

    // parse model definition
    MODELS[modelName].forEach(function (arr, pad) {
      // allow for arrr-ayless shorthand, matey
      if (!Array.isArray(arr)) arr = [arr, arr]

      // sound assignments
      arr[1].toUpperCase().split('|').forEach(function (txt) {
        var [group, num] = txt.split(' ')
        if (!group) return

        // set pad's index/position (0-15)
        if (num && typeof model[group][num - 1] === 'undefined') {
          model[group][num - 1] = pad
        } else {
          // add to next available alt slot
          model[group].push(pad)
        }
      })

      // add pad to dropdown options
      opts.push(arr[0] + '   [' + MIDI.noteName(pad + PITCH_OUTPUT_OFFSET) + ']')
    })

      // update pad selection/dropdowns for this model
    for (var sound in Sounds) {
      PluginParameters[Sounds[sound].param].valueStrings = opts
    }

    // set default mapping?
    if (setDefaults) mapSound(Sounds, 'default')

    // need Logic to update dropdown options but don't
    // care about the ParameterChanged() call for each
    _skipUpdates = true
    UpdatePluginParameters()
  }

  function ParameterChanged (param, value) {
    if (_initComplete && _skipUpdates) {
      if (param === PluginParameters.length - 1) {
        _skipUpdates = false // update sweep is complete
      }
      return
    }

    // when Logic has finished restoring params for the first time
    if (!_initComplete && param === PluginParameters.length - 1) {
      _initComplete = true
    }

    if (param === 0) {
      // change model and set defaults if user initiated change
      setModel(PluginParameters[param].valueStrings[value], _initComplete)
    } else if (param === 1) {
      // "Edit" dropdown
      var group = PluginParameters[param].valueStrings[value]

      if (value === 0) {
        mapSound(Sounds, 'default') // reset defaults
      } else if (value > 1) {
        // randomize group
        mapSound(Sounds.filter(function (sound) {
          return sound.group === group
        }), 'random')
      }

      // set dropdown back to '-'
      SetParameter(param, 1)
    } else {
      // find the sound with this param index
      Sounds.find(function (sound) {
        return sound.param === param
      }).pad = (value === 0) ? false : value - 1
    }
  }

  function HandleMIDI (event) {
    var sound

    // non-note events are passed through
    if (event instanceof Note) {
      // notes outside DMD's range are NOT passed through
      sound = Sounds[event.pitch + PITCH_INPUT_OFFSET]
      if (!sound || sound.pad === false) return

      event.pitch = sound.pad + PITCH_OUTPUT_OFFSET
    }

    event.send()
  }

  // public methods
  return {
    ParameterChanged,
    HandleMIDI
  }
})()

// let Logic reign...
ParameterChanged = App.ParameterChanged
HandleMIDI = App.HandleMIDI
