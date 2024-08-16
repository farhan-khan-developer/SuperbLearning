'use client'

import Feature from "./components/Feature";
import Herosection from "./components/Herosection";
import {Offerings} from "./components/Offerings";
import Update from "./components/Update";


export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-10 md:mx-40 xxsm:mx-5 my-5">
      <div className="flex flex-col gap-10 xxsm:h-screen md:h-auto">
        <Update/>
        <Herosection/>
      </div>
      <Offerings />
      <Feature/>
    </div>
    </>
  );
}
