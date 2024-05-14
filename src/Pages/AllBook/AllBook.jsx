import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const AllBook = () => {
    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => {
                setAllBooks(data);
            });
    }, []);

    const handleAvailable = () => {
        const remaining = allBooks?.filter(book => book.quantity !== 0);
        console.log('remaining',remaining.length)
        setAllBooks(remaining);
    }


    return (
        <div className="mb-6">
           <h2 className="text-center text-3xl">All Book: {allBooks.length}</h2>
          <button onClick={handleAvailable} className="btn btn-secondary btn-sm mr-2">Show available books</button>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                allBooks.map(book => <BookCard key={book._id} book={book}></BookCard>)
            }
           </div>
        </div>
    );
};

export default AllBook;
