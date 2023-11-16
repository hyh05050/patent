import React from "react";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { getForgotPassword } from "../../api/axios/common";
import { consoleLog } from "../../common";

const ForgotPassword = (props) => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(
    async (data) => {
      consoleLog(data);
      return await getForgotPassword(getValues());
    },
    {
      enabled: false,
      onSuccess: (res) => {
        if (res.status === "success") {
          toast.success("이메일로 임시 비밀번호를 보내드렸습니다.");
          props.history.push("/login");
        } else {
          toast.success("로그인에 실패하였습니다.");
        }
      },
      onError: () => {},
    },
  );

  const onSubmit = async (data) => {
    mutation.mutate(data);
  };

  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>비밀번호 찾기</h2>
        <p>Reset your account password</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: "이메일은 필수 입력 항목입니다.",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "유효한 이메일 주소를 입력하세요.",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    className="inputOutline"
                    fullWidth
                    placeholder="이메일"
                    variant="outlined"
                    label="이메일"
                    name="email"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...field}
                  />
                )}
              />
              {errors?.email && <span>{errors.email.message}</span>}
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
