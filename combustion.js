/* eslint no-unused-vars: [2, "local"] */
/* global ParameterChanged:true, HandleMIDI:true,
  SetParameter, UpdatePluginParameters, MIDI, Note */

const MODELS = {
  'Spark Factory > Creative & FXs > Alien Circuit': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    'CH',
    ['Electro Perc', 'OH|PH'],
    ['HT', 'PERC 2'],
    ['Synth FX1', 'FX'],
    ['Synth FX2', 'FX'],
    ['Electro Clave', 'RIDE'],
    ['Long Guiro', 'SHAKER'],
    ['RS', 'RIM'],
    ['Short Guiro', 'SHAKER'],
    ['Sub Bass', 'KICK'],
    ['MT', 'PERC 1'],
    ['X Perc', 'FX'],
    ['X Bell', 'CLAP|FX'],
    ['Flange Perc', 'FX'],
  ],
  'Spark Factory > Creative & FXs > D.I.Y. Drum Template': [
    ['BD1', 'KICK'],
    ['BD2', 'KICK'],
    ['BD3', 'KICK'],
    ['SD1', 'SNARE'],
    ['SD2', 'SNARE'],
    ['SD3', 'SNARE'],
    ['HH1', 'CH'],
    ['HH2', 'RIDE'],
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['RS', 'RIM'],
    ['CY', 'CRASH'],
    ['CY2', 'CRASH'],
    ['PC1', 'FX'],
    ['PC2', 'CLAP'],
  ],
  'Spark Factory > Creative & FXs > Electricity': [
    ['BD', 'KICK'],
    ['SD1', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['Timbal', ''],
    ['SubTom 1', 'PERC 2'],
    ['LT', 'KICK'],
    ['RS1', 'RIM'],
    ['Shaker', 'SHAKER'],
    ['SD2', 'SNARE'],
    ['Ride', 'RIDE'],
    ['Chime', 'CRASH'],
    ['Echo block', 'PERC 4'],
    ['SubTom 2', 'PERC 1'],
    ['Timpani', 'PERC 3'],
    ['SynthFX', 'FX'],
  ],
  'Spark Factory > Creative & FXs > Industrial': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['Reflex', 'FX'],
    ['Crippler', 'SNARE|RIM'],
    ['Damage', 'RIDE'],
    ['Metal Sheet', 'CRASH'],
    ['Hammer', 'CLAP'],
    ['Barrel', 'KICK'],
    ['Machine', 'FX'],
    ['Steel', 'SHAKER'],
    ['Gravity', 'FX'],
  ],
  'Spark Factory > Creative & FXs > Mad Scientist': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['Noise', 'CLAP'],
    ['Specimen', 'OH'],
    ['LT', 'PERC 1'],
    ['MT', 'PERC 2'],
    ['X-Shoot', 'FX'],
    ['Phasing Cymbal', 'CRASH'],
    ['BD_2', 'KICK'],
    ['SD_2', 'SNARE'],
    ['Cowbell', 'RIM'],
    ['Bouncing Wave', 'FX'],
    ['Tubular', 'CH|PH'],
    ['Shock', 'CLAP'],
    ['X-Bell', 'FX'],
    ['X-Ride', 'RIDE'],
  ],
  'Spark Factory > Creative & FXs > The Machinist': [
    ['KICK1', 'KICK'],
    ['Snare', 'SNARE'],
    ['Clap', 'CLAP'],
    ['NerveHiHat', 'OH'],
    ['Bass', 'FX'],
    ['Pad', ''],
    ['KICK2', 'KICK'],
    ['Snippet1', 'PERC 2'],
    ['Snippet2', 'CLAP'],
    ['Rattle', 'RIM'],
    ['LiveRec1', 'CRASH'],
    ['Machine', 'FX'],
    ['LiveRec2', 'SHAKER'],
    ['Synth', 'FX'],
    ['Grain', 'PERC 1'],
    ['Solder', 'PERC 3'],
  ],
  'Spark Factory > Dub > Dub Trip': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH1', 'CLAP 2'],
    ['OH', 'OH|RIDE'],
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR', 'CRASH'],
    ['CP', 'CLAP 1'],
    ['RS', 'RIM'],
    ['CH2', 'CH|PH|SHAKER'],
    ['Woodblock1', 'PERC 5'],
    ['Woodblock2', 'PERC 4'],
    ['Timbales', 'FX'],
    ['Guiro', 'FX'],
    ['Sub Bass', 'FX'],
  ],
  'Spark Factory > Dub > DubLyynk': [
    ['Kick', 'KICK'],
    ['Clap1', 'SNARE 2'],
    ['Snare1', 'SNARE 1'],
    ['Clap2', 'CLAP'],
    ['SynthVox', 'FX'],
    ['LeadSync', 'FX'],
    ['HiHat', 'CH|PH'],
    ['Crash', 'CRASH'],
    ['Open Hat', 'OH'],
    ['Shaker', 'SHAKER'],
    ['Ride', 'RIDE'],
    ['Clap', 'CLAP'],
    ['Snare2', 'SNARE 3'],
    ['FuriousLead', 'FX'],
    ['Acid Bass', 'FX'],
    ['Round Bass', 'FX'],
  ],
  'Spark Factory > Dub > Grime Step': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['Bass', 'FX'],
    ['MadFX', 'FX'],
    ['PadSeq', 'FX'],
    ['Crash', 'CRASH'],
    ['Clap', 'CLAP'],
    ['RimShot', 'RIM'],
    ['Ride', 'RIDE'],
    ['Bass2', 'FX'],
    ['SH Bass', 'FX'],
    ['Wobbler', 'FX'],
    ['Wobblest', 'FX'],
    ['DelaySynth', 'PERC|FX'],
  ],
  'Spark Factory > Dub > Techwayz': [
    ['BD01', 'KICK'],
    ['CP01', 'CLAP'],
    ['CLHH', 'CH|PH'],
    'SHAKER',
    ['LT01', 'PERC 3'],
    ['MT01', 'PERC 2'],
    ['MT02', 'PERC 1'],
    ['CRASH', 'OH|CRASH'],
    ['VOC01', 'FX'],
    ['VOC02', 'FX|SNARE'],
    ['VOC03', 'FX'],
    ['VOC04', 'FX'],
    ['VOC05', 'FX'],
    ['VOC06', 'FX'],
    ['BASS01', 'FX|KICK'],
    ['SYNTH01', 'FX|KICK'],
  ],
  'Spark Factory > Electro > Berlin Electro': [
    ['Kick', 'KICK'],
    ['RimEcho', 'RIM'],
    ['Snare', 'SNARE'],
    ['Clap', 'CLAP'],
    ['HT', 'PERC 1'],
    ['MT', 'PERC 2'],
    ['CH', 'CH|PH'],
    ['Perc', 'PERC 3'],
    'OH',
    ['ClaveEcho', 'PERC 4'],
    ['Ride', 'RIDE'],
    ['StereoClave', 'FX'],
    ['Cowbell', 'PERC 5'],
    ['Chime', 'CRASH|FX'],
    ['Bass', 'KICK|FX'],
    ['GnarlyBass', 'KICK|FX'],
  ],
  'Spark Factory > Electro > Brute Beat': [
    ['Round Kick', 'KICK'],
    ['Noisy Snare', 'SNARE'],
    ['Hat Closed', 'CH|PH'],
    ['Hat Open', 'OH'],
    ['BandSnare', 'FX'],
    ['Banjo Snare', 'SNARE'],
    ['BandShare2', 'FX'],
    ['UltraSawLo', 'FX'],
    ['High Alert', 'CLAP'],
    ['Bad Clams', 'KICK'],
    ['Big Fabio', 'RIDE'],
    ['Blatto', 'FX'],
    ['MotherInLaw1', 'CRASH'],
    ['MotherInLaw2', ''],
    ['SolderMe', 'FX'],
    ['MaxBrute', 'FX'],
  ],
  'Spark Factory > Electro > Chillax': [
    ['BodyHit', 'KICK'],
    ['ClapSnare', 'SNARE'],
    ['Punch', 'KICK'],
    ['ScissorHat', 'CH|PH'],
    ['FadeNoise', 'FX'],
    ['PlasticSnapper', 'CLAP'],
    ['VoxHat', 'RIDE|FX'],
    ['PlasticVib', 'FX'],
    ['VoxHatOpen', 'OH'],
    ['LoikVerb', 'RIM'],
    ['VoxHatClosed', 'SHAKER'],
    ['SynthAmbient', 'CRASH|FX'],
    ['ClickKick', 'KICK'],
    ['SynthTone', 'FX'],
    ['VoxHuh', 'PERC'],
    ['VoxFX', 'PERC'],
  ],
  'Spark Factory > Electro > Circuit Freqs': [
    ['Kick', 'KICK'],
    ['Snare', 'SNARE'],
    ['Hat', 'CH|PH'],
    'OH',
    ['Metal Pipe', 'CLAP 2'],
    ['Metal Yelp', 'RIDE'],
    ['Punch Kick', 'KICK'],
    ['Splash', 'CRASH'],
    ['Laser Snare', 'SNARE'],
    ['Room Claps', 'CLAP 1'],
    ['Transtretch', 'FX'],
    ['Ah!', 'FX|CLAP'],
    ['8Bit', 'PERC'],
    ['Synth Pluck', 'FX'],
    ['Rubber Synth', 'FX'],
    ['Meta Riser', 'FX'],
  ],
  'Spark Factory > Electro > Cubesque': [
    ['Kick', 'KICK'],
    ['Snare', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1|KICK'],
    ['HH2', 'SHAKER'],
    ['Clap1', 'CLAP'],
    ['Clap2', 'CLAP'],
    ['Pad1', ''],
    ['Pad2', ''],
    ['Burst', 'CRASH'],
    ['Clap3', 'CLAP'],
    ['Synth1', 'FX'],
    ['Synth2', 'FX'],
  ],
  'Spark Factory > Electro > Dancehall': [
    ['BD1', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['BD2', 'KICK'],
    ['Brick', 'CLAP 2'],
    ['LT', 'PERC 1'],
    ['Clave', ''],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['Shaker1', 'CRASH|RIDE'],
    ['Shaker2', 'SHAKER'],
    ['Cowbell', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['Breath1', 'FX'],
    ['Breath2', 'FX'],
  ],
  'Spark Factory > Electro > Decypher': [
    ['Kick', 'KICK'],
    ['Snare', 'SNARE'],
    ['HiHat', 'CH'],
    ['NoiseHat', 'OH'],
    ['Tom', 'PERC 2'],
    ['Conga', 'PERC 3'],
    ['NoisyPerc', 'CRASH|FX'],
    ['ThinHat', 'SHAKER'],
    ['Clap1', 'CLAP'],
    ['Clap2', 'CLAP'],
    ['Rasp', 'FX'],
    ['DirtyPerc', 'SNARE'],
    ['Flash', 'PH'],
    ['Lead', 'RIDE'],
    ['HiPerc', 'FX'],
    ['LoPerc', 'PERC 1'],
  ],
  'Spark Factory > Electro > Deep House': [
    ['KickShort', 'KICK'],
    ['KickDeep', 'KICK'],
    ['Snare', 'SNARE'],
    ['Clap', 'CLAP'],
    ['LT', 'PERC 1'],
    ['Perc1', 'SNARE'],
    ['HHClosed1', 'PH'],
    ['Perc2', 'PERC 2'],
    ['HHClosed2', 'CH'],
    ['HiPerc', 'FX'],
    ['HHOpen', 'OH'],
    ['Chord 1', 'FX'],
    ['Chord 2', 'FX'],
    ['Chord 3', 'FX|CRASH|RIDE'],
    ['SubBass', 'KICK'],
    ['BrightBass', 'FX'],
  ],
  'Spark Factory > Electro > Deep Minimal': [
    ['Kick', 'KICK'],
    ['Snare', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['Bass', 'PERC 2'],
    ['Synth', 'PERC 1'],
    ['Tom', 'PERC 3'],
    ['Crash', 'CRASH'],
    ['Clap', 'CLAP'],
    ['Clave', 'RIM'],
    ['Ride', 'RIDE'],
    ['Shaker', 'SHAKER'],
    ['Perc1', 'FX'],
    ['Perc2', 'FX'],
    ['Perc3', 'FX'],
    ['Perc4', 'FX'],
  ],
  'Spark Factory > Electro > Engage': [
    ['Kick', 'KICK'],
    ['Snare', 'SNARE'],
    ['Hat', 'CH|PH'],
    ['Open Hat', 'OH'],
    ['Clap', 'CLAP'],
    ['High Tom', 'PERC 2'],
    ['Low Tom', 'PERC 1'],
    ['Crash', 'CRASH'],
    ['Triangle1', 'RIDE'],
    ['Triangle2', 'RIDE'],
    ['Vocal', 'FX'],
    ['Pluck', 'FX'],
    ['Stab', 'FX'],
    ['Sub', 'KICK'],
    ['Chord 1', 'FX'],
    ['Chord 2', 'FX'],
  ],
  'Spark Factory > Electro > Expendable': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['HHCL', 'CH|PH'],
    ['HHOP', 'OH'],
    ['HT', 'FX'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 3'],
    'CRASH',
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['SCRem', 'FX'],
    ['CB', ''],
    ['HT2', 'FX'],
    ['MT2', 'FX'],
    ['LT2', 'PERC 1'],
    ['CR2', 'FX'],
  ],
  'Spark Factory > Electro > French Toast': [
    ['Hard Kick', 'KICK'],
    ['SuperSD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['Elecperc1', 'PERC 1'],
    ['Elecperc2', 'PERC 2'],
    ['Elecperc3', 'PERC 3'],
    ['DirtyCrash', 'FX'],
    ['ClapFlange', 'CLAP'],
    ['Rim', 'RIM'],
    ['AnalogHH', 'SHAKER'],
    ['Cymbal', 'CRASH'],
    ['Elecperc4', 'PERC 4'],
    ['Clave', 'FX'],
    ['HouseSynth', 'FX'],
    ['RevCymbal', 'FX'],
  ],
  'Spark Factory > Electro > Heavy Cross': [
    ['Kick', 'KICK'],
    ['Wide Snare', 'SNARE'],
    ['Hi Hat1', 'PH'],
    ['Hi Hat2', 'OH'],
    ['Tom Hi', 'PERC 2'],
    ['Tom Lo', 'PERC 1'],
    ['Tight Snare', 'SNARE'],
    ['Crash', 'CRASH'],
    ['Cowbell', 'RIM'],
    ['Sub Slap', 'FX'],
    ['Stereo Hi Hat', 'CH'],
    ['Vox', 'FX'],
    ['Violin', 'FX'],
    ['Synth', 'FX'],
    ['Bass 00', 'FX'],
    ['Bridge', 'FX'],
  ],
  'Spark Factory > Electro > Kryptoniq': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['HHCL', 'CH|PH'],
    ['HHOP', 'OP'],
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['CR', 'CRASH'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['CB', 'PERC4'],
    ['PK', 'FX'],
    ['HT2', 'FX'],
    ['MT2', 'FX'],
    ['LT2', 'FX'],
    ['RD', 'RIDE'],
  ],
  'Spark Factory > Electro > LargerThanLife': [
    ['Kick', 'KICK'],
    ['Snare', 'SNARE'],
    ['HH', 'CH|PH'],
    'OH',
    ['Short Tom', 'PERC 2'],
    ['Deep Tom', 'FX'],
    ['Round Tom', 'KICK'],
    ['Ride', 'RIDE'],
    ['ClapNoise', 'CLAP'],
    ['RimShot', 'RIM'],
    ['Pad', 'FX'],
    ['Bass', 'FX'],
    ['Weird', 'FX'],
    ['Razor', 'FX'],
    ['Hit', 'SNARE'],
    ['Short Perc', 'PERC 1'],
  ],
  'Spark Factory > Electro > Miami Club': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['Reverse Crash', 'FX'],
    ['CP', 'CLAP'],
    ['Rimshot', 'RIM'],
    ['Ride', 'RIDE'],
    ['Crash', 'CRASH'],
    ['Bass', 'FX'],
    ['Chord', 'FX'],
    ['Synth', 'FX'],
    ['FX2', 'FX'],
  ],
  'Spark Factory > Electro > Mikropunqt': [
    ['BD01', 'KICK'],
    ['SN01', 'SNARE'],
    ['CH01', 'CH|PH'],
    ['OH01', 'OH'],
    ['HT01', 'PERC 3'],
    ['MT01', 'PERC 2'],
    ['LT01', 'PERC 1'],
    ['CRASH01', 'CRASH'],
    ['CP01', 'CLAP'],
    ['RS01', 'RIM'],
    ['PERC01', 'FX'],
    ['BD02', 'KICK'],
    ['SYNTH01', 'FX'],
    ['FX01', 'FX'],
    ['FX02', 'FX'],
    ['CRASH02', 'CRASH'],
  ],
  'Spark Factory > Electro > Minimal Kitchen': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH'],
    'OH',
    ['MT', 'PERC 3'],
    ['HT', 'PERC 2'],
    ['MT(2)', 'PERC 1'],
    ['Crash', 'CRASH'],
    ['BD02', 'KICK'],
    ['CH02', 'PH'],
    ['FX', 'FX'],
    ['FX2', 'FX'],
    ['FX3', 'FX'],
    ['FX4', 'FX'],
    ['Perc', ''],
    ['Perc2', 'RIM'],
  ],
  'Spark Factory > Electro > Minimal Vibes': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 4'],
    ['Perc1', 'PERC 2'],
    ['Reflect', 'FX'],
    ['Reverse', 'FX'],
    ['CP', 'CLAP'],
    ['RS', 'RIM'],
    ['Ride', 'RIDE'],
    ['ClapShake', 'CLAP'],
    ['Perc2', 'PERC 1'],
    ['Perc3', 'PERC 3'],
    ['Bass', 'FX'],
    ['Synth', 'FX|CRASH'],
  ],
  'Spark Factory > Electro > Minimalism': [
    ['Kick1', 'KICK'],
    ['Kick2', 'KICK'],
    ['Snare', 'SNARE'],
    ['Clap', 'CLAP'],
    ['Perc1', 'PERC 2'],
    ['Perc2', 'PERC 3'],
    ['CH', 'CH|PH'],
    ['Perc3', 'PERC 1'],
    ['CH2', 'PH'],
    ['RS', 'RIM'],
    'OH',
    ['ElectroBlast', 'CRASH'],
    ['Tambourine', 'SHAKER'],
    ['LetsRock', 'FX'],
    ['Bass1', 'FX'],
    ['Bass2', 'FX'],
  ],
  'Spark Factory > Electro > Progressive Trance': [
    ['Kick1', 'KICK'],
    ['Kick2', 'KICK'],
    ['Snare', 'SNARE'],
    ['Clap', 'CLAP'],
    ['Tom', 'PERC'],
    ['SciFi', 'FX'],
    ['HH1', 'CH'],
    ['Sonar', 'FX'],
    ['HH2', 'PH'],
    ['Perc', 'RIM'],
    'OH',
    ['EchoPerc', 'CLAP'],
    ['Vocals1', 'FX'],
    ['Vocals2', 'FX'],
    ['Synth', 'FX'],
    ['Bass', 'FX'],
  ],
  'Spark Factory > Electro > Race 2 Break': [
    ['Kick', 'KICK'],
    ['Clap', 'CLAP'],
    ['HiHat', 'OH'],
    ['Shaker', 'SHAKER'],
    ['HiHat2', 'PH'],
    ['Tom', 'PERC 1'],
    ['Conga', 'PERC 3'],
    ['Filter Noise', 'FX'],
    ['Bongo Roll', 'PERC 2'],
    ['Alarm Stab', 'FX'],
    ['Ride', 'CH'],
    ['Evil Synth', 'FX'],
    ['Synth Buzz', 'FX'],
    ['Steo Synth', 'FX'],
    ['Buzz Stab', 'FX'],
    ['Lazer Crash', 'FX'],
  ],
  'Spark Factory > Electro > Rave Beats': [
    ['Kick', 'KICK'],
    ['Perc1', 'PERC 1'],
    ['Snare', 'SNARE'],
    ['MetalSnare', 'SNARE'],
    ['Perc2', 'PERC 2'],
    ['EchoPerc', 'RIM'],
    ['EchoHat', 'PH'],
    ['EchoTimb', ''],
    ['CH1', 'CH'],
    ['Perc3', 'PERC 3'],
    ['CH2', 'CH|PH'],
    ['Perc4', 'PERC 4'],
    ['SubKick', 'KICK'],
    ['Perc5', 'PERC 5'],
    ['Puser', 'FX'],
    ['StabNote', 'FX'],
  ],
  'Spark Vintage > Electro > Ace Clone FR-2L': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
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
  'Spark Vintage > Electro > DR-606': [
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
  'Spark Vintage > Electro > DR-808': [
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
  'Spark Vintage > Electro > DRM-55': [
    ['KICK', 'KICK 1'],
    'SNARE',
    ['CH', 'CH|PH'],
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
  'Spark Vintage > Electro > KPR++': [
    ['BD1', 'KICK 1'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
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
  'Spark Vintage > Electro > Kaziotone': [
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
  'Spark Vintage > Electro > Maestro King': [
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
  'Spark Vintage > Electro > Micromatix': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
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
  'Spark Vintage > Electro > Phatwerk': [
    ['BD1', 'KICK 1'],
    ['SD', 'SNARE 1'],
    ['CH', 'CH|PH'],
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
  'Spark Vintage > Electro > Pulsator': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
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
  'Spark Vintage > Electro > Sci-mons': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
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
  'Spark Vintage > Electro > YMR-10': [
    ['BD', 'KICK 1'],
    ['SD 1', 'SNARE 1'],
    ['SD 2', 'SNARE 2'],
    ['CH', 'CH|PH'],
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
  'Spark Vintage > House > DR-708': [
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
  'Spark Vintage > House > DR-909': [
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
  'Spark Vintage > House > KR-100': [
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
  'Spark Vintage > Pop > CL-78': [
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
  'Spark Vintage > Pop > DNX': [
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
  'Spark Vintage > Pop > DR-626': [
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
  'Spark Vintage > Pop > DR-727': [
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
  'Spark Vintage > Pop > DrumTrax': [
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
  'Spark Vintage > Pop > ESP-12': [
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
  'Spark Vintage > Pop > Lynn Dream': [
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
  'Spark Vintage > Pop > Micro Pops': [
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
  'Spark Vintage > Pop > RLD-8': [
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
    ['Ride 1', 'RIDE'],
    ['Ride 2', 'RIDE'],
    ['Cowbell', 'FX'],
    ['Tambourine', 'SHAKER'],
    ['BD 2', 'KICK'],
    ['SD 2', 'SNARE'],
  ],
  'Spark Vintage > Pop > Vintage Box': [
    ['BD1', 'KICK'],
    ['SD1', 'SNARE'],
    ['CH1', 'CH|PH'],
    'OH',
    ['Conga', 'PERC 4|PERC 5'],
    ['Cowbell', 'FX'],
    ['Clave', 'FX'],
    ['Maracas', 'SHAKER'],
    ['Guiro', 'SHAKER|RIDE'],
    ['RS', 'RIM'],
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['BD2', 'KICK'],
    ['SD2', 'SNARE'],
    ['CH2', 'CH|PH'],
  ],
  'Spark Vintage > Rock > DRmulator': [
    ['BD1', 'KICK'],
    ['SD1', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['RD', 'RIDE'],
    ['Clap', 'CLAP'],
    ['Rimshot', 'RIM'],
    ['Cymbal', 'CRASH'],
    ['Cowbell', 'FX'],
    ['Tambourine', 'SHAKER'],
    ['Clave', 'FX'],
    ['BD2', 'KICK'],
    ['SD2', 'SNARE'],
  ],
  'Spark Vintage > Rock > Lynn 9000': [
    ['BD', 'KICK'],
    ['SD', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['Crash', 'CRASH'],
    ['Clap', 'CLAP'],
    ['Ride', 'RIDE'],
    ['Rimshot', 'RIM'],
    ['Cowbell', 'FX'],
    ['CongaHi', 'PERC 5'],
    ['CongaLo', 'PERC 4'],
    ['Cabasa', 'SHAKER 2'],
  ],
  'Spark Vintage > Rock > R-Zone': [
    ['BD1', 'KICK'],
    ['SD1', 'SNARE'],
    ['CH', 'CH|PH'],
    ['Noise FX', 'OH'],
    ['HT', 'PERC 3'],
    ['MT', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['Crash', 'CRASH'],
    ['Clap1', 'CLAP'],
    ['Rimshot', 'RIM'],
    ['Ride', 'RIDE'],
    ['Cowbell', 'FX'],
    ['BD2', 'KICK'],
    ['SD2', 'SNARE'],
    ['CH1', 'CH|PH'],
    ['Clap2', 'CLAP'],
  ],
  'Spark Vintage > Rock > YRX 5': [
    ['BD1', 'KICK'],
    ['SD1', 'SNARE'],
    ['CH', 'CH|PH'],
    'OH',
    ['HT', 'PERC 4'],
    ['MT1', 'PERC 3'],
    ['MT2', 'PERC 2'],
    ['LT', 'PERC 1'],
    ['Clap', 'CLAP'],
    ['Rimshot', 'RIM'],
    ['Rimshot2', 'RIM'],
    ['Crash', 'CRASH'],
    ['Cowbell', 'FX'],
    ['Tamb', 'SHAKER'],
    ['BD2', 'KICK'],
    ['SD2', 'SNARE'],
  ],
}

// This object defines Drum Machine Designer's sound groups and
// each sound's pitch offset from C1. E.g. KICK 1 is C1+0 while
// KICK 2 is F2+17. It's used for a few things internally as
// well as specifying the groups' dropdown order in the UI.
const DRUMMER = {
  KICK: [0, 17],
  SNARE: [2, 4, 16],
  RIM: [1],
  CLAP: [3, 22],
  PERC: [5, 7, 9, 11, 12],
  CH: [6],
  PH: [8],
  OH: [10],
  CRASH: [13],
  RIDE: [15],
  SHAKER: [18, 14],
  FX: [19, 21, 23, 20],
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
        altIn / (DRUMMER[group].length - 1) * (model[group].length - 1),
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
