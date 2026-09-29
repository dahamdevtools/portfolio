import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Navbar />
      <div className="w-full max-w-xl h-fit flex flex-col items-center gap-6">
        <h1 className="text-5xl">
          <i className="font-thin">Hi, I'm</i> Daham
        </h1>
        <h2 className="text-2xl text-neutral-500">
          Front-end focused Full-stack Developer
        </h2>
        <Link
          href={"#"}
          className="w-fit h-12 px-6 flex items-center justify-center rounded-full bg-white"
        >
          Let's Connect
        </Link>
      </div>
    </div>
  );
}
