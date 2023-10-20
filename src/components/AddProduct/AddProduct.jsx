import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()

        const form = e.target

        const name = form.name.value
        const brandName = form.brandName.value
        const category = form.category.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const url = form.url.value

        const products = { name, brandName, category, type, price, description, rating, url }
        console.log(products);

        // send to server
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product has been added',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    form.reset()
                }
            })

    }


    return (
        <div className="p-24 bg-gray-200 mt-10">
            <h1 className="text-3xl font-extrabold">Add Your Product</h1>
            <form onSubmit={handleAddProduct}>
                {/* form name and brandName row */}
                <div className="md:flex gap-5 mb-5 ">

                    <div className="form-control md:w-1/2 ">
                        <label className="relative mt-5">
                            <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit" type="text" name="name" />
                            <span className="absolute left-0 top-2 px-1 text-lg normal-case tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">Name</span>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ">
                        <label className="relative mt-5">
                            <select required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit" type="text" name="brandName" >
                                <option value="" disabled hidden>Select a Brand</option>
                                <option value="Google">Google</option>
                                <option value="Samsung">Samsung</option>
                                <option value="Sony">Sony</option>
                                <option value="Apple">Apple</option>
                                <option value="Intel">Intel</option>
                                <option value="Microsoft">Microsoft</option>
                            </select>
                            <span className="absolute left-0 top-2 px-1 text-lg normal-case tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">Brand Name</span>
                        </label>
                    </div>
                </div>
                {/* category and type  row */}
                <div className="md:flex gap-5 mb-5">

                    <div className="form-control md:w-1/2 ">
                        <label className="relative mt-5">
                            <select required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit" type="text" name="category" >
                                <option value="" disabled hidden>Select a Brand</option>
                                <option value="Technology and Electronics">Technology and Electronics</option>

                            </select>
                            <span className="absolute left-0 top-2 px-1 text-lg normal-case tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">Category</span>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ">
                        <label className="relative mt-5">
                            <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit" type="text" name="type" />
                            <span className="absolute left-0 top-2 px-1 text-lg normal-case tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">Type</span>
                        </label>
                    </div>
                </div>
                {/* price and description row */}
                <div className="md:flex gap-5 mb-5">

                    <div className="form-control md:w-1/2 ">
                        <label className="relative mt-5">
                            <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit" type="number" name="price" />
                            <span className="absolute left-0 top-2 px-1 text-lg normal-case tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">Price</span>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ">
                        <label className="relative mt-5">
                            <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit" type="text" name="description" />
                            <span className="absolute left-0 top-2 px-1 text-lg normal-case tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">Description</span>
                        </label>
                    </div>
                </div>
                {/* rating photo url row */}
                <div className="md:flex gap-5 mb-5">

                    <div className="form-control md:w-1/2 ">
                        <label className="relative mt-5">
                            <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit" type="text" name="rating" />
                            <span className="absolute left-0 top-2 px-1 text-lg normal-case tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">Rating</span>
                        </label>
                    </div>

                    <div className="form-control md:w-1/2 ">
                        <label className="relative mt-5">
                            <input required className="w-full px-4 py-2 text-lg outline-none border-2 border-gray-400 rounded hover:border-gray-600 duration-200 peer focus:border-indigo-600 bg-inherit" type="url" name="url" />
                            <span className="absolute left-0 top-2 px-1 text-lg normal-case tracking-wide peer-focus:text-indigo-600 pointer-events-none duration-200 peer-focus:text-sm peer-focus:-translate-y-5 bg-gray-200 ml-2 peer-valid:text-sm peer-valid:-translate-y-5">ImageUrl</span>
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Product" className="btn btn-block bg-gray-300 hover:bg-gray-300" />
            </form>

        </div>
    );
};

export default AddProduct;