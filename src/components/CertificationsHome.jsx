import ce from "../assets/images/ce-mark.webp";
import iso14001 from "../assets/images/iso-14001.webp";
import iso from "../assets/images/iso.webp";
import ohsas from "../assets/images/ohsas-iso.webp";
import ru from "../assets/images/RU.webp";
import transport from "../assets/images/transport-safety.webp";
import usLogo from "../assets/images/uslogo.webp";
import warranty from "../assets/images/warranty.webp";

export default function CertificationsHome() {
    const certifications = [
        ce, iso14001, transport, iso, ru, ohsas, usLogo, warranty
    ]

    return (

        <>

            <div>
                <div className="flex flex-col justify-center pb-6 items-center gap-1 lg:gap-4 text-center">
                    <h1 className="font-semibold text-2xl text-black-101 lg:text-[32px] lg:font-bold">CERTIFICACIONES DE SEGURIDAD</h1>
                    <p className="text-xs text-black lg:text-base">Tested and certified for all major safety approvals</p>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-8">
                    {certifications.map((certification, index) => (
                        <div key={index} className="flex flex-col justify-center items-center">
                            <img src={certification} className={`max-w-[140px] ${index === 6 ? 'pl-4' : ''}`} />
                            {index === 6 &&

                                <div className="max-w-32 flex flex-col gap-1 text-center lg:max-w-36 lg:mt-2">
                                    <h1 className="font-semibold text-[9px] text-black lg:text-[10px]">U.S OWNED & OPERATED</h1>
                                    <p className="font-normal text-[8px] text-black lg:text-[9px]">U.S based company dedicated to providing fully supported lithium energy solutions</p>
                                </div>
                            }
                        </div>
                    ))}

                </div>

            </div>
        </>

    );
}