import React from "react";
import logo from "../media/logo.svg";
import profile from "../media/profile3.jpg";

// import ReactDOM from "react-dom";

const Example = () => {
  return (
    <div class="flex">
      <div class="flex-auto content-center hidden md:block px-4">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div class="flex-auto content-end px-4">
        <h1 class="mt-4 py-4 text-3xl text-primary">Hi, I'm Dia Seung</h1>
        <p class="text-xl font-thin w-96 text-whitetext">
          I'm a maker, solver and creative with a passion for growing and
          getting better. But there’s so much more to me than some labels.
          Scroll down and get to know me.
        </p>
      </div>
    </div>
  );
};
export default Example;
