import  './index.css'
import img1 from  '../src/images/charlesdeluvio-pjAH2Ax4uWk-unsplash.jpg'
import img2 from  '../src/images/clement-helardot-95YRwf6CNw8-unsplash.jpg'
import img3 from  '../src/images/florian-olivo-4hbJ-eymZ1o-unsplash.jpg'
import img4 from  '../src/images/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg'


function Container(){
    return(
           <>
            <div class="recommended">
        <h1 class="recommeneded__title">
        Recommended For you</h1>
       <p class="recommeneded__title__s2">Pick the best fit</p>
        
        <div class="recommened__container">
            <div class="course_card">
                <img src={img1} alt="loading"/>
                <h3>2023 Python Data Visualization Masterclass</h3>
                <p>Trafalgar law</p>
                <p>4.5⭐⭐⭐⭐</p>
                <p>$499   <del>$1999</del></p>
                
            </div>
            <div class="course_card">
                <img src={img2} alt="loading"/>
                <h3>Basic to Advance programming in Rajini++</h3>
                <p>Dragon</p>
                <p>3.8⭐⭐⭐</p>
                <p>$299   <del>$999</del></p>
                
            </div>
            <div class="course_card">
                <img src={img3} alt="loading "/>
                <h3>Web Development Bootcamp 2023</h3>
                <p>Nahida </p>
                <p>4.0⭐⭐⭐⭐</p>
                <p>$999   <del>$4999</del></p>
                
            </div>
            <div class="course_card">
                <img src={img4} alt="loading"/>
                <h3>Master UI\UX Designing With Figma</h3>
                <p>Raiden Shonen</p>
                <p>4.9⭐⭐⭐⭐⭐</p>
                <p>$1499   <del>$6999</del></p>
                
            </div>
        </div>
    </div>
           </>

    )

}
export default Container