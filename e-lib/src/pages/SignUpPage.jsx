import React from 'react'
import Singup from '../SignUp'
import Nav from '../Header'
function SignUpPage() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="relative z-10 w-full rounded-3xl bg-[#e5e8eb]">
        <Nav></Nav>
        <Singup></Singup>
      </div>
    </div>
  )
}

export default SignUpPage