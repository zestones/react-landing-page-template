
import GroupsIcon from '../../assets/groups-icon.png'
import MemberIcon from '../../assets/member-icon.png'
import FacilityIcon from '../../assets/facility-icon.png'

function Community() {
    return (
        <section className="community" id='community'>
            <div className="container mx-auto px-4 py-10">
                <div className="text-center">
                    <h2 className="h2 mb-4 text-neutral-d_grey text-2xl sm:text-3xl md:text-4xl">Gérez toute votre communauté <br />dans un seul système</h2>
                    <p className="text-base sm:text-lg md:text-xl text-neutral-grey">À qui s&apos;adresse Agrovia ?</p>
                </div>
            </div>
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4 w-full items-center">
                    <div className="community-card flex flex-col items-center max-w-xs w-full shadow-sm p-6 sm:p-8">
                        <img src={MemberIcon} alt="Grossistes" className='w-16 h-auto' />
                        <h3 className="h3 mt-4 mb-2 text-neutral-d_grey text-center text-lg sm:text-xl md:text-2xl">Grossistes en<br />Produits Céréaliers</h3>
                        <p className="text-base sm:text-lg md:text-lg text-neutral-grey text-center">Notre plateforme facilite la recherche de sources d&apos;approvisionnement fiables et propose des outils de négociation efficaces.</p>
                    </div>
                    <div className="community-card flex flex-col items-center max-w-xs w-full shadow-sm p-6 sm:p-8">
                        <img src={FacilityIcon} alt="Brokers" className='w-16 h-auto' />
                        <h3 className="h3 mt-4 mb-2 text-neutral-d_grey text-center text-lg sm:text-xl md:text-2xl">Courtiers en<br />Produits Céréaliers</h3>
                        <p className="text-base sm:text-lg md:text-lg text-neutral-grey text-center">Nous aidons les courtiers à identifier des opportunités d&apos;achat avantageuses et à trouver des acheteurs potentiels.</p>
                    </div>
                    <div className="community-card flex flex-col items-center max-w-xs w-full shadow-sm p-6 sm:p-8">
                        <img src={GroupsIcon} alt="Importateurs/Exportateurs" className='w-16 h-auto' />
                        <h3 className="h3 mt-4 mb-2 text-neutral-d_grey text-center text-lg sm:text-xl md:text-2xl">Importateurs et<br />Exportateurs</h3>
                        <p className="text-base sm:text-lg md:text-lg text-neutral-grey text-center">Notre plateforme simplifie la gestion des échanges internationaux et facilite la recherche de partenaires commerciaux.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Community