'use client'
import { useEffect, useState } from "react";

const SixthSection = () => {
    const houseImage = 'house8.jpg';
    const imageWidth = '50vw'; 
    const [imageHeight, setImageHeight] = useState('70vh');
    const descriptionWidth = '30%';

    useEffect(() => {
        const updateImageHeight = () => {
            setImageHeight(`${window.innerHeight * 0.8}px`);
        };
        window.addEventListener('resize', updateImageHeight);
        return () => window.removeEventListener('resize', updateImageHeight);
    }, []);
    return (
      <section className="bg-gray-200 py-8 w-full">
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-start gap-8">
        <div className="w-full ml-14 md:w-auto mt-4 md:mt-0" style={{ width: descriptionWidth }}>
            <p className="text-center">Description</p>
            <p>This is additional content in the description part. You can add more text, images, or other elements here.
                This is additional content in the description part. You can add more text, images, or other elements here.
                This is additional content in the description part. You can add more text, images, or other elements here.
                This is additional content in the description part. You can add more text, images, or other elements here.
                </p>
          </div>
          <div className="w-full mr-14 md:w-auto md:mr-4">
            <div className="flex justify-center items-center ">
              <img
                src={houseImage}
                alt="House"
                className="w-full md:w-auto"
                style={{ width: imageWidth, height: imageHeight }}
              />
            </div>
          </div>
          
        </div>
      </section>
    );
};

export default SixthSection;
