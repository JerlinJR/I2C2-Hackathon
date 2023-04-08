import React from 'react'
import '../Advisor.css'
import Logo from '../assets/logo.png'
import Advisor1 from '../assets/advisor/AdvisorProfile1.png'
import Advisor2 from '../assets/advisor/AdvisorProfile2.png'
import Advisor3 from '../assets/advisor/AdvisorProfile3.png'
import Advisor4 from '../assets/advisor/AdvisorProfile4.png'
import Advisor5 from '../assets/advisor/AdvisorProfile5.png'
import Advisor6 from '../assets/advisor/AdvisorProfile6.png'
import Advisor7 from '../assets/advisor/AdvisorProfile7.png'
import Advisor8 from '../assets/advisor/AdvisorProfile8.png'

export default function Advisor(){
    return(
        <>

            <div class='advisor'>
                <div class="title">
                    <h1>Advisors</h1>
                </div>
            <div class='row1'>
            <div class="row">
            <div class="column">
                <div class="card">
                    <div class="image-bg"></div>
                    <div class="linkedin"> <h1>in</h1></div>
                    <img src={Advisor1}/>
                <h3>Jeff Hoffman</h3>
                <p>Global Enterpreneur,</p>
                <p>Founder Priceline.com</p>
                </div>
            </div>

            <div class="column">
                <div class="card">
                <div class="image-bg"></div>
                    <div class="linkedin"> <h1>in</h1></div>
                    <img src={Advisor2}/>
                <h3>Donald Betts</h3>
                <p>president and co-founder of</p>
                <p>north american lawyer alliance</p>
                </div>
            </div>
            
            <div class="column">
                <div class="card">
                <div class="image-bg"></div>
                    <div class="linkedin"> <h1>in</h1></div>
                    <img src={Advisor3}/>
                <h3>Lori Hotz</h3>
                {/* <p>Global Enterpreneur,</p> */}
                <p>Co-Founder - Lobus</p>
                </div>
            </div>
            
            <div class="column">
                <div class="card">
                <div class="image-bg"></div>
                    <div class="linkedin"> <h1>in</h1></div>
                    <img src={Advisor4}/>
                <h3>Richard Swart</h3>
                <p>Ex-Director, UC</p>
                <p>Berkeley</p>
                </div> 
             </div>
            </div>
            </div> 
            <div class="row2">
            <div class="row">
            <div class="column">
                <div class="card">
                    <div class="image-bg"></div>
                    <div class="linkedin"> <h1>in</h1></div>
                    <img src={Advisor5}/>
                <h3>Apurva Chamaria</h3>
                <p>Head of partnership solution</p>
                {/* <p>google venture capital</p> */}
                </div>
            </div>

            <div class="column">
                <div class="card">
                <div class="image-bg"></div>
                    <div class="linkedin"> <h1>in</h1></div>
                    <img src={Advisor6}/>
                <h3>Ibrahim AI Balooshi</h3>
                <p> Director of</p>
                <p>fundraising at AI Jalila Foundation</p>
                </div>
            </div>
            
            <div class="column">
                <div class="card">
                <div class="image-bg"></div>
                    <div class="linkedin"> <h1>in</h1></div>
                    <img src={Advisor7}/>
                <h3>Didier Drogba</h3>
                <p>Football Legend,</p>
                <p>&amp Humanitarian</p>
                </div>
            </div>
            
            <div class="column">
                <div class="card">
                <div class="image-bg"></div>
                    <div class="linkedin"> <h1>in</h1></div>
                    <img src={Advisor8}/>
                <h3>David Marshall</h3>
                <p>Co-Founder,</p>
                <p>Marshland Capital</p>
                </div> 
             </div>
            </div>
            </div>
            </div>

        </>
    )
}