
import CommunityIcon from "../../assets/community-icon.png";
import MembersIcon from "../../assets/members-icon.png";
import PaymentIcon from "../../assets/payment-icon.png";
import TouchIcon from "../../assets/touch-icon.png";

function Achievements() {
    return (
        <section className="achievements bg-neutral-silver" id='achievements'>
            <div className="container mx-auto px-4 py-10 flex flex-col items-center sm:flex-col md:flex-col lg:flex-row justify-between">
                <div className="text-center">
                    <h2 className="h2 text-neutral-d_grey text-xl sm:text-2xl md:text-3xl">
                        Helping a local <br />
                        <span className="text-primary-primary">business reinvent itself</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-grey mt-4">
                        We reached here with our hard work and dedication
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 h-max">
                    <div className="flex items-center justify-center">
                        <img src={MembersIcon} alt="Members Icon" className="w-12 h-w-12" />
                        <div className="text-center sm:text-left px-4">
                            <h3 className="h3 text-neutral-d_grey text-lg sm:text-xl md:text-2xl">2,245,341</h3>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-grey">Members</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={CommunityIcon} alt="Community Icon" className="w-12 h-w-12" />
                        <div className="text-center sm:text-left px-4">
                            <h3 className="h3 text-neutral-d_grey text-lg sm:text-xl md:text-2xl">46,328</h3>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-grey">Community</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={PaymentIcon} alt="Payment Icon" className="w-12 h-w-12" />
                        <div className="text-center sm:text-left px-4">
                            <h3 className="h3 text-neutral-d_grey text-lg sm:text-xl md:text-2xl">1,926,436</h3>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-grey">Payments</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <img src={TouchIcon} alt="Touch Icon" className="w-12 h-w-12" />
                        <div className="text-center sm:text-left px-4">
                            <h3 className="h3 text-neutral-d_grey text-lg sm:text-xl md:text-2xl">828,867</h3>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-grey">Event Bookings</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements