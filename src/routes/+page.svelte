<script>
  import { Title, AccessibillityGraph, AutomaticScan, ErrorResult, TypeGraph, RetroLineArt } from '$lib';
  export let data = data;
  export let company = data.sites;
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

<Title {company} {resultsheet} {nextMonth} {previousMonth} />

<AutomaticScan {result} />
<ErrorResult {result} />
<TypeGraph {result} />
<AccessibillityGraph {resultsheet} />
<RetroLineArt />
