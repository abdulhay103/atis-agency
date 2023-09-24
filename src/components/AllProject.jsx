async function getData() {
    const res = await fetch(process.env.BASE_URL + "api/AllProject");
    if (!res.ok) {
        throw new Error("All Projects API Calling Fail");
    }
    return res.json();
}

const AllProject = async () => {
    const data = await getData();
    // console.log(data);
    return (
        <section>
            <div className="skew skew-top mr-for-radius">
                <svg
                    className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
                    viewBox="0 0 10 10"
                    preserveAspectRatio="none"
                >
                    <polygon fill="currentColor" points="0 0 10 10 0 10" />
                </svg>
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg
                    className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
                    viewBox="0 0 10 10"
                    preserveAspectRatio="none"
                >
                    <polygon fill="currentColor" points="0 10 10 0 10 10" />
                </svg>
            </div>
            <div className="py-20 bg-gray-50 radius-for-skewed">
                <div className="container px-4 mx-auto">
                    <div className="mb-16 flex flex-wrap justify-center md:justify-center items-center">
                        <div className="text-center lg:text-center">
                            <span className="text-green-600 font-bold">
                                Dolor sit amet consectutar
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                                Featured Projects
                            </h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap -mx-4 mb-4">
                        {data.map((item, i) => {
                            return (
                                <div className="relative mb-4 w-full md:w-1/2 lg:w-1/3 px-4">
                                    <div className="relative h-80 mb-5 mx-auto rounded-lg">
                                        <img
                                            className="w-full relative h-full rounded-lg object-cover"
                                            src={item["image"]}
                                            alt={item["remark"]}
                                        />
                                        <div className="absolute inset-0 bg-gray-900 opacity-75 rounded-lg" />
                                        <div className="absolute inset-0 p-6 flex flex-col items-start">
                                            <span className="text-gray-400">
                                                2021
                                            </span>
                                            <p className="mb-auto text-xl lg:text-2xl text-white font-bold">
                                                {item["title"]}
                                            </p>
                                            <a
                                                className="inline-block py-2 px-4 border-2 border-gray-400 hover:border-white bg-transparent text-gray-50 hover:bg-white hover:text-gray-900 transition duration-200 rounded-l-xl rounded-t-xl font-bold leading-loose"
                                                href={item["live"]}
                                                target="_blank"
                                            >
                                                View Project
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg
                    className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
                    viewBox="0 0 10 10"
                    preserveAspectRatio="none"
                >
                    <polygon fill="currentColor" points="0 0 10 0 0 10" />
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg
                    className="h-8 md:h-12 lg:h-20 w-full text-gray-50"
                    viewBox="0 0 10 10"
                    preserveAspectRatio="none"
                >
                    <polygon fill="currentColor" points="0 0 10 0 10 10" />
                </svg>
            </div>
        </section>
    );
};

export default AllProject;
