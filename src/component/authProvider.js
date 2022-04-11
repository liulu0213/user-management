import {createContext, useContext, useState} from 'react';
import { apis } from "../config/config";
import { fetchData } from "../utils/querydata";

let AuthContext=createContext(null);

export default function AuthProvider({children}){
  const [user,setUser]=useState(null);
  const signin=async (user)=>{
    const {login} = apis;
    const data = new URLSearchParams();
    for (const [key, value] of Object.entries(user)) {
      data.append(key, value);
    }
    const result = await fetchData({
      url: login["url"],
      opts: { ...login["opts"], body: data },
    });
    const loginUser = {
      email: user.email,
      token: '',
      status: ''
    };
    if(result?.token){
      loginUser.status='success';
      loginUser.token=result.token
      setUser(loginUser);
    }else{
      loginUser.status=result?.error;
    }
    return loginUser
  }
  const signout=()=>{
    setUser(null);
  }
  const signup=async (user)=>{
    const { register } = apis;
    const data = new URLSearchParams();
    for (const [key, value] of Object.entries(user)) {
      data.append(key, value);
    }
    const result = await fetchData({ url: register["url"], opts: { ...register["opts"], body: data } });
    const newUser = {
      email: user.email,
      firstname: user.firstname,
      lastname: user.lastname,
      id: '',
      token: '',
      status: ''
    };
    if(result?.token){
      newUser.status='success';
      newUser.id=result.id;
      newUser.token=result.token;
      setUser(newUser);
    }else{
      newUser.status=result.error;
    }
    return newUser
  }
  const value={user,signin,signout,signup};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider> ;
}

export function useAuth(){
  return useContext(AuthContext);
}
