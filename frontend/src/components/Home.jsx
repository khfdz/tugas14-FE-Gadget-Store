import imageBanner1 from '../images/home-image/iphone1.png'
import imageBanner2 from '../images/home-image/image2.png'
import ImageBanner3 from '../images/home-image/image3.png'
import iconShipping from '../images/icon/la_shipping-fast.png'
import iconRefund from '../images/icon/ri_refund-2-line.png'
import iconCard from '../images/icon/iconoir_card-locked.png'
import iconHours from '../images/icon/tabler_24-hours.png'
import imageMacos from '../images/home-image/product1/macos.png'
import imagePB from '../images/home-image/product1/powerbank.png'
import imagePS5 from '../images/home-image/product1/ps5.png'
import imageSamsungWatch from '../images/home-image/product1/samsung_watch.png'
import imageAirPods from '../images/home-image/product1/airpods.png'
import iconRight from '../images/icon/icon_right.png'
import imagePopularProduct from '../images/home-image/productPopular.png'
import logoApple from '../images/home-image/sponsor/appleLogo.png'
import logoGoogle from '../images/home-image/sponsor/googleLogo.png'
import logoSamsung from '../images/home-image/sponsor/samsungLogo.png'
import logoSony from '../images/home-image/sponsor/sonyLogo.png'
import logoXiaomi from '../images/home-image/sponsor/xiaomiLogo.png'
import iconWa from '../images/icon/iconWa.png'
import iconIg from '../images/icon/iconIg.png'
import iconFb from '../images/icon/iconFb.png'




import Navbar from '../shared/Navbar'
import Banner1 from '../shared/Banner1'
import Shipping from '../shared/Shipping'
import CardProduct1 from '../shared/CardProduct1'
import Banner2 from '../shared/Banner2'
import PopularProduct from '../shared/PopularProduct'
import Banner3 from '../shared/Banner3'
import Sponsor from '../shared/Sponsor'
import News from '../shared/News'
import Copyright from '../shared/Copyright'


const Home = () => {
    return (
        <div className="">
            <Navbar />
            <Banner1 imageBanner1={imageBanner1} heading="From IDR. 19.000.000" subheading="iPhone 14 Pro Max" btn1="Buy Now"  />
            <Shipping 
            iconShipping={iconShipping} titleShipping="Free Shipping" textShipping="Free Shipping on all ID orders"
            iconRefund={iconRefund} titleRefund="100% Moneyback" textRefund="You have 7 days to return"
            iconCard={iconCard} titleCard="100% Payment Secure" textCard="Your payment are safe"
            iconHours={iconHours} titleHours="Support 24/7" textHours="Contact us 24 hours a day"
            />
            <CardProduct1 imageMacos={imageMacos} imagePB={imagePB} imagePS5={imagePS5} imageSamsungWatch={imageSamsungWatch} imageAirPods={imageAirPods} iconRight={iconRight}/>
            <Banner2 imageBanner2={imageBanner2} titleBanner2="Google <br/> Products" textBanner2="Up to 10% Discount" btnBanner2="Shop Now"/>
            <PopularProduct imagePopularProduct={imagePopularProduct}/>
            <Banner3 ImageBanner3={ImageBanner3} titleBanner2="Apple <br/> Airpods" textBanner2="Up to 10% Discount" btnBanner2="Shop Now"/>
            <Sponsor logoApple={logoApple} logoGoogle={logoGoogle} logoSamsung={logoSamsung} logoSony={logoSony} logoXiaomi={logoXiaomi} />
            <News />
            <Copyright iconWa={iconWa} iconIg={iconIg} iconFb={iconFb}/>
            </div>
    )
}

export default Home