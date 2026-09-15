import React from 'react'
import WebTechnologies from './WebTechnologies'
import DatabaseTechnologies from './DatabaseTechnologies'
import PremiumFeatures from './PremiumFeatures'
import ContinuousDevelopment from './ContinuousDevelopment'
import TechMarquee from './TechMarquee'

function Home() {
    return (
        <section className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-8 lg:py-30 dark:bg-slate-950">
            <WebTechnologies />
            <DatabaseTechnologies />
            <PremiumFeatures />
            <ContinuousDevelopment />
            <TechMarquee />
        </section>
    )
}

export default Home