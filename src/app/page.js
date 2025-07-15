import HeroSection from "@/components/HomePage/HeroSection/HeroSection";
import MyResume from "@/components/HomePage/MyResume/MyResume";
import s from "./page.module.scss";

export default function Home() {
  return (
    <div className="container">
      <main className={s.home}>
        <HeroSection />
        <MyResume />
      </main>
    </div>
  );
}
