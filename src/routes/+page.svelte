<script>
  import {Title, AccessibillityGraph, AutomaticScan, ErrorResult, TypeGraph} from '$lib'
  export let data = data;
  export let company = data.sites;
  export let result = data.scans[0];
  export let resultsheet = data.scans;
</script>

<Title {company} {resultsheet}/>
  
<AutomaticScan {result} />

<ErrorResult {result} />

<TypeGraph {result}/>

<AccessibillityGraph {resultsheet}/>