import  './index.css'
import one from  '../src/images/SALE-IMAGE.jpg'

function Navbar(){

    return(
        <>
        
        <div class="categories">
        <p>Development</p>
        <p>Business</p>
        <p>IT & Software</p>
        <p>Personal Development</p>
        <p>Design</p>
        <p>Marketing</p>
    </div>

    <div class="sale-image">
        <img src={one} alt="one"/>
        <div class="page">
            <h2><b>Udemy Flash Sale! 24 hour to save.</b></h2>
            <p>Get the top Courses for just 499. Just one day to save but a lifetime to learn</p>
        </div>
    </div>
        
        </>
       
    )
}

export default Navbar 