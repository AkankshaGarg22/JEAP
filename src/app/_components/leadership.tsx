import Container from "@/app/_components/container";
import Image from "next/image";

const LeadersArray = [{
    image: '/assets/blog/Dr Abdou.jpg',
    title: 'Dr Abdou Salam Gueye',
    description: 'Regional Emergency Director, WHO AFRO'
}, {
    image: '/assets/blog/RickBrenan.jpg',
    title: 'Dr Rick Brennan',
    description: 'Regional Emergency Director, WHO EMRO'
}, {
    image: '/assets/blog/jean_kaseya.jpg',
    title: 'Dr Jean Kaseya',
    description: 'Director General, Africa CDC'
}]

export function Leadership() {
    return (
        <div className="flex flex-col items-center md:p-16">
            <h1 className="leadership-header md:p-20">LEADERSHIP</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-24 sm:items-center">
                {LeadersArray.map((leader, index) => {
                    return leaderCard(leader, index)
                })}
            </div>
        </div>
    );
}

const leaderCard = (leaderData: { image: string, title: string, description: string }, key: number) => {
    return <div className="leader min-h-full" key={key}>
        <Image className="leader-image" src={leaderData.image} width={500} height={700}></Image>
        <div className="leader-details-box flex flex-col items-center md:pt-8">
            <h2 className="text-white text-base md:text-lg font-bold flex text-center">{leaderData.title}</h2>
            <p className="text-white text-base md:text-lg p-4 flex text-center">{leaderData.description}</p>
        </div>
    </div>
}

export default Leadership;
