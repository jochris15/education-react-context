import ProductForm from "../components/ProductForm";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from "react";

export default function ProductsForm({ url }) {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate()
    const { id } = useParams()

    async function fetchProduct() {
        try {
            const { data } = await axios.get(`${url}/apis/pub/branded-things/products/${id}`)

            setProduct(data.data)
        } catch (error) {
            Swal.fire({
                title: error.response.data.error,
                icon: "error"
            });
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    async function handleSubmit(e, name, description, price, imgUrl, stock, categoryId) {
        e.preventDefault()
        try {
            const dataAdded = { name, description, price: +price, imgUrl, stock: +stock, categoryId: +categoryId }

            await axios.put(`${url}/apis/branded-things/products/${id}`, dataAdded, {
                headers: {
                    Authorization: `Bearer ${localStorage.access_token}`
                }
            })

            Swal.fire({
                title: "Mantap cuk",
                icon: "success"
            });

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
            <ProductForm url={url} handleSubmit={handleSubmit} product={product} nameProp="Edit Product" />
        </>
    )
}