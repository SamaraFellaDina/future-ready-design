<script>
</script>

<img src="../assets/images/ghost-rider.png" alt="Ghost Rider" width="200" height="88"/>
<div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<style>
  @keyframes hills {
    0% {
      transform: translateX(0);
    }

    50% {
      transform: translateX(-25%) scale(2);
    }

    100% {
      transform: translateX(-50%);
    }
  }

  @keyframes bike {
    0% {
      transform: translateY(0) rotateZ(45deg);
    }

    10% {
      transform: translateY(360px) rotateZ(45deg);
    }

    25% {
      transform: translateY(360px) rotateZ(-45deg);
    }

    30% {
      transform: translateY(-350px) rotateZ(-45deg);
    }

    100% {
      right: 0;
      left: unset;
      bottom: 0;
      top: unset;
    }
  }

  img {
    position: fixed;
    left: 0px;
    top: 30%;
    transform: rotateZ(45deg);
    z-index: -1;
  }

  @supports (animation-timeline: scroll(y)) {
    img {
      animation: bike linear;
      animation-timeline: scroll(y);
    }
  }

  div > div {
    height: 20vh;
  }

  div > div:first-of-type {
    background-color: #73c8af;
  }

  div > div:nth-of-type(2) {
    background-color: #ecc37f;
  }

  div > div:nth-of-type(3) {
    background-color: #f3a127;
  }

  div > div:nth-of-type(4) {
    background-color: #e4771f;
  }

  div > div:last-of-type {
    background-color: #5a3d2b;
  }

  div:has(> div) {
    position: fixed;
    top: 0;
    z-index: -2;
    width: 200vw;
    display: flex;
    flex-direction: column;
    justify-self: center;
    gap: 3px;
    clip-path: polygon(100% 100%, 0% 100% , 0.00% 76.67%, 2.00% 75.36%, 4.00% 71.57%, 6.00% 65.67%, 8.00% 58.24%, 10.00% 50.00%, 12.00% 41.76%, 14.00% 34.33%, 16.00% 28.43%, 18.00% 24.64%, 20.00% 23.33%, 22.00% 24.64%, 24.00% 28.43%, 26.00% 34.33%, 28.00% 41.76%, 30.00% 50.00%, 32.00% 58.24%, 34.00% 65.67%, 36.00% 71.57%, 38.00% 75.36%, 40.00% 76.67%, 42.00% 75.36%, 44.00% 71.57%, 46.00% 65.67%, 48.00% 58.24%, 50.00% 50.00%, 52.00% 41.76%, 54.00% 34.33%, 56.00% 28.43%, 58.00% 24.64%, 60.00% 23.33%, 62.00% 24.64%, 64.00% 28.43%, 66.00% 34.33%, 68.00% 41.76%, 70.00% 50.00%, 72.00% 58.24%, 74.00% 65.67%, 76.00% 71.57%, 78.00% 75.36%, 80.00% 76.67%, 82.00% 75.36%, 84.00% 71.57%, 86.00% 65.67%, 88.00% 58.24%, 90.00% 50.00%, 92.00% 41.76%, 94.00% 34.33%, 96.00% 28.43%, 98.00% 24.64%, 100.00% 23.33%);
  }

  @supports (animation-timeline: scroll(y)) {
    div:has(> div) {
      animation: hills linear;
      animation-timeline: scroll(y);
    }
  }
</style>
