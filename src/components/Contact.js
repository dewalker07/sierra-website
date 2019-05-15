import React, { Component } from 'react';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <section className="banner_area">
                    <div className="container">
                        <div className="banner_inner_text">
                            <h2>Contact</h2>
                            <p>Get in touch</p>
                        </div>
                    </div>
                </section>
            
                <section className="get_in_touch_area p_100">
                    <div className="container">
                        <div className="row get_touch_inner">
                            <div className="col-lg-6">
                                <form className="contact_us_form row" action="contact_process.php" method="post" id="contactForm" novalidate="novalidate">
                                    <div className="form-group col-lg-6">
                                        <input type="text" className="form-control" id="name" name="name" placeholder="Name" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <input type="email" className="form-control" id="email" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <input type="text" className="form-control" id="subject" name="subject" placeholder="Subject*" />
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <textarea className="form-control" name="message" id="message" rows="1" placeholder="Message"></textarea>
                                    </div>
                                    <div className="form-group col-lg-12">
                                        <button type="submit" value="submit" className="btn submit_btn form-control">Send</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="touch_details">
                                    <div className="l_title">
                                        <img src="img/icon/title-icon.png" alt=""></img>
                                        <h6>Say hello</h6>
                                        <h2>Get in touch, send us an e-mail or call us</h2>
                                    </div>
                                    <p></p>
                                    <a href="tel:+9999999999"><h5>Call us now</h5></a>
                                    <a href="tel:+45237395593232"><h4>+452373 95593 232</h4></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            
                {/* <section className="contact_map_area">
                    <div id="mapBox1" className="mapBox1 row m0" 
                        data-lat="40.701083" 
                        data-lon="-74.1522848" 
                        data-zoom="15" 
                        data-marker="" 
                        data-info=""
                        data-mlat=""
                        data-mlon="">
                    </div>
                    <div className="map_location_box">
                        <div className="container">
                            <div className="map_l_box_inner">
                                <div className="bd-callout">
                                    <h3>Gibraltar Office</h3>
                                    <p>Casemates Square, no253 <br /> United kingdom</p>
                                    <h4><a href="!#">+453678 9283 559</a> <a href="!#">contact@template.com</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
         );
    }
}
 
export default Contact;