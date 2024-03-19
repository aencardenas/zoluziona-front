import Header from "../utils/Header";
import batteryImage from "../assets/images/battery.png";

export default function Product() {
  return (
    <>
      <Header />
      <div>
        <img src={batteryImage} alt="" />
        <h2>LiFePO4</h2>
        <p>
          Las baterías de fosfato de hierro y litio (LiFePO4) destacan por su
          mayor potencia de salida, carga rápida, peso reducido y vida útil
          prolongada. En comparación con las baterías de iones de litio basadas
          en cobalto, las LiFePO4 ofrecen una mayor seguridad, siendo menos
          propensas a la combustión y fuga térmica. Además, su ciclo de vida
          extendido, que puede llegar a ser hasta cuatro o cinco veces más
          largo, las convierte en una opción más duradera.
        </p>
      </div>
    </>
  );
}
