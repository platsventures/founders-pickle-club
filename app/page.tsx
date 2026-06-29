import ApplyForm from "@/components/ApplyForm";
import Courts from "@/components/Courts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TopBar from "@/components/TopBar";
import WhoShowsUp from "@/components/WhoShowsUp";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <WhoShowsUp />
        <Courts />
        <ApplyForm />
      </main>
      <Footer />
    </>
  );
}
