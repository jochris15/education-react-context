import ProductForm from "../components/ProductForm";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

export default function ProductsForm({ url }) {
    const navigate = useNavigate()
    async function handleSubmit(e, name, description, price, imgUrl, stock, categoryId) {
        e.preventDefault()
        try {
            const dataAdded = { name, description, price: +price, imgUrl, stock: +stock, categoryId: +categoryId }

            const { data } = await axios.post(`${url}/apis/branded-things/products`, dataAdded, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })
            console.log(data);
            navigate('/')
        } catch (error) {
            Swal.fire({
                title: error.response.data.error,
                icon: "error"
            });
        }
    }

    return (
        <>
            <ProductForm url={url} handleSubmit={handleSubmit} nameProp="Add Product" />
        </>
    )
}