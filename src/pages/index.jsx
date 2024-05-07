import * as React from "react";
import Layout from "../components/Layout";
import laurel from "../images/laurel.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col items-center mt-10">
        <p className="mt-3 font-bold">#1 AI RAM</p>
        <div className="w-28 flex justify-between">
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <img alt="" src={laurel} className="w-52 absolute" />
        <h1 className="mt-6 text-4xl text-center font-bold max-w-[32rem]">
          Review registrar applications{" "}
          <span className="text-blue-500">10x faster</span> with{" "}
          <span className="text-blue-500">AI</span>
        </h1>
        <p className="mt-4 text-center max-w-[28rem]">
          Let AI screen thousands of memorandums, so you can{" "}
          <span className="font-bold">find the right one in seconds.</span>
        </p>
      </div>
    </Layout>
  );
}
