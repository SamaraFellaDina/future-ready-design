<script>
  
  import { onMount } from "svelte";

  onMount(() => {
    const section = document.querySelector('section.psycedelic');
    const video = section.querySelector('video')

    video.pause()

    const scroll = () => {
      const distance = window.scrollY - section.offsetTop;
      const total = section.clientHeight - window.innerHeight;
      
      let percentage = distance / total
      percentage = Math.max(0, percentage)
      percentage = Math.min(percentage, 1)

      if ( video.duration > 0 ){
        video.currentTime = video.duration * percentage
      }
    };

    scroll()
    window.addEventListener('scroll', scroll)
  })
</script>

<section class="psycedelic">
  <video src="../assets/video/acid.mov" autoplay muted loop playsinline ></video>
</section>


<style>  
section.psycedelic {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; 
  z-index: -1; 
  margin: 0;
}

video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%; 
  object-fit: cover;
  z-index: -1;
}
</style>