import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'
import baseUrl from "../baseUrl";

export default function DetailPage() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    async function fetchProduct() {
        try {
            setLoading(true)

            const { data } = await axios.get(`${baseUrl}/apis/pub/products/products/${id}`)

            setProduct(data.data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [])

    return (
        <>
            <div className="flex flex-start bg-yellow-400 border-2 border-black p-5 rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full">
                <div>
                    <img
                        src={product.imgUrl}
                        alt="product image"
                        className="border-2 border-black rounded-2xl shadow-[2px_2px_0px_rgba(0,0,0,1)] h-full"
                    />
                </div>
                <div className="flex mx-10 flex-col w-1/2 justify-between">
                    <b className="text-4xl mb-5">{product.name}</b>
                    <p className="h-full">
                        {product.description}
                    </p>
                    <Link to="/" className="w-1/5 mt-5 py-2 px-4 border-2 border-black rounded-2xl text-sm font-medium text-white bg-gray-700 hover:bg-black shadow-[2px_2px_0px_rgba(0,0,0,1)] text-left"> Back to Home</Link>
                </div>
            </div>
        </>
    )
}