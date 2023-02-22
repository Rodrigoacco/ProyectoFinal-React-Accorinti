import facebook from "./images/facebook.svg";
import instagram from "./images/instagram.svg";
import whatsapp from "./images/whatsapp.svg";
import playStore from "./images/google-play.svg";
import appStore from "./images/apple.svg";

const Footer = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col">
                    <a href={"/"} className="me-3"><img src={facebook} alt={"facebook"} width={24} /></a>
                    <a href={"/"} className="me-3"><img src={instagram} alt={"instagram"} width={24} /></a>
                    <a href={"/"}><img src={whatsapp} alt={"whatsapp"} width={24} /></a>
                </div>
                <div className="col text-end">
                    <a href={"/"} target={"_blank"} rel="noreferrer" className="me-3"><img src={playStore} alt={"playstore"} width={24} /></a>
                    <a href={"/"} target={"_blank"} rel="noreferrer" className="me-3"><img src={appStore} alt={"appstore"} width={24} /></a>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-md-8">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Política de Privacidad</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Defensa del Consumidor</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Protección de datos personales</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href={"/"}>Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4 text-end-secondary">
                    <p>© Electro-Casa 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;