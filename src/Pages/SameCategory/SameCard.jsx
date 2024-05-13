import { Link } from "react-router-dom";

const SameCard = ({book}) => {
    const {_id, image, name, author_name, category_name, rating} = book;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                </h2>
                <p> <strong>Author:</strong>{author_name}</p>
                <p> <strong>Category:</strong>{category_name}</p>
                <p> <strong>Rating:</strong>{rating}</p>
            </div>
        </div>
    );
};

export default SameCard;