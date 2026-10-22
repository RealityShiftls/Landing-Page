import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Header from "@/components/Header/Header";
import Partner from "@/components/partners/Partner";
import More from "@/components/services/More";
import Services from "@/components/services/services";


export default function Home() {
  return (
    <main>
      <div>
        <Header />
        <Partner/>
        <About/>
        <Services />
        <More/>     
        <Contact />
      </div>
    </main>
  );
}
