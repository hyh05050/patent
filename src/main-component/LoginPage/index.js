import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, withRouter } from "react-router-dom";

import "./style.scss";
import { setCookie } from "../../common/cookie";

const LoginPage = (props) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
      messages: {
        email: "이메일 형식이 올바르지 않습니다.",
        required: "필수 입력항목입니다.",
      },
    }),
  );

  const submitForm = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      setValue({
        email: "",
        password: "",
        remember: false,
      });
      validator.hideMessages();

      const userRegex = /^user+.*/gm;
      const email = value.email;

      if (email.match(userRegex)) {
        toast.success("로그인 되었습니다.");
        setCookie("isLogin", true, 1);
        props.history.push("/home");
      }
    } else {
      validator.showMessages();
      toast.error("이메일 형식이 올바르지 않습니다.");
    }
  };
  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>로그인</h2>
        <p>Sign in to your account</p>
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
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="비밀번호"
                value={value.password}
                variant="outlined"
                name="password"
                type="password"
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
              <Grid className="formAction">
                <FormControlLabel
                  control={<Checkbox checked={value.remember} onChange={rememberHandler} />}
                  label="로그인 상태 유지"
                />
                <Link to="/forgot-password">비밀번호 찾기</Link>
              </Grid>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme" type="submit">
                  로그인
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
                계정이 없나요? <Link to="/register">회원가입</Link>
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

export default withRouter(LoginPage);
