import React, { Component } from 'react';

class Blog extends Component {
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
                            <h2>Blog</h2>
                            <p>Read the news</p>
                        </div>
                    </div>
                </section>
                
                <section className="blog_main_area p_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="blog_main_inner">
                                    <div className="blog_main_item">
                                        <div className="blog_img">
                                            <img className="img-fluid" src="img/blog/blog-1.jpg" alt=""></img>
                                            <div className="blog_date">
                                                <h4>29</h4>
                                                <h5>October, 2017</h5>
                                            </div>
                                        </div>
                                        <div className="blog_text">
                                            <a href="!#"><h4>Let us introduce you the best apps</h4></a>
                                            <div className="blog_author">
                                                <a href="!#">By Lore Papp-Dinea</a>
                                                <a href="!#">Design</a>
                                            </div>
                                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
                                            <a className="more_btn" href="!#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="blog_main_item">
                                        <div className="blog_img">
                                            <img className="img-fluid" src="img/blog/blog-2.jpg" alt=""></img>
                                            <div className="blog_date">
                                                <h4>29</h4>
                                                <h5>October, 2017</h5>
                                            </div>
                                        </div>
                                        <div className="blog_text">
                                            <a href="!#"><h4>Let us introduce you the best apps</h4></a>
                                            <div className="blog_author">
                                                <a href="!#">By Lore Papp-Dinea</a>
                                                <a href="!#">Design</a>
                                            </div>
                                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
                                            <a className="more_btn" href="!#">Read More</a>
                                        </div>
                                    </div>
                                    <div className="blog_main_item">
                                        <div className="blog_img">
                                            <img className="img-fluid" src="img/blog/blog-3.jpg" alt=""></img>
                                            <div className="blog_date">
                                                <h4>29</h4>
                                                <h5>October, 2017</h5>
                                            </div>
                                        </div>
                                        <div className="blog_text">
                                            <a href="!#"><h4>Let us introduce you the best apps</h4></a>
                                            <div className="blog_author">
                                                <a href="!#">By Lore Papp-Dinea</a>
                                                <a href="!#">Design</a>
                                            </div>
                                            <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. </p>
                                            <a className="more_btn" href="!#">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="blog_right_sidebar">
                                    <aside className="r_widget search_widget">
                                        <div className="input-group">
                                            <input type="text" className="form-control" placeholder="Search" aria-label="Search" />
                                            <span className="input-group-btn">
                                                <button className="btn btn-secondary" type="button"><i className="fa fa-search"></i></button>
                                            </span>
                                        </div>
                                    </aside>
                                    <aside className="r_widget categories_widget">
                                        <div className="r_w_title">
                                            <h3>Categories</h3>
                                        </div>
                                        <ul>
                                            <li><a href="!#">Vestibulum maximus</a></li>
                                            <li><a href="!#">Nisi eu lobortis pharetra</a></li>
                                            <li><a href="!#">Orci quam accumsan</a></li>
                                            <li><a href="!#">Auguen pharetra massa</a></li>
                                            <li><a href="!#">Tellus ut nulla</a></li>
                                            <li><a href="!#"> Etiam egestas viverra </a></li>
                                        </ul>
                                    </aside>
                                    <aside className="r_widget insta_widget">
                                        <div className="r_w_title">
                                            <h3>Instagram</h3>
                                        </div>
                                        <ul>
                                            <li><a href="https://www.instagram.com/?hl=en">
                                                <img className="img-fluid" src="img/instagram/right-instagram/r-in-1.jpg" alt=""></img>
                                            </a></li>
                                            <li><a href="https://www.instagram.com/?hl=en">
                                                <img className="img-fluid" src="img/instagram/right-instagram/r-in-2.jpg" alt=""></img>
                                            </a></li>
                                            <li><a href="https://www.instagram.com/?hl=en">
                                                <img className="img-fluid" src="img/instagram/right-instagram/r-in-3.jpg" alt=""></img>
                                            </a></li>
                                            <li><a href="https://www.instagram.com/?hl=en">
                                                <img className="img-fluid" src="img/instagram/right-instagram/r-in-4.jpg" alt=""></img>
                                            </a></li>
                                            <li><a href="https://www.instagram.com/?hl=en">
                                                <img className="img-fluid" src="img/instagram/right-instagram/r-in-5.jpg" alt=""></img>
                                            </a></li>
                                            <li><a href="https://www.instagram.com/?hl=en">
                                                <img className="img-fluid" src="img/instagram/right-instagram/r-in-6.jpg" alt=""></img>
                                            </a></li>
                                        </ul>
                                    </aside>
                                    <aside className="r_widget tag_widget">
                                        <div className="r_w_title">
                                            <h3>Tags</h3>
                                        </div>
                                        <ul>
                                            <li><a href="!#">branding</a></li>
                                            <li><a href="!#">identity</a></li>
                                            <li><a href="!#">design</a></li>
                                            <li><a href="!#">inspiration</a></li>
                                            <li><a href="!#">web design</a></li>
                                            <li><a href="!#">video</a></li>
                                            <li><a href="!#">photography</a></li>
                                        </ul>
                                    </aside>
                                    <aside className="r_widget quote_widget">
                                        <div className="r_w_title">
                                            <h3>Quote</h3>
                                        </div>
                                        <img src="img/icon/quote-icon.png" alt=""></img>
                                        <p>Vivamus in urna eu enim porttitor consequat. Proin vitae pulvinar libero. Proin ut hendrerit metus. Aliquam erat volut pat. Donec fermen tum convallis.</p>
                                    </aside>
                                    <aside className="r_widget add_widget">
                                        <div className="r_w_title">
                                            <h3>Add</h3>
                                        </div>
                                        <img className="img-fluid" src="img/add.jpg" alt=""></img>
                                    </aside>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation example" className="pagination_area">
                            <ul className="pagination">
                                <li className="page-item active"><a className="page-link" href="!#">01.</a></li>
                                <li className="page-item"><a className="page-link" href="!#">02.</a></li>
                                <li className="page-item"><a className="page-link" href="!#">03.</a></li>
                                <li className="page-item"><a className="page-link" href="1#">04.</a></li>
                            </ul>
                        </nav>
                    </div>
                </section>

            </div>
         );
    }
}
 
export default Blog;