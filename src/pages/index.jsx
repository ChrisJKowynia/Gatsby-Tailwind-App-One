import * as React from "react";
import Layout from "../components/Layout";
import laurel from "../images/laurel.svg";
import appMobile from "../images/appMobile.png";
import appDesktop from "../images/appDesktop.png";
import lessTime from "../images/lessTime.png";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-10 lg:mt-14">
        <p className="mt-3 font-bold">#1 AI RAM</p>
        <div className="w-28 flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="18"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="18"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="18"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="18"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="18"
          >
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </div>
        <img alt="" src={laurel} className="w-52 absolute" />
        <h1 className="mx-3 mt-6 text-4xl text-center font-bold max-w-[32rem] md:text-5xl md:max-w-[45rem] lg:max-w-[55rem] lg:text-6xl">
          Review registrar applications{" "}
          <span className="text-blue-500">10x faster</span> with{" "}
          <span className="text-blue-500">AI</span>
        </h1>
        <p className="mx-3 mt-4 text-center max-w-[24rem]">
          Let AI screen thousands of memorandums, so you can{" "}
          <span className="font-bold">find the right one in seconds.</span>
        </p>
        <CTA></CTA>
        <p className="mx-3 mt-4 text-center">
          Used by <span className="font-bold">214 admins</span> and{" "}
          <span className="font-bold ">17,937 </span>
          applicants.{" "}
        </p>
        <p className="font-bold mt-4 text-center">
          Compliant with EU AI regulation
        </p>
        <img
          alt=""
          src={appMobile}
          className="w-11/12 mt-20 md:hidden drop-shadow-2xl rounded-lg"
        />
        <img
          alt=""
          src={appDesktop}
          className="w-11/12 mt-20 hidden md:block rounded-lg drop-shadow-2xl"
        />

        <div className="flex flex-col max-w-[32rem] mt-20 md:flex-row md:max-w-[45rem]">
          <div className="lg:mr-16 lg:-ml-16">
            <div className="flex flex-col">
              <h1 className="mx-3 font-bold text-3xl">
                Transform the way you screen applicants
              </h1>
              <p className="mx-3 mt-4">
                Traditional applicant selection with CVs is a thing of the past.
                With Shoreditch AI, you'll spend 80% less time screening.
              </p>
            </div>
            <div className="mx-3 border-t w-11/12 border-gray-400 mt-8"></div>
            <div className="mx-3 flex mt-10 justify-center">
              <div className="lg:mr-16">
                <h1 className="font-bold text-5xl">80%</h1>
                <p className="mt-2">Less time screening</p>
              </div>
              <div className="ml-8">
                <h1 className="font-bold text-5xl">19.4k</h1>
                <p className="mt-2">Applications evaluated</p>
              </div>
            </div>
          </div>
          <img alt="" src={lessTime} className="mt-16 w-3/4 md:w-1/2" />
        </div>
      </div>
    </Layout>
  );
}
