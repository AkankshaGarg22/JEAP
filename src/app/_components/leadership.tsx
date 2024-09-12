import Image from "next/image";

const LeadersArray = [
    {
        image: '/assets/blog/jpgs/jean_kaseya.webp',
        title: 'Dr Jean Kaseya',
        description: 'Director General, Africa CDC',
        link: 'https://africacdc.org/people/dr-jean-kaseya/'
    },
    {
        image: '/assets/blog/jpgs/Matshidiso Moeti.webp',
        title: 'Dr Matshidiso Moeti',
        description: 'Regional Director, WHO AFRO',
        link: 'https://www.afro.who.int/regional-director/biography'
    },
    {
        image: '/assets/blog/jpgs/Hanan Balkhy.webp',
        title: 'Dr Hanan Balkhy',
        description: 'Regional Director, WHO EMRO',
        link: 'https://www.emro.who.int/about-who/regional-director/index.html',
    },
    {
        image: '/assets/blog/jpgs/Dr Raji.webp',
        title: 'Dr Raji Tajudeen',
        description: 'Acting Deputy Director General, Africa DDG',
        link: 'https://africacdc.org/people/raji-tajudeen/'
    },
    {
        image: '/assets/blog/jpgs/Dr Abdou.webp',
        title: 'Dr Abdou Salam Gueye',
        description: 'Regional Emergency Director, WHO AFRO',
        link: 'https://www.afro.who.int/about-us/leadership/dr-gueye-salam'
    },
    {
        image: '/assets/blog/jpgs/RickBrenan.webp',
        title: 'Dr Rick Brennan',
        description: 'Regional Emergency Director, WHO EMRO',
        link: 'https://www.emro.who.int/about-who/regional-director/rick-brennan-acting-regional-emergency-director.html'
    },]

export function Leadership() {
    return (
        <div className="flex flex-col items-center xl:px-16">
            <h1 className="font-[arial-bold] p-5 text-black md:text-7xl text-3xl md:pb-16 md:pt-8">LEADERSHIP</h1>
            <div id="leadership" className="flex flex-col xl:grid xl:grid-cols-3 xl:grid-rows-2 xl:gap-0 xl:gap-y-6 sm:items-center sm:gap-6 gap-2 justify-evenly w-full">
                {LeadersArray.map((leader, index) => {
                    return leaderCard(leader, index)
                })}
            </div>
        </div>
    );
}

const leaderCard = (leaderData: { image: string, title: string, description: string, link: string }, key: number) => {
    return (
        <a href={leaderData.link} target="_blank" key={key}>
            <div className="leader min-h-full flex flex-col items-center gap-6 justify-center">
                <Image className="image-hover max-h-[180px] max-w-[180px] md:max-h-[250px] md:max-w-[250px] rounded-full" src={leaderData.image} width={300} height={0} alt={leaderData.title + 'image'}></Image>
                <div className="flex flex-col items-center">
                    <h2 className="text-[#00205C] text-base md:text-lg font-bold flex text-center">{leaderData.title}</h2>
                    <p className="text-[#00205C] text-base md:text-lg p-1 flex text-center">{leaderData.description}</p>
                </div>
            </div>
        </a>)
}

export default Leadership;
