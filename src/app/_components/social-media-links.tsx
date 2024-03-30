import Image from "next/image";

export function SocialMediaLinks() {
    return <div className="social-media-links flex flex-col lg:flex-row p-4 justify-between">
        <div className="social-media-links flex lg:flex-row flex-col">
            <div className="social-media-links flex flex-row p-4 gap-4">
                <a href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social">
                    <div className="bg-white social-media-icon flex justify-center">
                        <div className="">
                            <Image src="/assets/blog/facebook.png" height={70} width={70} alt="facebook logo"></Image>
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social">
                    <div className="bg-white social-media-icon flex justify-center">
                        <div className="">
                            <Image src="/assets/blog/instagram.png" height={40} width={40} alt="insta logo"></Image>
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social">
                    <div className="bg-white social-media-icon flex justify-center">
                        <div className="">
                            <Image src="/assets/blog/Youtube.png" height={50} width={50} alt="youtube logo"></Image>
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social">
                    <div className="bg-white social-media-icon flex justify-center">
                        <div className="">
                            <Image src="/assets/blog/twitter.png" height={50} width={50} alt="twitter logo"></Image>
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/c/jamesqquick"
                    className="youtube social">
                    <div className="bg-white social-media-icon flex justify-center">
                        <div className="">
                            <Image src="/assets/blog/linkedin.png" height={50} width={50} alt="linkedin logo"></Image>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        {/* <div className="email-section flex flex-col">
            <input placeholder="Email ID">
            </input>
            <button className="submit-button">Submit</button>
        </div> */}
    </div>
}