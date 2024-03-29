'use client'
import { useState,useEffect } from "react";
const ThirdSection = () => {
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
    const imagesPerRow = 4;
    const imageWidth = 300;
    const imageHeight = 220;

    const totalImages = houseImages.length;
    const maxIndex = Math.max(0, totalImages - imagesPerRow * 2);
    const endIndex = startIndex + imagesPerRow * 2 > totalImages ? totalImages : startIndex + imagesPerRow * 2;
    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("Third-section");
            if (section) {
                const rect = section.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
                if (isVisible) {
                    setStartIndex(0);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        
        <section className="bg-gray-200 py-8 w-full">
            <div className="container mx-auto">
                <div className="flex justify-center items-center gap-12 flex-col md:flex-row">
                    <div className="flex justify-center items-center flex-wrap gap-16">
                        {houseImages.slice(startIndex, endIndex).map((image, index) => (
                            <img
                                key={startIndex + index}
                                src={image}
                                alt={`House ${startIndex + index + 1}`}
                                style={{ width: `${imageWidth}px`, height: `${imageHeight}px`, margin: '5px' }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThirdSection;
