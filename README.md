# shottas
finger-drumming max patch with sample-accurate quantization(plus midi_clock out, midilearn for note-based-triggers, and sync for pikocore), with fluid-equation-driven led-animation when using monome-grid
(named after and in tribute to the movie of the same name, starring Ky-Mani Marley, Spragga Benz, Louie Rankin, Paul Campbell, Wyclef Jean, J.R. Silvera, etc... written & directed by Cess Silvera)

quickstart:
1)open patch
2)drop a folder of one-shot files onto the drop-area labelled appropriately(near top-center of patch)
3)turn on dsp(speaker-icon near left of patch under 'MainOut' volume fader)
4)choose preset #3 from the blueish-green "RecallPreset" box
5)turn down 'MainOut' volume fader to about -20dB then start playing on your grid(readjust volume fader to taste)

additional:
-in the bottom-most vst~, load a 'VST Instrument'-type plugin(presets can save this state as well as the midinote scale entered into the textentry object near the center of the patch), the bottom portion of the grid will play these notes into the VST Instrument plugin
-in all the other vst~ objects, load a 'VST Effect'(like limiter, compressor, EQ, reverb, in that order, for the 4 vst~ objects leading to the 'MainOut' volume fader near the top-left of the patch... and similar for the other vst~ objects just above the VSTInstrument mentioned above)
-to load plugins into the above-mentioned vst~ objects, click the associated 'plug' message for that particular vst~ object

-to store presets, choose the preset number from the reddish 'StorePreset' box, then click the 'store' message to the right of it

-when using MIDI to trigger, you open each voice individually using the 'Tweaks Per-Voice' button, and assign MIDI where shown(use the MIDI learn toggle there for easiest assignment, just remember to turn it off before closing the voice-window)... there, you can also change speed of sample-playback as well as which file/sample gets played back for that particular voice    ...(a 'voice' can be thought of as a one-shot/file player/sampler, or a single 'piece' of a finger-drum kit... but either way, literally the 'voice' of the poly~ object which encapsulates all of these) - the benefit of MIDI notes to trigger is that you can assign multiple voices to one single trigger, the drawback is no LED animation

grid interface:
-the 6 buttons at the bottom-right of the grid control the following from left-to-right respectively: sequencer playback on/off, sequencer record on/off, sequencer overdub on/off, inc/dec context selector(3-state-toggle: apply inc/dec to sequence-length, to seq-number, or to preset-number), 'null'(used in combo with the button just above it to erase the current sequence), and quantization on/off
-the 3 buttons just above the 6 mentioned above, to the far-right, and going from left-to-right respectively: decrement(context determined by the 'inc/dec context selector'), combo-button(pressed with button just below it) to 'erase current sequence', increment(context specific same as decrement)
-the rest of the grid are triggers, everything the same exact trigger within a 2x2 matrix - 48 (in 2x2 button layouts) one-shot/file/sample triggers spanning the top 12 rows - 13 additional triggers used to send MIDI notes to the VST Instrument        (this leaves 3 buttons unused on the entire grid)
