import { createContext } from "react";
import { useContext } from "react";
import { useReducer } from "react";
import axios from "axios";
import { AuthReducer } from "../reducer/auth-reducer";
import { useState } from "react";
import { useToast } from "./toast-context";

const AuthContext = createContext();

const useAuth = () => useContext(AuthContext);
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(AuthReducer, { token: null });
  const { toastVal, setToastVal } = useToast();
  

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = async () => {
    try {
        // console.log(formData.email)
        // console.log(formData.password)
      const userData = await axios.post("/api/auth/login", {
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", userData.data.encodedToken);
      authDispatch({ type: "LOG_IN", payload: userData.data.encodedToken });
      console.log(localStorage.getItem("token"))
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: `Login Successfully! Welcome ${userData.data.foundUser.firstName} ${userData.data.foundUser.lastName} !!`,
        select: "success-alert",
        isDisplay: "visible",
      }));
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
    } catch (error) {
      if(error.response.status === 404)
      {
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "User not found!!",
        select: "error-alert",
        isDisplay: "visible",
      }));
    }
    else if(error.response.status === 401){
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Unauthorized",
        select: "error-alert",
        isDisplay: "visible",
      }));
    }
    else if(error.response.status === 422){
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Please enter valid email",
        select: "error-alert",
        isDisplay: "visible",
      }));
    }
    else{
      setToastVal((prevVal) => ({
        ...prevVal,
        msg: "Something gone wrong!!",
        select: "error-alert",
        isDisplay: "visible",
      }));
    }
      setTimeout(() => {
        setToastVal((prevVal) => ({
          ...prevVal,
          isDisplay: "hidden",
        }));
      }, 2000);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
        loginHandler,
        changeHandler,
        formData,
        setFormData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export { AuthProvider, useAuth };