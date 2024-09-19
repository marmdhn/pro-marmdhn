import Link from "next/link";
import Image from "next/image";
import { BsTriangleFill } from "react-icons/bs";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <div className="px-8 xl:px-0 mx-auto h-full">
      <div className="absolute z-10 -top-48 left-[220px] w-[400px] h-[400px] bg-primary rounded-full blur-[300px] animate-slide-left-right"></div>
      {/* Section 1 */}
      <section
        id="section1"
        className="section flex justify-center items-center relative"
      >
        <div className="text-center mb-8">
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-transparent via-primary to-transparent animate-shine bg-[length:200%_200%]">
            MARMDHN
          </div>

          <div className="font-adelia text-4xl text-secondary">
            Muhammad Akbar Ramadhan
          </div>
        </div>

        <Link href={""} className="absolute bottom-24 text-center">
          <span className="text-xl text-primary italic">Scroll Me</span>
          <div className="mt-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-auto text-primary motion-safe:animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </Link>
      </section>

      {/* Section 2 */}
      <section
        id="section2"
        className="section flex justify-center items-center"
      >
        <div className="max-w-7xl  text-white py-10 px-16">
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
                  Hello! My name is Muhammad Akbar Ramadhan, and I have a
                  passion for creating intuitive and responsive web
                  applications. My journey into web development began during my
                  studies at ITTelkom Surabaya, where I honed my skills in HTML,
                  CSS, and JavaScript by experimenting with various projects.
                </span>
                <span>
                  Fast-forward to today, I’ve had the privilege of working as a{" "}
                  <span className="font-bold text-primary">
                    Front End Developer at Yayasan Pendidikan Telkom
                  </span>
                  , developing user interfaces for educational platforms. I’ve
                  also gained valuable experience working at PT. Akhdani Reka
                  Solusi as a Software Engineer, collaborating with diverse
                  teams to deliver high-quality software solutions.
                </span>
                <span>
                  Currently, I focus on creating responsive, high-performance
                  web applications using modern technologies such as React.js,
                  Vue.js, and Tailwind CSS, while ensuring a seamless user
                  experience.
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

      {/* Section 3 */}
      <section
        id="section3"
        className="section flex justify-center items-center relative w-full"
      >
        <div className="absolute left-0 flex items-center gap-10">
          <h2 className="text-3xl inline-block font-sf-mono mb-0">
            Where I’ve Worked
          </h2>
          <div className="h-[1px] w-[300px] bg-secondary"></div>
        </div>
      </section>
    </div>
  );
}
