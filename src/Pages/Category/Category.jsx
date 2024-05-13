import { useEffect, useState } from "react";
import Card from "./Card";


const Category = () => {
    const [categories, setCategories]=useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data =>{
            setCategories(data)
        })
    },[])
    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold text-center">Category: {categories.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    categories.map(category => <Card key={category._id} categoryInfo={category}></Card>)
                }
            </div>
        </div>
    );
};

export default Category;