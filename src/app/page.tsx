import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import Footer from "../components/Footer";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SelectedWork />
      <Footer />
    </main>
  );
}
