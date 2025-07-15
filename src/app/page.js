import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import s from "./page.module.scss";

export default function Home() {
  return (
    <div className="container">
      <main className={s.home}>
        <HeroSection />
      </main>
    </div>
  );
}
