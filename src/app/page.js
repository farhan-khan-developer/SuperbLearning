import Herosection from "./section/Herosection";
import CoursesCards from "./section/CoursesCards";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-3">
      <Herosection/>
      <div className="md:visible xxsm:invisible">
        <CoursesCards/>
      </div>
    </div>
    </>
  );
}
