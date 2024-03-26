import data from "../data/characteristics.json";
import ambient from "../assets/icons/ambiental.png";
import fastCharge from "../assets/icons/carga-rapida.png";
import lifeCycle from "../assets/icons/ciclo-vida.png";
import energyDensity from "../assets/icons/densidad-energia.png";
import security from "../assets/icons/seguridad.png";
import discharge from "../assets/icons/tasa-descarga.png";
import temperature from "../assets/icons/temperatura.png";


export default function CharacteristicCard() {

    const images = {
        "Alta Seguridad": security,
        "Ciclo de vida prolongado": lifeCycle,
        "Capacidade de carga rápida": fastCharge,
        "Alta densidad de energía": energyDensity,
        "Baja tasa de autodescarga": discharge,
        "Amplio rango de temperatura": temperature,
        "Ecofriendly": ambient,
        "Diseño liviano": ambient,
        "Cero mantenimiento": security
    }

    return (

        <>
            
        </>

    );
}