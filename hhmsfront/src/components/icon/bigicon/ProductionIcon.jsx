import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

export const ProductionIcon = () => {
  return (
    <div className="hover:bg-gray-200 w-48 text-center p-1 rounded-sm mt-1 hover:cursor-pointer mx-auto ">
      <FontAwesomeIcon
        icon={faScrewdriverWrench}
        className="hover:text-blue-800 text-9xl text-[#213350] mb-2"
      />
      <h3 className="text-[#213350] font-semibold">Production</h3>
    </div>
  );
};
