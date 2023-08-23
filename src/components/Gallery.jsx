import CardGallery from "./CardGallery";
export default function Gallery({cities}) {
    return (
        <div className="grid grid-cols-1 gap-2 md:grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-wrap justify-center object-cover w-full ">  
            {cities.map(each => <CardGallery key={each._id} src={each.photo} alt={each._id} city={each.city} country={each.country} id={each._id}/>)}
            </div> 
        </div>
    );
}

