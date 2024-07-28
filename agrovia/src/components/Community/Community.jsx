
import GroupsIcon from '../../assets/groups-icon.png'
import MemberIcon from '../../assets/member-icon.png'
import FacilityIcon from '../../assets/facility-icon.png'

function Community() {
    return (
        <section className="community">
            <div className="container mx-auto px-4 py-10">
                <div className="text-center">
                    <h2 className="h2 mb-4 text-neutral-d_grey">Manage your entire community <br />in a single system</h2>
                    <p className="text-lg text-neutral-grey">Who is Nextcent suitable for?</p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-10 flex flex-col items-center">
                <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4 w-full">
                    <div className="community-card flex flex-col items-center max-w-xs w-full">
                        <img src={MemberIcon} alt="Community" />
                        <h3 className="h3 mt-4 mb-2 text-neutral-d_grey text-center">Membership <br />Organisations</h3>
                        <p className="text-lg text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className="community-card flex flex-col items-center max-w-xs w-full">
                        <img src={FacilityIcon} alt="Facility" />
                        <h3 className="h3 mt-4 mb-2 text-neutral-d_grey text-center">National <br />Associations</h3>
                        <p className="text-lg text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className="community-card flex flex-col items-center max-w-xs w-full">
                        <img src={GroupsIcon} alt="Groups" />
                        <h3 className="h3 mt-4 mb-2 text-neutral-d_grey text-center">Clubs And<br /> Groups</h3>
                        <p className="text-lg text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community