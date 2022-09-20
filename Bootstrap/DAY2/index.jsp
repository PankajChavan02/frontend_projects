<%@page import="java.time.LocalTime"%>
<%@page import="java.time.Period"%>
<%@page import="java.time.LocalDate"%>
<%@page import="java.time.format.DateTimeFormatter"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Java Mini Project</title>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
 
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
    <script 
        src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" 
        crossorigin="anonymous">
    </script>
    <style>
        .navbar:hover{
            color: white;
        }
        
         *{
          box-sizing: border-box;
        }
      a:{
            color:white;
        
        }
      #img1
      {
      height:550px;
      width:100px;
      }
       
              
    </style>    
</head>
<body>
    <div class="container-fluid">

    
    <div class="row navigation ">
        <nav class="navbar  navbar-expand-lg navbar-dark bg-dark" aria-labelledby="nav-area">
            <div class="row w-100">
           <div class="col-md-1  ">               
            <img src="sports-club-logo.jpeg" alt="logo not found" width="70px">
          
              </div>
              <div class="col-md-4 text-center ">
                <strong style="color: white; font-size: 30px; font-style:italic;">Deccan Sports Club</strong>
              </div>
            <div class="col-md-7 ">                
            <ul class="navbar-nav justify-content-end mt-2 ">
                <li class="nav-item"><a class="nav-link mr-2 " href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link mr-2" href="">About Us</a></li>
                <li class="nav-item"><a class="nav-link mr-2" href="">Contact Us</a></li>
               
            <a href="loginform.jsp">   <button style="height: 30px;" class="btn btn-primary rounded-1 btn-sm mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                      </svg>                   
                LogIn</button></a>
                
            </ul>
           
        </div>
    </div>
        </nav>

  
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img  id="img1" src="sports1.jfif" class="d-block w-100" alt="image not found" >
    </div>
    <div class="carousel-item">
      <img id="img1" src="sports3.jpg" class="d-block w-100" alt="image not found">
    </div>
    <div class="carousel-item">
      <img id="img1" src="sports4.jpg" class="d-block w-100" alt="image not found">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     
                 
                  
  
 

     <div class="row fixed-bottom">
      <footer class="page-footer font-small">        
          <div class="footer-copyright text-center pb-2 pt-2 bg-dark " style="color: blanchedalmond;">© 2020 Copyright:
              <a style="color: blanchedalmond;" href="https://mdbootstrap.com/" > Deccan Sports Club</a>
          </div>     
      </footer>

    </div>
    </body>
</html>