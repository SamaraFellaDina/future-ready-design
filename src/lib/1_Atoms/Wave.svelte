<svg viewBox="0 0 290 30">
  <path
    class="wave"
    fill="indigo"
    stroke="indigo"
    stroke-width="3"
    stroke-linecap="round"
    d="M0.100 25 c38 0 45-20 75-20s50 20 75 20 c38 0 45-5 75-20s50 20 75 20 c38 0 45-20 75-20s50 20 75 20 c38  0 45-20 75-20s50 20 75 20">
  </path>
</svg>

<style>
  svg {
   
    width: 200px;
    
  }

  .wave {
    animation: moveTheWave 3000ms linear infinite;
    stroke-dasharray: 0 0 0 0; 
    width: 200px;
  }

  /* @supports (animation-timeline: scroll(y)) {
    .wave{
        animation-timeline: scroll(y);
        animation: moveTheWave linear;
    }
  } */

  @keyframes moveTheWave {


    0% {
      stroke-dashoffset: 0;
      transform: translate3d(0, 0, 0);
    }

    100% {
      stroke-dashoffset: 1;
      transform: translate3d(-278px, 0, 0);
    }
  }
</style>
