import Card from "../components/Card";
import { useState } from "react";

export default function HomePage({ url }) {
    const [products, setProducts] = useState([
        {
            "id": 109,
            "name": "Donat murah",
            "description": "buat yang mampu mampu aja yah, kamu jangan",
            "price": 300000,
            "stock": 2,
            "imgUrl": "https://ik.imagekit.io/standarduser/phase2/challenge/all-in-one/db-front-5e25952b-74b0-4da9-b83b-cd809d40ecb1_n6Kyq2Npj.jpg",
            "categoryId": 4,
            "authorId": 1,
            "createdAt": "2024-01-11T10:13:59.909Z",
            "updatedAt": "2024-02-12T01:46:19.552Z",
            "Category": {
                "id": 4,
                "name": "brevis",
                "createdAt": "2024-01-08T08:48:03.823Z",
                "updatedAt": "2024-01-08T08:48:03.823Z"
            }
        },
        {
            "id": 219,
            "name": "sakura chan",
            "description": "hello world",
            "price": 4,
            "stock": 1,
            "imgUrl": "https://ik.imagekit.io/standarduser/phase2/challenge/all-in-one/sakura-2_E7SPHIhUbF.jpg",
            "categoryId": 7,
            "authorId": 1,
            "createdAt": "2024-05-09T12:27:09.256Z",
            "updatedAt": "2024-05-09T13:20:20.146Z",
            "Category": {
                "id": 7,
                "name": "ager",
                "createdAt": "2024-01-08T08:48:04.027Z",
                "updatedAt": "2024-01-08T08:48:04.027Z"
            }
        },
        {
            "id": 226,
            "name": "haaaaa",
            "description": "mantap",
            "price": 10000,
            "stock": 10,
            "imgUrl": "https://ik.imagekit.io/standarduser/phase2/challenge/all-in-one/kamekameha_USxWv8-TND.png",
            "categoryId": 5,
            "authorId": 1,
            "createdAt": "2024-05-10T08:16:19.915Z",
            "updatedAt": "2024-05-13T02:48:25.334Z",
            "Category": {
                "id": 5,
                "name": "molestiae",
                "createdAt": "2024-01-08T08:48:03.891Z",
                "updatedAt": "2024-01-08T08:48:03.891Z"
            }
        },
        {
            "id": 228,
            "name": "wonyoung",
            "description": "hello world",
            "price": 67890,
            "stock": 123,
            "imgUrl": "https://koreajoongangdaily.joins.com/data/photo/2024/03/07/a26d55d7-facd-4c3c-b2a3-fd09d413e6ff.jpg",
            "categoryId": 6,
            "authorId": 1,
            "createdAt": "2024-05-10T09:29:05.184Z",
            "updatedAt": "2024-05-12T18:42:10.030Z",
            "Category": {
                "id": 6,
                "name": "mollitia",
                "createdAt": "2024-01-08T08:48:03.959Z",
                "updatedAt": "2024-01-08T08:48:03.959Z"
            }
        },
        {
            "id": 231,
            "name": "saskeh",
            "description": "shadow hokage",
            "price": 12345,
            "stock": 123,
            "imgUrl": "https://i.pinimg.com/736x/c5/ec/a2/c5eca2d834452f9a91d98cf2b13e76bb.jpg",
            "categoryId": 4,
            "authorId": 191,
            "createdAt": "2024-05-10T09:34:11.271Z",
            "updatedAt": "2024-05-10T09:34:11.271Z",
            "Category": {
                "id": 4,
                "name": "brevis",
                "createdAt": "2024-01-08T08:48:03.823Z",
                "updatedAt": "2024-01-08T08:48:03.823Z"
            }
        },
        {
            "id": 232,
            "name": "nartoh",
            "description": "sage mode",
            "price": 1234,
            "stock": 12,
            "imgUrl": "https://facts.net/wp-content/uploads/2023/05/Naruto.jpeg",
            "categoryId": 5,
            "authorId": 191,
            "createdAt": "2024-05-10T09:35:23.496Z",
            "updatedAt": "2024-05-10T09:35:23.496Z",
            "Category": {
                "id": 5,
                "name": "molestiae",
                "createdAt": "2024-01-08T08:48:03.891Z",
                "updatedAt": "2024-01-08T08:48:03.891Z"
            }
        },
        {
            "id": 262,
            "name": "Mie ayam",
            "description": "mie ayaaaamm",
            "price": 50000,
            "stock": 21,
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQMY9GCHILe0XGH_PP3COolCO2ntvO3QdAOLPuq_9aLA&s",
            "categoryId": 6,
            "authorId": 1,
            "createdAt": "2024-05-12T18:43:18.377Z",
            "updatedAt": "2024-05-12T18:43:18.377Z",
            "Category": {
                "id": 6,
                "name": "mollitia",
                "createdAt": "2024-01-08T08:48:03.959Z",
                "updatedAt": "2024-01-08T08:48:03.959Z"
            }
        },
        {
            "id": 263,
            "name": "Sate ayam",
            "description": "ini sate ayam",
            "price": 35000,
            "stock": 63,
            "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDS9-sRc21_A3PXrKX-_v6hfYNgjfT1qddhYcCM8IfwA&s",
            "categoryId": 6,
            "authorId": 1,
            "createdAt": "2024-05-12T19:06:16.364Z",
            "updatedAt": "2024-05-12T19:06:41.964Z",
            "Category": {
                "id": 6,
                "name": "mollitia",
                "createdAt": "2024-01-08T08:48:03.959Z",
                "updatedAt": "2024-01-08T08:48:03.959Z"
            }
        },
        {
            "id": 264,
            "name": "Ayam Goreng",
            "description": "ini ayam goreng",
            "price": 40000,
            "stock": 15,
            "imgUrl": "https://www.astronauts.id/blog/wp-content/uploads/2023/04/Resep-Ayam-Goreng-Serundeng-ala-Rumahan-yang-Nggak-Kalah-Enak-dari-Restoran.jpg",
            "categoryId": 8,
            "authorId": 1,
            "createdAt": "2024-05-12T22:05:11.702Z",
            "updatedAt": "2024-05-12T22:05:11.702Z",
            "Category": {
                "id": 8,
                "name": "temporibus",
                "createdAt": "2024-01-08T08:48:04.096Z",
                "updatedAt": "2024-01-08T08:48:04.096Z"
            }
        },
        {
            "id": 265,
            "name": "tes",
            "description": "abcd",
            "price": 123456,
            "stock": 12,
            "imgUrl": "https://ik.imagekit.io/standarduser/phase2/challenge/all-in-one/IMG20240426135642_Aus_lxZXs.jpg",
            "categoryId": 7,
            "authorId": 1,
            "createdAt": "2024-05-12T23:15:19.271Z",
            "updatedAt": "2024-05-12T23:16:49.560Z",
            "Category": {
                "id": 7,
                "name": "ager",
                "createdAt": "2024-01-08T08:48:04.027Z",
                "updatedAt": "2024-01-08T08:48:04.027Z"
            }
        }
    ]);

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
                    />
                </form>

                <main className="grid grid-cols-2 gap-5 my-8 bg-base">
                    {products.map(product => {
                        return <Card key={product.id} product={product} />
                    })}
                </main>
            </div >
        </>
    )
}