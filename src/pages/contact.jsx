import * as React from "react";
import Layout from "../components/Layout";
import { useState } from "react";

export default function Contact() {
  const [form, submitForm] = useState(true);
  function formSubmitHandler(event) {
    event.preventDefault();
    submitForm(false);
  }

  let formContent;

  if (form === true) {
    formContent = (
      <div
        className="bg-white w-2/3 min-w-64 max-w-[525px] lg:w-fixed h-[525px]
         mt-24 border-[1px] border-gray-200 rounded-md drop-shadow-2xl"
      >
        <h1 class="text-3xl font-bold pt-3 pl-3">Contact us</h1>
        <form className="flex flex-col" onSubmit={formSubmitHandler}>
          <input
            className="mt-6 mx-3 p-2 border-[1px] rounded-lg placeholder-black"
            placeholder="Name"
            required
          ></input>
          <input
            className="mt-6 mx-3 p-2 border-[1px] rounded-lg placeholder-black"
            type="email"
            placeholder="Email"
            required
          ></input>
          <input
            className="mt-6 mx-3 p-2 border-[1px] rounded-lg placeholder-black"
            placeholder="Company"
          ></input>
          <input
            className="mt-6 mx-3 p-2 border-[1px] rounded-lg placeholder-black"
            placeholder="Website"
          ></input>
          <textarea
            className="mt-6 mx-3 p-2 border-[1px] h-24 rounded-lg placeholder-black"
            type="password"
            placeholder="Message"
            required
          ></textarea>
          <input
            type="submit"
            value="Submit"
            className="font-bold text-white text-lg mt-7 mx-3 p-1 bg-blue-500 rounded-lg"
          ></input>
        </form>
      </div>
    );
  } else {
    formContent = (
      <div className="bg-white w-64 h-40 mt-24 border-[1px] border-gray-200 rounded-md drop-shadow-2xl ">
        <h1 className="text-3xl font-bold pt-3 pl-3">Received</h1>
        <p className="p-3">
          Thank you for reaching out! We will respond to you with an email
          within 12 hours or less.
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
