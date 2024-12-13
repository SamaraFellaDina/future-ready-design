<script>
  import { Title, AccessibillityGraph, AutomaticScan, ErrorResult, TypeGraph } from '$lib';
  export let data = data;
  export let company = data.sites;
  export let resultsheet = data.scans;

  let index = 0;
  let result = data.scans[index];

</script>

<Title {data} {company} />

<AutomaticScan {result} />
<ErrorResult {result} />
<TypeGraph {result} />
<AccessibillityGraph {resultsheet} />
