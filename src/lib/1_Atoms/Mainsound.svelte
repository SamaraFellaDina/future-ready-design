<script>
  import { onMount } from "svelte";

  onMount(() => {
    const audioContext = new AudioContext();
  
    const audioElement = document.querySelector("audio");
  
    const track = audioContext.createMediaElementSource(audioElement);
    track.connect(audioContext.destination);
  
    const mainElement = document.querySelector("main");
    const sections = document.querySelectorAll("section");
    const lis = document.querySelectorAll("li.liedjes");  
  
    const playButton = document.querySelector("button.toggle");

    playButton.addEventListener(
      "click",
      () => {
        mainElement.classList.toggle("holy");
      
        sections.forEach((section) => {
          section.classList.toggle("pulse");
        });

        lis.forEach((li) => {
          li.classList.toggle("pulse");
        });

        // yins.forEach((img) => {
        //   img.classList.toggle('pulse');
        // });

        if (audioContext.state === "suspended") {
          audioContext.resume();
        }

        if (playButton.dataset.playing === "false") {
          audioElement.play();
          playButton.dataset.playing = "true";
        } else if (playButton.dataset.playing === "true") {
          audioElement.pause();
          playButton.dataset.playing = "false";
        }
      },
      false
    );

    audioElement.addEventListener(
      "ended",
      () => {
        playButton.dataset.playing = "false";
      },
      false
    );

    const gainNode = audioContext.createGain();
    track.connect(gainNode).connect(audioContext.destination);

    const volumeControl = document.querySelector("#volume");

    volumeControl.addEventListener(
      "input",
      () => {
        gainNode.gain.value = volumeControl.value;
      },
      false
    );
  });
</script>

<audio src="./assets/sounds/chorus_forest.ogg" loop></audio>
<button data-playing="false" role="switch" aria-checked="false" class="toggle">
  <span>Bring it to life</span>
</button>
<input type="range" id="volume" min="0" max="2" value="0" step="0.01" />

<style>
  button[role="switch"] {
    width: 100px;
    height: 30px;
    margin: auto;
    background-image: url('https://i5.walmartimages.com/seo/Winter-Snowflakes-on-Blue-Premium-Roll-Gift-Wrap-Wrapping-Paper_0eb47d19-57cc-4f0e-84ff-3d582fbd5f59_1.a26f81b1f796b5b5d00cf447837cdd18.jpeg');
    text-align: center;
    border: none;
    border-radius: var(--section-border-radius);
    animation: pulseShadow 2s infinite ease-in-out;
    border: 2px ridge var(--color-blue);

    & span {
      color: #090a0f;
    }
  }

  input[type="range"] {
    height: 30px;
  }

  input[type="range"]::-webkit-slider-runnable-track {
    width: 100%;
    height: 12px;
    cursor: pointer;
    background: var(--color-blue);
    border-radius: 4px;
    border: 2px solid #001ca6;
  }
  input[type="range"]::-webkit-slider-thumb {
    box-shadow: 1px 1px 2px #001ca6;
    border: 3px solid #0038f2;
    height: 20px;
    width: 10px;
    border-radius: 10px;

    cursor: pointer;
    margin-top: -4.5px;
  }

  :global(main.holy) {
    animation: holyfloat 5s infinite alternate;
    transition: ease-in-out;
  }

  :global(section.pulse) {
    animation: pulseShadow 2s infinite ease-in-out;
  }

  :global(li.pulse) {
    animation: pulseShadow 2s infinite ease-in-out;
  }

  /* :global(.snow img.pulse) {
    animation: pulseShadow 2s infinite ease-in-out;
    border-radius: 50%;
  } */

  audio,
  input[type="range"] {
    position: relative;
  }

  input[type="range"] {
    left: 0;
  }

  @keyframes pulseShadow {
    0% {
      box-shadow: 0px 0px 9px -2px var(--color-blue);
    }
    50% {
      box-shadow: 0px 0px 50px -2px var(--color-blue);
    }
    100% {
      box-shadow: 0px 0px 9px -2px var(--color-blue);
    }
  }

  @keyframes holyfloat {
    to {
      transform: translateY(-100px);
    }
  }
</style>
