import { useState } from "react";
import Header from "../utils/Header";
import Line from "../utils/Line";
import ProductInfo from "../components/ProductInfo";
import ProductButton from "../utils/ProductButton";
import PorductEspecifications from "../components/ProductEspecifications";
import Footer from "../utils/Footer";
import batteryImage from "../assets/images/battery.png";
import Modal from "../utils/Modal";
import ProductPaymentConditions from "../components/ProductPaymentConditions";
import { Link } from "react-router-dom";

export default function Product() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpen2 = () => {
    setOpen2(!open2);
  };

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
            <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl mb-3">
              LiFePO4
            </h2>
            <p className="text-sm lg:text-xl text-justify">
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
          <div className="max-w-max">
            <ProductButton text="Desgargar ficha" />
          </div>
        </div>

        <Line />

        <PorductEspecifications />

        <Line />
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-semibold text-blue-62 lg:text-3xl mb-2">
            PRECIOS
          </h2>

          <div className="flex flex-col gap-3 max-w-full lg:w-[320px]">
            <ProductButton
              text="Consulta nuestros precios"
              onClick={handleOpen}
            />
            <ProductButton text="Condiciones de pago" onClick={handleOpen2} />
            <Link to="/contact">
              <ProductButton text="Contáctanos" />
            </Link>
          </div>
        </div>

        <Modal open={open} onClose={handleOpen}>
          <div className="flex flex-col p-7 gap-2">
            <div className="flex gap-10 font-semibold lg:text-xl">
              <div>
                <p>1 bateria</p>
                <p>2 baterias</p>
              </div>
              <div className="text-green-34">
                <p>$999.00 USD</p>
                <p>$1,899.00 USD</p>
              </div>
            </div>
            <div>
              <p className="text-xs">* Los precios ya incluyen IVA</p>
              <p className="text-xs">* Sujetos a cambios sin previo aviso</p>
            </div>
          </div>
        </Modal>

        <Modal open={open2} onClose={handleOpen2} title="CONDICIONES DE PAGO">
          <ProductPaymentConditions />
        </Modal>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </>
  );
}
