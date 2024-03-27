import Header from "../utils/Header";
import Line from "../utils/Line";
import ProductInfo from "../components/ProductInfo";
import ProductButton from "../utils/ProductButton";
import PorductEspecifications from "../components/ProductEspecifications";
import Footer from "../utils/Footer";
import batteryImage from "../assets/images/battery.png";


export default function Product() {
  return (
    <>
      <Header />

      <div className="lg:mx-auto max-w-[1024px] lg:w-full mx-7 lg:px-7">
        <div className="flex flex-col lg:flex-row mt-10 lg:gap-14">
          <img
            src={batteryImage}
            alt=""
            className="w-[240px] self-center lg:w-[400px]"
          />
          <div>
            <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl mb-3">LiFePO4</h2>
            <p className="text-sm lg:text-xl">
              Las baterías de fosfato de hierro y litio (LiFePO4) destacan por
              su mayor potencia de salida, carga rápida, peso reducido y vida
              útil prolongada. En comparación con las baterías de iones de litio
              basadas en cobalto, las LiFePO4 ofrecen una mayor seguridad,
              siendo menos propensas a la combustión y fuga térmica. Además, su
              ciclo de vida extendido, que puede llegar a ser hasta cuatro o
              cinco veces más largo, las convierte en una opción más duradera.
            </p>
          </div>
        </div>
        <Line />
        <ProductInfo />
        <Line />

        <div>
          <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl mb-5">
            FICHA TECNICA
          </h2>
          <ProductButton text="Desgargar ficha" />
        </div>

        <Line />

        <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl mb-5">
          ESPECIFICACIONES
        </h2>

        <PorductEspecifications />

        <Line />
        <div className="flex flex-col gap-3 max-w-[450px]">
          <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl mb-2">PRECIOS</h2>
          <ProductButton text="Cotiza con nosotros" />
          <ProductButton text="Condiciones de pago" />
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
