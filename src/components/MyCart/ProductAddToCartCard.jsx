import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";

const ProductAddToCartCard = ({ cart }) => {
    
    const { _id, name,  price, description,  url } = cart || {}

    
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.error) {
                            console.log(data.error);
                        }
                        else if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            ).then(()=>{
                                window.location.reload()
                            })
                        }
                    })
                    .catch(error=>{
                        console.log(error);
                    })
            }
        })
    }

    return (
        <div className="card lg:card-side  shadow-xl mb-5 bg-slate-200">
            <figure><img className="h-56 p-1 " src={url} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="text-xl">{description}</p>
                <p className="text-xl">Price:{price} $</p>
                <div className="card-actions justify-center md:justify-end ld:justify-end ">
                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-error"><RiDeleteBinLine className="text-xl"></RiDeleteBinLine></button>
                </div>
            </div>
        </div>
    );
};

export default ProductAddToCartCard;