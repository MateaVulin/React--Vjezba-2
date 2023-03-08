import "./App.css";
import {
  PrvaKompa as Prva,
  DrugaKompa as Druga,
  TrecaKompa,
  CetvrtaKompa as Cetvrta,
  NekaKompa,
} from "./components";
/*import Prva from "./components/PrvaKompa";
import CetvrtaKompa, {
  default as Cetvrta,
  DrugaKompa as Druga,
  TrecaKompa,
} from "./components/DrugaKompa";*/

function App() {
  return (
    <div className="App">
      <h1>Algebra</h1>
      <Prva />
      <Druga />
      <TrecaKompa />
      <Cetvrta />
      <NekaKompa />
    </div>
  );
}

export default App;
