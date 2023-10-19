/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { Link, useLoaderData, useParams } from 'react-router-dom';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const CardDetails = () => {

  const brands = useLoaderData();
  // console.log(brands);
  const { brandName } = useParams();
  const [brand, setBrand] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        const selectedBrand = data.find(
          (brand) => brand.brandName === brandName
        );
        setBrand(selectedBrand);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    

    fetchData();
  }, [brandName]);
  const filteredBrands = brands.filter((brand) => brand.brandName === brandName);
  return (
    
    <div>
      <AutoplaySlider
        className='h-[600px] -z-10'
        play={true}
        cancelOnInteraction={false}
        interval={6000}
      >
        <div data-src="https://i.ibb.co/chMRyTH/gollq.jpg" />
        <div data-src="https://i.ibb.co/VvG3vfL/google.jpg" />
        <div data-src="https://i.ibb.co/sQrNYzq/goolge-ads.png" />
      </AutoplaySlider>
      <div className='grid grid-cols-1 my-16 md:grid-cols-2 lg:grid-cols-4 gap-5 place-content-center items-center bg-base-100  p-4'>
        {filteredBrands.map((brands) => (
          
          <>
          
            <div className="card card-compact max-w-md h-[500px] bg-base-100 shadow-xl mt-24">
            
              <figure><img src={brands.url} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Name: {brands.name}</h2>
                <h2 className="card-title">BrandName: {brands.brandName}</h2>
                <p>{brands.description}</p>
                <p>Rating: {brands.rating}</p>
                <p>Type: {brands.type}</p>
                <p>Prize: {brands.price}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Details</button>
                  <Link to={`updateProduct/${brands._id}`}><button className="btn btn-warning">Update</button></Link>
                </div>
              </div>
            </div>
          </>
        ))}
        
      </div>
          
    </div>


  );
};

export default CardDetails;



