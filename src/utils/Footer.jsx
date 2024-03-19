import logo from "../assets/images/footer-logo.png"

export default function Footer() {

    return (
        <>
            <footer className="bg-black-100 p-2">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="flex flex-col text-white text-center text-sm ml-2">Necesitas ayuda? <strong>Contáctanos</strong></p>
                    </div>
                    <div className="flex items-center">
                        <img
                            src={logo}
                            alt="Zoluziona logo"
                            className="w-32"
                        />
                    </div>
                </div>
            </footer>
        </>
    );

}