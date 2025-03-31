import Image from "next/image";

export default function Landing() {
    return (
        <section className="min-h-screen bg-white">
            {/* Main Hero Section with Overlay Text */}
            <div className="relative">
                <div className="w-full h-[60vh] md:h-[50vh] lg:h-[80vh] relative">
                    <Image src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/enhancing-logistic-support-landing.webp" alt="Enhancing Operations Support and Logistics" layout="fill" objectFit="cover" priority />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1b5632]"></div>

                    {/* Hero Text */}
                    <div className="absolute bottom-10 w-full">
                        <div className="max-w-6xl mx-auto px-6 md:px-12">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">ENHANCING OPERATIONS SUPPORT AND LOGISTICS FOR IMPROVED EMERGENCY PREPAREDNESS AND RESPONSE IN AFRICA</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className=" md:py-10  bg-gradient-to-b from-[#1b5632] via-[#195334] to-[#01205d] text-white">
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 px-6 md:px-12 py-8 md:py-10">
                    {/* Subtitle - Full width on mobile, 4/12 on desktop */}
                    <div className="lg:col-span-4 order-1">
                        <h2 className="text-xl md:text-2xl font-extrabold mb-4">THE CRITICAL ROLE OF OPERATIONS SUPPORT AND LOGISTICS (OSL)</h2>
                        <div className="w-16 h-1 bg-white mb-6 lg:mb-0"></div>
                    </div>

                    {/* Paragraph - Full width on mobile, 8/12 on desktop */}
                    <div className="lg:col-span-8 order-2">
                        <p className="text-base md:text-xl md:leading-8">
                            The global COVID-19 pandemic presented an unprecedented challenge to the world. The global supply chain for essential supplies collapsed within weeks of the WHO’s declaration of a global pandemic on March 11, 2020. Restrictions on imports and exports, border closures, and national shutdowns caused catastrophic supply chain disruptions. Shortages and price spikes were commonplace, as was the proliferation of inferior products. As the outbreak spread, affecting almost every nation in the world, it became evident that the availability of PPE, for instance, was a critical component to emergency preparedness and response. Yet with the manufacturing of much of the world’s PPE concentrated in China and India, the pandemic exposed the global reliance on a few key suppliers.
                        </p>
                    </div>

                    {/** Image on left and text */}
                    <div className="col-span-12 order-3 mt-6 flex gap-10 md:text-xl">
                        <div className="relative w-[60%]">
                            <img src="/assets/blog/case-studies/Enhancing Operations Support and Logistics/webp/landing-image-2.webp" alt="Logistic support" className="w-full h-[85%]" />
                        </div>
                        <div className="w-full md:leading-8">
                        <p>Africa was disproportionately impacted by supply chain disruptions due to a high dependence on imports for essential medical supplies such as PPE, price surges straining their limited domestic budgets, and the harsh reality of supplier nations prioritizing their own needs. For instance, it took 21 days for the first shipment of protective equipment such as masks to reach African countries1. Before the pandemic, African countries sourcing emergency medical supplies with support from the World Health Organization (WHO) were primarily reliant on three warehouses located in China, the UAE, and Ghana. Shipping supplies from Ghana to other African countries took approximately 25 days, while deliveries from Dubai and China were even slower.2 These long lead times, which were a significant problem before the pandemic, became even more critical during it, contributing to the loss of millions of lives.</p>
                        </div>
                    </div>

                    <div className="col-span-12 order-4 mt-6 md:text-2xl bg-[rgb(49_93_112)] p-8">
                        <p className="md:leading-10">Today, Africa is witnessing continent-wide outbreaks of other diseases such as yellow fever, ongoing challenges with cholera and Mpox, persistent polio transmission despite global eradication efforts, and concerning spikes in dengue and measles. The frequency of these disease outbreaks is further worsened by the impact of climate change and conflict, oftentimes generating full-blown humanitarian crises. This reality illustrates the urgent need for Operations Support and Logistics (OSL) support in effective public health emergency responses to ensure the timely delivery of vital resources, personnel, and equipment to those most affected.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
