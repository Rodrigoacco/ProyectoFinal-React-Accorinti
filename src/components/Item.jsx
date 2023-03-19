import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <Link to={"/item/" + item.id} className="text-decoration-none text-dark">
            <div className="card border-0">
                <img src={item.thumbnail} className="card-img-top img-thumbnail" alt={item.title} />
                <div className="card-body">
                    <p className="card-title text-center">{item.title}</p>
                </div>
            </div>
        </Link>
    )
}

export default Item;