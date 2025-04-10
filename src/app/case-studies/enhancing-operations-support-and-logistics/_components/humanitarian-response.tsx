import Image from "next/image";
import Paragraph from "../../_components/paragraph";
import AnimatedHeading from "../../_components/AnimatedHeading";

export default function HumanitarianResponse() {
  return (
    <section className="bg-white py-10">
      <div className="md:p-10 relative bg-gradient-to-b to-[#1b5632] via-[#195334] from-[#01205d] text-white pb-8 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col justify-evenly lg:grid lg:grid-cols-12 pb-4 w-[80%] gap-6">
          <div className="col-span-3 order-1">
            <AnimatedHeading linecolor="white">
            A New Partnership With the Chadian Government to Tackle the Sudan Humanitarian Response
            </AnimatedHeading>
          </div>

          <Paragraph className="col-span-8 mt-8 md:mt-0 order-2 block items-center">
            In the face of the ongoing humanitarian crisis in Sudan, an
            estimated 2.9 million people have been displaced from Sudan since
            the crisis erupted on 15 April 2023, of whom 700,000 have moved
            across the Sudan border to neighbouring countries. The Chadian
            government has formed a collaboration with WHO to help the numerous
            refugees and wounded individuals seeking safety and medical
            assistance through the deployment of technical assistance from WHO
            to support the health response to the crisis.
          </Paragraph>
        </div>

        <div className="max-w-7xl mx-auto my-auto lg:grid grid-cols-1 lg:grid-cols-12">
          <Paragraph className="col-span-12">
            The Chadian government deployed a chartered aircraft to pick up
            emergency supplies from the WHO AFRO emergency hub in Nairobi and
            delivered them to Abeché, a crucial location for responding to the
            emergency and providing assistance to the affected populations. The
            cargo transported to Abeché include 20 metric tons of life-saving
            items including Interagency Emergency Health Kits (IEHK), cholera
            kits, trauma kits, gloves, tents, communication equipment, and
            visibility items. These vital supplies were fundamental in ensuring
            the provision of adequate healthcare, containing the spread of
            diseases, and establishing suitable living conditions for the
            refugees. As a result, the JEEP-facilitated Memorandum of
            Understanding led to over $150,000 in savings on transportation
            costs, which would have been incurred if supplies were transported
            commercially.<sup>4</sup>
          </Paragraph>
        </div>
      </div>
    </section>
  );
}
