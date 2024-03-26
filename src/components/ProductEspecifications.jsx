import Especifications from "../utils/Especifications";

export default function ProductEspecifications() {
  const esp = [
    ["Eléctricas", "Mécanicas", "Carga"],
    ["Descarga", "Temperatura", "Legales"],
  ];

  return (
    <>
      <div className="flex flex-col gap-4 mt-2 lg:flex-row">
        {esp.map((group, i) => (
          <div key={i} className="flex flex-col gap-4 lg:w-1/2">
            {
              group.map((item,i) => (
                <Especifications 
                  key={i}
                  text = {item}
                />
              ))
            }
          </div>
        ))}
      </div>
    </>
  );
}
