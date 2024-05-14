import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import BorrowCard from "./BorrowCard";


const BorrowedBooks = () => {
    const { user } = useContext(AuthContext)
    const [books, setBooks]=useState([]);


    useEffect(()=>{
        fetch(`http://localhost:5000/borrow/books?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setBooks(data)
        })
    },[user?.email])
    return (
        <div className="mb-8">
            <h2 className="text-3xl text-center">My Borrowed List: {books?.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    books.map(book => <BorrowCard key={book._id} book={book}></BorrowCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;