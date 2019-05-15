import React, { Component } from 'react';

class Portfolio extends Component {
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
                            <h2>Portfolio</h2>
                            <p>See our best work</p>
                        </div>
                    </div>
                </section>
                
                <section className="portfolio_area">
                    <div className="container">
                        <div className="portfolio_filter">
                            <ul>
                                <li className="active" data-filter="*"><a href="!#">All</a></li>
                                <li data-filter=".brand"><a href="!#">Brand identity</a></li>
                                <li data-filter=".design"><a href="!#">Design</a></li>
                                <li data-filter=".arc"><a href="!#">Architecture</a></li>
                                <li data-filter=".photo"><a href="!#">Photography</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="ms_portfolio_inner">
                        <div className="ms_p_item wd_25 brand arc photo">
                            <img src="img/portfolio/ms-portfolio/ms-p-1.jpg" alt=""></img>
                        </div>
                        <div className="ms_p_item wd_25 brand arc photo">
                            <img src="img/portfolio/ms-portfolio/ms-p-2.jpg" alt=""></img>
                        </div>
                        <div className="ms_p_item wd_50 brand">
                            <img src="img/portfolio/ms-portfolio/ms-p-3.jpg" alt=""></img>
                        </div>
                        <div className="ms_p_item wd_25 brand arc photo">
                            <img src="img/portfolio/ms-portfolio/ms-p-4.jpg" alt=""></img>
                        </div>
                        <div className="ms_p_item wd_25 brand arc photo">
                            <img src="img/portfolio/ms-portfolio/ms-p-5.jpg" alt=""></img>
                        </div>
                        <div className="ms_p_item wd_50">
                            <img src="img/portfolio/ms-portfolio/ms-p-6.jpg" alt=""></img>
                        </div>
                        <div className="ms_p_item wd_25 design arc">
                            <img src="img/portfolio/ms-portfolio/ms-p-7.jpg" alt=""></img>
                        </div>
                        <div className="ms_p_item wd_25 design arc">
                            <img src="img/portfolio/ms-portfolio/ms-p-8.jpg" alt=""></img>
                        </div>
                        <div className="ms_p_item wd_25 design arc">
                            <img src="img/portfolio/ms-portfolio/ms-p-9.jpg" alt=""></img>
                        </div>
                        <div className="ms_p_item wd_25 design arc">
                            <img src="img/portfolio/ms-portfolio/ms-p-10.jpg" alt=""></img>
                        </div>
                    </div>
                </section>
            </div>
         );
    }
}
 
export default Portfolio;