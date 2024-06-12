import Navbar from "../shared/Navbar";
import Banner0 from "../shared/Banner0";
import Sponsor from "../shared/Sponsor";
import News from "../shared/News";
import Copyright from "../shared/Copyright";
import imagePopularProduct from "../images/home-image/productPopular.png";

const Cart = () => {
    return (
        <div>
            <Navbar />
            <Banner0 title="Shop Cart" breadcrumbs={["Home", "Cart" ]} />

            <div className="ml-12 mr-12 mt-20 flex">

                {/* Bagian Kiri */}
                <div className="w-3/4">
                    <div className="grid grid-cols-4 bg-nt07 rounded-4xl p-10 KIRI mr-10 text-center"  >

                        <div className="text-3xl align-middle justify-center items-center">
                            <p className="text-center text-5xl font-semibold">Product</p>
                            <img src={imagePopularProduct} alt="Product" className="w-[400px] " />
                        </div>

                        <div className="text-4xl align-middle justify-center items-center ">
                            <p className="text-center text-5xl font-semibold">Detail</p>
                            <p className="pt-12">Samsung S23 </p>
                            <p>Gold 128GB</p>
                        </div>

                        <div className="text-3xl align-middle justify-center items-center">
                            <p className="mb-12 text-5xl font-semibold">Quantity</p>
                            <label className="ml-28 flex items-center bg-nt00 rounded-full w-44 h-15 justify-between text-3xl">
                                <button className="flex items-center justify-center bg-colorPrimary1 rounded-full w-14 h-14 text-6xl">-</button>
                                <p className="text-black">1</p>
                                <button className="flex mt items-center justify-center bg-colorPrimary1 rounded-full w-14 h-14 text-5xl">+</button>
                            </label>
                        </div>

                        <div className="text-4xl align-middle justify-center ">
                            <p className="text-center text-5xl font-semibold">Subtotal</p>
                            <p className="pt-12">12.999.000</p>
                        </div>

                    </div>
                </div>

                {/* Bagian Kanan */}
                <div className="w-1/4 ">
                    <div className="KANAN ">
                        <div className="bg-nt07 mb-6 rounded-4xl p-8">
                            <p className="text-5xl mb-12 font-semibold ">Cart Totals</p>
                            <div className="grid grid-cols-2">
                                <div className="text-3xl">
                                    <p className="mb-8"> Sub Total </p>
                                    <p className="mb-8">Shipping</p>
                                    <p className="mb-8">Total</p>
                                </div>
                                <div className="text-3xl text-left ">
                                    <p className="mb-8">IDR 12.999.000</p>
                                    <p className="mb-8">IDR 33.000</p>
                                    <p className="mb-8">IDR 12.999.000</p>
                                </div>
                            </div>
                            <button className="btnPrimary w-full h-16 text-3xl">Proceed to Check Out</button>
                        </div>
                        <div className="bg-nt07 grid grid-rows-2 p-6 rounded-4xl">
                            <input placeholder="Enter Coupon Promo" className="bg-nt09 p-2 text-center h-20 rounded-4xl mb-6 mt-8 text-3xl"></input>
                            <button className="btnPrimary w-full h-[80px] text-3xl">Submit</button>
                        </div>
                    </div>
                </div>

            </div>

            <Sponsor />
            <News />
            <Copyright />
        </div>
    );
};

export default Cart;
