<script>
  import { IconLibrary, LineChart } from "$lib";

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

  function getDutchMonthName(date, locale = "nl-NL") {
    return new Date(date).toLocaleString(locale, { month: "long" });
  }

  function linkDutchMonthNameToMonthsArray(monthsArray, monthName) {
    return monthsArray.find(
      (month) => month.name.toLowerCase() === monthName.toLowerCase()
    );
  }

  resultsheet.forEach(({ date, score }) => {
    const dutchMonthName = getDutchMonthName(date);
    const linkedMonth = linkDutchMonthNameToMonthsArray(months, dutchMonthName);
    if (linkedMonth) {
      linkedMonth.score = score;
    }
  });

  function getNextMonth(months, index) {
    return months[index + 1] || months[index];
  }

  let percentageData = months.map((month, index) => {
    const nextMonth = getNextMonth(months, index);
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
        <IconLibrary name="arrow-left" />
      </button>
      <span>2024</span>
      <button>
        <IconLibrary name="arrow-right" />
      </button>
    </nav>
  </div>
  <LineChart {percentageData} {chartWidth} {mobileChartWidth} />
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