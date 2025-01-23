<script>
  export let percentage;

  let donutColor;

  $:{ 
    donutColor = percentage < 50 ? 'var(--color-status-bad-border)' : percentage < 80 ? 'var(--color-status-fine-border)' : percentage < 99 ? 'var(--color-status-decent-border)' : 'var(--color-status-good-border)';
  }
</script>

<span class="meter" style="--value: {percentage}; --_fg: {donutColor}">
  <meter max="100" value="{percentage}" data-animate>{percentage}</meter>
</span>

<style>
  .meter {
    --_v: var(--value, 0);
    --_w: var(--width, 150px);
    --_b: var(--bar, 15px);
    --_d: var(--delay, .1s);
    --_dur: var(--duration, 2s);
    --_fg: var(--color, green);
    --_bg: var(--background, #ccc);

    display: inline grid;
    place-items: center;
  }

  .meter:has([data-animate="on-interaction"]) {
    --_v: 0;
  }

  .meter:not([style^='--value:']),
  .meter:has(meter:not([value][max="100"])) {
    --_fg: #666;
    opacity: .6;
  }

  .meter:has(meter[high][optimum]) {
    --_fg: var(--color, orange);
  }

  .meter:has(meter[low][high][optimum]) {
    --_fg: var(--color, red);
  }

  .meter meter {
    grid-area: 1 / 1;
    width: var(--_w);
    height: var(--_w);
    border-radius: 50%;
    background-image:
      radial-gradient(var(--_b) circle
        at 50% calc(var(--_b) / 2),
        var(--_fg) 50%, transparent 0),
      radial-gradient(var(--_b) circle at
        calc(50% + ((50% - var(--_b) / 2) * sin(var(--_v) * 3.6deg)))
        calc(50% - ((50% - var(--_b) / 2) * cos(var(--_v) * 3.6deg))),
        var(--_fg) 50%, transparent 0),
      conic-gradient(var(--_fg) calc(var(--_v) * 3.6deg), var(--_bg) 0);
    mask-image: radial-gradient(closest-side, transparent calc((var(--_w) / 2) - var(--_b)), red 0);
    @starting-style {
      --_v: 0;
    }
  }

  .meter meter[data-animate]:not([data-animate="on-interaction"]) {
    transition: var(--_dur) --_v var(--_d);
  }

  .meter meter::-webkit-meter-bar {
    display: none;
  }

  .meter meter::-moz-meter-bar {
    background: none;
  }

  .meter:has([data-animate]:not([data-animate="on-interaction"]))::after {
    opacity: 0;
    animation: counter forwards 1s var(--_d);
  }

  .meter:not(:has([data-animate="on-interaction"]))::after {
    --_cv: var(--_v);
    counter-set: v var(--_cv);
    content: counter(v) '%';
    grid-area: 1 / 1;
    font-size: var(--font-size-large);
    font-weight: var(--font-weight-bold);
    color: var(--regular-text-color);
  }

  @property --_v {
    syntax: '<integer>';
    inherits: true;
    initial-value: 0;
  }

  @property --_cv {
    syntax: '<integer>';
    inherits: false;
    initial-value: 0;
  }

  @keyframes counter {
    from {
      --_cv: 0;
    }
    to {
      opacity: 1;
    }
  }

</style>