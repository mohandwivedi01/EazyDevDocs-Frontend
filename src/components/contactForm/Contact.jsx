import React, {useState} from "react";
import { toast } from "react-toastify";

const Contact = function () {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
      });
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        setFormData({ 
            email: "",
            subject: "",
            message: ""
        });
        toast.success("Message submitted successfully.")
    }
    return (
        <div className="h-screen" >
            <div className="bg-[url('https://res.cloudinary.com/djgmjdn6d/image/upload/v1742061416/vzqycd6yaagpynngfgcp.jpg')] bg-cover bg-center  w-full relative h-[480px] before:absolute before:inset-0 before:w-full before:bg-slate-900 before:opacity-80">

                <div className="flex flex-col items-center justify-center ">
                    <div className="flex items-center relative justify-center">
                        <div className="py-8 lg:py-10 px-4 mx-auto max-w-screen-md ">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
                            <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
                            <div className="border border-blue-500 shadow-lg shadow-blue-500/50 p-10 rounded-lg bg-slate-900">
                            <form action="#" onSubmit={submitHandler} className="space-y-8">
                                <div>
                                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                                </div>
                                <div>
                                    <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                                </div>
                                <div className="sm:col-span-2">
                                    <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                                    <textarea onChange={handleChange} name="message" value={formData.message} rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                                </div>
                                <button type="submit" className="px-6 py-3.5 border-t border-b-2 border-red-600 shadow-md shadow-red-600 hover:bg-red-600 font-semibold rounded-lg mt-10 animate-fadeInUp">Send message</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    );
};

export default Contact;