<script>
  import { CurrentPageTitle, YearlyResultLineChart, ScanResultPage, ErrorList, TypeChart } from '$lib';
  export let data = data;
  export let resultsheet = data.scans;

  let index = 0;
  let result = data.scans[index];

  function nextMonth() {
    if (index < data.scans.length - 1) {
      index += 1;
      result = data.scans[index];
    }
  }

  function previousMonth() {
    if (index > 0) {
      index -= 1;
      result = data.scans[index];
    }
  }
</script>

<main id="main-content">
  <CurrentPageTitle {nextMonth} {previousMonth} />
  <ScanResultPage {result} />
  <ErrorList {result} />
  <TypeChart {result} />
  <YearlyResultLineChart {resultsheet} />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 2.2fr 0.8fr; 
    grid-template-rows: 0.2fr 0.8fr 1fr 1.2fr;   
    gap: 20px;  
    margin: 0 auto;
    padding: 30px 10px;
    max-width: var(--page-width);

    @media (max-width: 1600px) {
      max-width: 900px;
      display: flex;
      flex-direction: column;
    };

    @media (min-width: 700px) and (max-width: 1040px) {
      padding-left: 70px;
    };
  }
</style>