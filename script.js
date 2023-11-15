// import WaveSurfer from 'https://unpkg.com/wavesurfer.js@7/dist/wavesurfer.esm.js'


const get_wavform = (waveformId) => {
    return WaveSurfer.create({
        container: waveformId,
        waveColor: 'violet',
        progressColor: 'purple',
        barWidth: 2,
        barGap: 1,
        barRadius: 2,
    });
}

const loadwav = (wavesurfer, wavfile, playBtn) => {
    wavesurfer.load(wavfile)
    document.querySelector(playBtn).addEventListener('click', (event) => {
        wavesurfer.playPause()
        const btn = event.target
        btn.innerHTML = wavesurfer.isPlaying() ? '|| Pause' : '&#9658; Play'
    })
}

const wavesurfer1 = get_wavform('#waveform1')
loadwav(wavesurfer1, 'PIZZA_AUDIO_CUT_10s.wav', '.play1')

const wavesurfer2 = get_wavform('#waveform2')
loadwav(wavesurfer2, 'test_spanish_conver.wav', '.play2')

const wavesurfer3 = get_wavform('#waveform3')
loadwav(wavesurfer3, '43690157.wav', '.play3')

const wavesurfer4 = get_wavform('#waveform4')
loadwav(wavesurfer4, 'common_voice.wav', '.play4')



