<script>
  export let percentage;

  let donutColor;
  let donutAnimation;

  $:{ 
    donutAnimation = `${(percentage / 100) * 250} 250`;
    donutColor = percentage < 50 ? 'var(--color-status-bad-border)' : percentage < 80 ? 'var(--color-status-fine-border)' : percentage < 99 ? 'var(--color-status-decent-border)' : 'var(--color-status-good-border)';
  }
</script>

<figure>
  <svg width="150" height="150" viewBox="0 0 100 100">
    <circle cx="50" cy="50" r="40"></circle>
    <circle cx="50" cy="50" r="40" style="--donutanimation: {donutAnimation}; --donutcolor: {donutColor}"></circle>
  </svg>
  <figcaption>{percentage}%</figcaption>
</figure>

<div>
  <progress max="100" value={percentage} style="--donutcolor: {donutColor}">{percentage}</progress>
</div>

<style>
    @property --remaining-progress {
    syntax: '<integer>';
    inherits: true;
    initial-value: 100; 
  }

  @property --fill-progress {
    syntax: '<number>';
    inherits: true;
    initial-value: 1; 
  }

  progress {
    width: 135px;
    height: 135px;
    appearance: none;
    position: relative;
    animation: fill-progress 2s .5s both;
    timeline-scope: --progress;

    @supports not (animation-timeline: --progress) {
      display: none;
    }
  }
  progress::-webkit-progress-bar {
    overflow: auto;
    visibility: hidden;
  }

  progress::-webkit-progress-value {
    view-timeline: --progress inline;
  }

  progress::before,
  progress::after {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    animation: remaining-progress  linear;
    animation-timeline: --progress;
    animation-range: entry 100% exit 100%;
  }

  progress::before {
    content: counter(val) "%";
    counter-reset: val calc(var(--fill-progress)*var(--remaining-progress));
    display: grid;
    place-content: center;
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    border: 15.5px solid #ccc;
  }

  progress::after {
    content: "";
    background-color: var(--donutcolor);
    padding: 15px;
    border-radius: 50%;
    mask: 
      conic-gradient(#0000 0 0) subtract content-box,
      conic-gradient(#000 calc(1%*var(--fill-progress)*var(--remaining-progress)),#0000 0);
  }

  @keyframes remaining-progress  {
    to {--remaining-progress: 0}
  }

  @keyframes fill-progress{
    0% {--fill-progress: 0}
  }

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
    align-self: center;

    @media (max-width: 768px) {
      align-self: center;
    }

    @supports (animation-timeline: --progress) {
      display: none;
    }
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

  /* @supports not (animation-timeline: --progress) {
    progress {
      display: none;
    }
  } */

  @supports (animation-timeline: --progress) {
    figure {
      display: none;
    }
  }

</style>