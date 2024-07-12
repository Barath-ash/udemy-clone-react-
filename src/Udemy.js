import  './index.css'


function One(){
    return(
        <div class="navbar">

        <div class="navbar__s1">
            <h1 class="navbar__s1__title">Udemy </h1>
        </div>

        <div class="navbar__s2">
            <i class="fa-solid fa-magnifying-glass" style={{color: "#000000"}}></i>
            <input type="text" placeholder="Search for anything here. Tech, Business, Art ..."/>
        </div>


        <div class="navbar__s3">
           <p>Courses</p>
           <div class="learning">
            <p>My Learning</p>
        <p class="learning__para">You did not purchase anything yet </p>
        </div>
           
           <i class="fa-solid fa-cart-shopping" style={{color: "#000000"}}></i>
           <i class="fa-solid fa-bell" style={{color: "#000000"}}></i>
           <i class="fa-solid fa-user" style={{color: "#000000"}}></i>
        </div>
         <div class="nomie">  
           
              <i class="fa-solid fa-bars"></i> 
        </div>
    </div>
    )
}
export default One