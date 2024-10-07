import Logo from '../../assets/Logo-BLACK.png';
import InstagramIcon from '../../assets/instagram-icon.png';
import WebsiteIcon from '../../assets/website-icon.png';
import YoutubeIcon from '../../assets/youtube-icon.png';
import TwitterIcon from '../../assets/twitter-icon.svg';

function Footer() {
    return (
        <footer className="bg-neutral-black text-white py-10" id='footer'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center md:flex-row md:justify-between">
                    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 text-center md:text-left w-full md:w-1/3">
                        <img src={Logo} alt="Nexent" className="w-32 h-auto mb-4" />
                        <p className="text-sm md:text-base mb-4">
                            Copyright &copy; 2024 Nexent. <br /> All rights reserved.
                        </p>
                        <div className="flex space-x-4 justify-center md:justify-start">
                            <img src={InstagramIcon} alt="Instagram" className="w-8 h-8" />
                            <img src={WebsiteIcon} alt="Website" className="w-8 h-8" />
                            <img src={YoutubeIcon} alt="Youtube" className="w-8 h-8" />
                            <img src={TwitterIcon} alt="Twitter" className="w-8 h-8" />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row md:space-x-8 w-full md:w-2/3">
                        <div className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/4">
                            <h3 className="text-lg font-semibold mb-2">Company</h3>
                            <ul className="space-y-2">
                                <li className="text-neutral-silver hover:text-primary-primary transition">Home</li>
                                <li className="text-neutral-silver hover:text-primary-primary transition">About</li>
                                <li className="text-neutral-silver hover:text-primary-primary transition">Services</li>
                                <li className="text-neutral-silver hover:text-primary-primary transition">Contact</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center mb-8 md:mb-0 w-full md:w-1/4">
                            <h3 className="text-lg font-semibold mb-2">Resources</h3>
                            <ul className="space-y-2">
                                <li className="text-neutral-silver hover:text-primary-primary transition">Blog</li>
                                <li className="text-neutral-silver hover:text-primary-primary transition">FAQ</li>
                                <li className="text-neutral-silver hover:text-primary-primary transition">Support</li>
                            </ul>
                        </div>

                        <div className="flex flex-col items-center w-full md:w-1/4">
                            <h3 className="text-lg font-semibold mb-2">Legal</h3>
                            <ul className="space-y-2">
                                <li className="text-neutral-silver hover:text-primary-primary transition">Terms</li>
                                <li className="text-neutral-silver hover:text-primary-primary transition">Privacy</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
