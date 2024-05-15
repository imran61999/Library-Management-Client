
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    

    const onSubmit = data =>{
        
        console.log(data)

       fetch('http://localhost:5000/books',{
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(result =>{
        console.log(result)
        if(result.insertedId){
            Swal.fire("Book added to database");
        }
       })
        
    }
    
    return (
        <div className="bg-[#F4F3F0] p-24 mb-10">
        <h2 className='text-3xl text-center font-extrabold'>Add A Book</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* image and book_name row */}
            <div className='md:flex gap-3 mb-8'>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('image', {required: true})} placeholder='Photo URL' className='input input-bordered w-full' />
                        {
                            errors.image && <span className="text-red-500">Photo is required</span>
                        }
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Book_Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" {...register('book_name', { required: true })} placeholder='Book name' className='input input-bordered w-full' />
                        {
                            errors.book_name && <span className="text-red-500">Book Name is required</span>
                        }
                    </label>
                </div>
            </div>
            {/* subcategory_Name and short_description row */}
            <div className='md:flex gap-3 mb-8'>
                
                <label className="form-control md:w-1/2 max-w-xs">
                    <div className="label">
                        <span className="label-text">Category</span>
                    </div>
                    <select className="select select-bordered w-full" {...register('category_name')} >
                        <option disabled selected value="">Pick one</option>
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
                        <input type="number" {...register('quantity')} placeholder='Quantity' className='input input-bordered w-full' />
                        {
                            errors.quantity && <span className="text-red-500">Quantity is required</span>
                        }
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
                        <input type="text" {...register('author_name',{required: true})} placeholder='Author Name' className='input input-bordered w-full' />
                        {
                            errors.author_name && <span className="text-red-500">Author Name is required</span>
                        }
                    </label>
                </div>
                <div className='form-control md:w-1/2'>
                    <label className="label">
                        <span className='label-text'>Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="number" {...register('rating',{required: true})} placeholder='Give Any Rating 1 to 5' className='input input-bordered w-full' />
                        {
                            errors.rating && <span className="text-red-500">Rating is required</span>
                        }
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
                        <input type="text" {...register('description',{required:true})} placeholder='Description' className='input input-bordered w-full' />
                        {
                            errors.description && <span className="text-red-500">Description is required</span>
                        }
                    </label>
                </div>
            </div>
            <div className='text-center'>
            <input className="btn btn-secondary w-1/2 mb-2" type="submit" value="Add" />
            </div>
        </form>

    </div>
    );
};

export default AddBook;