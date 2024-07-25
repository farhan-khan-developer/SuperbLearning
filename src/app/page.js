import Herosection from "./section/Herosection";
import CoursesCards from "./section/CoursesCards";

export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-3">
      <Herosection/>
      <CoursesCards/>
    </div>
    </>
  );
}
