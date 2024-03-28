import ambient from "../assets/icons/ambiental.png";
import fastCharge from "../assets/icons/carga-rapida.png";
import lifeCycle from "../assets/icons/ciclo-vida.png";
import energyDensity from "../assets/icons/densidad-energia.png";
import security from "../assets/icons/seguridad.png";
import discharge from "../assets/icons/tasa-descarga.png";
import temperature from "../assets/icons/temperatura.png";

export default function CharacteristicCardDesktop({ characteristic }) {


    const { name, descriptions } = characteristic

    const images = {
        "Alta Seguridad": security,
        "Ciclo de vida prolongado": lifeCycle,
        "Capacidad de carga rápida": fastCharge,
        "Alta densidad de energía": energyDensity,
        "Baja tasa de autodescarga": discharge,
        "Amplio rango de temperatura": temperature,
        "Ecofriendly": ambient,
        "Diseño liviano": ambient,
        "Cero mantenimiento": security
    }

    return (

        <>
            <div className="bg-white rounded-[10px]">
                <div className="bg-blue-85 text-center p-4 rounded-[10px]">
                    <span className="font-bold text-2xl text-white">{name}</span>
                </div>
                <div className="flex items-center px-8 py-10 gap-4">
                    <img src={images[name]} className="w-52"/>
                    <ul className="flex flex-col gap-y-2 list-disc text-justify w-full text-[22px]">
                        {descriptions.map((description, index) => (
                            <li key={index}>{description}</li>
                        ))}
                    </ul>
                </div>
            </div>

        </>

    );
}