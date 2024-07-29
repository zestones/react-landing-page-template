
import Logo from '../../assets/logo.png'

import InstagramIcon from '../../assets/instagram-icon.png'
import WebsiteIcon from '../../assets/website-icon.png'
import YoutubeIcon from '../../assets/youtube-icon.png'
import TwitterIcon from '../../assets/twitter-icon.svg'

function Footer() {

    return (
        <footer className="bg-neutral-black text-white" id='footer'>
            <div className="container mx-auto flex flex-row justify-center items-center px-4 py-10 w-full">
                <div className="flex flex-col space-y-4 w-1/4">
                    <img src={Logo} alt="Agrovia" className="w-32 h-auto" />
                    <p>Copyright &copy; 2024 Agrovia. <br /> All rights reserved.</p>
                    <div className="flex space-x-2 mt-8">
                        <img src={InstagramIcon} alt="Instagram" className="w-8" />
                        <img src={WebsiteIcon} alt="Website" className="w-8" />
                        <img src={YoutubeIcon} alt="Youtube" className="w-8" />
                        <img src={TwitterIcon} alt="Twitter" className="w-8" />
                    </div>
                </div>
                <div className="flex space-x-4 w-3/4 justify-center">
                    <div className="flex flex-col w-1/4 items-start">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-neutral-silver">Home</li>
                            <li className="text-neutral-silver">About</li>
                            <li className="text-neutral-silver">Services</li>
                            <li className="text-neutral-silver">Contact</li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-1/4 items-start">
                        <h3 className="text-lg font-semibold">Resources</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-neutral-silver">Blog</li>
                            <li className="text-neutral-silver">FAQ</li>
                            <li className="text-neutral-silver">Support</li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-1/4 items-start">
                        <h3 className="text-lg font-semibold">Legal</h3>
                        <ul className="mt-2 space-y-2">
                            <li className="text-neutral-silver">Terms</li>
                            <li className="text-neutral-silver">Privacy</li>
                        </ul>
                    </div>
                </div>

            </div >
        </footer >
    )
}

export default Footer