import { skills } from "@/data/skills";
import { BsTriangleFill } from "react-icons/bs";
import Image from "next/image";

const Section2 = () => {
  return (
    <section
      id="about"
      className="section flex justify-center items-center pt-16"
    >
      <div className="max-w-7xl text-white py-10 px-16">
        <div className="flex items-center">
          <div className="md:w-2/3 flex flex-col gap-5 text-lg">
            <div className="flex items-center gap-10">
              <h2 className="text-3xl inline-block font-sf-mono mb-0">
                About <span className="text-primary">Me</span>
              </h2>
              <div className="h-[1px] w-[500px] bg-secondary"></div>
            </div>

            <div className="flex flex-col gap-5">
              <span>
                Hello! My name is Muhammad Akbar Ramadhan, and I have a passion
                for creating intuitive and responsive web applications. My
                journey into web development began during my studies at ITTelkom
                Surabaya, where I honed my skills in HTML, CSS, and JavaScript
                by experimenting with various projects.
              </span>
              <span>
                Fast-forward to today, I’ve had the privilege of working as a{" "}
                <span className="font-bold text-primary">
                  Front End Developer at Yayasan Pendidikan Telkom
                </span>
                , developing user interfaces for educational platforms. I’ve
                also gained valuable experience working at PT. Akhdani Reka
                Solusi as a Software Engineer, collaborating with diverse teams
                to deliver high-quality software solutions.
              </span>
              <span>
                Currently, I focus on creating responsive, high-performance web
                applications using modern technologies such as React.js, Vue.js,
                and Tailwind CSS, while ensuring a seamless user experience.
              </span>
            </div>
            <div className="flex gap-5 flex-wrap">
              {skills.map((skill, index) => (
                <div key={index} className="flex gap-1">
                  <BsTriangleFill className="rotate-90 text-primary" />
                  <span className="italic">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <Image
              className="rounded-lg shadow-lg w-full h-auto max-w-xs"
              src="/image.png"
              alt="Profile Image"
              width={100}
              height={100}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
