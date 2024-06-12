const News = () => {
    return (
        <div className="bg-nt07">
            <div className="flex flex-col items-center justify-center h-96 mx-auto ">
                <h1 className="text-3xl font-semibold mb-6 text-6xl">Don't Miss Our News</h1>
                <div className="flex">
                    <input className="mr-2 p-2 bg-nt09 rounded-2xl w-80 h-14 w-96 text-xl" placeholder="Your email"></input>
                    <button className="btnPrimary w-44 text-xl rounded-2xl">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default News;
