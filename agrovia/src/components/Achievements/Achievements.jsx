
import CommunityIcon from "../../assets/community-icon.png";
import MembersIcon from "../../assets/members-icon.png";
import PaymentIcon from "../../assets/payment-icon.png";
import TouchIcon from "../../assets/touch-icon.png";

function Achievements() {
    return (
        <section className="achievements bg-neutral-silver">
            <div className="container mx-auto px-4 py-10 flex flex-row items-center">
                <div className="container mx-auto px-4">
                    <h2 className="h2 text-neutral-d_grey">Helping a local <br />
                        <span className="text-primary-primary">business reinvent itself</span>
                    </h2>
                    <p className="text-lg text-neutral-grey mt-4">
                        We reached here with our hard work and dedication
                    </p>
                </div>

                <div className="container mx-auto grid grid-cols-2 gap-4 mt-8">
                    <div className="flex flex-row items-center justify-start">
                        <img src={MembersIcon} alt="Members Icon" />
                        <div className="text-start px-4">
                            <h3 className="h3 text-neutral-d_grey">2,245,341</h3>
                            <p className="text-lg text-neutral-grey">Members</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                        <img src={CommunityIcon} alt="Community Icon" />
                        <div className="text-start px-4">
                            <h3 className="h3 text-neutral-d_grey">46,328</h3>
                            <p className="text-lg text-neutral-grey">Community</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                        <img src={PaymentIcon} alt="Payment Icon" />
                        <div className="text-start px-4">
                            <h3 className="h3 text-neutral-d_grey">1,926,436</h3>
                            <p className="text-lg text-neutral-grey">Payments</p>
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-start">
                        <img src={TouchIcon} alt="Touch Icon" />
                        <div className="text-start px-4">
                            <h3 className="h3 text-neutral-d_grey">828,867</h3>
                            <p className="text-lg text-neutral-grey">Event Bookings</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements