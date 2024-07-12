import  './index.css'
import img4 from './images/C1.jpg'
import img5 from './images/C2.jpg'
import img6 from './images/C3.jpg'
import img7 from './images/C4.jpg'
import img8 from './images/C5.jpg'
import img9 from './images/C6.jpg'
import img10 from './images/C7.jpg'
import imG11 from './images/C8.jpg'


function Content(){

    return(
      <>
      <div class="popular">
    <h1 class="popular__title">
   Most popular
    </h1>
    <p class="popular__subtitle">Pick your fit</p>
    <div class="popular__container">
        <div class="course_card">
            <img src={img4} alt=""/>
            <h3>2023 Data Analytics Masterclass </h3>
            <p>Zoro</p>
            <p>4.7⭐⭐⭐⭐</p>
            <p>$2499   <del>$5999</del></p>
            
        </div>
        <div class="course_card">
            <img src={img5} alt=""/>
            <h3>Basic to Advance programming in c++</h3>
            <p>Ace</p>
            <p>4.6⭐⭐⭐⭐</p>
            <p>$1299   <del>$1999</del></p>
            
        </div>
        <div class="course_card">
            <img src= {img6} alt=""/>
            <h3>Data Science Masterclass 2023</h3>
            <p>Doffy</p>
            <p>3.0⭐⭐⭐</p>
            <p>$9999   <del>$4999</del></p>
            
        </div>
        <div class="course_card">
            <img src={img7} alt=""/>
            <h3> Cyber Security from beginner to Master </h3>
            <p>Kaido</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>$1499   <del>$6999</del></p>
            
        </div>
        <div class="course_card">
            <img src={img8} alt=""/>
            <h3>2023 Prompt Engineer Masterclass</h3>
            <p>Crozan</p>
            <p>4.8⭐⭐⭐⭐</p>
            <p>$499   <del>$1999</del></p>
            
        </div>
        <div class="course_card">
            <img src={img9} alt=""/>
            <h3>Beginner Cloud Computing Bootcamp 2023</h3>
            <p>Lumine</p>
            <p>2.8⭐⭐</p>
            <p>$399   <del>$799</del></p>
            
        </div>
        <div class="course_card">
            <img src={img10} alt=""/>
            <h3>Basic to Advance programming in Java</h3>
            <p>Aether </p>
            <p>4.4⭐⭐⭐⭐</p>
            <p>$499   <del>$1999</del></p>
            
        </div>
        <div class="course_card">
            <img src={imG11} alt=""/>
            <h3>Master Graphic Desgin With Adobe</h3>
            <p>Childe</p>
            <p>4.0⭐⭐⭐⭐</p>
            <p>$1499   <del>$7999</del></p>
            
        </div>
    </div>
</div>
      </>
    )

}
export default Content