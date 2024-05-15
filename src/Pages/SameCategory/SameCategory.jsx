import { useLoaderData, useParams } from "react-router-dom";
import SameCard from "./SameCard";

const SameCategory = () => {
    const {category} = useParams();
    const books = useLoaderData();
    
    return (
        <div>
            <h2 className="text-3xl text-center">Category: {category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6">
                {
                    books.map( book =><SameCard key={book._id} book={book}></SameCard>)
                }
            </div>
        </div>
    );
};

export default SameCategory;