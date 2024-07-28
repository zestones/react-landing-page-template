import logo from '../../assets/logo.png';

function Header() {
    return (
        <header className="bg-neutral-silver shadow ">
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
                                href="#"
                                className="border-primary-primary text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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
