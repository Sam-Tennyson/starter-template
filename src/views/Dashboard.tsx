import React from "react";
import { getDataFromLocalStorage } from "../shared/Utilies";
import { useGlobalStore } from "../zustandStore/store";

const Dashboard: React.FC = () => {
  const { setToken, token, userData } = useGlobalStore();
  const data = {
    token: "123",
    userData: {
      name: "test",
    },
  };
  const toggle = () => {
    const { state } = getDataFromLocalStorage();
    console.log(state, token, userData);
    if (token) {
      setToken("");
      return;
    }
    setToken(data?.token);
  };
  return (
    <>
      <button className="btn" onClick={toggle}>
        Click Me!
      </button>
      Dashboard
    </>
  );
};

export default Dashboard;
