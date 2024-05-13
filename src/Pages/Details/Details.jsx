import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";


const Details = () => {
    const { user } = useContext(AuthContext)
    const book = useLoaderData();
    const { _id, image, book_name, author_name, category_name, rating, quantity, description } = book;

    const { register, handleSubmit } = useForm();

    return (
        
            <div className="flex justify-center">
                <div className="card w-96 bg-base-100 shadow-xl my-8">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {book_name}
                </h2>
                <p> <strong>Author:</strong>{author_name}</p>
                <p> <strong>Category:</strong>{category_name}</p>
                <p> <strong>Rating:</strong>{rating}</p>
                <p> <strong>Quantity:</strong>{quantity}</p>
                <p> <strong>Description:</strong>{description}</p>
            </div>
            <div className="text-center mb-5">
            <button ></button>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-secondary btn-sm w-1/2" onClick={()=>document.getElementById('my_modal_5').showModal()}>Borrow</button>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <div className="modal-action">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <div className='md:flex gap-3 mb-8'>
                            <div className='form-control md:w-1/2'>
                                <label className="label">
                                    <span className='label-text'>Name</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" {...register('name', {required: true})} defaultValue={user?.displayName} className='input input-bordered w-full' />
                                </label>
                            </div>
                            <div className='form-control md:w-1/2'>
                                <label className="label">
                                    <span className='label-text'>Email</span>
                                </label>
                                <label className="input-group">
                                    <input type="text" {...register('email', {required: true})} defaultValue={user?.email} className='input input-bordered w-full' />
                                </label>
                            </div>
                        </div>
                    {/* date field */}
                            <div className='form-control md:w-1/2'>
                                <label className="label">
                                    <span className='label-text'>Return Date</span>
                                </label>
                                <label className="input-group">
                                    <input type="date" {...register('return_date', {required: true})} defaultValue={user?.displayName} className='input input-bordered w-full' />
                                </label>
                            </div>
                       
                            <input className="btn btn-secondary w-1/2 my-5" type="submit" value="Submit" />
                        </form>
                    </div>
                    </div>
                </dialog>
            </div>
        </div>
            </div>
    );
};

export default Details;