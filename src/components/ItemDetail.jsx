import { useContext } from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const {addItem} = useContext(CartContext);
    
    const onAdd = (quantity) => {
        addItem(item, quantity)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col d-flex aling-items-center justify-content-end">
                    <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="col d-flex aling-items-center">
                    <div>
                        <h1>{item.title}</h1>
                        <h5>Rating: {item.rating}</h5>
                        <p>{item.description}</p>
                        <p><b>USD {item.price}</b></p>
                    </div>
                    <ItemCount stock={item.stock} onAdd={onAdd} />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;