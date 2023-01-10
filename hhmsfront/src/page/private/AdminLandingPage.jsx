import { AdminDashboardIcon } from "../../components/icon/bigicon/AdminDashboardIcon";
import { AssignRoomIcon } from "../../components/icon/bigicon/AssignRoomIcon";
import { ProductionIcon } from "../../components/icon/bigicon/ProductionIcon";
import { ScheduleIcon } from "../../components/icon/bigicon/ScheduleIcon";
import { StatusRoomIcon } from "../../components/icon/bigicon/StatusRoomIcon";
import { WorkedHoursIcon } from "../../components/icon/bigicon/WorkedHoursIcon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import { LogOutIcon } from "../../components/icon/smallicon/LogOutIcon";

export const AdminLandingPage = () => {
  return (
    <>
      <header className="flex justify-end">
        <LogOutIcon />
      </header>
      <div className=" h-screen">
        <div className="mb-20 gap-y-14 mx-20 mt-20 grid grid-cols-1   sm:grid-cols2 md:grid-cols-3 lg:grid-cols-3  ">
          <div className="mx-auto">
            <ScheduleIcon />
          </div>
          <div className="mx-auto">
            <ProductionIcon />
          </div>

          <div className="mx-auto">
            <WorkedHoursIcon />
          </div>

          <div className="mx-auto">
            <AssignRoomIcon />{" "}
          </div>
          <div className="mx-auto">
            <StatusRoomIcon />
          </div>
          <div className="mx-auto">
            <AdminDashboardIcon />
          </div>
        </div>

        <footer className=" bg-[#213350] p-2 h-screen">
          <div className="text-white text-4xl text-center p-2 my-2">
            <FontAwesomeIcon
              icon={faFacebook}
              className="mx-6 hover:cursor-pointer hover:text-blue-400 "
            />
            <FontAwesomeIcon
              icon={faTwitter}
              className="mx-6 hover:cursor-pointer  hover:text-blue-400 "
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="mx-6 hover:cursor-pointer  hover:text-blue-400 "
            />
            <FontAwesomeIcon
              icon={faGoogle}
              className="mx-6 hover:cursor-pointer hover:text-blue-400 "
            />
          </div>
          <div className="p-2 text-center text-white ">
            <p className="text-xl font-semibold p-2">
              {" "}
              Carriage House Hotel & Conference Centre
            </p>
            <p className=" text-sm font-light p-1">
              9030 Macleod Trail South, Calgary Alberta, Canada T2H 0M4
            </p>
            <p className=" text-sm font-light ">
              Toll Free: 800.661.9566 | Direct: 403.253.1101
            </p>
            <p className=" text-sm font-light ">
              Email: hotelinfo@carriagehouse.net
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
