import { LuTrash, LuUpload, LuUser } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  
  return (
    <div className="flex justify-center mb-6">
      <input type="file" accept="image/*" className="hidden" />

      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center bg-cyan-100 rounded-full relative">
          <LuUser className="text-4xl text-primary" />
          <button className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1">
            <LuUpload />
          </button>
        </div>
      ) : (
        <div>
          <img
            src={""}
            alt="profile photo"
            className="h-20 w-20 rounded-full object-cover"
          />
          <button
            type="button"
            className="h-8 w-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1"
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  );
};
export default ProfilePhotoSelector;
