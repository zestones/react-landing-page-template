
import PhoneIcon from '../../assets/phone-icon.png';


function Unlock() {
    return (
        <section className="unlock flex flex-col md:flex-row justify-center items-center py-10">
            <div className="flex justify-center items-center px-4 py-10">
                <img src={PhoneIcon} alt="Phone" className="max-w-full h-auto" />
            </div>
            <div className="md:w-1/2 px-8 py-10">
                <div className="text-center md:text-left">
                    <h2 className="h2 mb-4 text-neutral-d_grey">The unseen of spending three <br />years at Pixelgrade</h2>
                    <p className="text-lg text-neutral-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                </div>
            </div>
        </section>
    )
}

export default Unlock;
