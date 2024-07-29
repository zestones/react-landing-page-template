
function Banner() {
    return (
        <div className="banner bg-neutral-silver">
            <div className="container mx-auto flex flex-col justify-center items-center">
                <h2 className="h2 text-neutral-black py-8 text-center">Pellentesque suscipit <br />fringilla libero eu.</h2>
                <button className="btn btn-primary btn-normal btn-icon-right mb-8">
                    Get started
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ml-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </div>
        </div >
    );
}

export default Banner;