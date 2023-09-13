import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";

const ForgotPassword = (props) => {
    const [value, setValue] = useState({
        email: "",
    });

    const changeHandler = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value });
        validator.showMessages();
    };

    const [validator] = React.useState(
        new SimpleReactValidator({
            className: "errorMessage",
            messages: {
                email: "이메일 형식이 올바르지 않습니다.",
                required: "필수 입력항목입니다.",
            },
        })
    );

    const submitForm = (e) => {
        e.preventDefault();
        if (validator.allValid()) {
            setValue({
                email: "",
            });
            validator.hideMessages();
            toast.success("이메일로 비밀번호 재설정 링크를 보내드렸습니다.");
            props.history.push("/login");
        } else {
            validator.showMessages();
            toast.error("이메일을 입력해 주세요");
        }
    };
    return (
        <Grid className="loginWrapper">
            <Grid className="loginForm">
                <h2>비밀번호 찾기</h2>
                <p>Reset your account password</p>
                <form onSubmit={submitForm}>
                    <Grid container spacing={3}>
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
                            <Grid className="formFooter">
                                <Button fullWidth className="cBtn cBtnLarge cBtnTheme" type="submit">
                                    비밀번호 찾기
                                </Button>
                            </Grid>
                            {/* <Grid className="loginWithSocial">
                                <Button className="facebook">
                                    <i className="fa fa-facebook"></i>
                                </Button>
                                <Button className="twitter">
                                    <i className="fa fa-twitter"></i>
                                </Button>
                                <Button className="linkedin">
                                    <i className="fa fa-linkedin"></i>
                                </Button>
                            </Grid> */}
                            <p className="noteHelp">
                                이미 계정이 있나요?<Link to="/login">로그인</Link>
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

export default withRouter(ForgotPassword);
