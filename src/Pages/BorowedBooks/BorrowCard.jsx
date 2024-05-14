import Swal from "sweetalert2";

const BorrowCard = ({book, onReturn }) => {
    const { _id, image, book_name, category_name, return_date, borrow_date } = book;

    const handleReturn =()=>{
        fetch(`http://localhost:5000/book/${_id}/increase`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(book)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                fetch(`http://localhost:5000/borrowedBooks/${_id}`,{
                    method:'DELETE',
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    if(data.deletedCount>0)
                        {
                            onReturn();
                            Swal.fire("You return book successfully");
                        }
                })
            }
        })
    }
    return (
        <div className="card bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {book_name}
    </h2>
    <p> <strong>Category:</strong>{category_name}</p>
    <p> <strong>Borrow Date:</strong>{borrow_date}</p>
    <p> <strong>Return Date:</strong>{return_date}</p>
    <button onClick={handleReturn} className="btn btn-secondary btn-sm text-center">Return</button>
  </div>
</div>
    );
};

export default BorrowCard;