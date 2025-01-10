<script>
  import { Icon, BlankLineChart } from "$lib";

  export let resultsheet = data.scans;
  let chartWidth = "100%";
  let mobileChartWidth = "auto";
  let months = [
    { name: "Januari", score: "" },
    { name: "Februari", score: "" },
    { name: "Maart", score: "" },
    { name: "April", score: "" },
    { name: "Mei", score: "" },
    { name: "Juni", score: "" },
    { name: "Juli", score: "" },
    { name: "Augustus", score: "" },
    { name: "September", score: "" },
    { name: "Oktober", score: "" },
    { name: "November", score: "" },
    { name: "December", score: "" }
  ];

  resultsheet.forEach(({ date, score }) => {
    const monthName = new Date(date).toLocaleString("nl-NL", { month: "long" });
    const month = months.find(m => m.name.toLowerCase() === monthName.toLowerCase());
    if (month) month.score = score;
  });

  let percentageData = months.map((month, index) => {
    const nextMonth = months[index + 1] || month; // To loop back to December if needed
    return {
      start: month.score,
      end: nextMonth.score,
      delay: index * 0.1,
      name: month.name
    };
  });
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
  <BlankLineChart {percentageData} {chartWidth} {mobileChartWidth} />
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

  /* @media screen and (max-width: 1040px) {
    :global(figure > div) {
      width: unset !important;
    }
  } */
</style>