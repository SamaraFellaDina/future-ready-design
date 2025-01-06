<script>
  export let percentage;
  let donutAnimation = `${(percentage / 100) * 250} 250`;
  let donutColor = percentage < 50 ? 'var(--color-status-bad-border)' : percentage < 80 ? 'var(--color-status-fine-border)' : 'var(--color-status-good-border)';
</script>

<figure>
  <svg width="150" height="150" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40"></circle>
    <circle cx="50" cy="50" r="40" style="--donutanimation: {donutAnimation}; --donutcolor: {donutColor}"></circle>
  </svg>
  <figcaption>{percentage}%</figcaption>
</figure>
  
<style>
  @keyframes donutanimation {
    from {
      stroke-dasharray: 0 250;
    }
    to {
      stroke-dasharray: var(--donutanimation);
    }
  }
  
  figure {
    position: relative;
    width: 150px;
    height: 150px;
  }

  figure svg {
    transform: rotate(-90deg);
  }

  circle:nth-of-type(1) {
    fill: none;
    stroke: #ccc;
    stroke-width: 10;
  }

  circle:nth-of-type(2) {
    fill: none;
    stroke: var(--donutcolor);
    stroke-width: 10;
    animation: donutanimation 0.8s forwards ease-out;
  }

  figcaption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    color: var(--color-regular-text);
  }

  @media screen and (max-width: 768px) {
    figure {
      align-self: center;
    }
  }
</style>