const AboutUs = () => {
    return (
        <section className="bg-gray-200 py-8 w-full relative" style={{
            backgroundImage: "url('/house8.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '200px',
        }}>
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Semi-transparent overlay */}
            <div className="container mx-auto">
                <div className="flex justify-center items-center">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">About Us</h2>
                        <p>This is the description part of the Fourth section. You can add any content here, such as text, images, or other elements.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
