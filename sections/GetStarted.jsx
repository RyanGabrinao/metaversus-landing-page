"use client";
import { motion as m } from "framer-motion";

import styles from "../styles";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { TypingText, ExploreCard, TitleText, StartSteps } from "../components";
import { startingFeatures } from "../constants";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <m.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <m.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/get-started.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </m.div>
      <m.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How Metaversus Works" />
        <TitleText title={<>Get started with just a few clicks</>} />
        <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
          {startingFeatures.map((feature, idx) => (
            <StartSteps key={feature} number={idx + 1} text={feature} />
          ))}
        </div>
      </m.div>
    </m.div>
  </section>
);

export default GetStarted;
