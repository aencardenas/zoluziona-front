import logo from "../assets/images/footer-logo"

export default function Footer() {

    return (
        <>
            <footer>
                <div>
                    <div>
                        <p>Necesitas ayuda? Contactanos</p>
                    </div>
                    <div>
                        <img src={logo} alt="Zoluziona logo"/>
                    </div>
                </div>
            </footer>
        </>
    );

}