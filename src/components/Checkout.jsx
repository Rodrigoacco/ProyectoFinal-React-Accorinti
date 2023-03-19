import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Navigate } from "react-router-dom";

const Checkout = () => {
    const [nombre,setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, clear, cartTotal, cartSum} = useContext(CartContext);

    const generarOrden = () => {
        const buyer = {name:nombre, email:email, phone:telefono};
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth() + 1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
        const order = {buyer:buyer, items:{cart}, date:date, total:cartTotal()};

        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(data => {
            setOrderId(data.id);
            clear();
        });
    }

    return(
        <div className="container my-5">
            <div className="row">
            <h1 className="text-center">Finalizar Compra</h1>
                <div className="col-md-3">
                    <form>
                        <div class="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombre</label>
                            <input type="texto" className="form-control" id="nombre" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="texto" className="form-control" id="email" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="telefono" className="form-label">Teléfono</label>
                            <input type="texto" className="form-control" id="telefono" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-primary" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-9">
                    <table className="table">
                        {
                            cart.map(item => (
                                <tr key={item.index}>
                                    <td className="text-start" width="10%" ><img src={item.thumbnail} alt={item.title} width={120} /></td>
                                    <td className="text-start aling-midle" width="40%">{item.title}</td>
                                    <td className="text-center aling-midle" width="20%">{item.quantity} x USD {item.price}</td>
                                    <td className="text-center aling-midle" width="20%">USD {item.quantity * item.price}</td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td className="text-center">Total a pagar</td>
                                <td className="text-center"><b>USD {cartSum()}</b></td>
                            </tr>
                        </table>
                    </div>
                </div>
                {orderId ? <Navigate to={"/ThankYou/" + orderId} /> : ""}
            </div>
        )
    }

export default Checkout;