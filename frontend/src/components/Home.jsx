import imageBanner1 from '../images/home-image/iphone1.png'
import imageBanner2 from '../images/home-image/image2.png'
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


import Banner1 from '../shared/Banner1'
import Shipping from '../shared/Shipping'
import CardProduct1 from '../shared/CardProduct1'
import Banner2 from '../shared/Banner2'



const Home = () => {
    return (
        <div className="md:px=12 p-4 max-w-screen-2xl mx-auto mt-1">
            <Banner1 imageBanner1={imageBanner1} heading="From IDR. 19.000.000" subheading="iPhone 14 Pro Max" btn1="Buy Now"  />
            <Shipping 
            iconShipping={iconShipping} titleShipping="Free Shipping" textShipping="Free Shipping on all ID orders"
            iconRefund={iconRefund} titleRefund="100% Moneyback" textRefund="You have 7 days to return"
            iconCard={iconCard} titleCard="100% Payment Secure" textCard="Your payment are safe"
            iconHours={iconHours} titleHours="Support 24/7" textHours="Contact us 24 hours a day"
            />
            <CardProduct1 imageMacos={imageMacos} imagePB={imagePB} imagePS5={imagePS5} imageSamsungWatch={imageSamsungWatch} imageAirPods={imageAirPods} iconRight={iconRight}/>
            <Banner2 imageBanner2={imageBanner2} titleBanner2="Google <br/> Products" textBanner2="Up to 10% Discount" btnBanner2="Shop Now"/>

            </div>
    )
}

export default Home