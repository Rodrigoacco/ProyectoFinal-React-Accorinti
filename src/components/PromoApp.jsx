import logo from "./images/logo.webp";

const PromoApp = () => {
    return (
        <div className="container-fluid py-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-3">
                                <img src={logo} alt={"logo"} width={123} />
                            </div>
                            <div className="col-md-9 d-flex aling-items-center">
                                <h2>Sé el primero en enterarte nuestras promociones</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex aling-items-center justify-content-end">
                        <button className="btn btn-info">Suscríbete ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoApp;