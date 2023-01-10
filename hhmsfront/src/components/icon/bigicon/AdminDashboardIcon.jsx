import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";

export const AdminDashboardIcon= () => {
  return (
    <div className="hover:bg-gray-200 w-48 text-center p-1 rounded-lg m-1 hover:cursor-pointer mx-auto ">
      <FontAwesomeIcon
        icon={faUserShield}
        className="hover:text-blue-800 text-9xl text-[#213350] mb-2"
      />
      <h3 className="text-[#213350] font-semibold">Admin Dashboard</h3>
    </div>
  );
};
