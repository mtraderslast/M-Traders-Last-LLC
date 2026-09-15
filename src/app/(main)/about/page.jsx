import React from 'react'
import AboutMission from './AboutMission'
import AboutUs from './AboutUs'
import StoryVision from './StoryVision'
import BusinessCredentials from './BusinessCredentials'
import RefundPolicy from './RefundPolicy'

function About() {
    return (
        <section className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-25 lg:py-30 dark:bg-slate-950">
            <AboutMission />
            <AboutUs />
            <StoryVision />
            <BusinessCredentials />
            <RefundPolicy />
        </section>
    )
}

export default About