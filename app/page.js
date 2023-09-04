import NavBar from "@/components/NavBar";
import { MoviesDesc, TVDesc } from "@/components/TVDesc";
import Multi from "@/components/multiSearch/Multi";
import Link from "next/link";
import { MdMovie } from "react-icons/md";
import { PiTelevisionBold } from "react-icons/pi";
const style =
  "flex flex-col space-y-8 justify-center items-center shadow-[0px_1px_20px_2px_white] w-[80%] md:w-[40%] h-0 md:ml-0 py-36 hover:shadow-[inset_0px_1px_20px_2px_white] cursor-pointer rounded-lg";

export const metadata = {
  title: "See ... Here",
  description: TVDesc + MoviesDesc,
  icons: {
    icon: "/Logo.png",
  },
};
export default async function Home() {
  return (
    <div className="flex flex-col space-y-5 text-center pb-14">
      <NavBar home />
      <div className="top-0 block justify-center">
        <Multi />
      </div>
      <div className=" flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-5 justify-center items-center py-24">
        <Link href={"/movies"} className={style}>
          <div>
            <MdMovie className="text-8xl md:ml-7" />
            <h1 className="text-7xl hidden md:block">Movie</h1>
          </div>
        </Link>
        <Link href={"/tv"} className={style}>
          <div>
            <PiTelevisionBold className="text-8xl" />
            <h1 className="text-7xl hidden md:block">TV</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
