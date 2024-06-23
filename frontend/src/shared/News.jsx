const News = () => {
    return (
        <div className="bg-nt07">
            <div className="flex flex-col items-center justify-center h-72 mx-auto ">
                <h1 className=" font-semibold mb-6 text-4xl">Don't Miss Our News</h1>
                <div className="flex">
                    <input className="mr-2 p-2 bg-nt09 rounded-3xl text-md pl-4" placeholder="Your email"></input>
                    <button className="btnPrimary   rounded-3xl">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default News;
