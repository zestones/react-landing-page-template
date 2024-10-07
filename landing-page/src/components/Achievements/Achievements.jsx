
import CommunityIcon from "../../assets/community-icon.png";
import MembersIcon from "../../assets/members-icon.png";
import PaymentIcon from "../../assets/payment-icon.png";
import TouchIcon from "../../assets/touch-icon.png";

function Achievements() {
    return (
        <section className="achievements bg-neutral-silver" id='achievements'>
            <div className="container mx-auto px-4 py-10 flex flex-col items-center sm:flex-col md:flex-col lg:flex-row justify-between">
                <div className="text-center lg:text-left">
                    <h2 className="h2 text-neutral-d_grey text-xl sm:text-2xl md:text-3xl">
                        Aidant les entreprises <br />
                        <span className="text-primary-primary">à se réinventer dans l&apos;agroalimentaire</span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-grey mt-4">
                        Nous sommes arrivés ici grâce à notre travail acharné et notre dévouement
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 h-max mt-8 lg:mt-0">
                    <div className="flex items-center justify-start">
                        <img src={MembersIcon} alt="Members Icon" className="w-12 h-w-12" />
                        <div className="text-center sm:text-left px-4">
                            <h3 className="h3 text-neutral-d_grey text-lg sm:text-xl md:text-2xl">1,234</h3>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-grey">Partenaires</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start">
                        <img src={CommunityIcon} alt="Community Icon" className="w-12 h-w-12" />
                        <div className="text-center sm:text-left px-4">
                            <h3 className="h3 text-neutral-d_grey text-lg sm:text-xl md:text-2xl">567</h3>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-grey">Inscrits</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start">
                        <img src={PaymentIcon} alt="Payment Icon" className="w-12 h-w-12" />
                        <div className="text-center sm:text-left px-4">
                            <h3 className="h3 text-neutral-d_grey text-lg sm:text-xl md:text-2xl">9,876</h3>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-grey">Transactions</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-start">
                        <img src={TouchIcon} alt="Touch Icon" className="w-12 h-w-12" />
                        <div className="text-center sm:text-left px-4">
                            <h3 className="h3 text-neutral-d_grey text-lg sm:text-xl md:text-2xl">4,321</h3>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-grey">Contrats</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements