<script>
  import { Icon, BlankLineChart } from "$lib";


  export let resultsheet = data.scans;
 
  let August = resultsheet[0].score;
  let September = resultsheet[1].score;
  let October = resultsheet[2].score;
  let November = resultsheet[3].score;
  let December = resultsheet[4].score;
 

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
  <BlankLineChart />
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
