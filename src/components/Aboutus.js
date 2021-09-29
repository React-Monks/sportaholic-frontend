
import React from "react";


import shaimaa from "../components/img/shaimaa.jpg"
import Dima from "../components/img/Dima.jpg"
import Yousef from "../components/img/Yousef.jpg"
import Ahmad from "../components/img/ahmad.jpg"
import Anas from "../components/img/anas.png"
class Aboutus extends React.Component {
  render() {
    return (
      <>
         <section class="firstSec">
            <p>Our Great Team </p>


        </section>

        <section class="secondSec">
          
            <div class="card">
                <img  src={Yousef} width="100%" alt="Yousef" />
                <div class="container">
                    <h4><b>Yousef Alramli</b></h4>
                    <p>Full-Stack developer

                    </p>
                </div>
            </div>
            <div class="card">
                <img src={Ahmad} width="100%" alt="ahmad"/>
                <div class="container">
                    <h4><b>Ahmad Murad </b></h4>
                    <p>Full-Stack developer

                    </p>
                </div>
            </div>
            <div class="card">
                <img src={Anas} width="100%" alt="anas"/>
              
                <div class="container">
                    <h4><b>Anas Abuhatab
                        </b></h4>
                    <p>Full-Stack developer

                    </p>
                </div>
            </div>
            <div class="card">
                <img  className="img" src={shaimaa} alt="shaimaa" />
                <div class="container">
                    <h4><b>Shaima Sawaie</b></h4>
                    <p>Full-Stack developer </p>
                </div>
            </div>
            <div class="card">
                <img src={Dima} width="100%" alt="dima" />
                <div class="container">
                    <h4><b>Dima Alabsi</b></h4>
                    <p>Full-Stack developer

                    </p>
                </div>
            </div>
            


        </section>
      </>
          
    );
  }
}

export default Aboutus;
