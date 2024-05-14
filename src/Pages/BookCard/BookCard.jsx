import { Link } from "react-router-dom";

const BookCard = ({book}) => {
    const {_id, image, book_name, author_name, category_name, rating, quantity} = book;
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {book_name}
    </h2>
    <p> <strong>Author:</strong>{author_name}</p>
    <p> <strong>Category:</strong>{category_name}</p>
    <p> <strong>Quantity:</strong>{quantity}</p>
    <p> <strong>Rating:</strong>{rating}</p>
    <Link to={`/update/${_id}`}><button className="btn btn-secondary btn-sm text-center">Update</button></Link>
  </div>
</div>
    );
};

export default BookCard;