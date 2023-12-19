import Card from "../components/Card";
import { useEffect, useState } from "react";
import gearLoad from "../components/assets/Gear-0.2s-264px.svg"
import axios from 'axios'
import Swal from 'sweetalert2'

export default function HomePage({ url }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')

    async function fetchProducts() {
        try {
            const { data } = await axios(`${url}/apis/pub/branded-things/products?q=${search}&limit=8&page=1&sort=ASC`)

            setProducts(data.data.query)
        } catch (error) {
            Swal.fire({
                title: error.response.data.error,
                icon: "error"
            });
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [search])

    // search
    function searchOnChange(event) {
        let newSearch = event.target.value;
        setSearch(newSearch);
    }

    return (
        <>
            <div id="PAGE-HOME" className="p-3">
                {/* search */}
                <form action="" method="get" className="flex justify-center items-center">
                    <input
                        type="search"
                        name="search"
                        placeholder="Search"
                        className="input input-bordered input-accent md:w-auto mx-1 mt-5 input-sm"
                        onChange={searchOnChange}
                    />
                </form>


                {loading ? (
                    <div className="mt-32 flex justify-center items-center">
                        <img src={gearLoad} />
                    </div>
                ) : (
                    <main className="grid grid-cols-2 gap-5 my-8 bg-base">
                        {products.map(product => {
                            return <Card key={product.id} product={product} url={url} fetchProducts={fetchProducts} />
                        })}
                    </main>
                )}
            </div >
        </>
    )
}