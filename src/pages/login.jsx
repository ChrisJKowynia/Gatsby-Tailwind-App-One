import * as React from "react";
import Layout from "../components/Layout";

export default function Login() {
  return (
    <Layout>
      <div className="flex justify-center">
        <div
          className="bg-white w-64 h-72
         mt-24 border-[1px] border-gray-200 rounded-md drop-shadow-2xl"
        >
          <h1 class="text-3xl font-bold pt-3 pl-3">Login</h1>
          <form className="flex flex-col">
            <input
              className="mt-6 mx-3 p-2 border-[1px] rounded-lg placeholder-black"
              type="email"
              placeholder="Email"
              required
            ></input>
            <input
              className="mt-6 mx-3 p-2 border-[1px] rounded-lg placeholder-black"
              type="password"
              placeholder="Password"
              required
            ></input>
            <input
              type="submit"
              value="Login"
              className="font-bold text-white text-lg mt-7 mx-3 p-3 bg-blue-500 rounded-lg"
            ></input>
          </form>
        </div>
      </div>
    </Layout>
  );
}
