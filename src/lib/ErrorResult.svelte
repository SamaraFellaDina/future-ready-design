<script>

  import Icon from "./Icon.svelte";
  export let result = data.scans;
</script>

<ul>
  <li>
    <h2>{result.result[0].title}</h2>
    <div>
      <p>{result.result[0].amount}</p>
      <Icon name = "ondekte-fouten" />
    </div>
      
  </li>

  <li>
    <h2>{result.result[1].title}</h2>
    <div>
      <p>{result.result[1].amount}</p>
      <Icon name = "contrast-fouten" />
    </div>
      
  </li> 

  <li>
    <h2>{result.result[2].title}</h2>
    <div>
      <p>{result.result[2].amount}</p>
      <Icon name = "structuele-fouten" />
    </div>
  </li> 
    
  <li>
    <h2>{result.result[3].title}</h2>
    <div>
      <p>{result.result[3].amount}</p>
      <Icon name = "ontbrekende-alt-teksten" />
    </div>
      
  </li>  

  <li>
    <h2>{result.result[4].title}</h2>
    <div>
      <p>{result.result[4].amount}</p>
      <Icon name = "aria-label" />
    </div>
  </li>
</ul>

<style>
  
  ul {
    grid-area: 2 / 2 / 4 / 3;
    display: flex;
    flex-direction: column;
    row-gap: var(--average-gap);
    @media only screen and (max-width: 1600px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 20px;
    }
    @media only screen and (max-width: 700px) {
      display: block;
    }
  }

  li {
    height: 20%;
    background-color: var(--color-background-section);
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    list-style: none;
    padding: var(--average-padding);
    @media only screen and (max-width: 1600px) {
      height: 100%;
      margin-bottom: var(--average-gap)
    }
  }

  li h2 {
    padding-bottom: 0.5em;
    font-size: 20px;
  }

  li div {
    --size: 2em;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  li div p {
    font-size: var(--size);
  }
</style>
