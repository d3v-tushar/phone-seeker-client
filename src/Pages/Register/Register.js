import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
//import { getUserToken } from "../../CustomHook/JwtToken";
import { useTitle } from "../../CustomHook/useTitle";
import useToken from "../../CustomHook/useToken";


const Signup = () => {
  useTitle("Register - ")
  const { newUserRegister, signInWithGoogle, updateUser } =
    useContext(AuthContext);
  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const navigate = useNavigate();
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [token] = useToken(createdUserEmail);

  if(token){
    navigate('/');
  }


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const role = form.accountType.value;
    console.log(name, email, password, role);

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

    newUserRegister(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast('Account Created Successfully');
        const userInfo = {
          displayName: name
        };
        updateUser(userInfo)
        .then(() => {})
        .catch(error => console.error(error))
        setError(false);
        form.reset();
        setSuccess(true);
        saveUser(name, email, role)
      })
      .catch((error) => {
        console.error(error.message);
        setPasswordError(error.message);
      });
  };

  //Google SignIn
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
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
      setCreatedUserEmail(email);
    })
  };

  const handleTerms = (e) => {
    setAcceptTerms(e.target.checked);
  };
  return (
    <div className="w-full mx-auto max-w-lg p-4 rounded-md shadow mt-4 sm:p-8 bg-gray-900 text-gray-100">
      <h2 className="mb-2 text-3xl font-semibold text-center">
                Please Register!
            </h2>

        {error && (
          <div className="alert alert-error shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{passwordError}</span>
            </div>
          </div>
        )}

        {success && (
          <div className="alert alert-success shadow-lg">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Account Created Successfully!</span>
            </div>
          </div>
        )}
      <form onSubmit={handleRegister} className="card-body">
<div className="form-control">
  <label className="label">
    <span className="label-text text-white">Name</span>
  </label>
  <input
    type="text"
    placeholder="name"
    name="name"
    required
    className="input input-bordered text-black"
  />
</div>

<div className="form-control">
  <label className="label">
    <span className="label-text text-white">Email</span>
  </label>
  <input
    type="email"
    placeholder="email"
    name="email"
    required
    className="input input-bordered text-black"
  />
</div>
<div className="form-control">
  <label className="label">
    <span className="label-text text-white">Password</span>
  </label>
  <input
    type="password"
    placeholder="password"
    name="password"
    required
    className="input input-bordered text-black"
  />
{/* Buyer - Seller Account Type Selection */}
<h3 className="label-text text-white mt-4 mb-1">Select Account Type</h3>
<select name="accountType" className="select select-primary w-full mb-3 text-black">
  <option className="text-md font-semibold" defaultValue={'Buyer'}>Buyer</option>
  <option className="text-md font-semibold">Seller</option>
</select>

  <label className="label">
    <Link to="/login" className="label-text-alt link link-hover text-white">
      Already have a account?
    </Link>
  </label>
</div>

<div className="flex items-center ">
  <input
    onClick={handleTerms}
    id="link-checkbox"
    type="checkbox"
    value=""
    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
  />
  <label
    htmlFor="link-checkbox"
    className="ml-2 text-sm font-medium text-gray-900 dark:text-white"
  >
    I Accept{" "}
    <a
      href="/home"
      alt="t&C"
      className="text-blue-600 dark:text-blue-500 hover:underline"
    >
      Terms & Conditions
    </a>
    .
  </label>
</div>

<div className="form-control mt-2">
  <button className="btn btn-primary text-white" disabled={!acceptTerms}>
    Create Account
  </button>
</div>
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

export default Signup;