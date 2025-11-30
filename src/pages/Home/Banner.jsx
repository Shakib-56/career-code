import React from "react";
import { motion } from "motion/react";
import celebration1 from "./celebration.jpg";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96 lg:max-w-7xl mx-auto px-20">
      <div className="hero-content flex-col flex-1 lg:flex-row-reverse">
        <div className=" space-y-4 max-w-7xl px-20 mx-auto">
          <div className="flex-1">
            <motion.img
              animate={{ y: [100, 150, 100] }}
              transition={{ duration: 4, delay: 5, repeat: Infinity }}
              src={celebration1}
              className="max-w-[300px] rounded-t-4xl border-s-8 border-l-blue-600 rounded-br-4xl border-b-8 border-b-blue-600 shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{ duration: 8, repeat: Infinity }}
              src={celebration1}
              className="max-w-[300px] rounded-t-4xl border-s-8 border-l-blue-600 rounded-br-4xl border-b-8 border-b-blue-600 shadow-2xl"
            />
          </div>
        </div>

        <div>
          {/* <motion.h1
            animate={{
              rotate: 180,
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            Latest job for you!
          </motion.h1> */}
          <motion.h1
            initial={{ scale: 0 }}
            animate={{
              scale: 1,
              transition: { duration: 4 },
            }}
            className="text-5xl font-bold"
          >
            Remote{" "}
            <motion.span
              animate={{
                color: ["#BF8415", "#06C41F", "#C406AE", "#BF1515"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              jobs
            </motion.span>{" "}
            for you!
          </motion.h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
