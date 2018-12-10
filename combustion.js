/* eslint no-unused-vars: [2, "local"] */
/* global ParameterChanged:true, HandleMIDI:true,
  SetParameter, UpdatePluginParameters, MIDI, Note */

const MODELS = {
  'Vintage > Electro > Ace Clone FR-2L': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    'CH',
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['Cymbal', 'CRASH|RIDE'],
    ['Cowbell', 'RIM'],
    ['Clave', 'CLAP'],
    ['Electro Cowbell', 'FX'],
    ['LT2', 'PERC 3'],
    ['Bleep 1', 'FX'],
    ['Bleep 2', 'FX'],
    ['Buzz Synth', 'FX'],
    ['Acid Lead', 'FX'],
  ],
  'Vintage > Electro > DR-606': [
    ['BD1', 'KICK 1'],
    ['SD1', 'SNARE 1'],
    ['CH1', 'CH'],
    ['OH1', 'OH'],
    ['HT1', 'PERC 3'],
    ['MT1', 'PERC 2'],
    ['LT1', 'PERC 1'],
    ['CY1', 'CRASH'],
    ['BD2', 'KICK 2'],
    ['SD2', 'SNARE 2'],
    ['CH2', 'PH'],
    ['OH2', 'FX'],
    ['HT2', 'FX'],
    ['MT2', 'PERC 1'],
    ['LT2', 'PERC 4'],
    ['CY2', 'RIDE'],
  ],
  'Vintage > Electro > DR-808': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CY', 'CRASH|RIDE'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['Hi Conga', 'FX'],
    ['Mid Conga', 'FX'],
    ['Lo Conga', 'FX'],
    ['Cowbell', 'FX'],
    ['Clave', 'FX'],
    ['Maracas', 'SHAKER'],
  ],
  'Vintage > Electro > DRM-55': [
    ['KICK', 'KICK 1'],
    'SNARE',
    'CH',
    ['RS', 'CLAP'],
    ['Hi Tom', 'PERC 3'],
    ['Mid Tom', 'PERC 2'],
    ['Low Tom', 'PERC 1'],
    ['Cymbal', 'CRASH|OH'],
    ['Woodblock', 'KICK 2'],
    ['Bleep 1', 'FX'],
    ['Sub FX', 'FX'],
    ['Bass', 'FX'],
    ['Sub Noise', 'FX'],
    ['Rimshot', 'RIM'],
    ['Clave', 'CLAP'],
    ['Bleep 2', 'SHAKER'],
  ],
  'Vintage > Electro > KPR++': [
    ['BD1', 'KICK 1'],
    ['SD', 'SNARE'],
    'CH',
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR', 'CRASH|RIDE'],
    ['CP', 'CLAP'],
    ['RS1', 'RIM'],
    ['CL1', 'FX'],
    ['CB', 'FX'],
    ['BD2', 'KICK 2'],
    ['RS2', 'FX'],
    ['CL2', 'FX'],
    ['Metronome', 'FX'],
  ],
  'Vintage > Electro > Kaziotone': [
    ['SK1_BD1', 'KICK 1'],
    ['SK1_BD2', 'KICK 2'],
    ['SK1_CH', 'CH'],
    ['SK1_OH', 'OH'],
    ['SK1_HT', 'PERC 2'],
    ['SK1_LT', 'PERC 1'],
    ['VL1_SD', 'SNARE'],
    ['VL1_PC 1', 'SHAKER'],
    ['VL1_PC 2', 'CLAP'],
    ['Metal 1', 'FX'],
    ['Metal 2', 'FX'],
    ['Spring', 'FX'],
    ['Bleep', 'FX'],
    ['Cymbal', 'CRASH'],
    ['Bass', 'FX'],
    ['Noise FX', 'FX'],
  ],
  'Vintage > Electro > Maestro King': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['RS', 'RIM'],
    ['BR', 'CH|PH'],
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['Cymbal', 'CRASH|RIDE'],
    ['Wood Block', 'FX'],
    ['Bongo', 'PERC 4|PERC 5'],
    ['Wood Clave', 'FX'],
    ['Clock', 'CLAP'],
    ['MT2', 'PERC 4|PERC 5'],
    ['LoFi Synth 1', 'FX'],
    ['LoFi Synth 2', 'FX'],
    ['Noise Perc', 'FX'],
  ],
  'Vintage > Electro > Micromatix': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    'CH',
    'OH',
    ['HT', 'PERC 1'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 3'],
    ['CR', 'CRASH|RIDE'],
    ['Guiro', 'FX'],
    ['LFOBass', 'FX'],
    ['Lead1', 'FX'],
    ['Lead2', 'FX'],
    ['LaserBass', 'FX'],
    ['SpaceFX1', 'FX'],
    ['Poly', 'FX'],
    ['SpaceFX2', 'RIM'],
  ],
  'Vintage > Electro > Phatwerk': [
    ['BD1', 'KICK 1'],
    ['SD', 'SNARE 1'],
    'CH',
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR', 'CRASH'],
    ['BD2', 'KICK 2'],
    ['SD2', 'SNARE 2'],
    ['CP', 'CLAP'],
    ['Bass', 'FX'],
    ['Laser', 'FX'],
    ['Poly', 'FX'],
    ['Pulse', 'FX'],
    ['XRing', 'FX'],
  ],
  'Vintage > Electro > Pulsator': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    'CH',
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR1', 'RIDE'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['Cowbell', 'PERC 4'],
    ['Conga1', 'PERC 4'],
    ['Conga2', 'PERC 5'],
    ['VeloPerc', 'FX'],
    ['Hit', 'FX'],
    ['CR2', 'CRASH'],
  ],
  'Vintage > Electro > Sci-mons': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    'CH',
    'OH',
    ['HT', 'PERC 3'],
    ['MT1', 'PERC 2'],
    ['MT2', 'PERC 1'],
    ['LT', 'PERC 1'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['RD', 'RIDE'],
    ['CR', 'CRASH'],
    ['Conga 1', 'PERC 4'],
    ['Conga 2', 'PERC 5'],
    ['Conga 3', 'PERC 4'],
    ['Conga 4', 'PERC 5'],
  ],
  'Vintage > Electro > YMR-10': [
    ['BD', 'KICK 1'],
    ['SD 1', 'SNARE 1'],
    ['SD 2', 'SNARE 2'],
    'CH',
    'OH',
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['HT', 'PERC 3'],
    ['Cymbal', 'CRASH|RIDE'],
    ['Deep Perc', 'KICK 2'],
    'Clap',
    ['Clave', 'RIM'],
    ['Tiny Synth', 'FX'],
    ['Lead Synth', 'FX'],
    ['Pulse Synth', 'FX'],
    ['Sub Bass', 'FX'],
  ],
  'Vintage > House > DR-708': [
    ['BD1', 'KICK'],
    ['SD1', 'SNARE'],
    ['CH1', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR', 'CRASH'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['RD', 'RIDE'],
    ['CB', 'FX'],
    ['TB', 'SHAKER'],
    ['CH2', 'CH'],
    ['BD2', 'KICK'],
    ['SD2', 'SNARE'],
  ],
  'Vintage > House > DR-909': [
    ['BD2', 'KICK'],
    ['SD1', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR1', 'CRASH'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['RD', 'RIDE'],
    ['SD2', 'SNARE'],
    ['SD3', 'SNARE'],
    ['SD4', 'SNARE'],
    ['BD1', 'KICK'],
    ['CR2', 'CRASH'],
  ],
  'Vintage > House > KR-100': [
    ['Kick1', 'KICK'],
    ['Snare1', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['Crash', 'CRASH'],
    ['Clap', 'CLAP'],
    ['Rimshot', 'RIM'],
    ['Cymbal1', 'FX'],
    ['China', 'CRASH|FX'],
    ['Cowbell', 'FX'],
    ['Conga', 'PERC 4|PERC 5'],
    ['Kick2', 'KICK'],
    ['Snare2', 'SNARE'],
  ],
  'Vintage > Pop > CL-78': [
    ['BD1', 'KICK'],
    ['BD2', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['Bongo', 'PERC 3'],
    ['Conga', 'PERC 1'],
    ['Cymbal', 'CRASH'],
    ['Rimshot', 'RIM|CLAP'],
    ['Clave', 'FX'],
    ['Cowbell', 'FX'],
    ['Metal', 'FX'],
    ['Guiro', 'FX'],
    ['Maraca', 'SHAKER'],
    ['Tambourine', 'FX'],
    ['Latin', 'PERC 2'],
  ],
  'Vintage > Pop > DNX': [
    ['BD1', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT1', 'PERC 3'],
    ['MT1', 'PERC 2'],
    ['LT1', 'PERC 1'],
    ['CR', 'CRASH'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['RD', 'RIDE'],
    ['BD2', 'KICK'],
    ['MT2', 'PERC 4'],
    ['HT2', 'PERC 5'],
    ['Shaker', 'SHAKER'],
    ['Tamb', 'SHAKER'],
  ],
  'Vintage > Pop > DR-626': [
    ['BD', 'KICK'],
    ['SD1', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR', 'CRASH'],
    ['Clap', 'CLAP'],
    ['RS', 'RIM'],
    ['RD', 'RIDE'],
    ['China', 'CRASH'],
    ['Cowbell', 'FX'],
    ['CongaHi', 'PERC 5'],
    ['CongaLo', 'PERC 4'],
    ['SD2', 'SNARE'],
  ],
  'Vintage > Pop > DR-727': [
    ['Bongo Hi', 'PERC 5'],
    ['Bongo Lo', 'PERC 4'],
    ['Conga Hi', 'PERC 3'],
    ['Conga Med', 'PERC 2'],
    ['Conga Lo', 'KICK|PERC 1'],
    ['Timbale Hi', 'PERC 2'],
    ['Timbale Lo', 'PERC 1'],
    ['Quijada', 'CRASH'],
    ['Agogo Hi', 'PERC 5'],
    ['Agogo Lo', 'PERC 4'],
    ['Whistle Hi', 'RIDE'],
    ['Whistle Lo', 'CRASH'],
    ['Cabasa', 'SHAKER'],
    ['Maracas', 'CH|PH'],
    ['Star Chimes', 'FX'],
    ['MT', 'SNARE'],
  ],
  'Vintage > Pop > DrumTrax': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR', 'CRASH'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['RD', 'RIDE'],
    ['DrumTrax_CR 2', 'CRASH'],
    ['Cabasa', 'SHAKER'],
    ['Cowbell', 'PERC 4|PERC 5'],
    ['Tamb', 'SHAKER'],
    ['Bass', 'FX'],
  ],
  'Vintage > Pop > ESP-12': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR', 'CRASH'],
    ['RS', 'RIM'],
    ['Clap', 'CLAP'],
    ['Ride', 'RIDE'],
    ['Cowbell', 'FX'],
    ['Tabla1', 'PERC 4'],
    ['Tabla2', 'PERC 5'],
    ['BD 2', 'KICK'],
    ['SD 2', 'SNARE'],
  ],
  'Vintage > Pop > Lynn Dream': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR', 'CRASH'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['RD', 'RIDE'],
    ['Cabasa', 'SHAKER 2'],
    ['Tamb', 'SHAKER 1'],
    ['Cowbell', 'FX'],
    ['Hi Conga', 'PERC 5'],
    ['Lo Conga', 'PERC 4'],
  ],
  'Vintage > Pop > Micro Pops': [
    ['Kick', 'KICK'],
    ['Snare', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['Clave', 'RIM'],
    ['Guiro1', 'SHAKER'],
    ['Guiro2', 'SHAKER'],
    ['Quijada', 'CLAP'],
    ['Tambourine', 'SHAKER'],
    ['Cowbell', 'FX'],
    ['Ring FX', 'FX'],
    ['Noise FX', 'FX'],
    ['Bass', 'FX'],
  ],
}

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
  'FX': [19, 21, 23, 20],
}

const PITCH_INPUT_OFFSET = -36 // C1 will become array index 0
const PITCH_OUTPUT_OFFSET = 60 // C3

// begin UI with first two dropdowns
var PluginParameters = [{
  name: 'Model',
  type: 'menu',
  valueStrings: Object.keys(MODELS),
  defaultValue: 0,
}, {
  name: 'Randomize',
  type: 'menu',
  defaultValue: 1,
  valueStrings: ['Reset default', '-', 'KICK', 'SNARE', 'CLAP', 'PERC', 'FX'],
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
        valueStrings: ['-'].concat(Array(16).fill('')),
      })

      // array of objects 0-indexed relative to C1's MIDI pitch
      Sounds[pitchOffset] = {
        group,
        alt,
        param: PluginParameters.length - 1, // current PluginParameter index
        pad: false, // not mapped yet
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
    HandleMIDI,
  }
})()

// let Logic reign...
ParameterChanged = App.ParameterChanged
HandleMIDI = App.HandleMIDI
