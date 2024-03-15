import Image from "next/image";

export function SocialMediaLinks() {
    return <div className="social-media-links flex flex-row gap-4 p-4">
        <a href="https://www.youtube.com/c/jamesqquick"
            className="youtube social">
            <div className="bg-white social-media-icon flex justify-center">
                <div className="social-media-icon-wrapper">
                    <Image src="/assets/blog/facebook.png" height={15} width={15}></Image>
                </div>
            </div>
        </a>
        <a href="https://www.youtube.com/c/jamesqquick"
            className="youtube social">
            <div className="bg-white social-media-icon flex justify-center">
                <div className="social-media-icon-wrapper">
                    <Image src="/assets/blog/instagram.png" height={40} width={40}></Image>
                </div>
            </div>
        </a>
        <a href="https://www.youtube.com/c/jamesqquick"
            className="youtube social">
            <div className="bg-white social-media-icon flex justify-center">
                <div className="social-media-icon-wrapper youtube">
                    <Image src="/assets/blog/Youtube.png" height={50} width={50}></Image>
                </div>
            </div>
        </a>
        <a href="https://www.youtube.com/c/jamesqquick"
            className="youtube social">
            <div className="bg-white social-media-icon flex justify-center">
                <div className="social-media-icon-wrapper">
                    <Image src="/assets/blog/twitter.png" height={50} width={50}></Image>
                </div>
            </div>
        </a>
        <a href="https://www.youtube.com/c/jamesqquick"
            className="youtube social">
            <div className="bg-white social-media-icon flex justify-center">
                <div className="social-media-icon-wrapper">
                    <Image src="/assets/blog/linkedin.png" height={50} width={50}></Image>
                </div>
            </div>
        </a>
    </div>
}