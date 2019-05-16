import React, { Component } from 'react';


class about extends Component {
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
                    <h2>About Us</h2>
                    <p>Get to know us</p>
                </div>
            </div>
        </section>
        
        <section className="challange_area p_100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="challange_text_inner">
                            <div className="l_title">
                                <img src="img/icon/title-icon.png" alt=""></img>
                                <h6>Discover the features</h6>
                                <h2>We don’t hide, we stand tall in front of chalenge</h2>
                            </div>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae eros dignissim ultrices. </p>
                            <div className="c_video">
                                <a className="popup-youtube" href="https://www.youtube.com/watch?v=OIqqC22fZfI"><img src="img/icon/video-icon.png" alt=""></img>See how we work </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 challange_img">
                        <div className="challange_img_inner">
                            <img className="img-fluid" src="img/popup-photo.jpg" alt=""></img>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="testimonials_area">
            <div className="container">
                <div className="testimonials_slider owl-carousel">
                    <div className="item">
                        <div className="testi_item">
                            <h3>“Simply professionals”</h3>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.</p>
                            <div className="media">
                                <div className="d-flex">
                                    <img className="rounded-circle" src="img/testimonials/testi-1.jpg" alt=""></img>
                                </div>
                                <div className="media-body">
                                    <h4>Maria Smith</h4>
                                    <h5>CEO Enterprise</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testi_item">
                            <h3>“They are the best”</h3>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.</p>
                            <div className="media">
                                <div className="d-flex">
                                    <img className="rounded-circle" src="img/testimonials/testi-2.jpg" alt=""></img>
                                </div>
                                <div className="media-body">
                                    <h4>Diwakar</h4>
                                    <h5>CEO Enterprise</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testi_item">
                            <h3>“We just love them”</h3>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.</p>
                            <div className="media">
                                <div className="d-flex">
                                    <img className="rounded-circle" src="img/testimonials/testi-3.jpg" alt=""></img>
                                </div>
                                <div className="media-body">
                                    <h4>Julie Smart</h4>
                                    <h5>CEO Enterprise</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="testi_item">
                            <h3>“Simply professionals”</h3>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.</p>
                            <div className="media">
                                <div className="d-flex">
                                    <img className="rounded-circle" src="img/testimonials/testi-1.jpg" alt=""></img>
                                </div>
                                <div className="media-body">
                                    <h4>Maria Smith</h4>
                                    <h5>CEO Enterprise</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="we_company_area p_100">
            <div className="container">
                <div className="row company_inner">
                    <div className="col-lg-6">
                        <div className="left_company_text">
                            <div className="l_title">
                                <img src="img/icon/title-icon.png" alt=""></img>
                                <h6>Discover the features</h6>
                                <h2>We are a <span>Gibraltar</span> based Company</h2>
                            </div>
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae eros dignissim ultrices. </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="company_skill">
                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellente sque sit am et tellus blandit. Etiam nec odio vestibul.</p>
                            <div className="our_skill_inner">
                                <div className="single_skill">
                                    <h3>Development</h3>
                                    <div className="progress" data-value="70">
                                        <div className="progress-bar">
                                            <div className="progress_parcent"><span className="counter">70</span>%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_skill">
                                    <h3>Design</h3>
                                    <div className="progress" data-value="90">
                                        <div className="progress-bar">
                                            <div className="progress_parcent"><span className="counter">90</span>%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_skill">
                                    <h3>SEO</h3>
                                    <div className="progress" data-value="85">
                                        <div className="progress-bar">
                                            <div className="progress_parcent"><span className="counter">85</span>%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_skill">
                                    <h3>Development</h3>
                                    <div className="progress" data-value="90">
                                        <div className="progress-bar">
                                            <div className="progress_parcent"><span className="counter">90</span>%</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single_skill">
                                    <h3>Management</h3>
                                    <div className="progress" data-value="75">
                                        <div className="progress-bar">
                                            <div className="progress_parcent"><span className="counter">75</span>%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
       
        <section className="talk_area">
            <div className="container">
                <div className="talk_text">
                    <h4>Are you ready to talk?</h4>
                    <a href="mailto:contact@sierracompany.com">contact@sierracompany.com</a>
                </div>
            </div>
        </section>
       
        <footer className="footr_area">
            <div className="footer_widget_area">
                <div className="container">
                    <div className="row footer_widget_inner">
                        <div className="col-lg-4 col-sm-6">
                            <aside className="f_widget f_about_widget">
                                <img src="../img/logo.png" alt="TheWalk"></img>
                                <p>Sector 6HSR Layout, Bengaluru, Karnataka.</p>
                            </aside>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <aside className="f_widget f_insta_widget">
                                {/* <div className="f_title">
                                    <h3>Instagram</h3>
                                </div>
                                <ul>
                                    <li><a href="!#"><img src="img/instagram/ins-1.jpg" alt=""></img></a></li>
                                    <li><a href="!#"><img src="img/instagram/ins-2.jpg" alt=""></img></a></li>
                                    <li><a href="!#"><img src="img/instagram/ins-3.jpg" alt=""></img></a></li>
                                    <li><a href="!#"><img src="img/instagram/ins-4.jpg" alt=""></img></a></li>
                                    <li><a href="!#"><img src="img/instagram/ins-5.jpg" alt=""></img></a></li>
                                    <li><a href="!#"><img src="img/instagram/ins-6.jpg" alt=""></img></a></li>
                                    <li><a href="!#"><img src="img/instagram/ins-7.jpg" alt=""></img></a></li>
                                    <li><a href="!#"><img src="img/instagram/ins-8.jpg" alt=""></img></a></li>
                                </ul> */}
                            </aside>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <aside className="f_widget f_subs_widget">
                                <div className="f_title">
                                    <h3>Subscribe to newsletter</h3>
                                </div>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Your e-mail address here" aria-label="Your e-mail address here" />
                                    <span className="input-group-btn">
                                        <button className="btn btn-secondary submit_btn" type="button">Subscribe</button>
                                    </span>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright">
                <div className="container">
                    <div className="float-sm-left">
                        <h5>
                        Copyright &copy; 2019 All rights reserved |  Diwakar
                        </h5>
                    </div>
                    <div className="float-sm-right">
                        <ul>
                            <li><a href="!#"><i className="fa fa-pinterest"></i></a></li>
                            <li><a href="!#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="!#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="!#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a href="!#"><i className="fa fa-behance"></i></a></li>
                            <li><a href="!#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
       
        
            </div>
         );
    }
}
 
export default about;