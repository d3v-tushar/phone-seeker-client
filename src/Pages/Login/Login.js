import React, { useState } from "react";
  import { toast } from 'react-toastify';
import { useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useToken from "../../CustomHook/useToken";

const Login = () => {
  const { signInExistingUser, signInWithGoogle } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [passwordError, setPasswordError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState('');
  const [token] = useToken(loginUserEmail);
  const [error, setError] = useState(false);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if(token){
    navigate(from, { replace: true });
  };

  //Email Password Login
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //Password Validation (Regular Expression)
    if (!/(?=.*[A-Z])/.test(password)) {
      setPasswordError("Please provide atleast one uppercase.");
      setError(true);
      return;
    }
    if (password.length < 8) {
      setPasswordError("Password should be atleast 8 characters.");
      setError(true);
      return;
    }
    if (!/(?=.*[!@#$%*])/.test(password)) {
      setPasswordError("Please use atleast 1 special character.");
      setError(true);
      return;
    }
    signInExistingUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(user.email);
        
      })
      .catch((error) => {
        console.error(error.message);
        setPasswordError(error.message);
        toast.error(error.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
      });
  };

  //Google Sign in
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(user.email);
        saveUser(user.displayName, user.email, 'Buyer');
      })
      .catch((error) => console.error(error.message));
  };

 //Save User Info To DB
 const saveUser = (name, email, role) =>{
  const user = {name, email, role};
  fetch('https://phone-seeker-server.vercel.app/users', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .then(data =>{
    console.log(data);
    setLoginUserEmail(email);
  })
};

  return (
    <div className="w-full mx-auto max-w-md p-4 my-5 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">
        Login to your account
      </h2>
            {
                error && 
                    <div className="alert alert-error shadow-lg">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <span>{passwordError}</span>
                    </div>
                    </div>
            }
      <form
        onSubmit={handleSubmit}
        action=""
        className="space-y-8 ng-untouched ng-pristine ng-valid"
      >
        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="your@email.com"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <a
                rel="noopener noreferrer"
                href="/"
                className="text-xs hover:underline text-gray-400"
              >
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900"
        >
          Login
        </button>
        <p className="text-sm text-center text-gray-400">
        Dont have account?
        <Link to={"/register"}> Register here</Link>
      </p>
      </form>

      <div className="flex items-center w-full my-4">
        <hr className="w-full text-gray-400" />
        <p className="px-3 text-gray-400">OR</p>
        <hr className="w-full text-gray-400" />
      </div>

      <div className="my-6 space-y-4">
        <button
        onClick={handleGoogleSignIn}
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p>Login with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;