<script>
    import { onMount } from 'svelte';
    onMount(() => {
      document.body.classList.add('loaded');
    });
</script>

<div class="container">
  <div class="wrapper">
    <div class="chart-wrapper">
      <ul class="chart-y">
        <li>100</li>
        <li>80</li>
        <li>60</li>
        <li>40</li>
        <li>20</li>
        <li>0</li>
      </ul>
      <ul class="chart-x">
        <li style="--start:100%; --end:80%">
          <span>Jan</span>
        </li>
        <li style="--start:80%; --end:40%; --delay: 0.1">
          <span>Feb</span>
        </li>
        <li style="--start:40%; --end:60%; --delay: 0.2">
          <span>Mar</span>
        </li>
        <li style="--start:60%; --end:20%; --delay: 0.3">
          <span>Apr</span>
        </li>
        <li style="--start:20%; --end:30%; --delay: 0.4">
          <span>Mei</span>
        </li>
        <li style="--start:30%; --end:14%; --delay: 0.5">
          <span>Jun</span>
        </li>
        <li style="--start:14%; --end:70%; --delay: 0.6">
          <span>Jul</span>
        </li>
        <li style="--start:70%; --end:70%; --delay: 0.7">
          <span>Aug</span>
        </li>
        <li style="--start:70%; --end:80%; --delay: 0.8">
          <span>Sep</span>
        </li>
        <li style="--start:80%; --end:80%; --delay: 0.9">
          <span>Okt</span>
        </li>
        <li style="--start:80%; --end:60%; --delay: 1.0">
          <span>Nov</span>
        </li>
        <li style="--start:60%; --end:50%; --delay: 1.1">
          <span>Dec</span>
        </li>
      </ul>
    </div>
  </div>
</div>

<style>
:root {
  --chart-thickness: 3px;
  --border: 1px solid rgba(211, 211, 211, 0.6);
}

ul {
  list-style: none;
}

.chart-wrapper {
  display: flex;
  gap: 20px;
  padding: 20px;
  border: var(--border);
  flex: 2;
}

.chart-wrapper .chart-y li {
  padding: 0 15px;
}

.chart-wrapper .chart-y li + li {
  margin-top: 40px;
}

.chart-wrapper .chart-x {
  display: flex;
  flex-grow: 1;
}

.chart-wrapper .chart-x li {
  position: relative;
  display: flex;
  align-items: flex-end;
  flex: 1;
}

.chart-wrapper .chart-x li::before,
.chart-wrapper .chart-x li::after {
  content: "";
  position: absolute;
  left: 0;
  background: var(--color-blue);
}

.chart-wrapper .chart-x li::before {
  top: 0;
  width: 100%;
  height: 100%;
  clip-path: polygon(
    0 calc(100% - var(--start)),
    0 calc(100% - var(--start)),
    0 calc(100% - var(--start)),
    0 calc(100% - var(--start))
  );
  transition: clip-path 0.5s calc(var(--delay, 0) * 0.5s);
}

.chart-wrapper .chart-x li::after {
  top: calc(100% - var(--start));
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: translate(-5px, -5px);
}

.loaded .chart-wrapper .chart-x li::before {
  clip-path: polygon(
    0 calc(100% - var(--start)),
    100% calc(100% - var(--end)),
    100% calc(calc(100% - var(--end)) + var(--chart-thickness)),
    0 calc(calc(100% - var(--start)) + var(--chart-thickness))
  );
}

</style>