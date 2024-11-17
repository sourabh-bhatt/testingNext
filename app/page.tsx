import Image from "next/image";
import Navbar from "./components/common/navbar";
import Story from "./components/ads/Story";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <Navbar />
      <h1>
        This is vercel deployment with next.js and typescript.
      </h1>
      <Story />
    </div>
  );
}
