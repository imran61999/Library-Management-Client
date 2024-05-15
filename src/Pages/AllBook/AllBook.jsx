import { useEffect, useState } from "react";
import BookCard from "../BookCard/BookCard";
import PDFViewer from "../PDFViewer/PDFViewer";

const AllBook = () => {
    const [allBooks, setAllBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mode, setMode] = useState('card');

    useEffect(() => {
        fetch('http://localhost:5000/books',{credentials:'include'})
            .then(res => res.json())
            .then(data => {
                setAllBooks(data);
                setLoading(false)
            });
    }, []);

    const handleAvailable = () => {
        const remaining = allBooks?.filter(book => book.quantity !== 0);
        console.log('remaining',remaining.length)
        setAllBooks(remaining);
    }

    const handleToggle =()=>{
        setMode(currentMode => currentMode === 'card' ? 'pdf' : 'card');
        console.log(mode)
    }

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    return (
        <div className="mb-6">
           <h2 className="text-center text-3xl">All Book: {allBooks.length}</h2>
          <button onClick={handleAvailable} className="btn btn-secondary btn-sm mr-2">Show available books</button>
          <button  onClick={handleToggle} className="btn btn-secondary btn-sm mr-2">Toggle View mode</button>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
           {mode === 'card' ? (
                allBooks.map(book => <BookCard key={book._id} book={book}></BookCard>)
            ) : (
                allBooks.map(book => <PDFViewer key={book._id} book={book}></PDFViewer>)
            )}
           </div>
        </div>
    );
};

export default AllBook;
