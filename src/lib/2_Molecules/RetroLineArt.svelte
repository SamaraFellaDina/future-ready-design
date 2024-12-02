<script>
</script>

<div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<style>
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  div > div {
    height: 25px;
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
    position: absolute;
    top: 50%;
    left: 0;
    z-index: -1;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  @supports (animation-timeline: scroll(y)) {
    div:has(> div) {
      animation: spin linear;
      animation-timeline: scroll(y);
    }
  }
</style>
