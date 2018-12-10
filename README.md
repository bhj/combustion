
# Drummer + Spark = Combustion

Combustion is a Logic Pro X MIDI FX script that semi-intelligently maps notes played by Apple Logic Pro X's Drummers to various Arturia Spark virtual drum machine models.

![Screenshot](https://cloud.githubusercontent.com/assets/1151818/17042237/ec48c874-4f79-11e6-8c1f-ed3116ce6a4f.png)

Combustion tries to map Drummer to the sounds available in the selected Spark model as best it can. For example, Drummer can generally play 3 different notes/types of snares but the DR-808 only has 1, therefore Combustion would map SNARE 1, SNARE 2, and SNARE 3 to the same pad on the DR-808.

## Features

- Play Spark's drum machines using Logic's Drummers without manual note mapping
- Randomize the mapping within sound groups (KICK, SNARE, CLAP, PERC, FX) for more variety
- Customize the mapping per-note/sound as desired
- Works with both rock and electronic Drummers

## Requirements

- [Apple Logic Pro X](https://www.apple.com/logic-pro/)
- [Arturia Spark 2](https://www.arturia.com/spark2/overview)
  - Disable the `Host` button (next to Tempo, at the top) so that Spark doesn't start its own sequencer when you press play in Logic
  - Under Prefs, set `Choose MIDI Drum map model for Pads` to `Spark`

## Usage

1. Create or select a Drummer track in Logic
2. Change the Drummer track's instrument from Drum Kit Designer or Drum Machine Designer to Arturia Spark (in the screenshot above, the instrument button is the blue button labeled "Spark" in the channel strip)
3. Add the *Scripter* *MIDI FX* plugin to the Drummer track
4. Choose Combustion from the Scripter preset dropdown (if installing for the first time, select *Load...* from Scripter's preset dropdown and choose the .pst file downloaded from the [releases page](https://github.com/bhj/combustion/releases), then select *Save* to store the plugin/preset)
5. In the Scripter (Combustion) window, set the Model dropdown to match the model loaded in Spark
  - There is no way for Combustion to know which model is loaded in Spark, so if things sound weird make sure the model selected in Combustion matches what is loaded in Spark. If things still sound weird, please submit a pull request with a better default mapping!

## Supported Models

Since the pad assignments vary across models in Spark, Combustion requires a custom map for each model. Currently the following factory models are mapped:

- Spark Vintage
  - Electro
  - House
  - Pop
  - Rock

## Contributing Maps

Contributions are welcome! Combustion uses a [simple format](https://github.com/bhj/combustion/blob/master/combustion.js) to describe Spark's drum machine models. Each model is defined as an array with 16 items (one for each Spark pad). Each item is itself an array with two items, respectively:

1. `string` The Spark pad's label
2. `string` The Drummer sound group(s) the Spark pad could satisfy (separate multiple groups with `|`)

**Tip**: If #1 and #2 are the same you can provide a single string instead of an array.

Available sound groups are as follows (these directly correspond to Drum Machine Designer's slots):

- KICK
- SNARE
- RIM
- CLAP
- PERC
- CH
- PH
- OH
- CRASH
- RIDE
- SHAKER
- FX

## Resources

- [Logic Pro X Effects (10.3)](http://help.apple.com/logicpro-effects/mac/10.3/)

## License

ISC
