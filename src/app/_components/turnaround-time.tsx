import Image from "next/image";

export function TurnAroundTime() {
    return (
        <div className="md:py-28 py-16 flex flex-col lg:flex-row items-center justify-center relative">
            <Image src="/assets/blog/Miaron_0002-129399 (1).jpg" alt="maintenance-page" fill></Image>
            <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#348F41] opacity-80"></div>

            {/* <div className="flex justify-center"> */}
            <svg className="h-auto relative" viewBox="0 0 10 10">
                <defs>
                    <circle className="bg-white" id="circle" cx="5" cy="5" r="4" stroke-width="0.5" fill="transparent" />
                </defs>
                <use xlinkHref="#circle" stroke="#00205C" stroke-dasharray="0,10.47,8.38,30" />
                <use xlinkHref="#circle" stroke="#F1F1F3" stroke-dasharray="0,2.09,8.38,30" />
                <use xlinkHref="#circle" stroke="#348F41" stroke-dasharray="2.09,16.75,6.3" />
            </svg>
            {/* <div className="inner-curcle">
            <svg className="h-auto relative" viewBox="0 0 10 10">
                <defs>
                    <circle className="bg-white" id="circle" cx="5" cy="5" r="4" stroke-width="0.5" fill="transparent" />
                </defs>
                <use xlinkHref="#circle" stroke="#00205C" stroke-dasharray="0,10.47,8.38,30" />
                <use xlinkHref="#circle" stroke="#F1F1F3" stroke-dasharray="0,2.09,8.38,30" />
                <use xlinkHref="#circle" stroke="#348F41" stroke-dasharray="2.09,16.75,6.3" />
            </svg>
            </div> */}
            
            {/* </div> */}
            
            {/* <div className="outer-circle border-[#F1F1F3] border-[30px] h-[800px] w-[800px] bg-white rounded-full relative"> */}
                {/* <div className="inner-circle border-[#F1F1F3] absolute"></div> */}
            {/* </div> */}
        </div>
    );
}

export default TurnAroundTime;
