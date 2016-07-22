
# Drummer + Spark = Combustion

Combustion is a Logic Pro X MIDI FX script that semi-intelligently maps notes
played by Logic's Drummers to various Arturia Spark drum machine models.

![Screenshot](https://cloud.githubusercontent.com/assets/1151818/17042237/ec48c874-4f79-11e6-8c1f-ed3116ce6a4f.png)

## Features

- Have Logic play Spark drum machines without manual note mapping
- Works with both rock and electronic drummers
- Per-note custom mapping ability and per-group randomization for variety

## Requirements

- [Apple Logic Pro X](https://www.apple.com/logic-pro/)
- [Arturia Spark 2](https://www.arturia.com/spark2/overview) (`MIDI Drum map model for Pads` should be set to `Spark`)

## Setup

Combustion is designed to be used on a Drummer track that has its instrument set
to Spark (refer to the screenshot above)

1. Select a Drummer track in Logic
2. Set the track's instrument (the button between *MIDI FX* and *Audio FX*) to
   Artirua Spark
3. Click the track's *MIDI FX* area and select *Scripter*
4. Select *Load...* from Scripter's preset dropdown
5. Select the preset (.pst) file from the [latest release](https://github.com/bhj/combustion/releases)
6. Save the preset
7. Set the Model dropdown to the model you have loaded in Spark

## Supported Models

Since the sound and MIDI note assignments vary across models in Spark,
Combustion requires a custom map for each model. Please note that currently a
small subset of the factory models included in Spark v2 have been mapped so far.
Contributions are welcome!

## Contributing Maps

Combustion uses a simple format to describe Spark's drum machines ([view the
source!](https://github.com/bhj/combustion/blob/master/combustion.js)) Each
model is defined as an array with 16 items (one for each Spark pad). Each item
is itself an array with two items, respectively:

1. `string` The Spark pad's label
2. `string` The Drummer sound group(s) the Spark pad could satisfy (separate
mulitple with `|`)

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
- around Logic Pro X 10.2 and demonstrated in the "Stutter v2" factory preset of
- the Scripter MIDI FX plugin. It would be nice if this method were documented
- in a future version of the official Logic Pro X Effects book currently found
- at:
- https://manuals.info.apple.com/MANUALS/1000/MA1651/en_US/logic_pro_x_effects.pdf

## Authors

- [Brandon Jones](https://github.com/bhj)

## License

This project is licensed under the MIT License - see the
[LICENSE.md](LICENSE.md) file for details
