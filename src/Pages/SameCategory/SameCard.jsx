import { Link } from "react-router-dom";

const SameCard = ({book}) => {
    const {_id, image, book_name, author_name, category_name, rating} = book;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {book_name}
                </h2>
                <p> <strong>Author:</strong>{author_name}</p>
                <p> <strong>Category:</strong>{category_name}</p>
                <p> <strong>Rating:</strong>{rating}</p>
            </div>
            <div className="text-center mb-5">
            <Link to={`/details/${_id}`}><button className="btn btn-secondary btn-sm w-1/2">View Details</button></Link>
            </div>
        </div>
    );
};

export default SameCard;