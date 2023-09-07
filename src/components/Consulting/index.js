import React, { Component } from 'react'
import cimg from '../../images/signeture.png'


class Consulting extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        events: '',
        notes: '',
        error: {}
    }


    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = ''

        this.setState({
            [e.target.name]: e.target.value,
            error
        })
    }

    subimtHandler = (e) => {
        e.preventDefault();

        const { name,
            email,
            subject,
            events,
            notes, error } = this.state;

        if (name === '') {
            error.name = "Please enter your name";
        }
        if (email === '') {
            error.email = "Please enter your email";
        }
        if (subject === '') {
            error.subject = "Please enter your subject";
        }
        if (events === '') {
            error.events = "Select your event list";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.subject === '' && error.events === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                subject: '',
                events: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            subject,
            error } = this.state;

        return(
            
            <section className="wpo-contact-section section-padding">
                <div className="container">
                    <div className="wpo-contact-section-wrapper">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-contact-form-area">
                                    <h2>Free Consulting</h2>
                                    <form onSubmit={this.subimtHandler} className="form">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-12 col-12">
                                                <div className="form-field">
                                                    <input className="form-control" value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Your Name"/>
                                                    <p>{error.name ? error.name : ''}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-12">
                                                <div className="form-field">
                                                    <input className="form-control" onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Your Email"/>
                                                    <p>{error.email ? error.email : ''}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-12">
                                                <div className="form-field">
                                                    <select className="form-control" onChange={this.changeHandler} value={subject} type="text" name="subject">
                                                        <option >Subject</option>
                                                        <option>Family Law</option>
                                                        <option>Personal Injury</option>
                                                        <option>Criminal Law</option>
                                                        <option>Education Law</option>
                                                        <option>Business Law</option>
                                                    </select>
                                                    <p>{error.subject ? error.subject : ''}</p>
                                                </div>
                                            </div>
                                            <div className="fullwidth">
                                                <textarea className="form-control" name="note" id="c-note"
                                                    placeholder="Message..."></textarea>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-submit">
                                                    <button type="submit" className="theme-btn">Make An Appointment</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="border-style"></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="wpo-contact-content">
                                    <h2>We are here to fight against any violance with experience</h2>
                                    <div className="wpo-contact-content-inner">
                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                            in a piece of classNameical Latin literature from 45 BC, making it over 2000 years
                                            old.</p>
                                        <p>and going through the cites of the word in classNameical literature, discovered the
                                            undoubtable source. Lorem Ipsum comes from sections.</p>
                                        <div className="signeture">
                                            <h4>Mertie Warrior</h4>
                                            <p>Vertex Chambers, CEO</p>
                                            <span><img src={cimg} alt=""/></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="visible-text">
                            <span>C</span>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default  Consulting;