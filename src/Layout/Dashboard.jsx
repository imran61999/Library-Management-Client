import { NavLink, Outlet } from "react-router-dom";
import { FaBookMedical } from "react-icons/fa6";
import { FaBookReader, FaHome } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex">
            {/* sidebar */}
            <div className="w-64 min-h-full bg-orange-400">
                <ul className="menu p-4">
                    <li><NavLink to="/dashboard/addBook"><FaBookMedical />Add Book</NavLink></li>
                    <li><NavLink to="/dashboard/borrowedBooks"><FaBookReader />Borrowed Books</NavLink></li>
                {/* shared navlinks */}
                <div className="divider"></div>
                <li><NavLink to="/"><FaHome />Home</NavLink></li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;