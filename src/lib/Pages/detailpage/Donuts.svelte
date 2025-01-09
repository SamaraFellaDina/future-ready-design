<script>
  export let result = data.scans;
  import { BlankDonutChart, Icon } from "$lib";

  $: percentagetest = 70 // Reactief maken
  $: percentage = result.score; // Reactief maken
</script>

<ul>
  <li>
    <div>
      <h2>
      </h2>
    </div>
    <div>
      <div>
        <BlankDonutChart {percentagetest} />
      </div>
      <div>
        <Icon name="good" /><p></p>
        <Icon name="good" /><p></p>
        <Icon name="good" /><p></p>
      </div>
    </div>
  </li>
  <li>
    <div>
        <h2>
        </h2>
    </div>
    <div>
        <div>
            <BlankDonutChart {percentage} />
        </div>
        <div>
            <p></p>
            <p></p>
        </div>
    </div>
  </li>
</ul>

<style>
    ul{       
        display: flex;
        margin-bottom: 20px;
    }

    li{
        border-radius: var(--section-border-radius);
        box-shadow: var(--box-shadow);
        padding: var(--average-padding);
        background-color: var(--color-background-section);
        list-style: none;

        &:nth-child(1){
            width: 30%;
            margin-right: 20px;
        }
        &:nth-child(2){
            width: 70%;
        }
    }
</style>
