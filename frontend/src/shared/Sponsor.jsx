import logoApple from '../images/home-image/sponsor/appleLogo.png'
import logoGoogle from '../images/home-image/sponsor/googleLogo.png'
import logoSamsung from '../images/home-image/sponsor/samsungLogo.png'
import logoSony from '../images/home-image/sponsor/sonyLogo.png'
import logoXiaomi from '../images/home-image/sponsor/xiaomiLogo.png'



const Sponsor = () => {
    return (
        <div className="bg-nt09 md:p-0 mt-20 h-44 ">
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
