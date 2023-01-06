import { Link } from "react-router-dom";
import axiosClient from "../../config/axios";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import Alert from "../../components/Alert";


const login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
   //const test = {userName, password}
   //console.log(test)
    if ([username, password].includes("")) {
      setAlert({
        msg: "Username and Password is required",
        error: true
      });
      return;
    }
    try {
      const { data } = await axiosClient.post("public/managerlogin",
      {
         
         username,
         password
      });
      console.log(data);
    } catch ({response}) {
         setAlert({
        msg: response.data.message,
        error: true
      });
    }
  };

  const { msg } = alert;
  return (
    <>
      <div className="text-center">
        <h1 className="text-[#213350] font-black text-4xl">
          HOTEL HOUSEKEEPING <br></br>
          <span className="text-blue-900"> MANAGEMENT SYSTEM</span>
        </h1>
      </div>
      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
       {msg && <Alert alert={alert} />}

        <form onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg "
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-lg "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="LOGIN"
            className="bg-[#213350] w-full py-3 px-20 rounded-lg
           text-white uppercase font-bold mt-5 hover:cursor-pointer
           hover:bg-blue-900 "
          />
        </form>
        <nav className="mt-10 ">
          <Link
            className="block text-center my-5 text-gray-500 font-bold "
            to="/forgot-password"
          >
            Forgot my Password
          </Link>
        </nav>
      </div>
    </>
  );
};

export default login;
