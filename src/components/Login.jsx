import React from 'react';
import Navigation from './Navigation';
import estilos from '../estilos/estilos.css';
import Login from '../components/img/login.png';

export default function login(){
    return(
    
<div>
<body class="text-center">
<main class="form-signin w-100 m-auto">
<div class="col-md-10 mx-auto col-lg-5">
        <form class="p-4 p-md-5 border rounded-3 bg-light">
        <img class="mb-4" src={Login} alt="" width="200" height="200"/>
    <h1 class="h3 mb-3 fw-normal">Porfavor inicia sesión</h1>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">Correo Electronico@</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Password</label>
          </div>
          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me"/> Recordar usuario
            </label>
          </div>
          <a href="/inicio" class="w-100 btn btn-lg btn-primary">Inicia Sesión</a>
          <hr class="my-4"/>
          <small class="text-muted">Aceptas términos y condiciones al iniciar sesión.</small>
        </form>
      </div>
</main>
</body>

        </div>
    )
}