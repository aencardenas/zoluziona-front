import Especifications from "../utils/Especifications";

export default function ProductEspecifications() {
  const esp = ['Eléctricas', 'Mécanicas', 'Carga', 'Descarga', 'Temperatura', 'Legales'];
  return (
    <>
      <div className="flex flex-col mx-7 gap-3 mt-2">
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
