import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";

const SignUpPage = (props) => {
    const [value, setValue] = useState({
        email: "",
        full_name: "",
        password: "",
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(
        new SimpleReactValidator({
            className: "errorMessage",
            messages: {
                required: "필수 입력항목입니다.",
            },
        })
    );

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: "",
                full_name: "",
                password: "",
            });
            validator.hideMessages();
            toast.success("회원가입이 완료되었습니다.");
            props.history.push("/login");
        } else {
            validator.showMessages();
            toast.error("회원가입에 필요한 항목을 입력하세요");
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>회원가입</h2>
                <p>Signup your account</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="이름"
                                value={value.full_name}
                                variant="outlined"
                                name="full_name"
                                label="이름"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message("full name", value.full_name, "required|alpha")}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="이메일"
                                value={value.email}
                                variant="outlined"
                                name="email"
                                label="이메일"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message("email", value.email, "required|email")}
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                className="inputOutline"
                                fullWidth
                                placeholder="비밀번호"
                                value={value.password}
                                variant="outlined"
                                name="password"
                                label="비밀번호"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                onBlur={(e) => changeHandler(e)}
                                onChange={(e) => changeHandler(e)}
                            />
                            {validator.message("password", value.password, "required")}
                        </Grid>
                        <Grid item xs={12}>
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">
                                    회원가입
                                </Button>
                            </Grid>
                            {/* <Grid className="loginWithSocial">
                                <Button className="google">
                                    <i className="fa fa-google"></i>
                                </Button>
                            </Grid> */}
                            <p className="noteHelp">
                                이미 가입한 계정이 있나요? <Link to="/login">로그인하러 가기</Link>
                            </p>
                        </Grid>
                    </Grid>
                </form>
                <div className="shape-img">
                    <i className="fi flaticon-honeycomb"></i>
                </div>
            </Grid>
        </Grid>
    );
};

export default withRouter(SignUpPage);
