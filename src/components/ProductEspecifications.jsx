import Especifications from "../utils/Especifications";

export default function ProductEspecifications() {
  const esp = ['Eléctricas', 'Mécanicas', 'Carga', 'Descarga', 'Temperatura', 'Legales'];
  return (
    <>
      <div className="flex flex-col  gap-4 mt-2 lg:gap-7">
        {
          esp.map((esp,i) => (
            <Especifications
              key = {i}
              text = {esp}  
            />
          ))
        }
      </div>
    </>
  );
}
