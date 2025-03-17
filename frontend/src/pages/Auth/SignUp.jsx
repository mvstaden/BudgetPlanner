import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/ProfilePhotoSelector";
import AuthLayout from "../../layouts/AuthLayout";

const SignUp = () => {
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-medium text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Joinus today by entering your details below.
        </p>
        <form>
          <ProfilePhotoSelector />
          <Input
            label="Full Name"
            value="Marius"
            onChange={() => {}}
            placeholder="Marius"
            type="text"
          />
        </form>
      </div>
    </AuthLayout>
  );
};
export default SignUp;
