import { useLoaderData } from "react-router-dom";
import ProductAddToCartCard from "./ProductAddToCartCard";

const MyCart = () => {

    const cartdata = useLoaderData()

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-5 card card-compact max-w-[1500px] mx-auto  bg-base-100  mt-24 ">
                    {
                        cartdata.map(cart =><ProductAddToCartCard key={cart._id} cart={cart}></ProductAddToCartCard>)
                    }
            </div>
        </div>
    );
};

export default MyCart;