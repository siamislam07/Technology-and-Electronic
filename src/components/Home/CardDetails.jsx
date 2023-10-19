/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Link, useLoaderData, useParams } from 'react-router-dom';

const CardDetails = () => {

  const brands = useLoaderData();
  // console.log(brands);
  const { brandName } = useParams();
  const [brand, setBrand] = useState(null);
  const [brand2, setBrand2] = useState(null);
  console.log(brand);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const selectedBrand = data.find(
          (brand) => brand.brandName === brandName
        );
        const image = data.map(image => setBrand2(image))
        setBrand(selectedBrand);
        setBrand2(image);
      } catch (error) {
        console.error(error);
      }
    };


    fetchData();
  }, [brandName]);
  const filteredBrands = brands.filter((brand) => brand.brandName === brandName);

  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const Carousel = () => (
    <AutoplaySlider
      play={true}
      interval={6000}
      animation="foldOutAnimation"
      className="h-[600px] w-full object-top ">
      <div data-src='https://i.ibb.co/VvG3vfL/google.jpg' />
      <div data-src='https://i.ibb.co/chMRyTH/gollq.jpg' />
      <div data-src='https://i.ibb.co/sQrNYzq/goolge-ads.png' />
    </AutoplaySlider>
  );
  return (

    <div>
      <Carousel />
      <div className='grid grid-cols-1 my-16 md:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center items-center bg-base-100  p-4'>

        {filteredBrands.map((brands) => (

          <div key={brands._id}>

            <div className="card card-compact max-w-md h-[500px] bg-base-100 shadow-xl mt-24">

              <figure><img src={brands.url} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Name: {brands.name}</h2>
                <h2 className="card-title">BrandName: {brands.brandName}</h2>
                <p className='font-medium uppercase'>{brands.description}</p>
                <p className='font-medium uppercase'>Rating: {brands.rating}</p>
                <p className='font-medium uppercase'>Type: {brands.type}</p>
                <p className='font-medium uppercase'>Prize: {brands.price} $</p>
                <div className="card-actions justify-end ">
                  <Link to={`/item/${brands?._id}`}><button className="btn btn-primary ">Details</button></Link>
                  <Link to={`/update/${brands?._id}`}><button className="btn btn-warning ">Update</button></Link>
                </div>
              </div>
            </div>

          </div>
        ))}

      </div>

    </div>


  );
};

export default CardDetails;



