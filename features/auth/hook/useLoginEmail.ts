import bcrypt from "bcryptjs";
import { useState } from "react";

export function useLoginEmail() {
    const [changeUser, setChangeUser] = useState({});

    const changehandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChangeUser({
            ...changeUser,
            [e.target.name]: e.target.value
        })
    }
    const SubmitData = (e) => {
        e.preventDefault();
        const user = localStorage.getItem("RegisterUser");
        const UsertoJson = JSON.parse(user)
        if(UsertoJson["email"] == changeUser["email"]){
            const isPassword = bcrypt.compareSync(changeUser["password"],UsertoJson["password"]);
            if(!isPassword){
                alert("رمز عبور اشتباست!!!!")
            }else{
                alert("ورود موفقیت‌آمیز بود!");
            }
        }else{
            alert("اطلاعات ورود نادرست است!")
        }
    }
    return { changehandle, SubmitData }
}