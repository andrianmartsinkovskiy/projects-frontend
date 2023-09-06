import React, {useContext} from 'react'
import c from './style.module.css'
import { AiOutlineProject } from 'react-icons/ai';
import {AuthContext, IAuthToken} from "../../context/auth.context";
import jwtDecode from "jwt-decode";
import {BiLogOut} from "react-icons/bi";

const Navbar = () => {
  const {token, logout} = useContext(AuthContext)
  // @ts-ignore
  const {name} = jwtDecode<IAuthToken>(token)



  return (
    <div className={c.wrap}>
      <div className={c.name}>
        <AiOutlineProject className={c.logo} />
        <h2 className={c.title}>Projects</h2>
      </div>

      <div className={c.bar}>
        <span className={c.userName}>{name}</span>
        <BiLogOut className={c.logout} onClick={() => logout()} />
      </div>
    </div>
  )
}

export {
  Navbar
}