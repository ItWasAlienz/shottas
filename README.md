# shottas
finger-drumming max patch with sample-accurate quantization(plus midi_clock out, midilearn for note-based-triggers, and sync for pikocore and midiclock via internal phasor~ or through Ableton Link), with fluid-equation-driven led-animation when using monome-grid
(named after and in tribute to the movie of the same name, starring Ky-Mani Marley, Spragga Benz, Louie Rankin, Paul Campbell, Wyclef Jean, J.R. Silvera, etc... written & directed by Cess Silvera)

quickstart:
1)open patch
2)drop a folder of one-shot files onto the drop-area labelled appropriately(near top-center of patch)
3)turn on dsp(speaker-icon near left of patch under 'MainOut' volume fader)
4)choose preset #3 from the blueish-green "RecallPreset" box
5)turn down 'MainOut' volume fader to about -20dB then start playing on your grid(readjust volume fader to taste)

grid interface:
-the 6 buttons at the bottom-right of the grid control the following from left-to-right respectively: sequencer playback on/off, sequencer record off/on/overdub, audio-prep-record off/on/overdub, inc/dec context selector(3-state-toggle: apply inc/dec to sequence-length, to seq-number, or to preset-number), 'null'(used in combo with the button just above it, and to the right, to erase the current sequence), and the bottom-right corner button is quantization on/off
-the 3 buttons just above the 6 mentioned above, to the far-right, and going from left-to-right respectively: decrement(context determined by the 'inc/dec context selector'), increment(context specific same as decrement), erase sequence by pressing the last button in this row, combined with the button just below and to the left of it(button coordinates(row col): 14 15, followed by 15 14)
-the rest of the grid are triggers, everything the same exact trigger within a 2x2 matrix - 48 (in 2x2 button layouts) one-shot/file/sample triggers spanning the top 12 rows - 13 additional triggers used to send MIDI notes to a built-in synth

sequencer:
-see 'grid interface' section above, use the corresponding button described there(5th button to the left of the bottom-right of grid) to turn on recording, or recording+overdub (once on, play the samples you'd like to record into the sequencer, triggers will be recorded as you play - quantization effects playback only, never at recording stage)
-see 'grid interface' section above, use the corresponding button described there(6th button to left of bottom-right of grid) to begin playback of sequence
(playback and recording can all happen at once; also, switching from 'record+overdub'(or 'off') to just 'record', will replace previously recorded material allowing for detailed evolving changes)
-utilizing the 'context selector' button described in 'grid interface' section, plus the other buttons described there for decrement/increment, you can change sequence length(negative numbers will play sequences in reverse), or select a difference sequence number(to have multiple sequences), all in real time

audio recording:
-there's the ability to record audio into the sampler voices, use the 4th button to the left of the bottom-right, it has 3 states: 
off, 
record -> with this on, you hit one of the sampler voices and then hit it again(once to clear and resize all buffers in that row to a half-note(at tempo), and a second time to record starting from that voice(you'll see an animated spinny wheel run left-to-right to indicate the voices being recorded into in succession), 
and record+overdub -> same as 'record' described just above, but with the ability to keep the previously recorded material (at 0.8 times its original volume)

audio-recording works ideally if you think in terms of the recording spanning across a row(except since voices span a 2x2 matrix on a 256-sized grid, there are 2 rows on a 256 grid to a 'row' as we call it here), you have to put the grid in a state ready to record(so it knows not to trigger samples), then tell the specific voice you want to start at to prep its own voice, plus all the other voices in that row for recording(by clearing and resizing), and finally hit that same button again to begin recording as it automates switching the recording into each successive voice across a row. this means, that you can also prep one voice farther to the left in a row, than the voice you actually activate for a recording, but that means you may have some blank voices(so it's ideal to hit the same voice twice in succession)... also, this means you don't have to start at the left-most part of a row, but recording will end when it gets to the last voice to the right in one row(to record into separate rows, you have to follow the same steps... retriggering within that new row)

additional:
-to store presets, choose the preset number from the reddish 'StorePreset' box, then click the 'store' message to the right of it(because presets can be dialed at the press of a grid button, and thus change the entire sample-set and all the settings at once, storing detailed presets is essential for full organization and control)

-when using MIDI to trigger, you open each voice individually using the 'Tweaks Per-Voice' button, and assign MIDI where shown(use the MIDI learn toggle there for easiest assignment, just remember to turn it off before closing the voice-window)... there, you can also change speed of sample-playback, whether it goes into 'hox'(hocket) mode when recording audio into that row, as well as which file/sample gets played back for that particular voice, etc.    ...(a 'voice' can be thought of as a one-shot/file player/sampler, or a single 'piece' of a finger-drum kit... but either way, literally the 'voice' of the poly~ object which encapsulates all of these) - the benefit of MIDI notes to trigger is that you can assign multiple voices to one single trigger, the drawback is no LED animation

-as mentioned just above re: 'Tweaks Per-Voice' button -> there are many different settings that each sample/voice can have independently, among them are quantization, quantization-resolution, and swing(so you can set the global settings for these and it will apply to all voices, but then you can set it differently for individual voices and those voices which are set differently from the global will overwrite that setting... allowing, for example, a hi-hat sample to have a different quantization-resolution and swing, than the rest of the kit)

-'Hox' mode (short for 'Hocket'), can be enabled within the 'Per-Voice' interface(it's the button at the top-right of each voice's window), and allows for the voice to flip the pitch in different ways each time its triggered, only while the voice contains an audio-recording from audio-inputs (changing a preset in order to (re)load samples into all the voices again will automatically turn this off again - allowing for the voice to switch between these two different pitch-based behaviors dependent on whether a sample is loaded into the voice or live-input was recorded into it

-in the vst~ objects, load a 'VST Effect'(like limiter, compressor, EQ, reverb, etc. for the 4 vst~ objects leading to the 'MainOut' volume fader near the top-left of the patch - this is your mastering chain)

-to load plugins into the above-mentioned vst~ objects, click the associated 'plug' message for that particular vst~ object

