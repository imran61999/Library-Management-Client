import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/library.png"

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();


    const onSubmit = data =>{
        console.log(data)
    }

    return (
        <div>
        <div className="mx-auto md:w-1/2">
            <div className="flex justify-center">
            <img className="text-center w-20 h-20" src={logo} alt="" />
            </div>
           <h2 className="text-3xl mb-6 text-center">Please Register</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
              
               <input type="text" placeholder="Name" {...register('name', {required:true})} className="border w-full py-2 px-4 mb-4" />
               <br />
               <input type="email" placeholder="Email" {...register('email', {required:true})} className="border w-full py-2 px-4 mb-4" />
               <br />
               <input type="text" placeholder="Photo URL" {...register('photo', {required:true})} className="border w-full py-2 px-4 mb-4" />
               <br />
               <input type="password" placeholder="Password" {...register('password',{required:true})} className="border w-full py-2 px-4 mb-4" />
               <br />
               <input className="btn btn-secondary w-full mb-4" type="submit" value="Login" />
           </form>
           <p className="text-center mb-5">Already registered? Please <Link className="text-blue-500" to="/login">Login</Link> </p>
       </div>  
      </div>   
    );
};

export default Register;