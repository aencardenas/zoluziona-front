import Header from "../utils/Header";
import Form from "../components/ContactForm";
import Card from "../components/ContactCard";
import Footer from "../utils/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <h2 className="mx-8 my-3 font-bold text-xl">Contáctanos</h2>

       <Form />

      <Card />

      <Footer />
    </>
  );
}
