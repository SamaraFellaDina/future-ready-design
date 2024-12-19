<script>
  
  import { onMount } from 'svelte';

// audio api
onMount(() => {
const audioContext = new AudioContext();

// get the audio element
const audioElement = document.querySelector("audio");

// pass it into the audio context
const track = audioContext.createMediaElementSource(audioElement);

track.connect(audioContext.destination);

// Select our play button
const playButton = document.querySelector("button.toggle");
console.log(playButton)

playButton.addEventListener(
  "click",
  () => {
    playButton.classList.toggle
    console.log(1)
    // Check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    // Play or pause track depending on state
    if (playButton.dataset.playing === "false") {
      audioElement.play();
      playButton.dataset.playing = "true";
    } else if (playButton.dataset.playing === "true") {
      audioElement.pause();
      playButton.dataset.playing = "false";
    }
  },
  false,
);

audioElement.addEventListener(
  "ended",
  () => {
    playButton.dataset.playing = "false";
  },
  false,
);


const gainNode = audioContext.createGain();

track.connect(gainNode).connect(audioContext.destination);

const volumeControl = document.querySelector("#volume");

volumeControl.addEventListener(
  "input",
  () => {
    gainNode.gain.value = volumeControl.value;
  },
  false,
);
});

</script>

<audio src="./assets/sounds/forgiven.mp3"></audio>
<button data-playing="false" role="switch" aria-checked="false" class="toggle">
  <span>Play/Pause</span>
</button>
<input type="range" id="volume" min="0" max="2" value="0" step="0.01" />

<style>

audio,
input[type="range"] {
  position: relative;
}

input[type="range"]{
  left: 0;
}

</style>
