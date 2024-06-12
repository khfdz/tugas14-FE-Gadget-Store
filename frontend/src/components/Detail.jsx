import Navbar from "../shared/Navbar";
import Banner0 from "../shared/Banner0";
import imagePopularProduct from "../images/home-image/productPopular.png";
import Copyright from "../shared/Copyright";
import iconStar from "../images/icon/iconStar.png";

const Product = () => {
    return (
        <div>
            <Navbar />
            <Banner0 title="Product" breadcrumbs={['Home', 'Product', 'Samsung S23']} />

            <div className="grid grid-cols-2 justify-center ml-24">
                
                <div>
                    <img src={imagePopularProduct} alt="Popular Product" className="" />
                <div className="grid grid-cols-3">
                    <img src={imagePopularProduct} alt="Popular Product" className="" />
                    <img src={imagePopularProduct} alt="Popular Product" className="" />
                    <img src={imagePopularProduct} alt="Popular Product" className="" />
                </div>
                </div>
                        
                
                

                <div className="ml-10">
                    <p className="text-7xl font-semibold mb-8">Samsung S23</p>
                    <p className="text-5xl font-small mb-8">IDR 12.999.000</p>
                    <p className="text-2xl font-small pr-20 tracking-wider leading-relaxed text-justify">
                        Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis eu volutpat odio facilisis. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Sapien faucibus et molestie ac feugiat. Quis risus sed vulputate odio ut. Scelerisque fermentum dui faucibus in ornare quam viverra. Aliquet sagittis id consectetur purus ut faucibus. Vitae tempus quam pellentesque nec nam aliquam sem.
                    </p>

                    <div className="grid grid-cols-2">
                    <div className="mt-4">
                        <p className="font-small text-5xl mt-8 mb-4">Color</p>
                        <div className="flex gap-6">
                            <span className="block w-14 h-14 bg-ellipse1 rounded-full cursor-pointer"></span>
                            <span className="block w-14 h-14 bg-ellipse2 rounded-full cursor-pointer"></span>
                            <span className="block w-14 h-14 bg-ellipse3 rounded-full cursor-pointer"></span>
                            <span className="block w-14 h-14 bg-ellipse4 rounded-full cursor-pointer"></span>
                        </div>
                    </div>

                    <div className="mt-4 mb-12">
                        <p className="font-small text-5xl mt-8 mb-4 mt-4">Storage</p>
                        <div className="flex gap-6 text-2xl">
                            <span className="block w-22  px-4 py-2 bg-nt00 text-black cursor-pointer rounded-xl">128GB</span>
                            <span className="block px-4 py-2 bg-nt00 text-black cursor-pointer rounded-xl">256GB</span>
                            <span className="block px-4 py-2 bg-nt00 text-black cursor-pointer rounded-xl">512GB</span>
                        </div>
                    </div>
                    </div>

                    <div className="mt-4 flex grid grid-cols-2 ">
    <label className="flex  items-center bg-nt00 rounded-full w-80 h-20 justify-between text-3xl">
        <button className="flex items-center justify-center bg-colorPrimary1 rounded-full w-20 h-20 text-6xl">-</button>
        <p className="text-black">1</p>
        <button className="flex items-center justify-center bg-colorPrimary1 rounded-full w-20 h-20 text-5xl">+</button>
    </label>
    <button className="px-4 py-2 bg-colorPrimary1 rounded-3xl text-3xl text-white rounded mr-20">Add to Cart</button>
</div>



                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 ml-24">
                <div>
                    <p className="font-semibold text-4xl mb-4">Specification</p>
                    <p className="text-2xl font-small pr-20 tracking-wider leading-relaxed text-justify">
                        Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper. Id eu nisl nunc mi ipsum faucibus vitae aliquet. Magna sit amet purus gravida quis blandit turpis cursus in. Sagittis eu volutpat odio facilisis. Fermentum leo vel orci porta non pulvinar neque laoreet suspendisse. Sapien faucibus et molestie ac feugiat. <br/> Quis risus sed vulputate odio ut. Scelerisque fermentum dui faucibus in ornare quam viverra. Aliquet sagittis id consectetur purus ut faucibus. Vitae tempus quam pellentesque nec nam aliquam sem.
                    </p>
                </div>

                <div>
                    <div className="flex justify-between">
                        <p className="font-semibold text-4xl mb-4 ml-24">Review</p>
                        
                    </div>

                <div className="bg-nt09 p-4 rounded-3xl ml-24 mr-24 mb-4">
                    <div className="grid grid-cols-2 flex items-center justify-between ">
    <div className="flex items-center ">
        <p className="font-semibold mr-2 text-3xl mb-4">John Doe</p>

    </div>
    <div>
        <div className="flex   justify-end mb-4">
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
        </div>
    </div>

</div>
<p className="mt-2 text-2xl">Goods as ordered and fast delivery, recommended seller</p>
</div>

<div className="bg-nt09 p-4 rounded-3xl ml-24 mr-24 mb-4">
                    <div className="grid grid-cols-2 flex items-center justify-between ">
    <div className="flex items-center ">
        <p className="font-semibold mr-2 text-3xl mb-4">John Doe</p>

    </div>
    <div>
        <div className="flex   justify-end mb-4">
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
        </div>
    </div>

</div>
<p className="mt-2 text-2xl">Goods as ordered and fast delivery, recommended seller</p>
</div>

<div className="bg-nt09 p-4 rounded-3xl ml-24 mr-24 mb-4">
                    <div className="grid grid-cols-2 flex items-center justify-between ">
    <div className="flex items-center ">
        <p className="font-semibold mr-2 text-3xl mb-4">John Doe</p>

    </div>
    <div>
        <div className="flex   justify-end mb-4">
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
            <img src={iconStar} alt="Star" className="w-8 h-8" />
        </div>
    </div>

</div>
<p className="mt-2 text-2xl">Goods as ordered and fast delivery, recommended seller</p>
</div>

                </div>
            </div>

           
                
            <div className="grid grid-cols-4 gap-6 ml-24 items-center mt-14 mb-14 mr-24">

                <div className="">
                <p className="font-semibold text-6xl">Related <br/> Products</p>
                <button className="btnPrimary w-72 h-16 mt-4 text-3xl">View More</button>

                </div>


                <div className="bg-nt09 p-4 rounded-3xl pt-0">
                <img src={imagePopularProduct} alt="Popular Product" className="ml-14 w-96 h-96" />
                <p className="text-center mb-4 text-3xl font-semibold">Samsung S23</p>
                <p  className="text-center mb-4 text-2xl">IDR 12.999K</p>
                </div>

                <div className="bg-nt09 p-4 rounded-3xl pt-0">
                <img src={imagePopularProduct} alt="Popular Product" className="ml-14 w-96 h-96" />
                <p className="text-center mb-4 text-3xl font-semibold">Samsung S23</p>
                <p  className="text-center mb-4 text-2xl">IDR 12.999K</p>
                </div>

                <div className="bg-nt09 p-4 rounded-3xl pt-0">
                <img src={imagePopularProduct} alt="Popular Product" className="ml-14 w-96 h-96" />
                <p className="text-center mb-4 text-3xl font-semibold">Samsung S23</p>
                <p  className="text-center mb-4 text-2xl">IDR 12.999K</p>
                </div>


              
                </div>
        

            <Copyright />
        </div>
    );
};

export default Product;
