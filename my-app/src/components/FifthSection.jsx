'use client'
import { useState } from "react";

const FifthSection = () => {
    const houseImages = [
        'house1.jpeg',
        'house2.jpeg',
        'house3.jpeg',
        'house4.jpeg',
        'house5.jpeg',
        'house6.jpeg',
        'house7.jpeg',
        'house8.jpg',
    ];

    const [startIndex, setStartIndex] = useState(0);
    const imagesPerRow = 4;
    const imageWidth = 300;
    const imageHeight = 220;

    const totalImages = houseImages.length;
    const maxIndex = Math.max(0, totalImages - imagesPerRow * 2);
    const endIndex = startIndex + imagesPerRow * 2 > totalImages ? totalImages : startIndex + imagesPerRow * 2;

    return (
        <section className="bg-gray-200 py-8 w-full">
            <div className="container mx-auto">
                <div className="flex justify-center items-center flex-col md:flex-row">
                    <div className="w-full md:w-1/2 p-6">
                        <div className="h-1/2">
                            <img
                                src={houseImages[0]}
                                alt="House 1"
                                className="w-full h-full object-cover mb-4"
                            />
                        </div>
                        <div className="h-1/2">
                            <img
                                src={houseImages[1]}
                                alt="House 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-wrap justify-around">
                        {houseImages.slice(startIndex, endIndex).map((image, index) => (
                            <div key={startIndex + index} className="w-1/3 mb-14 mx-2">
                                <img
                                    src={image}
                                    alt={`House ${startIndex + index + 1}`}
                                    className="w-full h-full object-cover"
                                    style={{ marginBottom: '1rem' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FifthSection;
