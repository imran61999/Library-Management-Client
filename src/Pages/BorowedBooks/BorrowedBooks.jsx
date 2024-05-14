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
        <div>
            <h2>Borrow page: {books?.length}</h2>
            <div>
                {
                    books.map(book => <BorrowCard key={book._id} book={book}></BorrowCard>)
                }
            </div>
        </div>
    );
};

export default BorrowedBooks;