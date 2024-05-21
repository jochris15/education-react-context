
export default function Card({ product }) {
    return (<>
        <div className="card bg-base-200 shadow flex flex-row">
            <figure className="flex flex-col">
                <img
                    src={product.imgUrl}
                    alt="product image"
                    className="max-w-sm rounded-lg shadow mb-2"
                />
            </figure>
            <div className="card-body flex-1">
                <b>{product.name}</b>
                {product.description}
            </div>
        </div >
    </>)
}