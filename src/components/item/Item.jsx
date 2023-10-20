import { useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Item = () => {


    const data = useParams()

    const navigate = useNavigate()


    const [item, setItem] = useState({})
    
    console.log(item);

    useEffect(() => {
        fetch(`http://localhost:5000/product/${data.id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [data.id])

    const { name, brandName, category, type, price, description, rating, url } = item || {}

    const handleAddToCart = () => {
        fetch('http://localhost:5000/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                price,
                description,
                url
                
                
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    navigate('/myCart')
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }

    return (
        <div className="flex  justify-center items-center h-screen">
            <div className="max-w-screen-xl flex-col items-center  bg-white shadow-lg rounded-lg flex">

                <div className="w-1/2 ">
                    <img
                        src={url}
                        alt="Product"
                        className="w-full h-full rounded-l-lg"
                    />
                </div>

                <div className="w-1/2 p-4">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <p className="text-gray-500">{description}</p>

                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-xl font-semibold text-indigo-600">
                            Price: {price} $
                        </span>
                        <div className="flex items-center space-x-2">
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-yellow-400">★</span>
                            <span className="text-gray-400">★</span>
                        </div>
                    </div>

                    <div className="mt-4">
                        <button 
                        onClick={handleAddToCart}
                            className="w-full bg-indigo-600 text-white rounded-md py-2"
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;