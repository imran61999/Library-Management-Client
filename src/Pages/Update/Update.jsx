import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    const book = useLoaderData();

    // console.log(book)
    const { _id, image, book_name, author_name, category_name, rating, quantity, description } = book;

    const { register, handleSubmit } = useForm();
    

    const onSubmit = data =>{
        
        const updatedBook = { ...data}
        fetch(`http://localhost:5000/update/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatedBook)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Book updated successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
        
    }
    
    return (
        <div className="bg-[#F4F3F0] p-24 mb-10">
        <h2 className='text-3xl text-center font-extrabold'>Update Book</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* image and book_name row */}
            <div className='md:flex gap-3 mb-8'>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('image')} defaultValue={image} className='input input-bordered w-full' />
                        
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Book_Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('book_name')} defaultValue={book_name} className='input input-bordered w-full' />
                      
                    </label>
                </div>
            </div>
            {/* subcategory_Name and short_description row */}
            <div className='md:flex gap-3 mb-8'>
                
                <label className="form-control md:w-1/2 max-w-xs">
                    <div className="label">
                        <span className="label-text">Category</span>
                    </div>
                    <select className="select select-bordered w-full" {...register('category_name')} defaultValue={category_name} >
                        <option disabled value="">Pick one</option>
                            <option value="Novel">Novel</option>
                            <option value="Thriller">Thriller</option>
                            <option value="History">History</option>
                            <option value="Drama">Drama</option>
                            <option value="Computer & Tech">Computer & Tech</option>
                            <option value="Travel">Travel</option>
                    </select>
                </label>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Quantity of books</span>
                    </label>
                    <label className="input-group">
                        <input type="number" {...register('quantity')} defaultValue={quantity} className='input input-bordered w-full' />
                        
                    </label>
                </div>
            </div>
            {/* author and rating row */}
            <div className='md:flex gap-3 mb-8'>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Author Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('author_name')} defaultValue={author_name} className='input input-bordered w-full' />
        
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="number" {...register('rating',{required: true})} defaultValue={rating} className='input input-bordered w-full' />
                    </label>
                </div>
            </div>
            {/* short description */}
            <div className='md:flex gap-3 mb-8'>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Short Description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('description',{required:true})} defaultValue={description} className='input input-bordered w-full' />
                    </label>
                </div>
            </div>
            <div className='text-center'>
            <input className="btn btn-secondary w-1/2 mb-2" type="submit" value="Update" />
            </div>
        </form>

    </div>
    );
};

export default Update;