import Image from "next/image";

const LeadersArray = [{
        image: '/assets/blog/jpgs/Dr Raji.webp',
        title: 'Dr Raji Tajudeen',
        description: 'Acting Deputy Director General, Africa DDG'
    },
    {
    image: '/assets/blog/jpgs/Dr Abdou.webp',
    title: 'Dr Abdou Salam Gueye',
    description: 'Regional Emergency Director, WHO AFRO'
}, 
{
    image: '/assets/blog/jpgs/RickBrenan.webp',
    title: 'Dr Rick Brennan',
    description: 'Regional Emergency Director, WHO EMRO'
}, ]

export function Leadership() {
    return (
        <div className="flex flex-col items-center xl:px-16">
            <h1 className="font-[compasse-extrabold] p-5 text-black md:text-7xl text-3xl md:p-16">LEADERSHIP</h1>
            <div id="leadership" className="flex flex-col md:flex-row sm:items-center sm:gap-6 gap-2 justify-evenly w-full">
                {LeadersArray.map((leader, index) => {
                    return leaderCard(leader, index)
                })}
            </div>
        </div>
    );
}

const leaderCard = (leaderData: { image: string, title: string, description: string }, key: number) => {
    return(
     <div className="leader min-h-full flex flex-col items-center gap-6 justify-center" key={key}>
        <Image className="image-hover max-h-[180px] max-w-[180px] md:max-h-[300px] md:max-w-[300px] rounded-full" src={leaderData.image} width={300} height={0} alt={leaderData.title + 'image'}></Image>
        <div className="flex flex-col items-center md:pt-8">
            <h2 className="text-[#00205C] text-base md:text-lg font-bold flex text-center">{leaderData.title}</h2>
            <p className="text-[#00205C] text-base md:text-lg p-4 flex text-center">{leaderData.description}</p>
        </div>
    </div>)
}

export default Leadership;
