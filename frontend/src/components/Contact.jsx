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

            <div className="grid grid-cols-2 ml-12 gap-20 mr-24 ml-32 ">
    <div>

        <div className="flex items-center mb-16 mt-20"> {/* Gunakan flexbox */}
            <div className="bg-nt09 rounded-6xl w-40 h-40 flex items-center justify-center">
            <img src={iconEmail} alt="Email" className="w-28 h-28 " />
            </div>
            <div className="ml-10">
                <p className="text-4xl font-semibold mb-4">Email</p>
                <p className="text-3xl mb-4">info@gstore.com</p>
                <p className="text-3xl mb-4">cs@gstore.com</p>
            </div>
        </div>
        
        
        <div className="flex items-center mb-16"> {/* Gunakan flexbox */}
            <div className="bg-nt09 rounded-6xl w-40 h-40 flex items-center justify-center">
            <img src={iconTelp} alt="Email" className="w-28 h-28 " />
            </div>
            <div className="ml-10">
                <p className="text-4xl font-semibold mb-4">Phone</p>
                <p className="text-3xl mb-4">+621010000888</p>
                <p className="text-3xl mb-4">+621010000999</p>
            </div>
        </div>

        <div className="flex items-center mb-16"> {/* Gunakan flexbox */}
            <div className="bg-nt09 rounded-6xl w-40 h-40 flex items-center justify-center">
            <img src={iconLocation} alt="Email" className="w-28 h-28 " />
            </div>
            <div className="ml-10">
                <p className="text-4xl font-semibold mb-4">Address</p>
                <p className="text-3xl mb-4">Patricia C. 4401 WaldeckStreet</p>
                <p className="text-3xl mb-4">Grapevine Nashville, Tx 7605</p>
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