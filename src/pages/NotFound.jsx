import {
    Link,
    } from "react-router-dom";
   function NotFound(){
    return (
    <>
    <div class="container">
    <div class="row justify-content-center">
    <div class="col-lg-6">
    <div class="text-center mt-4">
    <img class="mb-4 img-error" src="https://cdn-iconspng.flaticon.com/512/1548/1548682.png" />
    <p class="lead">This requested URL was not found on this
   server.</p>
    <a href="index.html">
    <Link to="/">
    Regresar al Inicio
    </Link>
    </a>
    </div>
    </div>
    </div>
    </div>
    </>
    )
   }
   export default NotFound
   