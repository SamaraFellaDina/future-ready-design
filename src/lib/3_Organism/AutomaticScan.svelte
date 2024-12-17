<script>
  export let result = data.scans;
  import { DonutChart } from '../index.js';
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
const playButton = document.querySelector("button");

playButton.addEventListener(
  "click",
  () => {
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

const pannerOptions = { pan: 0 };
const panner = new StereoPannerNode(audioContext, pannerOptions);

const pannerControl = document.querySelector("#panner");

pannerControl.addEventListener(
  "input",
  () => {
    panner.pan.value = pannerControl.value;
  },
  false,
);

track.connect(gainNode).connect(panner).connect(audioContext.destination);
});



// onMount to add the event listener when the component is mounted
onMount(() => {
  const uitpakken = document.getElementById('a');
  const left = document.querySelector('.left-half');
  const right = document.querySelector('.right-half');

  uitpakken.addEventListener("click", () => {
    left.classList.toggle('uitpakken');
    right.classList.toggle('uitpakken2');
    uitpakken.classList.toggle('section-tril')
  });
});
</script>

<section id="a">
  <img src="https://i5.walmartimages.com/seo/Winter-Snowflakes-on-Blue-Premium-Roll-Gift-Wrap-Wrapping-Paper_0eb47d19-57cc-4f0e-84ff-3d582fbd5f59_1.a26f81b1f796b5b5d00cf447837cdd18.jpeg" class="inpak left-half" alt="">
  <img src="https://i5.walmartimages.com/seo/Winter-Snowflakes-on-Blue-Premium-Roll-Gift-Wrap-Wrapping-Paper_0eb47d19-57cc-4f0e-84ff-3d582fbd5f59_1.a26f81b1f796b5b5d00cf447837cdd18.jpeg" class="inpak right-half" alt="">
  <img src="https://img.pikbest.com/png-images/20241116/red-gift-bow-with-ribbon-detail-png-on-transparent-background_11096262.png!sw800"  width="200" height="200" class="strikje" alt="">
  <div>
    <h2>{result.title}</h2>
    <p>{result.description}</p>
  </div>
    <DonutChart {result}/>
</section>

<audio src="./assets/sounds/angel_blast2.wav"></audio>
    <button data-playing="false" role="switch" aria-checked="false">
      <span>Play/Pause</span>
    </button>
    <input type="range" id="volume" min="0" max="2" value="0" step="0.01" />
    <input type="range" id="panner" min="-1" max="1" value="0" step="0.01" />

<style>

  section {
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 2 / 1 / 3 / 2;
    display: flex;
  
    gap: 1em;
    position: relative;
    border: 10px ridge var(--color-blue);
    
    @media screen and (max-width: 700px) {
      flex-direction: column;
      gap: 0;
    }
  }

  :global(section.section-tril) {
  animation: trillen 0.3s ease-in-out 4;
}

  .inpak{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    pointer-events: none;
    z-index: 1;
  }

  .right-half{
    clip-path: polygon(50% 0, 100% 0%, 100% 100%, 50% 100%);
    /* border-radius: var(--section-border-radius); */
  }

  :global(.right-half.uitpakken2){
    animation: naar-rechts 1s forwards;
    animation-delay: 1.2s;
  }

  .left-half{
    clip-path: polygon(50% 0, 0 0, 0 100%, 50% 100%);
    /* border-radius: var(--section-border-radius); */
  }

  :global(.left-half.uitpakken){
    animation: naar-links 1s forwards;
    animation-delay: 1.2s;
  }

  .strikje{
    position: absolute;
    top: 0%;
    left: 50%; 
    transform: translate(-50%, -50%); 
    z-index: 2;
  }

  h2 {
    margin-bottom: 50px;
    font-size: 2em;
  }

  @keyframes naar-links{
    to{
      transform: translateX(-500px);
      opacity: 0;
    }
  }

  @keyframes naar-rechts{
    to{
      transform: translateX(500px);
      opacity: 0;
    }
  }

  @keyframes trillen {
    0% {
      transform: translateX(0) rotate(0deg);
    }
    25% {
      transform: translateX(-5px) rotate(-2deg);
    }
    50% {
      transform: translateX(5px) rotate(2deg);
    }
    75% {
      transform: translateX(-5px) rotate(-2deg);
    }
    100% {
      transform: translateX(0) rotate(0deg);
    }
  }

</style>
