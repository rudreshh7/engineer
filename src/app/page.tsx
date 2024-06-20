import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SelectedWork />
    </main>
  );
}
