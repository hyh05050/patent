import React, { Component } from "react";

class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        phone: "",
        notes: "",
        error: {},
    };

    changeHandler = (e) => {
        const error = this.state.error;
        error[e.target.name] = "";

        this.setState({
            [e.target.name]: e.target.value,
            error,
        });
    };

    subimtHandler = (e) => {
        e.preventDefault();

        const { name, email, subject, phone, notes, error } = this.state;

        if (name === "") {
            error.name = "이름을 입력해 주세요.";
        }
        if (email === "") {
            error.email = "이메일을 입력해 주세요.";
        }
        if (subject === "") {
            error.subject = "주제를 선택해 주세요.";
        }
        if (phone === "") {
            error.phone = "전화번호를 입력해 주세요.";
        }
        if (notes === "") {
            error.notes = "내용을 입력해 주세요.";
        }

        if (error) {
            this.setState({
                error,
            });
        }
        if (
            error.name === "" &&
            error.email === "" &&
            error.email === "" &&
            error.phone === "" &&
            error.subject === "" &&
            error.notes === ""
        ) {
            this.setState({
                name: "",
                email: "",
                subject: "",
                notes: "",
                error: {},
            });
        }
    };

    render() {
        const { name, email, subject, phone, notes, error } = this.state;

        return (
            <form onSubmit={this.subimtHandler} className="form">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input
                                value={name}
                                onChange={this.changeHandler}
                                type="text"
                                name="name"
                                placeholder="이름"
                            />
                            <p>{error.name ? error.name : ""}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input
                                onChange={this.changeHandler}
                                value={email}
                                type="email"
                                name="email"
                                placeholder="이메일"
                            />
                            <p>{error.email ? error.email : ""}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <input
                                value={phone}
                                onChange={this.changeHandler}
                                type="text"
                                name="phone"
                                placeholder="전화번호"
                            />
                            <p>{error.phone ? error.phone : ""}</p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-field">
                            <select
                                className="form-control"
                                onChange={this.changeHandler}
                                value={subject}
                                type="text"
                                name="subject"
                            >
                                <option>특허</option>
                            </select>
                            <p>{error.subject ? error.subject : ""}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-field">
                            <textarea name="notes" placeholder="내용을 입력해 주세요"></textarea>
                            <p>{error.notes ? error.notes : ""}</p>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="form-submit">
                            <button type="submit" className="theme-btn">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default ContactForm;
