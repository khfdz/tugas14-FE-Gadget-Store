const Shipping = ({
    iconShipping, titleShipping, textShipping, 
    iconRefund, titleRefund, textRefund, 
    iconCard, titleCard, textCard, 
    iconHours, titleHours, textHours
}) => {
    return (
        <div className="bg-nt09 rounded-6xl md:p-10 mr-10 ml-10">
            <div className="md:flex  items-center space-y-4 md:space-y-0 space-x-6 justify-between mr-10 ml-10">
                <div className="flex items-start space-x-4">
                    <img src={iconShipping} alt="Shipping" className='lg:h-[56px] mt-2' />
                    <div>
                        <h2 className="font-semibold mb-2 text-2xl">{titleShipping}</h2>
                        <h1 className='text-xl'>{textShipping}</h1>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <img src={iconRefund} alt="Refund" className='lg:h-[56px] mt-2' />
                    <div>
                        <h2 className="font-semibold mb-2 text-2xl">{titleRefund}</h2>
                        <h1 className='text-xl'>{textRefund}</h1>
                    </div>
                </div>
                   
                <div className="flex items-start space-x-4">
                    <img src={iconCard} alt="Card" className='lg:h-[56px] mt-2' />
                    <div>
                        <h2 className="font-semibold mb-2 text-2xl">{titleCard}</h2>
                        <h1 className='text-xl'>{textCard}</h1>
                    </div>
                </div>
                   
                <div className="flex items-start space-x-4">
                    <img src={iconHours} alt="Hours" className='lg:h-[56px] mt-2' />
                    <div>
                        <h2 className="font-semibold mb-2 text-2xl">{titleHours}</h2>
                        <h1 className='text-xl'>{textHours}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Shipping;

