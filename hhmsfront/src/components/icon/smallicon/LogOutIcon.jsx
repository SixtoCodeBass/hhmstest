import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const LogOutIcon= () => {
  return (
    <div className="hover:bg-gray-200 w-40 text-center  rounded-lg m-1 hover:cursor-pointer p-3 ">
      <FontAwesomeIcon
        icon={faRightFromBracket}
        className="hover:text-blue-800 text-3xl text-[#213350] mb-2"
      />
      <h3 className="text-[#213350] font-semibold">LogOut</h3>
    </div>
  );
};
