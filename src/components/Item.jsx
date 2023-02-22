const Item = ({item}) => {
    return (
        <div className="card border-0">
            <img src={item.thumbnail} className="card-img-top" alt={item.title} />
            <div className="card-body">
                <p className="card-title text-center">{item.title}</p>
            </div>
        </div>
    )
}

export default Item;