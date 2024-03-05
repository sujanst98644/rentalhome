'use client'
import { useState, useEffect, useRef } from "react";
import { TweenMax, Power1 } from "gsap";
import ScrollMagic from "scrollmagic";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

ScrollMagicPluginGsap(ScrollMagic, TweenMax);
const Test = () => {
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
    const controller = useRef(null);

    
    
    useEffect(() => {
        // Initialize ScrollMagic controller
        controller.current = new ScrollMagic.Controller();

        // Create ScrollMagic scene
        const scene = new ScrollMagic.Scene({
            triggerElement: "#Test",
            triggerHook: 0.5, 
            reverse: false, 
        })
        // Set up tween animation
        .setTween(TweenMax.from("#Test", 1, { opacity: 0, ease: Power1.easeInOut }))
        // Add scene to controller
        .addTo(controller.current);

        // Cleanup function
        return () => {
            // Destroy ScrollMagic scene and controller
            if (controller.current) {
                controller.current.destroy(true);
            }
        };
    }, []);
    return (
        <section id="Test" className="bg-gray-200 py-8 w-full">
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

export default Test