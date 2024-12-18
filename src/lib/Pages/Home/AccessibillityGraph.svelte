<script>
  import { Icon, BlankLineChart } from "$lib";

  export let resultsheet = data.scans;
  let January = "";
  let February = "";
  let March = "";
  let April = "";
  let May = "";
  let June = "";
  let July = "";
  let August = resultsheet[0].score;
  let September = resultsheet[1].score;
  let October = resultsheet[2].score;
  let November = resultsheet[3].score;
  let December = resultsheet[4].score;
  
  let percentageData = [
    { start: January, end: February, delay: 0 },
    { start: February, end: March, delay: 0.1 },
    { start: March, end: April, delay: 0.2 },
    { start: April, end: May, delay: 0.3 },
    { start: May, end: June, delay: 0.4 },
    { start: June, end: July, delay: 0.5 },
    { start: July, end: August, delay: 0.6 },
    { start: August, end: September, delay: 0.7 },
    { start: September, end: October, delay: 0.8 },
    { start: October, end: November, delay: 0.9 },
    { start: November, end: December, delay: 1.0 },
    { start: December, end: December, delay: 1.1 },
  ];
</script>

<section>
  <div>
    <h2>Toegankelijkheid</h2>
    <nav>
      <button>
        <Icon name="arrow-left" />
      </button>
      <span>2024</span>
      <button>
        <Icon name="arrow-right" />
      </button>
    </nav>
  </div>
  <BlankLineChart {percentageData}/>
</section>

<style>

  section {
    background-color: var(--color-background-section);
    border-radius: var(--section-border-radius);
    box-shadow: var(--box-shadow);
    padding: var(--average-padding);
    grid-area: 4 / 1 / 5 / 3;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
</style>
