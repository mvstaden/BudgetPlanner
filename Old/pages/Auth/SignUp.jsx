import { useState } from "react";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/ProfilePhotoSelector";
import AuthLayout from "../../layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  };
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-medium text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Joinus today by entering your details below.
        </p>
        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 ">
            <Input
              label="Full Name"
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              placeholder="Marius"
              type="text"
            />
            <Input
              label="Email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              placeholder="marius@m.com"
              type="email"
            />
            <div className="lg:col-span-2">
              <Input
                label="Password"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                type="password"
                placeholder="Min 8 characters"
              />
            </div>
          </div>

          <button className="btn-primary" type="submit">
            Sign Up
          </button>
          <p className="text-[14px] text-slate-800 mt-3">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-primary underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
