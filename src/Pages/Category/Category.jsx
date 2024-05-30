import { useEffect, useState } from "react";
import Card from "./Card";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const Category = () => {
    const [categories, setCategories]=useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetch('http://localhost:5000/category')
        .then(res => res.json())
        .then(data =>{
            setCategories(data)
            setLoading(false)
        })
    },[])

    if(loading){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    return (
        <div className="my-8">
            <SectionTitle heading="Category" subHeading="Choose your dream book"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12">
                {
                    categories.map(category => <Card key={category._id} categoryInfo={category}></Card>)
                }
            </div>
        </div>
    );
};

export default Category;