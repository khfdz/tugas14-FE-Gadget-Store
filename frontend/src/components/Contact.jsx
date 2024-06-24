import Navbar from "../shared/Navbar";
import Banner0 from "../shared/Banner0";
import Sponsor from "../shared/Sponsor";
import News from "../shared/News";
import Copyright from "../shared/Copyright";
import iconEmail from "../images/icon/iconEmail.png"
import iconLocation from "../images/icon/iconLocation.png"
import iconTelp from "../images/icon/iconTelp.png"
import imageMaps from "../images/home-image/maps.png/"

const Contact = () => {
    return (
        <div>
            <Navbar />
            <Banner0 title="Contact" breadcrumbs={['Home', 'Contact']} />

            <div className="grid grid-cols-2 ml-12 gap-20 mr-12 ml-32 mt-16">
    <div>

        <div className="flex items-center mb-10 ">
            <div className="bg-nt09 rounded-3xl w-24 h-24 flex items-center justify-center">
            <img src={iconEmail} alt="Email" className="w-14 h-14 " />
            </div>
            <div className="ml-10">
                <p className="text-2xl font-bold mb-4">Email</p>
                <p className="text- ">info@gstore.com</p>
                <p className="text-md ">cs@gstore.com</p>
            </div>
        </div>
        
        
        <div className="flex items-center mb-10"> 
            <div className=" bg-nt09 rounded-3xl w-24 h-24  flex items-center justify-center">
            <img src={iconTelp} alt="Email" className=" w-14 h-14 " />
            </div>
            <div className="ml-10">
                <p className="text-2xl font-bold mb-2">Phone</p>
                <p className="text-md ">+621010000888</p>
                <p className="text-md ">+621010000999</p>
            </div>
        </div>

        <div className="flex items-center mb-10"> 
            <div className="bg-nt09 rounded-3xl w-24 h-24 flex items-center justify-center">
            <img src={iconLocation} alt="Email" className="w-14 h-14 " />
            </div>
            <div className="ml-10">
                <p className="text-2xl font-bold mb-2">Address</p>
                <p className="text-md">Patricia C. 4401 WaldeckStreet</p>
                <p className="text-md">Grapevine Nashville, Tx 7605</p>
            </div>
        </div>



    </div>

    <div>
        <img src={imageMaps} className="rounded-4xl" alt="Maps" />
    </div>
</div>


            <Sponsor />
            <News />
            <Copyright />
            
        </div>
    );
};

export default Contact;