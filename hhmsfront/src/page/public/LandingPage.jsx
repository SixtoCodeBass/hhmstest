import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
    <div>
    <h1 className="text-[#213350] font-black text-4xl text-center">
          HOTEL HOUSEKEEPING 
          
        </h1>
    </div>
       <div>
       <h1 className="text-blue-800 font-black text-4xl text-center"> MANAGEMENT SYSTEM</h1>
       </div>
     <div className="mt-10">
     <div className="card bg-white shadow-md rounded-lg overflow-hidden">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-[#213350]">Employee Access</div>
      <p className="text-gray-700 text-base">
      A system that allows housekeeping staff to view the current occupancy 
      status of each room and assigned rooms to be cleaned or serviced.
      Janitorial and Laundry staff access to schedule and daily task
      </p>
    </div>
    <div className="px-6 py-4">
    <Link to="/soft-login">
      <button className="btn bg-[#213350] text-white font-bold py-2 px-4 rounded-full w-full uppercase">Login</button>
      </Link>
    </div>
  </div>
     </div>
     <div className="mt-10">
     <div className="card bg-white shadow-md rounded-lg overflow-hidden">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2 text-blue-900">Manager Access</div>
      <p className="text-gray-700 text-base">
      Workforce management: A system that helps managers schedule and assign tasks to housekeeping staff, 
      track employee attendance and performance, monitor and calculate labour cost.
      </p>
    </div>
    <div className="px-6 py-4">
        <Link to="/login">
      <button className="btn bg-blue-900 text-white font-bold py-2 px-4 rounded-full w-full uppercase">Login</button>
      </Link>
    </div>
  </div>
     </div>

     

  
    </>
  );
};

export default LandingPage;
