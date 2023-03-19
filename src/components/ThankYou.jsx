import { Link, useParams } from "react-router-dom";

const ThankYou = () => {
    const {orderId} = useParams();

    return (
        <div className="container my-5">
            <div className="row">
                    <div className="col-md-12 text-center">
                            {orderId ? <div className="alert alert-success text-center" role="alert"><h3>Gracias por tu Compra!</h3><p>Se genero una orden de compra con el Id: <b>{orderId}</b></p></div> : ""}
                            <Link to={"/"} className="btn btn-primary">Volver al menú principal</Link>
                    </div>
                </div>
        </div>
    )
}

export default ThankYou;