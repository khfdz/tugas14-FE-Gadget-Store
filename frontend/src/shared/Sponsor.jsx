const Sponsor = ({ logoApple, logoGoogle, logoSamsung, logoSony, logoXiaomi }) => {
    return (
        <div className="bg-nt09 md:p-0 mt-12 h-44">
            <div className="flex flex-wrap justify-center items-center h-full mx-auto">
                <img src={logoApple} alt="Apple" className="mx-4 my-2 md:mx-10 md:my-0" />
                <img src={logoGoogle} alt="Google" className="mx-4 my-2 md:mx-10 md:my-0" />
                <img src={logoSamsung} alt="Samsung" className="mx-4 my-2 md:mx-10 md:my-0" />
                <img src={logoXiaomi} alt="Xiaomi" className="mx-4 my-2 md:mx-10 md:my-0" />
                <img src={logoSony} alt="Sony" className="mx-4 my-2 md:mx-10 md:my-0" />
            </div>
        </div>
    )
}

export default Sponsor
