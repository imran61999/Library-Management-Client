import { useEffect, useState } from "react";

const AllBook = () => {
    const [books, setBooks] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res => res.json())
        .then(data=>{
            console.log(data)
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AllBook;