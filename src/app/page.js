'use client'

import Feature from "./components/Feature";
import Herosection from "./components/Herosection";
import Update from "./components/Update";


export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-10">
      <Update/>
      <Herosection/>
      <Feature/>
    </div>
    </>
  );
}
