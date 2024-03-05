import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FirstSection from "@/components/FirstSection";
import SecondSection from "@/components/SecondSection";
import ThirdSection from "@/components/ThirdSection"
import FourthSection from "@/components/FourthSection"
import FifthSection from "@/components/FifthSection"
import SixthSection from "@/components/SixthSection"
import AboutUs from "@/app/aboutus/page"
import Test from "@/components/Test"
import SeventhSection from "@/components/SeventhSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </main>
  )
}
