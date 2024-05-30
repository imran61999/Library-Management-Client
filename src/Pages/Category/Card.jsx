import { Link } from "react-router-dom";


const Card = ({categoryInfo}) => {
    const { image , category} = categoryInfo;
    return (
        <Link to={`/sameCategory/${category}`}>
          <div className="card h-80 bg-base-100 shadow-xl">
          <figure><img src={image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              <strong>Category:</strong> {category}
            </h2>
          </div>
        </div>
        </Link>
    );
};

export default Card;