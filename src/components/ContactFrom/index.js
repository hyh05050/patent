import React, { Component } from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("디자인");
    const [phone, setPhone] = useState("");
    const [notes, setNotes] = useState("");
    const [error, setError] = useState({});

    const sendMail = useMutation((data) => {
        return fetch("http://localhost:3000/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                console.log(res);
                if (!res.ok) {
                    toast.error("문의 메일 전송에 실패하였습니다.");
                } else {
                    toast.success("문의 메일 전송에 성공하였습니다.");
                }
                return res.json();
            })
            .catch((err) => {
                toast.error("문의 메일 전송에 실패하였습니다.");
            });
    });

    const changeHandler = (e) => {
        const newError = { ...error };
        newError[e.target.name] = "";
        setError(newError);

        // Update state based on input
        switch (e.target.name) {
            case "name":
                setName(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "subject":
                setSubject(e.target.value);
                break;
            case "phone":
                setPhone(e.target.value);
                break;
            case "notes":
                setNotes(e.target.value);
                break;
            default:
                break;
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const newError = {};

        if (!name) {
            newError.name = "이름을 입력해 주세요.";
        }
        if (!email) {
            newError.email = "이메일을 입력해 주세요.";
        }
        if (!subject) {
            newError.subject = "주제를 선택해 주세요.";
        }
        if (!phone) {
            newError.phone = "전화번호를 입력해 주세요.";
        }
        if (!notes) {
            newError.notes = "내용을 입력해 주세요.";
        }

        if (Object.keys(newError).length > 0) {
            setError(newError);
        } else {
            sendMail.mutate({
                name: name,
                email: email,
                phone: phone,
                message: notes,
                subject: subject,
            });

            // Reset form
            setName("");
            setEmail("");
            setSubject("특허");
            setPhone("");
            setNotes("");
            setError({});
        }
    };

    return (
        <form onSubmit={submitHandler} className="form">
            <div className="row justify-content-center">
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input value={name} onChange={changeHandler} type="text" name="name" placeholder="이름" />
                        <p>{error.name ? error.name : ""}</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input onChange={changeHandler} value={email} type="email" name="email" placeholder="이메일" />
                        <p>{error.email ? error.email : ""}</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <input value={phone} onChange={changeHandler} type="text" name="phone" placeholder="전화번호" />
                        <p>{error.phone ? error.phone : ""}</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <div className="form-field">
                        <select
                            className="form-control"
                            onChange={changeHandler}
                            value={subject}
                            type="text"
                            name="subject"
                            selected={subject}
                        >
                            <option value={"특허"}>특허</option>
                            <option value={"디자인"}>디자인</option>
                        </select>
                        <p>{error.subject ? error.subject : ""}</p>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-field">
                        <textarea
                            name="notes"
                            placeholder="내용을 입력해 주세요"
                            value={notes}
                            onChange={changeHandler}
                        ></textarea>
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
};
export default ContactForm;
