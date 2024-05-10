import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data =>{
        console.log(data)
    }
    return (
        <div>
        <div className="mx-auto md:w-1/2">
           <h2 className="text-3xl mb-6 text-center">Please Login</h2>
           <form onSubmit={handleSubmit(onSubmit)}>
              
               <input type="email" placeholder="Email" {...register('email', {required:true})} className="border w-full py-2 px-4 mb-4" />
               <br />
               <input type="password" placeholder="Password" {...register('password',{required:true})} className="border w-full py-2 px-4 mb-4" />
              
               <br />
               <input className="btn btn-secondary w-full mb-4" type="submit" value="Login" />
           </form>
           <div className="flex gap-3 justify-center mb-5">
                <button className="text-3xl" ><FcGoogle /></button>
                <button className="text-3xl"><GrGithub /></button>
            </div>
           <p className="text-center mb-5">New here? Please <Link className="text-blue-500" to="/register">Register</Link> </p>
       </div>  
      </div>   
    );
};

export default Login;