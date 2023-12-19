import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function Card({ product, url, fetchProducts }) {
    const navigate = useNavigate()

    async function handleDelete(id) {
        try {
            await axios.delete(`${url}/apis/branded-things/products/${id}`, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            Swal.fire({
                title: 'Delete success',
                icon: "success"
            });

            fetchProducts()
        } catch (error) {
            Swal.fire({
                title: error.response.data.error,
                icon: "error"
            });
        }
    }


    function handleDetail(id) {
        navigate(`/detail/${id}`)
    }

    function handleEdit(id) {
        navigate(`/edit/${id}`)
    }

    return (<>
        <div className="card bg-base-200 shadow flex flex-row">
            <figure className="flex flex-col">
                <img
                    src={product.imgUrl}
                    alt="product image"
                    className="max-w-sm rounded-lg shadow mb-2"
                />
                <button onClick={() => handleDetail(product.id)} className="btn btn-accent btn-sm m-1 w-full">Detail</button>
                <button onClick={() => handleDelete(product.id)} className="btn btn-error btn-sm m-1 w-full">Delete</button>
                <button onClick={() => handleEdit(product.id)} className="btn btn-warning btn-sm m-1 w-full">Edit</button>
            </figure>
            <div className="card-body flex-1">
                <b>{product.name}</b>
                {product.description}
            </div>
        </div >
    </>)
}