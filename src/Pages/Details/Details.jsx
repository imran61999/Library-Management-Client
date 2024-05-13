import { useLoaderData } from "react-router-dom";


const Details = () => {
    const book = useLoaderData();
    const { _id, image, book_name, author_name, category_name, rating, quantity, description } = book;

    return (
        
            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl my-8">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {book_name}
                </h2>
                <p> <strong>Author:</strong>{author_name}</p>
                <p> <strong>Category:</strong>{category_name}</p>
                <p> <strong>Rating:</strong>{rating}</p>
                <p> <strong>Quantity:</strong>{quantity}</p>
                <p> <strong>Description:</strong>{description}</p>
            </div>
            <div className="text-center mb-5">
            <button className="btn btn-secondary btn-sm w-1/2">Borrow</button>
            </div>
        </div>
            </div>
    );
};

export default Details;