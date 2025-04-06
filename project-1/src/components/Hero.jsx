const HeroSection = () => {
  return (
    <main className="hero">
        <div className="hero_content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="hero-btn">
                <button className="primary_btn">Shop Now</button>
                <button className="secondary_btn">Category</button>
            </div>
            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-images">
                    <img href="#" src="/images/amazon.png" alt="" />
                    <img href="#" src="/images/flipkart.png" alt="" />
                </div>
            </div>
        </div>
        <div className="hero__image">
            <img src="/images/shoe_image.png" alt="" />
        </div>
    </main>
  );
}
export default HeroSection;