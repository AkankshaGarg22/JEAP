'use client'
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import useOnScreen from "./hooks/useOnScreen";
import MyLottieComponent from "./svg-animation";
import animationlottie_1 from '../../../public/assets/animations/animate1.json';
import animationlottie_2 from '../../../public/assets/animations/animate2.json';
import animationlottie_3 from '../../../public/assets/animations/animate3.json';
import Device from "./device";

export function TurnAroundTime() {

    const ref = useRef(null);
    const isVisible = useOnScreen(ref)

    const [innerProgress, setInnerProgress] = useState(0)
    const [outerProgress, setOuterProgress] = useState(0)

    const [shouldFill, setShouldFill] = useState(false);
    const [shouldOuterFill, setShouldOuterFill] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            if (innerProgress < 100 && isVisible) {
                setInnerProgress(prevProgress => prevProgress + 1); // Increase progress by 1 (you can adjust this)
            }
        }, 10); // Interval in milliseconds (you can adjust this)
        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, [innerProgress, isVisible]); // Re-run effect when progress changes

    useEffect(() => {
        if (innerProgress === 100 && isVisible) {
            setTimeout(() => {
                setShouldFill(true);
            }, 1000)
        } else {
            setShouldFill(false)
        }
    }, [innerProgress, shouldFill])

    useEffect(() => {
        const interval = setInterval(() => {
            if (innerProgress >= 100 && shouldFill && isVisible && outerProgress < 100) {
                setOuterProgress(prevProgress => prevProgress + 1); // Increase progress by 1 (you can adjust this)
            }
        }, 10); // Interval in milliseconds (you can adjust this)

        // Clear interval when component unmounts
        return () => clearInterval(interval);
    }, [outerProgress, innerProgress, shouldFill]); // Re-run effect when progress changes

    useEffect(() => {
        if (outerProgress === 100 && isVisible) {
            setTimeout(() => {
                setShouldOuterFill(true);
            }, 1000)
        } else {
            setShouldOuterFill(false)
        }
    }, [outerProgress, shouldOuterFill])


    return (
        <div ref={ref}>
            <Device>
                {({ isMobile }) => {
                    return <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center relative">
                        <Image src="/assets/blog/Miaron_0002-129399 (1).jpg" alt="turnaround-page" fill></Image>
                      
                        <div className="absolute inset-0 bg-gradient-to-br from-[#00205C] to-[#1A5632] opacity-80 p-0 m-0"></div>
                         <div className="absolute z-10 p-0 m-0 top-[0%]">
                             <MyLottieComponent height={500} width={525} animationSource={(animationlottie_1)} />
                         </div>
                         <div className="absolute z-10 p-0 m-0 left-[24%] top-[33%] right-[44%]">
                            {/*  <MyLottieComponent height={455} width={500} animationSource={(animationlottie_2)} />*/} 
                           <img src="/assets/blog/animate2.svg" className={"h-[455px] w-[500px]"}/>
                         </div>
                         <div className="absolute z-10 p-0 m-0 right-[25%] top-[33%] left-[44%]">
                          {/*   <MyLottieComponent height={475} width={500} animationSource={(animationlottie_3)} /> */}
                          <img src="/assets/blog/animate3.svg" className={"h-[455px] w-[500px]"}></img>
                         </div>
                        
                         <div className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] bg-white z-20 rounded-full">
                           <div className="relative">
                                <CircularProgressbarWithChildren value={isVisible && innerProgress === 100 ? outerProgress : 0} styles={buildStyles({
                                    pathTransitionDuration: 2,
                                    pathColor: "#00205C",
                                    trailColor: 'white'
                                })}
                                    strokeWidth={15}
                                    counterClockwise>

                                    <div className="absolute w-[50px] h-[50px] md:w-[100px] md:h-[100px]">


                                        <CircularProgressbarWithChildren
                                            value={isVisible ? innerProgress : 0}
                                            styles={buildStyles({
                                                pathTransitionDuration: 1.15,
                                                pathColor: "#1A5632",
                                                trailColor: 'white'
                                            })}
                                            strokeWidth={20}
                                        >
                                            {
                                                <div className="h-[20px] w-[20px] md:h-[50px] md:w-[50px] bg-[#E8F8FC] rounded-full">
                                                    <svg className="h-[18px] w-[18px] md:h-[25px] md:w-[25px] absolute left-[38%] top-[35%]" id="Group_3326" data-name="Group 3326" xmlns="http://www.w3.org/2000/svg" width="66.621" height="63.887" viewBox="0 0 66.621 63.887">
                                                        <path id="Path_11307" data-name="Path 11307" d="M-199.694,251.736c-1.29.469-1.668,1.1-1.668,2.751V255.6h-7.405l-.053-1.082c-.065-1.356-.339-1.956-1.134-2.451a2.545,2.545,0,0,0-3.063.248,2.64,2.64,0,0,0-.73,2.229v1.044l-4.146.039-4.133.039-.782.4a5.788,5.788,0,0,0-2.321,2.372l-.287.613v53.062l.287.626a6.007,6.007,0,0,0,2.372,2.4l.73.365h59.842l.73-.365a6.009,6.009,0,0,0,2.373-2.4l.287-.626V259.05l-.287-.613a5.788,5.788,0,0,0-2.321-2.372l-.782-.4-4.785-.039-4.8-.039v-1.069a2.474,2.474,0,0,0-.965-2.36,1.789,1.789,0,0,0-1.3-.444,2.281,2.281,0,0,0-2.256,1.03,2.657,2.657,0,0,0-.4,1.695l-.052,1.16h-7.405v-1.043a2.654,2.654,0,0,0-.73-2.242,2.3,2.3,0,0,0-1.773-.626,2.287,2.287,0,0,0-2.033,1.16,3.019,3.019,0,0,0-.392,1.669l-.065,1.082h-7.261v-.821a3.693,3.693,0,0,0-.587-2.256A2.549,2.549,0,0,0-199.694,251.736Zm1.643,1.46a2.314,2.314,0,0,1,.47,1.76v.639h-2.777l.078-.991c.065-.847.13-1.055.431-1.369A1.182,1.182,0,0,1-198.052,253.2Zm-12.411.039c.391.352.43.444.469,1.369l.052.991h-2.634V254.6c0-.912.026-1.017.378-1.369A1.157,1.157,0,0,1-210.462,253.235Zm24.758,0c.352.352.378.456.378,1.369v.991h-2.634l.053-.991c.039-.925.078-1.017.469-1.369A1.157,1.157,0,0,1-185.7,253.235Zm12.386,0c.352.352.377.456.377,1.369v.991h-2.607v-.886c0-1.252.43-1.838,1.342-1.852A1.107,1.107,0,0,1-173.319,253.235Zm-36.648,5.007c0,1.513.078,1.786.534,1.786.521,0,.639-.339.639-1.838v-1.421h11.212v1.474c0,1.486.091,1.786.508,1.786a.759.759,0,0,0,.431-.222c.2-.182.234-.417.234-1.629v-1.408h11.082v1.343c0,1.408.169,1.916.638,1.916s.535-.273.535-1.786v-1.474h11.212v1.421c0,1.5.118,1.838.639,1.838.456,0,.535-.273.535-1.786v-1.474h4.406c4.98,0,5.189.026,6.206.926a4.873,4.873,0,0,1,.951,1.265l.365.743.04,5.241.052,5.254h-64.717l.052-5.254c.04-5.188.04-5.241.352-5.932a4.291,4.291,0,0,1,2.138-2.021c.456-.169,1.539-.208,6.258-.208l5.7-.014Zm50.168,33.167-.04,20.052-.3.652a4.159,4.159,0,0,1-1.721,1.865l-.587.352h-59.32l-.587-.352a4.159,4.159,0,0,1-1.721-1.865l-.3-.652-.04-20.052-.026-20.038h64.665Z" transform="translate(225.417 -251.615)" fill="#00205c" />
                                                        <path id="Path_11308" data-name="Path 11308" d="M-215.054,278.545c-.183.169-.209.743-.209,4.211,0,2.934.04,4.042.157,4.159a53.4,53.4,0,0,0,8.423,0c.117-.118.156-1.238.156-4.237,0-3.9-.013-4.081-.247-4.211a32.12,32.12,0,0,0-4.172-.13C-214.324,278.337-214.885,278.363-215.054,278.545Zm7.353,4.159V285.9h-6.388V279.51h6.388Z" transform="translate(224.454 -254.148)" fill="#00205c" />
                                                        <path fill={shouldFill ? '#00205C' : 'none'} id="Path_11309" data-name="Path 11309" d="M-200.5,278.47c-.206.109-.218.423-.218,3.893a18.53,18.53,0,0,0,.145,3.929,49.513,49.513,0,0,0,7.81,0,18.577,18.577,0,0,0,.144-3.929c0-3.615-.012-3.784-.229-3.9A57.753,57.753,0,0,0-200.5,278.47Z" transform="translate(223.393 -253.83)" stroke="#00205c" strokeWidth="1" />
                                                        <path fill={shouldOuterFill ? '#00205C' : 'none'} id="Path_11310" data-name="Path 11310" d="M-185.951,278.47c-.206.109-.218.423-.218,3.893a18.529,18.529,0,0,0,.145,3.929,49.508,49.508,0,0,0,7.81,0,18.53,18.53,0,0,0,.145-3.929c0-3.615-.013-3.784-.23-3.9A57.761,57.761,0,0,0-185.951,278.47Z" transform="translate(222.013 -253.83)" stroke="#00205c" strokeWidth="1" />
                                                        <path id="Path_11311" data-name="Path 11311" d="M-171.387,278.48c-.222.118-.234.47-.234,4.276,0,3.677.025,4.172.208,4.237.118.04,2.008.079,4.211.079,2.934,0,4.042-.039,4.159-.157s.157-1.238.157-4.237c0-3.9-.014-4.081-.248-4.211A62.291,62.291,0,0,0-171.387,278.48Zm7.327,4.224V285.9h-6.388V279.51h6.388Z" transform="translate(220.316 -254.148)" fill="#00205c" />
                                                        <path id="Path_11312" data-name="Path 11312" d="M-215.107,291.455a53.4,53.4,0,0,0,0,8.423,53.405,53.405,0,0,0,8.423,0,53.619,53.619,0,0,0,0-8.423A53.405,53.405,0,0,0-215.107,291.455Zm7.405,4.211v3.194h-6.388v-6.388h6.388Z" transform="translate(224.455 -255.376)" fill="#00205c" />
                                                        <path id="Path_11313" data-name="Path 11313" d="M-200.56,291.455a53.4,53.4,0,0,0,0,8.423,53.405,53.405,0,0,0,8.423,0,53.616,53.616,0,0,0,0-8.423A53.405,53.405,0,0,0-200.56,291.455Zm7.405,4.211v3.194h-6.388v-6.388h6.388Z" transform="translate(223.076 -255.376)" fill="#00205c" />
                                                        <path id="Path_11314" data-name="Path 11314" d="M-186.013,291.455a53.4,53.4,0,0,0,0,8.423,53.405,53.405,0,0,0,8.423,0,53.4,53.4,0,0,0,0-8.423A53.405,53.405,0,0,0-186.013,291.455Zm7.405,4.211v3.194H-185v-6.388h6.388Z" transform="translate(221.697 -255.376)" fill="#00205c" />
                                                        <path id="Path_11315" data-name="Path 11315" d="M-171.466,291.455a53.623,53.623,0,0,0,0,8.423,53.405,53.405,0,0,0,8.423,0,53.4,53.4,0,0,0,0-8.423A53.405,53.405,0,0,0-171.466,291.455Zm7.405,4.211v3.194h-6.388v-6.388h6.388Z" transform="translate(220.317 -255.376)" fill="#00205c" />
                                                        <path id="Path_11316" data-name="Path 11316" d="M-215.107,304.418a53.383,53.383,0,0,0,0,8.422,53.405,53.405,0,0,0,8.423,0,53.608,53.608,0,0,0,0-8.422A53.4,53.4,0,0,0-215.107,304.418Zm7.405,4.211v3.194h-6.388v-6.389h6.388Z" transform="translate(224.455 -256.606)" fill="#00205c" />
                                                        <path id="Path_11317" data-name="Path 11317" d="M-200.56,304.418a53.387,53.387,0,0,0,0,8.422,53.405,53.405,0,0,0,8.423,0,53.6,53.6,0,0,0,0-8.422A53.4,53.4,0,0,0-200.56,304.418Zm7.405,4.211v3.194h-6.388v-6.389h6.388Z" transform="translate(223.076 -256.606)" fill="#00205c" />
                                                        <path id="Path_11318" data-name="Path 11318" d="M-186.013,304.418a53.387,53.387,0,0,0,0,8.422,53.405,53.405,0,0,0,8.423,0,53.387,53.387,0,0,0,0-8.422A53.4,53.4,0,0,0-186.013,304.418Zm7.405,4.211v3.194H-185v-6.389h6.388Z" transform="translate(221.697 -256.606)" fill="#00205c" />
                                                        <path id="Path_11319" data-name="Path 11319" d="M-171.466,304.418a53.611,53.611,0,0,0,0,8.422,53.405,53.405,0,0,0,8.423,0,53.387,53.387,0,0,0,0-8.422A53.4,53.4,0,0,0-171.466,304.418Zm7.405,4.211v3.194h-6.388v-6.389h6.388Z" transform="translate(220.317 -256.606)" fill="#00205c" />
                                                    </svg>


                                                </div>
                                            }
                                        </CircularProgressbarWithChildren>
                                    </div>
                                </CircularProgressbarWithChildren>
                            </div>
                        </div>
                    </div>
                }}
            </Device>
        </div>
    );
}

export default TurnAroundTime;
