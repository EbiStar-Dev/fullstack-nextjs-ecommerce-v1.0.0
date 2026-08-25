import bcrypt from "bcryptjs";
import React, { useState } from "react";
export function useRegisterEmail(){
      const [changehandleRegister, setChangeHandleRegister] = useState({});
  const [UserRegister, setUserRegister] = useState({});
   const changehandle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setChangeHandleRegister({
      ...changehandleRegister,
      [e.target.name]: e.target.value,
    });
  };
   const RegisterForm = (e) => {
    e.preventDefault();

    const saltRounds = 10;
  const hashPassword = bcrypt.hashSync(changehandleRegister["password"],saltRounds)
  const user = {
    ...changehandleRegister,password:hashPassword
  }
    localStorage.setItem("RegisterUser",JSON.stringify(user));
    alert("ثبت نام با موفقیت انجام شد!");
    setChangeHandleRegister({})
  };
  return{changehandle,RegisterForm}
}