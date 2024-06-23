import logoApple from '../images/home-image/sponsor/appleLogo.png'
import logoGoogle from '../images/home-image/sponsor/googleLogo.png'
import logoSamsung from '../images/home-image/sponsor/samsungLogo.png'
import logoSony from '../images/home-image/sponsor/sonyLogo.png'
import logoXiaomi from '../images/home-image/sponsor/xiaomiLogo.png'




const Sponsor = () => {
    return (
        <div className="bg-nt09  mt-20 h-32 ">
            <div className="flex flex-wrap justify-center items-center h-full mx-auto gap-14">
                <a href='https://www.apple.com'>
                <img src={logoApple} alt="Apple" className="lg:w-[150px]" />
                </a>
                <a href='https://www.google.com'>
                <img src={logoGoogle} alt="Google" className="lg:w-[150px]" />
                </a>
                <a href='https://www.samsung.com'>
                <img src={logoSamsung} alt="Samsung" className="lg:w-[150px]" />
                </a>
                <a href='https://www.xiaomi.com'>
                <img src={logoXiaomi} alt="Xiaomi" className="lg:w-[150px]" />
                </a>
                <a href='https://www.sony.com'>
                <img src={logoSony} alt="Sony" className="lg:w-[130px]" />
                </a>
            </div>
        </div>
    )
}

export default Sponsor
