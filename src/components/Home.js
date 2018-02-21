import React, { Component } from 'react';
import Popup from 'react-popup';
import SkyLight from 'react-skylight';
import img1 from '../assests/counter1.png';
import img2 from '../assests/imageedit_1_4964978009.jpg';
import img3 from '../assests/imageedit_3_4416198950.jpg';


class Home extends Component {

    addMoreFields() {
        this.props.history.push('/edit_details');
    }



    executeBeforePopUpClosed() {
        this.props.history.push('/wish_list');
    }
    render() {
        console.log("In Home Page");

        return (
            <div>
            {/* <section>
              <button onClick={() => this.simpleDialog.show()}>Open Modal</button>
            </section>
            <SkyLight beforeClose={this.executeBeforePopUpClosed.bind(this)} ref={ref => this.simpleDialog = ref} title="Hi,For best result, please add details">
             <button onClick={this.addMoreFields.bind(this)}>Click to Add more Details</button>
            </SkyLight> */}
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>

            <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100 center-block" src={img1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img2}  alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={img3}  alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
          </div>



          </div>
               
        );

    }
    
}

export default Home;