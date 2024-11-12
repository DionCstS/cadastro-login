import React from 'react'
import './LoginForm.css';

export const LoginForm = () => {
  return (
    <div className='wrapper'>
        <form action="">

            <h1>Login</h1>

            <div className="input-box">
                <input type="text" placeholder='Usuario'/>
            </div>

            <div className="input-box">
                <input type="text" placeholder='Usuario'/>
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
