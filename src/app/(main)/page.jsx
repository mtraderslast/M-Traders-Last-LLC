import AboutAgency from "@/components/AboutAgency"
import Benner from "@/components/Benner"
import ContactSection from "@/components/ContactSection"
import FeaturedServices from "@/components/FeaturedServices"
import HowItWorks from "@/components/HowItWorks"
import Testimonials from "@/components/Testimonials"
import WhyChooseUs from "@/components/WhyChooseUs"

export const dynamic = "force-dynamic";

function Home() {
    return (
        <div>
            <Benner />
            <AboutAgency />
            <FeaturedServices />
            <WhyChooseUs />
            <HowItWorks />
            <Testimonials />
            <ContactSection />
        </div>
    )
}

export default Home