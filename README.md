
# Drummer + Spark = Combustion

Combustion is a Logic Pro X MIDI FX script that semi-intelligently maps notes
played by Logic's Drummers to various Arturia Spark drum machine models.

![Screenshot](https://cloud.githubusercontent.com/assets/1151818/17042237/ec48c874-4f79-11e6-8c1f-ed3116ce6a4f.png)

## Features

- Play Arturia Spark's drum machines using Logic's Drummers without any manual
  note mapping
- Audition different Spark models more quickly and easily
- Per-note tweaking and sound group randomization for more variety
- Works with both rock and electronic Drummers

## Requirements

- [Apple Logic Pro X](https://www.apple.com/logic-pro/)
- [Arturia Spark 2](https://www.arturia.com/spark2/overview)
  (`MIDI Drum map model for Pads` should be set to `Spark`)

## Usage

1. Create or select a Drummer track in Logic
2. Change the Drummer track's instrument from Drum Kit Designer or Drum Machine
   Designer to Arturia Spark (in the screenshot above, the instrument button is
   the blue button labeled "Spark" in the channel strip)
3. Add the *Scripter* *MIDI FX* plugin to the Drummer track
4. Choose Combustion from the Scripter preset dropdown (if installing for the
   first time, select *Load...* from Scripter's preset dropdown and choose the
   .pst file downloaded from the [releases page](https://github.com/bhj/combustion/releases),
   then select *Save* to store the plugin/preset)
5. In the Scripter/Combustion window, set the Model dropdown to match the
   model loaded in Spark

Combustion tries to map Drummer's potential notes to the sounds available in the
selected Spark model as best it can. For example, Drummer can generally play 3
different notes/types of snares but the DR-808 only has 1, therefore Combustion
would map all snares to the same pad on the DR-808.

Unfortunately there is no way to know which model is loaded in Spark, so if
things sound weird make sure you still have the same model selected in
Combustion. If things still sound weird, please submit a pull request with a
better default mapping!

## Supported Models

Since the sound and MIDI note assignments vary across models in Spark,
Combustion requires a custom map for each model. Please note that currently only
a small subset of the factory models included in Spark v2 have been mapped.
Contributions are welcome!

## Contributing Maps

Combustion uses a [simple
format](https://github.com/bhj/combustion/blob/master/combustion.js) to describe
Spark's drum machine models. Each model is defined as an array with 16 items
(one for each Spark pad). Each item is itself an array with two items,
respectively:

1. `string` The Spark pad's label
2. `string` The Drummer sound group(s) the Spark pad could satisfy (separate
multiple groups with `|`)

**Tip**: If #1 and #2 are the same you can provide a single string instead of an
array.

Available sound groups are as follows (these directly correspond to Drum Machine
Designer's slots):

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

## Notes

- Combustion uses the undocumented *SetParameter* method introduced sometime
  around Logic Pro X 10.2 and demonstrated in the "Stutter v2" factory preset of
  the Scripter MIDI FX plugin. It would be nice if this method were documented
  in a future version of the [official Logic Pro X Effects book](https://manuals.info.apple.com/MANUALS/1000/MA1651/en_US/logic_pro_x_effects.pdf)

## Authors

- [Brandon Jones](https://github.com/bhj)

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details
