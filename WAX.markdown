# Wax: a recap

A tracker that runs in the browser: patterns on a grid, a modular synth engine underneath, no install.
Live at https://zeffii.github.io/webtracker/ · source at github.com/zeffii/webtracker · now at build 562.

## What it is
- A pattern tracker in the Impulse Tracker tradition, written in plain JavaScript with no framework.
- All sound is made by one AudioWorklet. Lanes are parts of it, not separate audio threads.
- Projects are `.wax` JSON files. Demos load with `?demo=NAME`.
- Built by one person with Claude writing the code, and tested in Brave on Windows 11.

## The main screens
- **Patterns:** the tracker grid. Per-lane columns, note preview, solo-edit, follow, pattern tint, a chord palette.
- **Arrangement:** lanes and placements along the song, with loop lines and a playhead.
- **Instruments:** a node graph per machine, compiled to the worklet.
- **Node Sequencer:** tiles and right-angle wires for note logic. Wires can be dragged, the view zooms with the wheel and pans with the middle mouse.
- **Samples, Shader, DSP, Script:** a sample editor, a GLSL visual lane, a DSP view and a scripting pane.
- **Stream Manager:** per-lane voices, level and load, with Reset and Cut switches.

## Sound
- **Synths:** subsynth, FM, DX-style, additive, spectral, physical string and piano, drum machines, and a sampler.
- **Newer machines:** a Jaw harp (good for basslines) and Snarl, a brand-free mono analog-style synth.
- **Effects:** filters, delays, reverbs (hall, plate, shimmer), saturators, compressors, vocoder, granular, tape.
- **Spectral:** Blur, HPSS and Body blur, which smooths a sound's body and leaves transients alone. They share one STFT core.
- **Quality settings:** heavy nodes have an eco mode. The default sound never changes.

## Delay compensation
- Each node can declare its latency, such as an FFT frame or an oversampler.
- The compiler inserts hidden delays where paths of different latency meet. Instruments are then aligned before the master mix.
- The playhead and export follow the compensation.
- One switch turns it all off: Settings → Playing → Delay compensation (default on).

## Working style
- Every change is a numbered build. It gets a `CHANGELOG.md` entry, a `package.json` bump and an About entry (the latest 10 are shown).
- `npm test` must pass, then the change is committed straight to master and checked on Pages.
- No factory presets. Brand-free names for anything modelled on real gear.
- Heavy nodes get a quality setting. Note preview is always on by default, and a test guards that.
- UI ideas start as a mockup before any code is written.

## Recent builds
- **547–551:** node editor look (schematic wires, accent borders, drag-to-stretch wires), theme repaint, wheel zoom.
- **552–555:** `weights` demo, Body blur, Jaw harp, Snarl.
- **556–559:** delay compensation in three stages, playhead alignment, Snarl note-off fixes.
- **560–562:** fixed Stream Manager columns, pattern editor fills to the status bar, faster scrolling, shift + wheel moves one row.

## Where it could go next
- Declare latency for the nodes that don't yet (frequency shift, vocoder, granular).
- A demo for Jaw harp and Snarl, and chord audition in the node sequencer.
- Flux: a Sverchok-style 3D visuals editor driven by Wax.
