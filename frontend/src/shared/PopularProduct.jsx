const PopularProduct = ({ imagePopularProduct }) => {
    return (
        <div className="mt-10 mr-10 ml-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Card 1 */}
                <div className="rounded-6xl p-12  items-left justify-between flex-col m-4">
                    <h2 className="font-semibold text-5xl text-left mb-10">Popular Products</h2>
                    <p className="text-left mb-10 text-xl">Up to 30% Discount</p>
                    <button className="h-14 w-52 rounded-4xl text-white font-bold text-xl   btnPrimary">
                        View More
                    </button>
                </div>

                {/* Cards 2-7 */}
                {[...Array(7)].map((_, index) => (
                    <div key={index} className="bg-nt09 rounded-6xl p-6 flex items-center justify-between flex-col m-4 ">
                        <img src={imagePopularProduct} alt={`Product ${index + 2}`} className=''/>
                        <div className="flex flex-col items-center">
                            <h2 className="font-semibold mb-2 text-3xl text-center">Samsung S23</h2>
                            <div className="flex items-center justify-center">
                                <h1 className='text-xl mr-2'>IDR 12.999K </h1>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PopularProduct
