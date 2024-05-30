import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Details = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    // const book = useLoaderData();
    const id = useParams().id;
    // console.log(typeof id)

    const { data:book =[], refetch } = useQuery({
        queryKey:['book',id],
        queryFn: async ()=>{
            const res = await axiosPublic.get(`/details/${id}`);
            console.log('response data ',res.data);
            return res.data;
        }
    })
    
    const { _id, image, book_name, author_name, category_name, rating, quantity, description } = book;
    console.log('book',book)

    const { register, handleSubmit } = useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onSubmit = data => {
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split('T')[0];
    
        const borrowData = { 
            userId: book._id, 
            image: book.image, 
            book_name: book.book_name, 
            author_name: book.author_name,
            category_name: book.category_name, 
            rating: book.rating,
            quantity: book.quantity, 
            description: book.description,
            user: user?.email, 
            return_date: data.return_date,
            borrow_date: formattedDate
        };
    
    
        if(quantity > 0) {
            fetch('http://localhost:5000/borrow/books',{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(borrowData)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    fetch(`http://localhost:5000/book/${_id}/decrease`,{
                        method:'PATCH',
                        headers:{
                            'content-type':'application/json'
                        },
                        body:JSON.stringify(book)
                    })
                    Swal.fire("Books Borrowed");
                    setIsModalOpen(false);
                    refetch();
                }
                else{
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "You have already borrowed this book",
                        footer: '<a href="#">Why do I have this issue?</a>'
                      });
                      setIsModalOpen(false); 
                }
            })
                
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Book is unavailable",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    };
    
    

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
                    <button className="btn btn-secondary btn-sm w-1/2" onClick={() => setIsModalOpen(true)}>Borrow</button>
                    {isModalOpen && (
                        <dialog className="modal modal-bottom sm:modal-middle" open>
                            <div className="modal-box">
                                <div className="modal-action">
                                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                                        <div className='md:flex gap-3 mb-8'>
                                            <div className='form-control md:w-1/2'>
                                                <label className="label">
                                                    <span className='label-text'>Name</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" {...register('name')} readOnly defaultValue={user?.displayName} className='input input-bordered w-full' />
                                                </label>
                                            </div>
                                            <div className='form-control md:w-1/2'>
                                                <label className="label">
                                                    <span className='label-text'>Email</span>
                                                </label>
                                                <label className="input-group">
                                                    <input type="text" {...register('email')} defaultValue={user?.email} readOnly className='input input-bordered w-full' />
                                                </label>
                                            </div>
                                        </div>
                                        <div className='form-control md:w-1/2'>
                                            <label className="label">
                                                <span className='label-text'>Return Date</span>
                                            </label>
                                            <label className="input-group">
                                                <input type="date" {...register('return_date')} className='input input-bordered w-full' />
                                            </label>
                                        </div>
                                        <input className="btn btn-secondary w-1/2 my-5" type="submit" value="Submit" />
                                    </form>
                                </div>
                            </div>
                        </dialog>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Details;
