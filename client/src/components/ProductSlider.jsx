import { useNavigate } from "react-router-dom";  // ADD this import

const ProductSlider = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const navigate = useNavigate();   // initialize navigate

  const settings = {
    // your slider settings here...
  };

  return (
    <div ref={ref} className="max-w-6xl mx-auto py-16 px-6 bg-white">
      {/* heading and slider */}
      <motion.div>
        <Slider {...settings}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="p-4"
              onClick={() => navigate(`/product/${product.id}`)}  // Redirect on click
            >
              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-b-4 border-green-600 hover:scale-105 transition-transform duration-300 cursor-pointer">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </Slider>
      </motion.div>

      {/* REMOVE the Modal part now because you don't need it anymore */}
    </div>
  );
};
