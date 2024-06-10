const News = () => {
    return (
        <div className="bg-nt07">
            <div className="flex flex-col items-center justify-center h-full mx-auto h-96">
                <h1 className="text-3xl font-semibold mb-6 text-6xl">Don't Miss Our News</h1>
                <div className="flex">
                    <input className="mr-2 p-2 bg-nt09 rounded-2xl w-80 h-14" placeholder="Your email"></input>
                    <button className="btnPrimary w-22 rounded-2xl">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default News;
