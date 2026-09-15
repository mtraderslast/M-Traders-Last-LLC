import ContactSection from '@/components/ContactSection'
import React from 'react'
import ContactTrustBadges from './ContactTrustBadges'
import ContactFAQ from './ContactFAQ'
import LegalDirectory from './LegalDirectory'

function Contact() {
    return (
        <main className="px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-32 pt-30 dark:bg-slate-950">
            <ContactTrustBadges />
            <ContactSection />
            <ContactFAQ />
            <LegalDirectory />
        </main>
    )
}

export default Contact