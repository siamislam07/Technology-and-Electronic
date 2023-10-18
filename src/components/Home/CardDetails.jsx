import { useEffect, useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import { useLoaderData } from 'react-router-dom';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const CardDetails = () => {
    // const loadedUsers = useLoaderData()
    
    const [image, setImage] = useState('')
    // console.log(image);

    useEffect(()=>{
        fetch('/image.json')
        .then(res =>res.json())
        .then(data => setImage(data))
    },[])

    return (

        <div>

            


            <AutoplaySlider
                className='h-[600px] -z-10'
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src="https://i.ibb.co/chMRyTH/gollq.jpg" />
                <div data-src="https://i.ibb.co/VvG3vfL/google.jpg" />
                <div data-src="https://i.ibb.co/sQrNYzq/goolge-ads.png" />
            </AutoplaySlider>

            {/* {
                loadedUsers.map(user=>console.log(user))
            } */}

        </div>


    );
};

export default CardDetails;



