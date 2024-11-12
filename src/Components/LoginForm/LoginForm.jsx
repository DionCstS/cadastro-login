import React from 'react'
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">

            <h1>Login</h1>

            <div className="input-box">
                <input type="text" placeholder='Usuario' required/>
                <FaUser />
            </div>

            <div className="input-box">
                <input type="password" placeholder='Senha' required/>
                <FaLock />
            </div>

            <div className="remember-forgot">
              <label><input type="checkbox" />Lembrar-me</label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button type="submit">Login</button>

            <div className="register-link">
              <p>Não tem uma Conta?<a href="#">Registrar</a></p>
            </div>


        </form>
    </div>
  )
}
