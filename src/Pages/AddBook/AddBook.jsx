import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
// import Swal from "sweetalert2";

const AddBook = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [selectedCategory, setSelectedCategory] = useState("");

    

    const onSubmit = data =>{
        const postData = { ...data,  subcategory_name: selectedCategory }
        console.log(postData)

        // fetch('https://jute-wooden-server.vercel.app/craft', {
        //     method: 'POST',
        //     headers:{
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(postData)
        // })
        // .then( res => res.json())
        // .then(data => {
        //     if(data.insertedId){
        //         Swal.fire("Your craft added to database");
                
        //     }
        // })
        
    }
    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value);
    };
    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className='text-3xl text-center font-extrabold'>Add A Book</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* image and book_name row */}
            <div className='md:flex gap-3 mb-8'>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('image')} placeholder='Photo URL' className='input input-bordered w-full' />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Book_Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('book_name')} placeholder='Book name' className='input input-bordered w-full' />
                    </label>
                </div>
            </div>
            {/* subcategory_Name and short_description row */}
            <div className='md:flex gap-3 mb-8'>
                
                <label className="form-control md:w-1/2 max-w-xs">
                    <div className="label">
                        <span className="label-text">Category</span>
                    </div>
                    <select className="select select-bordered w-full" {...register('subcategory_Name')} value={selectedCategory} onChange={handleCategoryChange}>
                        <option disabled selected>Pick one</option>
                            <option>Wooden Furniture & Sculptures</option>
                            <option>Wooden Home Decor</option>
                            <option>Wooden Utensils and Kitchenware</option>
                            <option>Jute Home Decor</option>
                            <option>Jute Kitchenware & Utensils</option>
                            <option>Jute and Wooden Jewellery</option>
                    </select>
                </label>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Quantity of books</span>
                    </label>
                    <label className="input-group">
                        <input type="number" {...register('quantity')} placeholder='Quantity' className='input input-bordered w-full' />
                    </label>
                </div>
            </div>
            {/* price and rating row */}
            <div className='md:flex gap-3 mb-8'>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Author Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('authorName')} placeholder='Author Name' className='input input-bordered w-full' />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('rating')} placeholder='Rating' className='input input-bordered w-full' />
                    </label>
                </div>
            </div>
            {/* customization and processing_time row */}
            <div className='md:flex gap-3 mb-8'>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Customization</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('customization')} placeholder='Customization' className='input input-bordered w-full' />
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Processing_Time</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('processing_time')} placeholder='Processing_Time' className='input input-bordered w-full' />
                    </label>
                </div>
            </div>
            {/* stock_status, user_email and user_name row */}
            <div className='md:flex justify-between mb-8'>
                <div className='form-control'>
                    <label className="label">
                        <span className='label-text'>Stock Status</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('stockStatus')} placeholder='Stock Status' className='input input-bordered w-full' />
                    </label>
                </div>
                <div className='form-control'>
                    <label className="label">
                        <span className='label-text'>User Email</span>
                    </label>
                    <label className="input-group">
                        <input type="email" {...register('user_email')} defaultValue={user?.email} readOnly className='input input-bordered w-full' />
                    </label>
                </div>
                <div className='form-control'>
                    <label className="label">
                        <span className='label-text'>User Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('user_name')} defaultValue={user?.displayName} readOnly className='input input-bordered w-full' />
                    </label>
                </div>
            </div>
            <div className='text-center'>
            <input className="btn btn-secondary w-1/2 mb-4" type="submit" value="Add" />
            </div>
        </form>

    </div>
    );
};

export default AddBook;