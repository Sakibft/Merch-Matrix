import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './providers/AuthProviders';

const Login = () => {
    const {signIn} = useContext(AuthContext)
 const navigate = useNavigate();
   const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email,password);
    signIn(email,password)
    .then(result => {
        const user = result.user;
        console.log(user);
      navigate('/')
    })
   }





    return (
        <div>
               <div className="flex  items-center justify-center md:p-0 ">
                <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%] dark:bg-zinc-900">
                    <h2 className="pb-8 text-center text-3xl font-semibold tracking-tight ">Sign In</h2>
                    <form onSubmit={handleLogin} className="flex w-full flex-col items-center justify-center gap-4">
                        <input
                            className="w-[80%] rounded-lg border border-black  bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-1 focus:ring-black  md:w-[60%] dark:text-zinc-400"
                            type="email"
                            placeholder="Email"
                            name="email"
                        />
                        <input
                            className="w-[80%] rounded-lg border border-black bg-transparent py-2 pl-4 text-zinc-600 focus:outline-none focus:ring-1 focus:ring-black md:w-[60%] dark:text-zinc-400"
                            type="password"
                            placeholder="Password"
                            name="password"
                        />
                        <p className="text-[14px] text-gray-400">
                            Do not have an account ? <Link to={'/register'} className="text-black underline">Create one</Link>
                        </p>
                        <button className="uppercase w-[80%] rounded-lg bg-black px-6 py-2 font-medium text-white outline-none hover:bg-black md:w-[60%]" type="submit">
                            Submit
                        </button>
                    </form>
                    {/* divider  */}
                    <div className="my-8 flex items-center px-8">
                        <hr className="flex-1 border-black" />
                        <div className="mx-4 text-black">OR</div>
                        <hr className="flex-1 border-black" />
                    </div>
                    {/* sign with google */}
                    <button className="group mx-auto flex h-[50px] w-fit items-center overflow-hidden rounded-full shadow-md outline-none ring-1 ring-blue-400">
                        <div className="relative z-20 flex h-full items-center bg-black px-4 text-lg text-white duration-300 group-hover:bg-transparent group-hover:text-black">
                            Signin with
                        </div>
                        <span className="flex h-full items-center px-4 text-xl font-bold text-black duration-300 group-hover:bg-black group-hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="size-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                        </span>
                    </button>
                </div>
        
        </div>
        </div>
    );
};

export default Login;