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
        <div className="flex flex-col items-center pb-8 lg:p-16">
            <h1 className="font-[compasse-extrabold] p-5 text-black md:text-7xl text-[28px] md:p-16">LEADERSHIP</h1>
            <div id="leadership" className="flex flex-col md:flex-row sm:items-center justify-evenly w-full">
                {LeadersArray.map((leader, index) => {
                    return leaderCard(leader, index)
                })}
            </div>
        </div>
    );
}

const leaderCard = (leaderData: { image: string, title: string, description: string }, key: number) => {
    return <div className="leader min-h-full flex flex-col items-center justify-center" key={key}>
        <Image className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 max-h-[180px] max-w-[180px] md:max-h-[300px] md:max-w-[300px] border-[8px] border-[#1A5632] rounded-full" src={leaderData.image} width={300} height={0} alt={leaderData.title + 'image'}></Image>
        <div className="flex flex-col items-center md:pt-8">
            <h2 className="text-[#00205C] text-base md:text-lg font-bold flex text-center">{leaderData.title}</h2>
            <p className="text-[#00205C] text-base md:text-lg p-4 flex text-center">{leaderData.description}</p>
        </div>
    </div>
}

export default Leadership;
