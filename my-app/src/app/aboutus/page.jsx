const AboutUs = () => {
    return (
        <section className="bg-gray-200 py-0 w-full relative h-screen" style={{
            backgroundImage: "url('/house8.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }}>
            <div className="container mx-auto h-full flex">
                <div className="px-8 text-white mt-20">
                    <h2 className="text-2xl font-bold mb-4">About Us</h2>
                    <p>This is the description part of the Fourth section. You can add any content here, such as text, images, or other elements.</p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
