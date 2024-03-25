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
      <div className="mx-7">
        <div className="lg:flex lg:gap-8">

          {/* PRODUCT */}
          <div className="flex flex-col lg:w-[45%]">
            <img
              src={batteryImage}
              alt=""
              className="w-[240px] self-center my-10"
            />
            <h2 className="text-2xl font-semibold text-blue-62 lg:hidden"> {/* TITLE MOBILE */}
              LiFePO4
            </h2>
            <p className="text-sm lg:text-lg">
              Las baterías de fosfato de hierro y litio (LiFePO4) destacan por
              su mayor potencia de salida, carga rápida, peso reducido y vida
              útil prolongada. En comparación con las baterías de iones de litio
              basadas en cobalto, las LiFePO4 ofrecen una mayor seguridad,
              siendo menos propensas a la combustión y fuga térmica. Además, su
              ciclo de vida extendido, que puede llegar a ser hasta cuatro o
              cinco veces más largo, las convierte en una opción más duradera.
            </p>
            <div className="hidden lg:block">
              <Line />
            </div>
          </div>

          <div className="lg:hidden">
            <Line />
          </div>


          {/* PRODUCT INFO */}
          <div className="lg:w-[55%] lg:mt-14 lg:flex lg:flex-col lg:justify-center">
            <h2 className="text-3xl font-semibold text-blue-62 lg:block hidden"> {/* TITLE DESKTOP */}
              LiFePO4
            </h2>
            <ProductInfo />
            <div className="hidden lg:block">
              <Line />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <Line />
        </div>

        <div className="lg:flex justify-between lg:gap-8">
          <div className="lg:w-[45%]">
            {/* PRECIOS */}
            <div className="flex flex-col gap-3 min-w-56">
              <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl">
                PRECIOS
              </h2>
              <ProductButton text="Cotiza con nosotros" />
              <ProductButton text="Condiciones de pago" />
            </div>
            
            {/* FICHA TECNICA DESKTOP */}
            <div className="mb-10 hidden lg:flex lg:flex-col">
              <Line />
              <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl mb-2">
                FICHA TECNICA
              </h2>
              <ProductButton text="Desgargar ficha" />
            </div>
          </div>

          <div className="lg:hidden">
            <Line />
          </div>
          
          {/* ESPECIFICAICONES */}
          <div className="lg:w-[55%]">
            <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl">
              ESPECIFICACIONES
            </h2>

            <ProductEspecifications />
          </div>
        </div>

        <div className="lg:hidden">
          <Line />
        </div>

        {/* FICHA TECNICA MOBILE */}
        <div className="mb-10 lg:hidden">
          <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl mb-2">
            FICHA TECNICA
          </h2>
          <ProductButton text="Desgargar ficha" />
        </div>
      </div>
      <Footer />
    </>
  );
}
