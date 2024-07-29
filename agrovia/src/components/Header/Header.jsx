import { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';

function Header() {
    const [activeLink, setActiveLink] = useState('hero');

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            const targetId = event.currentTarget.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
                setActiveLink(targetId);
            }
        };

        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => link.addEventListener('click', handleScroll));

        return () => {
            links.forEach(link => link.removeEventListener('click', handleScroll));
        };
    }, []);

    return (
        <header className="bg-neutral-silver fixed z-50 w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="shrink-0 flex items-center">
                        <img
                            className="h-24 w-auto"
                            src={logo}
                            alt="Logo"
                        />
                    </div>
                    <div className="flex">
                        <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                            <a
                                href="#hero"
                                className={`hover:border-neutral-grey hover:text-neutral-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeLink === 'hero' ? 'border-primary-primary text-gray-900' : 'text-neutral-l_grey border-transparent'}`}
                            >
                                Home
                            </a>
                            <a
                                href="#community"
                                className={`hover:border-neutral-grey hover:text-neutral-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeLink === 'community' ? 'border-primary-primary text-gray-900' : 'text-neutral-l_grey border-transparent'}`}
                            >
                                Services
                            </a>
                            <a
                                href="#achievements"
                                className={`hover:border-neutral-grey hover:text-neutral-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeLink === 'achievements' ? 'border-primary-primary text-gray-900' : 'text-neutral-l_grey border-transparent'}`}
                            >
                                Features
                            </a>
                            <a
                                href="#footer"
                                className={`hover:border-neutral-grey hover:text-neutral-black inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeLink === 'footer' ? 'border-primary-primary text-gray-900' : 'text-neutral-l_grey border-transparent'}`}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button
                            type="button"
                            className="btn btn-tertiary btn-medium"
                        >
                            Log In
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-medium"
                        >
                            Sign Up
                        </button>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
