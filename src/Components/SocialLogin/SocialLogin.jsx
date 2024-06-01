import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {

    return (
        <div className="p-8">
            <div className="divider"></div>
            <div>
                <button className="btn">
                    <FaGoogle></FaGoogle>
                    Google</button>
            </div>
            
        </div>
    );
};

export default SocialLogin;