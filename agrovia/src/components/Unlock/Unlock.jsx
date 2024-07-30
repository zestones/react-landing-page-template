import PropTypes from 'prop-types';

function Unlock({ icon, title, description }) {
    return (
        <section className="unlock flex flex-col sm:flex-row justify-center items-center py-6 sm:py-10">
            <div className="flex justify-center items-center px-4 py-6 sm:px-6 sm:py-10">
                <img src={icon} alt="Phone" className="h-auto sm:w-48 md:w-80 lg:w-full" />
            </div>
            <div className="text-center sm:text-left sm:w-1/2 px-4 sm:px-8 py-6 sm:py-10">
                <h2 className="h2 mb-4 text-neutral-d_grey text-xl sm:text-2xl md:text-3xl">{title.includes('<br />') ? title.split('<br />')[0] + ' ' + title.split('<br />')[1] : title}</h2>
                <p className="text-base sm:text-lg md:text-xl text-neutral-grey">{description}</p>
                <button className="btn btn-primary btn-normal mt-6 sm:mt-8">En savoir plus</button>
            </div>
        </section>
    )
}

Unlock.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default Unlock;
