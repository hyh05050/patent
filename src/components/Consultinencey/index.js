import React, { Component } from 'react'
import cimg from '../../images/consult.png'


class Consultinencey extends Component {


    state = {
        name: '',
        email: '',
        subject: '',
        phone: '',
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
            phone,
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
        if (phone === '') {
            error.phone = "Please enter your phone number";
        }
        if (notes === '') {
            error.notes = "Please enter your note";
        }


        if (error) {
            this.setState({
                error
            })
        }
        if (error.name === '' && error.email === '' && error.email === '' && error.subject === '' && error.phone === '' && error.notes === '') {
            this.setState({
                name: '',
                email: '',
                subject: '',
                phone: '',
                notes: '',
                error: {}
            })
        }
    }

    render(){
        const { name,
            email,
            subject,
            phone,
            error } = this.state;

        return(
            <section className="wpo-consultancy-section section-padding">
                <div className="container">
                    <div className="wpo-consultancy-section-wrapper">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="consult-img">
                                    <img src={cimg} alt=""/>
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-12 col-12">
                                <div className="wpo-consultancy-form-area">
                                    <div className="wpo-section-title">
                                        <h2>Need Consultancy,
                                            Request A Free Quote</h2>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                                        </p>
                                    </div>
                                    <form onSubmit={this.subimtHandler} className="form">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-6 col-12">
                                                <div className="form-field">
                                                    <input className="form-control" value={name} onChange={this.changeHandler} type="text" name="name" placeholder="Your Name"/>
                                                    <p>{error.name ? error.name : ''}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="form-field">
                                                    <input className="form-control" onChange={this.changeHandler} value={email} type="email" name="email" placeholder="Your Email"/>
                                                    <p>{error.email ? error.email : ''}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <div className="form-field">
                                                    <input className="form-control" onChange={this.changeHandler} value={phone} type="phone" name="phone" placeholder="Your phone"/>
                                                    <p>{error.phone ? error.phone : ''}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-12">
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
                                                    <button type="submit" className="theme-btn">Submit Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <div className="border-style"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

}
export default  Consultinencey;