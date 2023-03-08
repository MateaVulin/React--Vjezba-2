const PrvaKompa = () => {
  const Podnaslov = "JSX";
  const formatTitle = (title) => title.toLowerCase();
  return (
    <>
      <h2>Podnaslov : {Podnaslov.toLowerCase()}</h2>
      <div>
        <h2>Prva komponenta</h2>
      </div>
    </>
  );
};

export default PrvaKompa;
