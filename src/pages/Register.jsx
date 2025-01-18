import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../components/axiosinstance";


const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const navigate = useNavigate()

    const registerUser = async (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);

        try {
            const response = await axiosInstance.post('/register', {
                username: formData.username,
                email: formData.email,
                password: formData.password,
            });
            console.log('Response:', response.data); // Backend se response check karein
        } catch (error) {
            console.error('Error:', error.response ? error.response.data : error.message);
        }
        setFormData({
            username: "",
            email: "",
            password: "",
        });
        navigate("/")

        // Add form submission logic here
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Register</h2>
                <form onSubmit={registerUser} >
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                          
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                    </div>

                    <button type="submit" className="w-full px-4 py-2 text-white bg-green-900 rounded-lg hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"> Register </button>
                </form>
                <div className="text-center mt-5">
                    <p>Already have account <a className="text-green-900 hover:underline" href="/">Log in</a> </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
