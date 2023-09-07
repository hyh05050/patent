import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ts1 from '../../images/testimonial/img-1.jpg'
import ts2 from '../../images/testimonial/img-2.jpg'
import ts3 from '../../images/testimonial/img-3.jpg'


class Testimonial extends Component {
    render() {
        var settings = {
            dots: true,
            arrows: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        };

        const testimonial = [
            {
                tsImg: ts1,
                Des: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour variations incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida.”",
                Title: 'Robert William',
                Sub: "CEO & Founder",
            },
            {
                tsImg: ts2,
                Des: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour variations incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida.”",
                Title: 'Ken Williamson',
                Sub: "CEO & Founder",
            },
            {
                tsImg: ts3,
                Des: "“There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour variations incididunt ut labore et dolore. Quis ipsum suspendisse ultrices gravida.”",
                Title: 'David Miller',
                Sub: "CEO & Founder",
            }
        ]
        return (
            <section className="wpo-testimonials-section section-padding">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-12">
                            <div className="wpo-section-title">
                                <h2>What Our Clients Say About Us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="wpo-testimonial-wrap owl-carousel">
                                <Slider {...settings}>
                                    {testimonial.map((tesmnl, tsm) => (
                                        <div className="wpo-testimonial-item" key={tsm}>
                                            <p>{tesmnl.Des}</p>
                                            <div className="wpo-testimonial-info">
                                                <div className="wpo-testimonial-info-img">
                                                    <img src={tesmnl.tsImg} alt="" />
                                                </div>
                                                <div className="wpo-testimonial-info-text">
                                                    <h5>{tesmnl.Title}</h5>
                                                    <span>{tesmnl.Sub}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonial;