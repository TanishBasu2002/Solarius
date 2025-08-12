import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PageLoader } from "@/components/page-loader";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";


export default function Home() {
  return (
    <>
      <PageLoader />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-950 dark:via-blue-950 dark:to-purple-950">
        <Navbar />
        <main>
          <Hero />
          <Features />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
