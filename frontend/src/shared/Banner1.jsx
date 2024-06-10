

const Banner1 = ({imageBanner1, heading, subheading, btn1}) => {
    return (
        <div className='ml-12 mr-12'>
        <div className='mt-12 flex flex-col md:flex-row-reverse justify-between items-center gap-0'>
        <div>
            <img src={imageBanner1} alt="Iphone" className='lg:h-[596px]'/>
        </div>
        <div className="md:w-3/5">
            <h2 className="text-2xl font-medium">{heading}</h2>
            <h1 className='md:text-8xl  font-bold mb-6 mt-6 leading-relaxed'>{subheading}</h1>
           
        
                <div>
                    <button className='btnPrimary text-2xl h-14 w-52'>{btn1}</button>
                    
                </div>
            </div>

        

    </div>
    </div>



    )
}

export default Banner1