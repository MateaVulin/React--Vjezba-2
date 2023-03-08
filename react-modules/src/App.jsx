import "./App.css";
import PrvaKompa from "./components/PrvaKompa";
import DrugaKompa from "./components/DrugaKompa";
import * as OstaleKompe from "./components/OstaleKompe";
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
  const jasnoSvima = true;
  const podnaslov = jasnoSvima ? (
    <h2>Svima je jasno,baš super</h2>
  ) : (
    <h2>Svi samo klimaju glavom, nikome nije jasno</h2>
  );
  const pozdravniFooter = jasnoSvima && <h2>Pozdrav do četvrtka</h2>;
  return (
    <div className="App">
      <h1>Algebra</h1>
      <PrvaKompa />
      <DrugaKompa />
      <OstaleKompe.TrecaKompa />
      <OstaleKompe.CetvrtaKompa />
      (pozdravniFooter)
    </div>
  );
}

export default App;
