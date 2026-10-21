import ServiceCard from "./ServiceCard";

export default function Services(){
    return(
        <main className="bg-gray-300/40 w-full">
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl my-2 ">Focusing on quality,
                    <span className="text-gray-400">we maitain customer trust</span>
                </h2>
                <ServiceCard/>
            </div>
        </main>
    )
}