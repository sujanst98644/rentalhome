'use client'
import { useState } from "react";

const SeventhSection = () => {
    const houseImages = [
        'house1.jpg',
        'house2.jpg',
        'house3.jpeg',
        'house4.jpeg',
        'house5.jpeg',
        'house6.jpeg',
        'house7.jpeg',
        'house8.jpg',
    ];

    const [startIndex, setStartIndex] = useState(0);
    const imagesPerRow = 3;
    const imageWidth = 300;
    const imageHeight = 220;

    const totalImages = houseImages.length;
    const endIndex = startIndex + imagesPerRow;

    return (
        <div className="container mx-auto p-10">
            <div className="flex justify-between">
                {houseImages.slice(startIndex, endIndex).map((image, index) => (
                    <div key={startIndex + index} className={`w-1/${imagesPerRow} mx-2`}> {/* Added margin */}
                        <img
                            src={image}
                            alt={`House ${startIndex + index + 1}`}
                            className="w-full h-full object-cover mb-4"
                            style={{ maxWidth: `${imageWidth}px`, maxHeight: `${imageHeight}px` }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SeventhSection;
