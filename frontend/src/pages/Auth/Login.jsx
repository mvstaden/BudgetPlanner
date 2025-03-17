import { Link } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import AuthLayout from "../../layouts/AuthLayout";

const Login = () => {
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Please enter your details to log in
        </p>
        <form>
          <Input
            label="Email Address"
            placeholder="marius@example.com"
            type="email"
            value="Email"
            onChange={() => {}}
          />
          <Input
            label="Password"
            placeholder="marius@example.com"
            type="password"
            value="Email"
            onChange={() => {}}
          />
          {/* Error handle */}

          {/* Button */}
          <button type="submit" className="btn-primary">
            Login
          </button>
          <p className="text-[14px] text-slate-800 mt-3">
            Don't have an account?
            <Link to="/signup" className="font-medium text-primary underline">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};
export default Login;
