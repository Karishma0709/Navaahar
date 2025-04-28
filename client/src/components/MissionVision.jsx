import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa"; // Import Icons

const MissionVision = () => {
  return (
    <section className="bg-green-50 py-16 px-4 md:px-12 lg:px-20">
      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-primary relative inline-block">
          Our Vision & Mission
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-green-600 mx-auto mt-2"></div>
        </h2>
      </motion.div>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-700 text-center max-w-3xl mx-auto"
      >
        We are committed to driving innovation and excellence in our field. Our
        mission is to empower individuals and businesses through cutting-edge
        solutions.
      </motion.p>

      {/* Cards Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mission Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center transition-all border-l-4 border-primary"
        >
          <FaBullseye className="text-yellow-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary">Our Mission</h3>
          <p className="text-gray-600 mt-4 text-lg" >
            To support the livestock sector with innovative, reliable, and
            cost-effective feed solutions that promote animal well-being and
            boost farmers' productivity.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white shadow-lg rounded-xl p-8 text-center transition-all border-l-4 border-primary"
        >
          <FaEye className="text-yellow-500 text-5xl mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-primary">Our Vision</h3>
          <p className="text-gray-600 mt-4 text-lg">
            To be a trusted leader in the animal nutrition industry through
            excellence in product quality, sustainable practices, and customer
            satisfaction.{" "}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
