import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
}
