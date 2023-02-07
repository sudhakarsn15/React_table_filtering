import "./styles.css";
// import { BasicTable } from "./components/BasicTable";
// import { SortingTable } from "./components/SortingTable";
import { FilteringTable } from "./components/FilteringTable";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <BasicTable /> */}
      {/* <SortingTable /> */}
      <FilteringTable />
    </div>
  );
}
