'use client'
import React, { useState } from 'react';
import { toast } from 'react-toastify';
const ForgotPassword = () =>
{
    const [email, setUserEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handlePasswordReset = async (e) =>
    {
        try
        {
            setLoading(true);
            e.preventDefault();
            const data = { email };
            const response = await axios.post(`${serverUrl}/forgotPassword`, data);
            toast.success('Password reset link is sent to your Mail');
        } catch (error)
        {
            toast.error('Something went wrong');
        } finally
        {
            setLoading(false);
        }
    };


    return (
        <>
            <section className="  ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full p-6 bg-white rounded-lg shadow md:mt-0 sm:max-w-md sm:p-8">
                        <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Reset Password
                        </h2>
                        <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handlePasswordReset}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setUserEmail(e.target.value)}
                                    placeholder="input your Email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                                    required
                                />
                            </div>
                            <button
                                disabled={loading}
                                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                            >
                                {loading ? (
                                    'Loading...'
                                ) : (
                                    <>
                                        <span>Reset password</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ForgotPassword;
