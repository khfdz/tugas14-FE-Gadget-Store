const Shipping = ({
    iconShipping, titleShipping, textShipping, 
    iconRefund, titleRefund, textRefund, 
    iconCard, titleCard, textCard, 
    iconHours, titleHours, textHours
}) => {
    return (
        <div className="bg-nt09 rounded-3xl p-4 mr-10 ml-10">
            <div className="md:flex  items-center  justify-between ml-4 mr-4">

                <div className="flex items-start space-x-3">
                    <img src={iconShipping} alt="Shipping" className='lg:h-[40px] mt-2' />
                    <div>
                        <h2 className="font-bold mb-2 text-md">{titleShipping}</h2>
                        <h1 className='text-sm text-nt01'>{textShipping}</h1>
                    </div>
                </div>

                <div className="flex items-start space-x-2">
                    <img src={iconRefund} alt="Refund" className='lg:h-[40px] mt-2' />
                    <div>
                        <h2 className="font-bold mb-2 text-md">{titleRefund}</h2>
                        <h1 className='text-sm text-nt01'>{textRefund}</h1>
                    </div>
                </div>
                   
                <div className="flex items-start space-x-2">
                    <img src={iconCard} alt="Card" className='lg:h-[40px] mt-2' />
                    <div>
                        <h2 className="font-bold mb-2 text-md">{titleCard}</h2>
                        <h1 className='text-sm text-nt01'>{textCard}</h1>
                    </div>
                </div>
                   
                <div className="flex items-start space-x-2">
                    <img src={iconHours} alt="Hours" className='lg:h-[40px] mt-2' />
                    <div>
                        <h2 className="font-bold mb-2 text-md">{titleHours}</h2>
                        <h1 className='text-sm text-nt01'>{textHours}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shipping;

