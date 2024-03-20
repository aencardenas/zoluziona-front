import Header from "../utils/Header";
import Line from "../utils/Line";
import ProductInfo from "../components/ProductInfo";
import ProductButton from "../utils/ProductButton";
import ProductEspecifications from "../components/ProductEspecifications";
import Footer from "../utils/Footer";
import batteryImage from "../assets/images/battery.png";

export default function Product() {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-7">
        <img
          src={batteryImage}
          alt=""
          className="w-[240px] self-center my-10"
        />
        <h2 className="text-2xl font-semibold text-blue-62">LiFePO4</h2>
        <p className="text-sm">
          Las baterías de fosfato de hierro y litio (LiFePO4) destacan por su
          mayor potencia de salida, carga rápida, peso reducido y vida útil
          prolongada. En comparación con las baterías de iones de litio basadas
          en cobalto, las LiFePO4 ofrecen una mayor seguridad, siendo menos
          propensas a la combustión y fuga térmica. Además, su ciclo de vida
          extendido, que puede llegar a ser hasta cuatro o cinco veces más
          largo, las convierte en una opción más duradera.
        </p>
      </div>
      <Line />
      <ProductInfo />
      <Line />

      <div className="flex flex-col gap-3 mx-7 min-w-56">
        <ProductButton text="Cotiza con nosotros" />
        <ProductButton text="Condiciones de pago" />
      </div>

      <Line />

      <h2 className="text-2xl font-semibold text-blue-62 mx-7">
        ESPECIFICACIONES
      </h2>

      <ProductEspecifications />

      <Line />

      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-blue-62 mx-7 mb-2">
          FICHA TECNICA
        </h2>
        <ProductButton text="Desgargar ficha" />
      </div>

      <Footer />
    </>
  );
}
