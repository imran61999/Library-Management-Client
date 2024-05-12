import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";

const AllBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data=>{
            // console.log(data)
            setBooks(data)
        })
    },[])
    return (
        <div className="mb-6">
           <h2 className="text-center text-3xl">All Book: {books?.length}</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                books.map(book =><BookCard key={book._id} book={book}></BookCard>)
            }
           </div>
        </div>
    );
};

export default AllBook;