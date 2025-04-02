"use client";

import React, { useState } from "react";
import { BlockQuote } from "../../_components/QuoteSection";

const testimonials = [
    {
      quote:
        "The SURGE training has been a game-changer for me especially a module on Preventing and Responding to Sexual Exploitation, Abuse and Harassment (PRSEAH). It has equipped me with the skills and confidence to address sensitivity issues tactfully and effectively, ensuring that every person I assist feels safe and valued. I can now be more watchful, kind, and proactive, making sure that everyone's safety and respect come first in every situation thanks to this training.",
      author: "Ms. Helena Hakwenye",
      position: "Chief Health Program Officer",
      organization: "Ministry of Health and Social Services",
    },
    {
      quote:
        "My newfound confidence and skills in delivering and training on GBV and PSEAH issues will undoubtedly make a significant difference in my role as a mental health and psychosocial support officer.",
      author: "Pearl Katleho Malsaaka Letsoela",
      position: "Mental Health and Psychosocial Support Officer",
      organization: "Ministry of Health, Lesotho",
    },
    {
      quote:
        "Article 23 of the Namibia Constitution acknowledges that women were previously disadvantaged in many areas of life. Therefore, the Government of the Republic of Namibia endeavors to break the historical gender imbalances by adopting a proportional representation system that is more favourable to women’s representation. Recruiting many women to the Namibia pool of emergency responders was an obvious choice for us, since we know that having a variety of women and men's perspectives can enhance the quality of care on the ground. As the African Proverb says: You educate a man, you educate an individual; you educate a woman, you educate a generation. We believe that gender equal participation in the workforce will lead to a more effective response for the communities who need our help.",
      author: "Ms. Emmy-Else Ndevaetela",
      position: "Control Health Program Officer",
      organization: "Ministry of Health and Social Services",
    },
  ];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Function to handle dot navigation
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section>
      {/* Carousel container with overflow hidden */}
      <div className="w-full overflow-hidden">
        {/* Slide container */}
        <div className="flex transition-transform duration-500 ease-in-out w-full" style={{ transform: `translateX(-${currentIndex * 100}vw)`, width: `${testimonials.length * 100}vw` }}>
          {/* Individual slides */}
          {testimonials.map((testimonial, index) => (
            <div key={index}  style={{ width: '100vw', flexShrink: 0 }}>
              <BlockQuote quote={testimonial.quote} author={testimonial.author} position={testimonial.position} organization={testimonial.organization} className="w-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Circle Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full ${currentIndex === index ? "bg-black" : "bg-gray-300"} transition-colors duration-300`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
