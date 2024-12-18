// place files you want to import through the `$lib` alias in this folder.
// export { default as Chart } from "./Pages/Home/BlankBarChart.svelte";

// export { default as BarChart } from "./2_Molecules/BarChart.svelte";
// export { default as DonutChart } from "./2_Molecules/DonutChart.svelte";



/*REUSABLE COMPONENTS*/
export { default as Header } from "./ReusableComponents/Header.svelte";
export { default as Footer } from "./ReusableComponents/Footer.svelte";
export { default as SkipLink } from "./ReusableComponents/SkipLink.svelte";
export { default as Icon } from "./ReusableComponents/Icon.svelte";
export { default as BlankDonutChart } from "./ReusableComponents/BlankDonutChart.svelte";
export { default as BlankLineChart } from "./ReusableComponents/BlankLineChart.svelte";
export { default as BlankBarChart } from "./ReusableComponents/BlankBarChart.svelte";

/*HOME*/
export { default as Title } from "./Pages/Home/Title.svelte";
export { default as AccessibillityGraph } from "./Pages/Home/AccessibillityGraph.svelte";
export { default as AutomaticScan } from "./Pages/Home/AutomaticScan.svelte";
export { default as ErrorResult } from "./Pages/Home/ErrorResult.svelte";
export { default as TypeGraph } from "./Pages/Home/TypeGraph.svelte";
export { default as MonthlyNavigation } from "./Pages/Home/MonthlyNavigation.svelte";

/*DASHBOARD*/
export { default as BlankTitle } from "./Pages/Dashboard/BlankTitle.svelte";
export { default as AccessibillitySection } from "./Pages/Dashboard/AccessibillitySection.svelte";
export { default as ScanResultSection } from "./Pages/Dashboard/ScanResultSection.svelte";
export { default as SearchBar } from "./Pages/Dashboard/SearchBar.svelte";
export { default as PageResults } from "./Pages/Dashboard/PageResults.svelte";
