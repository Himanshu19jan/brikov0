import Bwc from "@/components/pages/home/Bwc";
import Detail from "@/components/pages/home/Detail";
import Hero from "@/components/pages/home/Hero";
import Special from "@/components/pages/home/Special";
import Testimonal from "@/components/pages/home/Testimonal";

export default function Home() {
  return (
    <div>
      <Hero />
      <Bwc />
      <Special />
      <Detail />
      <Testimonal />
    </div>
  );
}
