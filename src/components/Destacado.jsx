import marcas from "./images/marcas.png";

const Destacado = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 text-center">
                    <img src={marcas} alt={"Promo #1"} width={"100%"}/>
                </div>
            </div>
        </div>
    )
}

export default Destacado;