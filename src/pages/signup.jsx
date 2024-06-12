import * as React from "react";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Signup() {
  const [form, formChange] = useState(true);
  function formChangeHandler(event) {
    event.preventDefault();
    formChange(false);
  }

  let formContent;

  if (form === true) {
    formContent = (
      <div className="bg-white w-64 h-72 mt-24 border-[1px] border-gray-200 rounded-md drop-shadow-2xl ">
        <h1 className="text-3xl font-bold pt-3 pl-3">Sign up</h1>
        <form className="flex flex-col" onSubmit={formChangeHandler}>
          <select className="text-lg mt-6 mx-3 p-2 border-[1px] rounded-lg">
            <option value="null">Select account type</option>
            <option value="registrar">Registrar</option>
            <option value="admin">Admin</option>
            <option value="faculty">Faculty</option>
          </select>
          <input
            className="mt-6 mx-3 p-2 border-[1px] rounded-lg placeholder-black"
            type="email"
            placeholder="📧 Type your email..."
            required
          ></input>
          <input
            type="submit"
            value="Start now"
            className="font-bold text-white text-lg mt-7 mx-3 p-3 bg-blue-500 rounded-lg"
          ></input>
        </form>
      </div>
    );
  } else {
    formContent = (
      <div className="bg-white w-64 h-40 mt-24 border-[1px] border-gray-200 rounded-md drop-shadow-2xl ">
        <h1 className="text-3xl font-bold pt-3 pl-3">Received</h1>
        <p className="p-3">
          Please follow the verification link we sent to your emial. *It may
          land in your spam folder.*
        </p>
      </div>
    );
  }

  return (
    <Layout>
      <div className="flex justify-center">{formContent}</div>
    </Layout>
  );
}
