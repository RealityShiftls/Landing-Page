import Header from "@/components/Header/Header";
import Partner from "@/components/partners/Partner";
import Services from "@/components/services/services";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Partner/>
        <Services />
      </div>
    </main>
  );
}
