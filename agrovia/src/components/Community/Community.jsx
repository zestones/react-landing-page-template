
import GroupsIcon from '../../assets/groups-icon.png'
import MemberIcon from '../../assets/member-icon.png'
import FacilityIcon from '../../assets/facility-icon.png'

function Community() {
    return (
        <section className="community" id='community'>
            <div className="container mx-auto px-4 py-10">
                <div className="text-center">
                    <h2 className="h2 mb-4 text-neutral-d_grey text-2xl sm:text-3xl md:text-4xl">Manage your entire community <br />in a single system</h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-grey">Who is Nextcent suitable for?</p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-10 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 w-full items-center">
                    <div className="community-card flex flex-col items-center max-w-xs w-full shadow-sm p-6 sm:p-8">
                        <img src={MemberIcon} alt="Community" className='w-16 h-auto' />
                        <h3 className="h3 mt-4 mb-2 text-neutral-d_grey text-center text-lg sm:text-xl md:text-2xl">Membership <br />Organisations</h3>
                        <p className="text-base sm:text-lg md:text-lg text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className="community-card flex flex-col items-center max-w-xs w-full shadow-sm p-6 sm:p-8">
                        <img src={FacilityIcon} alt="Facility" className='w-16 h-auto' />
                        <h3 className="h3 mt-4 mb-2 text-neutral-d_grey text-center text-lg sm:text-xl md:text-2xl">National <br />Associations</h3>
                        <p className="text-base sm:text-lg md:text-lg text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className="community-card flex flex-col items-center max-w-xs w-full shadow-sm p-6 sm:p-8">
                        <img src={GroupsIcon} alt="Groups" className='w-16 h-auto' />
                        <h3 className="h3 mt-4 mb-2 text-neutral-d_grey text-center text-lg sm:text-xl md:text-2xl">Clubs And<br /> Groups</h3>
                        <p className="text-base sm:text-lg md:text-lg text-neutral-grey text-center">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community