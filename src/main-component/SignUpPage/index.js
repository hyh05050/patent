import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { toast } from "react-toastify";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import { getJoin } from "../../api/axios/common";
import { useMutation } from "react-query";
import { Controller, useForm } from "react-hook-form";

const SignUpPage = (props) => {
  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(
    async (data) => {
      return await getJoin(data);
    },
    {
      enabled: false,
      onSuccess: (res) => {
        console.log(res);
        if (res.status === "success") {
          toast.success("회원가입이 되었습니다.");
          props.history.push("/login");
        } else {
          toast.warning(res.message);
        }
      },
      onError: () => {},
    },
  );

  const onSubmit = (data) => {
    mutation.mutate(data);
  };
  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>회원가입</h2>
        <p>Signup your account</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Controller
                name="name"
                control={control}
                defaultValue=""
                rules={{
                  required: "이름은 필수 입력 항목입니다.",
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="text"
                    name="name"
                    className="inputOutline"
                    placeholder="이름"
                    variant="outlined"
                    label="이름"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      maxLength: 20,
                    }}
                  />
                )}
              />
              {errors?.name && <span>{errors.name.message}</span>}
            </Grid>
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
                    type="text"
                    name="email"
                    className="inputOutline"
                    fullWidth
                    placeholder="이메일"
                    variant="outlined"
                    label="이메일"
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
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: "비밀번호는 필수 입력 항목입니다.",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+-^])[A-Za-z\d@$!%*#?&+-^]{8,}$/,
                    message: "영문, 숫자, 특수문자 조합 및 최소 8자 이상이어야 합니다.",
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    type="password"
                    name="password"
                    className="inputOutline"
                    placeholder="비밀번호"
                    variant="outlined"
                    label="비밀번호"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    inputProps={{
                      maxLength: 30,
                    }}
                  />
                )}
              />
              {errors?.password && <span>{errors.password.message}</span>}
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
