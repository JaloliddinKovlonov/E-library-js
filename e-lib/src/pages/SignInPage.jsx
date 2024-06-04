import React from "react";
import Nav from "../Header";
import Signin from "../SignIn";

function SignInPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="relative z-10 w-full rounded-3xl bg-[#e5e8eb]">
        <Nav></Nav>
        <Signin></Signin>
      </div>
    </div>
  );
}

export default SignInPage;
