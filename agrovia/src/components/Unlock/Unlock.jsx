import PropTypes from 'prop-types';


function Unlock({ icon, title, description }) {
    return (
        <section className="unlock flex flex-col md:flex-row justify-center items-center py-10">
            <div className="flex justify-center items-center px-4 py-10">
                <img src={icon} alt="Phone" className="max-w-full h-auto" />
            </div>
            <div className="md:w-1/2 px-8 py-10">
                <div className="text-center md:text-left">
                    <h2 className="h2 mb-4 text-neutral-d_grey">{title.split('<br />')[0]} <br /> {title.split('<br />')[1]}</h2>
                    <p className="text-lg text-neutral-grey">{description}</p>
                </div>
                <button className="btn btn-primary btn-normal mt-8">Learn More</button>
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
