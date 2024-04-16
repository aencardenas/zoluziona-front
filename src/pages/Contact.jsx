import Header from "../utils/Header";
import Form from "../components/ContactForm";
import Card from "../components/ContactCard";
import Footer from "../utils/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <div className="mx-8 max-w-[700px] lg:w-full lg:mx-auto">
        <h2 className="my-3 font-bold text-xl lg:text-3xl">Contáctanos</h2>

        <Form />
        <div className="py-11 flex flex-col gap-4 justify-center items-center lg:flex-row lg:justify-around">
          <Card text="ventas@zoluzionapower.com" title='Ventas' />
          <Card text="contacto@zoluzionapower.com" title='Contacto' />
        </div>
      </div>

      <Footer />
    </>
  );
}
