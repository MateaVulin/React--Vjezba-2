import "./App.css";
import PrvaKompa from "./components/PrvaKompa";
import DrugaKompa from "./components/DrugaKompa";
import TrecaKompa from "./components/TrecaKompa";
/*import {
  PrvaKompa as Prva,
  DrugaKompa as Druga,
  TrecaKompa,
  CetvrtaKompa as Cetvrta,
  NekaKompa,
} from "./components";*/
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
      <PrvaKompa />
      <DrugaKompa />
      <TrecaKompa />
    </div>
  );
}

export default App;
