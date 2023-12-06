import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Collapse from "@material-ui/core/Collapse";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import TextField from "@material-ui/core/TextField";
import React, { Fragment, useState } from "react";

import { Controller, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { toast } from "react-toastify";
import { getPatentApply } from "../../api/axios/common";
import { base64String } from "../../common/fileEncoder";
import "./style.scss";

const Contents = () => {
  const history = useHistory();
  // states
  const [tabs, setExpanded] = useState({
    patent: true,
    applicant: false,
    inventor: false,
    etc: false,
  });

  const {
    handleSubmit,
    control,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    shouldFocusError: true,
  });

  const [step, setStep] = useState([true, false, false, false]);
  const [proposerKind, setProposerKind] = useState("개인");
  const [taxOrCash, setTaxOrCash] = useState("tax");
  const [document, setDocument] = useState(null);
  const [proposerStamp, setProposerStamp] = useState(null);
  const [corporationStamp, setCorporationStamp] = useState(null);
  const [bizCertificate, setBizCertificate] = useState(null);
  const [corporationCertificate, setCorporationCertificate] = useState(null);
  const [smallMediumConfirm, setSmallMediumConfirm] = useState(null);

  const mutation = useMutation(
    async (data) => {
      return await getPatentApply(data);
    },
    {
      enabled: false,
      onSuccess: (res) => {
        if (res.status === "success") {
          toast.success("임시출원을 신청하였습니다.");
          history.push("/mypage");
        } else {
          toast.success("제출에 실패하였습니다.");
        }
      },
      onError: () => {
        toast.success("제출에 실패하였습니다.");
      },
    },
  );

  // tabs handler
  const onClickTab = (name) => {
    setExpanded({
      ...tabs,
      [name]: !tabs[name],
    });
  };

  function tagOpenFunc(i) {
    const tags = {
      ...tabs,
    };

    if (i === 0) {
      tags.patent = true;
    } else if (i === 1) {
      tags.applicant = true;
    } else if (i === 2) {
      tags.inventor = true;
    } else if (i === 3) {
      tags.etc = true;
    }

    setExpanded(tags);
  }

  const onChangeProposerKind = (value) => {
    setValue("proposerKind", "");
    setValue("proposerNameKr", "");
    setValue("proposerNameEn", "");
    setValue("proposer_social_no_first", "");
    setValue("proposer_social_no_last", "");
    setValue("proposerPostcode", "");
    setValue("proposerAddress1", "");
    setValue("proposerAddress2", "");
    setValue("proposerCompanyNameKr", "");
    setValue("proposerCompanyNameEn", "");
    setValue("proposerCeoName", "");
    setValue("proposerCeoPhone", "");
    setValue("proposerCeoEmail", "");
    setProposerStamp(null);
    setCorporationStamp(null);
    setBizCertificate(null);
    setCorporationCertificate(null);
    setSmallMediumConfirm(null);

    setProposerKind(value);
  };

  const onClickButton = (form) => {
    if (step.includes(false)) {
      const result = [...step];

      for (let i = 0; i < result.length; i++) {
        if (!result[i]) {
          // false 값을 찾으면
          result[i] = true; // true로 변환
          tagOpenFunc(i);
          break; // 반복문 종료
        }
      }

      setStep([...result]);
    } else {
      handleSubmit(onSubmit)();
    }
  };

  const onChangeFile = async (e) => {
    const target = e.target;
    const selectedFile = target.files[0];
    const fileData = {
      realName: selectedFile.name,
      base64String: await base64String(selectedFile),
    };

    if (target.name === "documentFile") {
      setDocument(fileData);
    }

    if (target.name === "proposerStampFile") {
      setProposerStamp(fileData);
    }

    if (target.name === "corporationStampFile") {
      setCorporationStamp(fileData);
    }

    if (target.name === "bizCertificateFile") {
      setBizCertificate(fileData);
    }

    if (target.name === "corporationCertificateFile") {
      setCorporationCertificate(fileData);
    }

    if (target.name === "smallMediumConfirmFile") {
      setSmallMediumConfirm(fileData);
    }
  };

  const onSubmit = (data) => {
    if (document === null) {
      setError("documentFile", {
        type: "manual",
        message: "문서를 업로드해 주세요.",
      });
      return;
    }

    if (proposerKind == "개인") {
      if (proposerStamp === null) {
        setError("proposerStampFile", {
          type: "manual",
          message: "서명 이미지를 업로드해 주세요.",
        });
        return;
      }
    } else {
      if (corporationStamp === null) {
        setError("corporationStampFile", {
          type: "manual",
          message: "법인 인감 이미지를 업로드해 주세요.",
        });
        return;
      }

      if (bizCertificate === null) {
        setError("bizCertificateFile", {
          type: "manual",
          message: "법인 사업자등록증을 업로드해 주세요.",
        });
        return;
      }
    }

    mutation.mutate({
      ...data,
      document: document,
      proposerStamp: proposerStamp,
      corporationStamp: corporationStamp,
      bizCertificate: bizCertificate,
      corporationCertificate: corporationCertificate,
      smallMediumConfirm: smallMediumConfirm,
    });
  };


  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid className="checkoutWrapper section-padding">
          <Grid className="container" container justifyContent="center" alignItems="center">
            <Grid item md={8} xs={12} className={step[0] ? "" : "d-none"}>
              <div>
                <h2>
                  1단계 : 특허 출원 정보{" "}
                  <span className="warning-field">
                    <span className="required-field">*</span>는 <span className="required-field">필수입력항목</span>{" "}
                    입니다.
                  </span>
                </h2>
              </div>
              <Grid className="cuponWrapper">
                <Grid className="cuponWrap checkoutCard">
                  <Button className="collapseBtn" fullWidth onClick={() => onClickTab("patent")}>
                    1. 발명의 명칭에 반영될 키워드를 입력하세요.
                    <span className="required-field ml-5">*</span>
                    <span>{tabs.patent ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>} </span>
                  </Button>
                  <Collapse in={tabs.patent} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <p>
                        Tip. 발명의 명칭은 향후 정규출원시 바꿀 수 있습니다.
                        <br />
                        {"ex)"} 데이팅 앱, 마스크 제조"
                      </p>
                      <div>
                        <Controller
                          name="keyword"
                          control={control}
                          rules={{ required: "키워드를 입력해 주세요" }}
                          defaultValue={""}
                          render={({ field : {ref, ...field} }) => (
                            <TextField
                              {...field}
                              inputRef={ref}
                              fullWidth
                              type="text"
                              name="keyword"
                              className="formInput radiusNone"
                              placeholder="키워드를 입력해 주세요"
                              inputProps={{
                                maxLength: 100,
                              }}
                            />
                          )}
                        />
                        <p className="required-field">{errors.keyword ? errors.keyword.message : ""}</p>
                      </div>
                    </Grid>
                  </Collapse>
                </Grid>
                <Grid className="cuponWrap checkoutCard">
                  <Button className="collapseBtn" fullWidth onClick={() => onClickTab("patent")}>
                    2. 임시출원을 진행할 문서를 업로드하세요.
                    <span className="required-field ml-5">*</span>
                    <span>{tabs.patent ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>} </span>
                  </Button>
                  <Collapse in={tabs.patent} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <p>
                        <span className="required-field">
                          ※기술문서보완을 위해 문서는 편집가능한 원문(예:워드)으로 업로드해주세요.
                        </span>
                      </p>
                      <div className="cuponForm">
                        <div className="file-box">
                          <Controller
                            name="documentFile"
                            control={control}
                            render={({ field : {ref, ...field}}) => (
                              <input
                                {...field}
                                ref={ref}
                                type="file"
                                name="documentFile"
                                className="formInput radiusNone"
                                onChange={(e) => onChangeFile(e)}
                                accept=".PDF, .DOC, .DOCX, .PPT, .PPTX, .HWP, .JPG, .TIF"
                              />
                            )}
                          />
                        </div>
                      </div>
                      <p className="required-field">{errors.documentFile ? errors.documentFile.message : ""}</p>
                      <p className="mt-3">
                        <span className="focus-field">
                          ① 출원할 내용과 도표 등 모든 자료가 통합된 1개의 문서를 업로드하세요.
                        </span>
                        <br />
                        <span>② 문서가 그대로 출원되기 때문에 개인정보 등은 삭제해주세요.</span>
                        <br />
                        <span>③ 문서 포맷 : PDF, DOC, DOCX, PPT, PPTX, HWP, JPG, TIF</span>
                        <br />
                        <span>④ 자주 이용되는 기술문서 : 연구노트, 사업계획서, 아이디어노트, 발표자료 등</span>
                        <br />
                        <span>
                          ⑤임시출원 기술문서의 내용은 관련 분야에서 통상의 지식을 가진 자가 반복 실시하여 목적으로 하는
                          기술효과를 얻을 수 있을 정도로 구체적, 객관적으로 기술되어야 합니다.
                        </span>
                        <br />
                      </p>
                    </Grid>
                  </Collapse>
                </Grid>
                <Grid className="cuponWrap checkoutCard">
                  <Button className="collapseBtn" fullWidth onClick={() => onClickTab("patent")}>
                    3. 기술자료 내용이 외부에 공개된 적이 있나요?
                    <span className="required-field ml-5">*</span>
                    <span>{tabs.patent ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>} </span>
                  </Button>
                  <Collapse in={tabs.patent} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <Controller
                        name="openFlag"
                        control={control}
                        defaultValue={"true"} // 기본 선택값을 설정합니다.
                        render={({ field }) => (
                          <RadioGroup
                            {...field}
                            name="openFlag"
                            className="paymentMethod"
                            onChange={(e) => field.onChange(e.target.value)}
                          >
                            <FormControlLabel value="true" control={<Radio color="primary" />} label="예" />
                            <FormControlLabel value="false" control={<Radio color="primary" />} label="아니요" />
                          </RadioGroup>
                        )}
                      />
                    </Grid>
                  </Collapse>
                </Grid>
                <Grid className="cuponWrap checkoutCard">
                  <Button className="collapseBtn" fullWidth onClick={() => onClickTab("patent")}>
                    4. 해외출원이 예정되어 있습니까?
                    <span className="required-field ml-5">*</span>
                    <span>{tabs.patent ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>} </span>
                  </Button>
                  <Collapse in={tabs.patent} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <p>
                        ※ 임시명세서 방식 출원은 국가에 따라 정규출원 시 우선권의 효과를 인정하지 않을 수도 있습니다.{" "}
                        <span className="focus-field">임시출원 후 1년 이내</span>에 국내뿐 아니라 해외로도 정규출원을
                        진행할 의사가 있다면 체크해 주세요. 신청 완료 후 담당자와 상담이 진행됩니다.
                      </p>
                      <Controller
                        name="foreignFlag"
                        control={control}
                        defaultValue="true" // 기본 선택값을 설정합니다.
                        render={({ field }) => (
                          <RadioGroup
                            {...field}
                            name="foreignFlag"
                            className="paymentMethod"
                            onChange={(e) => field.onChange(e.target.value)}
                          >
                            <FormControlLabel value="true" control={<Radio color="primary" />} label="예" />
                            <FormControlLabel value="false" control={<Radio color="primary" />} label="아니요" />
                          </RadioGroup>
                        )}
                      />
                    </Grid>
                  </Collapse>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={8} xs={12} className={step[1] ? "mt-5" : "d-none"}>
              <div>
                <h2>2단계 : 출원인 정보 입력</h2>
              </div>
              <Grid className="cuponWrapper">
                <Grid className="cuponWrap checkoutCard">
                  <Button className="collapseBtn" fullWidth onClick={() => onClickTab("applicant")}>
                    1. 출원인의 종류를 선택하세요.
                    <span>{tabs.applicant ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>} </span>
                  </Button>
                  <Collapse in={tabs.applicant} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <Controller
                        name="proposerKind"
                        control={control}
                        defaultValue="개인" // 기본 선택값을 설정합니다.
                        render={({ field }) => (
                          <RadioGroup
                            {...field}
                            name="proposerKind"
                            className="paymentMethod"
                            onChange={(e) => {
                              onChangeProposerKind(e.target.value);
                              field.onChange(e.target.value);
                            }}
                          >
                            <FormControlLabel value="개인" control={<Radio color="primary" />} label="개인" />
                            <FormControlLabel value="법인" control={<Radio color="primary" />} label="법인" />
                            <FormControlLabel value="법인+개인" control={<Radio color="primary" />} label="법인+개인" />
                          </RadioGroup>
                        )}
                      />
                    </Grid>
                  </Collapse>
                </Grid>
                <Grid className="cuponWrap checkoutCard">
                  <Button className="collapseBtn" fullWidth onClick={() => onClickTab("applicant")}>
                    2. 출원인 정보 입력({proposerKind})
                    <span>{tabs.applicant ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>} </span>
                  </Button>
                  <Collapse in={tabs.applicant && proposerKind == "개인"} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <div className="cuponForm">
                        <Grid container spacing={3}>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="proposerNameKr"
                              control={control}
                              defaultValue="" // 기본값을 설정할 수 있습니다.
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  name="proposerNameKr"
                                  className="formInput radiusNone"
                                  placeholder="한글 이름"
                                  label="한글이름"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="proposerNameEn"
                              control={control}
                              defaultValue="" // 기본값을 설정할 수 있습니다.
                              rules={{ required: proposerKind == "개인" ? "영문 이름을 입력해 주세요." : false }}
                              render={({ field : {ref, ...field}}) => (
                                <TextField
                                  {...field}
                                  inputRef={ref}
                                  fullWidth
                                  type="text"
                                  name="proposerNameEn"
                                  className="formInput radiusNone"
                                  placeholder="영문 이름"
                                  label={
                                    <>
                                      영문이름
                                      <span className="required-field m-1">*</span>
                                    </>
                                  }
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />

                            <p className="required-field">
                              {errors.proposerNameEn ? errors.proposerNameEn.message : ""}
                            </p>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="proposer_social_no_first"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="proposer_social_no_first"
                                  className="formInput radiusNone"
                                  placeholder="주민등록번호 앞자리"
                                  label="주민등록번호"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 6,
                                  }}
                                  onChange={(e) => {
                                    const regex = /^[0-9\b]+$/;
                                    if (e.target.value === "" || regex.test(e.target.value)) {
                                      field.onChange(e.target.value);
                                    }
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="proposer_social_no_last"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="proposer_social_no_last"
                                  className="formInput radiusNone"
                                  placeholder="주민등록번호 뒷자리"
                                  label=" "
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 7,
                                  }}
                                  onChange={(e) => {
                                    const regex = /^[0-9\b]+$/;
                                    if (e.target.value === "" || regex.test(e.target.value)) {
                                      field.onChange(e.target.value);
                                    }
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Grid item xs={4}>
                              <Controller
                                name="proposerPostcode"
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                  <TextField
                                    {...field}
                                    fullWidth
                                    type="text"
                                    name="proposerPostcode"
                                    className="formInput radiusNone"
                                    placeholder="우편번호"
                                    label="우편번호"
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    inputProps={{
                                      maxLength: 6,
                                    }}
                                    onChange={(e) => {
                                      const regex = /^[0-9\b]+$/;
                                      if (e.target.value === "" || regex.test(e.target.value)) {
                                        field.onChange(e.target.value);
                                      }
                                    }}
                                  />
                                )}
                              />
                            </Grid>
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Controller
                              name="proposerAddress1"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="proposerAddress1"
                                  className="formInput radiusNone"
                                  placeholder="주소"
                                  label="주소"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 50,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item md={6} xs={12}>
                            <Controller
                              name="proposerAddress2"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="proposerAddress2"
                                  className="formInput radiusNone"
                                  placeholder="상세주소"
                                  label="상세주소"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 50,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                        </Grid>
                      </div>

                      <p className="mt-5">도장 또는 서명 이미지 업로드</p>
                      <div className="cuponForm">
                        <div className="file-box">
                          <Controller
                            name="proposerStampFile"
                            control={control}
                            render={({ field }) => (
                              <input
                                {...field}
                                type="file"
                                name="proposerStampFile"
                                className="formInput radiusNone"
                                onChange={(e) => onChangeFile(e)}
                              />
                            )}
                          />
                        </div>
                        <p className="required-field">
                          {errors.proposerStampFile ? errors.proposerStampFile.message : ""}
                        </p>
                      </div>
                    </Grid>
                  </Collapse>

                  <Collapse in={tabs.applicant && proposerKind != "개인"} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <div className="cuponForm">
                        <Grid container spacing={3}>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="proposerCompanyNameKr"
                              control={control}
                              defaultValue="" // 기본값을 설정할 수 있습니다.
                              rules={{ required: proposerKind != "개인" ? "법인 한글 이름을 입력해 주세요." : false }}
                              render={({ field : {ref, ...field}}) => (
                                <TextField
                                  {...field}
                                  inputRef={ref}
                                  fullWidth
                                  type="text"
                                  name="proposerCompanyNameKr"
                                  className="formInput radiusNone"
                                  placeholder="법인 한글 이름"
                                  label={
                                    <>
                                      법인 한글이름
                                      <span className="required-field m-1">*</span>
                                    </>
                                  }
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />

                            <p className="required-field">
                              {errors.proposerCompanyNameKr ? errors.proposerCompanyNameKr.message : ""}
                            </p>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="proposerCompanyNameEn"
                              control={control}
                              defaultValue="" // 기본값을 설정할 수 있습니다.
                              rules={{ required: proposerKind != "개인" ? "법인 영문 이름을 입력해 주세요." : false }}
                              render={({ field:{ref, ...field} }) => (
                                <TextField
                                  {...field}
                                  inputRef={ref}
                                  fullWidth
                                  type="text"
                                  name="proposerCompanyNameEn"
                                  className="formInput radiusNone"
                                  placeholder="법인 영문 이름"
                                  label={
                                    <>
                                      법인 영문이름
                                      <span className="required-field m-1">*</span>
                                    </>
                                  }
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />

                            <p className="required-field">
                              {errors.proposerCompanyNameEn ? errors.proposerCompanyNameEn.message : ""}
                            </p>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="proposerCeoName"
                              control={control}
                              defaultValue="" // 기본값을 설정할 수 있습니다.
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  name="proposerCeoName"
                                  className="formInput radiusNone"
                                  placeholder="대표자 이름"
                                  label="대표자 이름"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="proposerCeoPhone"
                              control={control}
                              defaultValue="" // 기본값을 설정할 수 있습니다.
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  name="proposerCeoPhone"
                                  className="formInput radiusNone"
                                  placeholder="대표자 전화번호"
                                  label="대표자 전화번호"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="proposerCeoEmail"
                              control={control}
                              defaultValue="" // 기본값을 설정할 수 있습니다.
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  name="proposerCeoEmail"
                                  className="formInput radiusNone"
                                  placeholder="대표자 이메일"
                                  label="대표자 이메일"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 50,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <p className="mt-5">
                              법인 인감이미지 업로드 <span className="required-field m-1">*</span>
                            </p>
                            <div className="cuponForm">
                              <div className="file-box">
                                <Controller
                                  name="corporationStampFile"
                                  control={control}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      type="file"
                                      name="corporationStampFile"
                                      className="formInput radiusNone"
                                      onChange={(e) => onChangeFile(e)}
                                    />
                                  )}
                                />
                              </div>
                              <p className="required-field">
                                {errors.corporationStampFile ? errors.corporationStampFile.message : ""}
                              </p>
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <p className="mt-5">
                              법인 사업자등록증 업로드 <span className="required-field m-1">*</span>
                            </p>
                            <div className="cuponForm">
                              <div className="file-box">
                                <Controller
                                  name="bizCertificateFile"
                                  control={control}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      type="file"
                                      name="bizCertificateFile"
                                      className="formInput radiusNone"
                                      onChange={(e) => onChangeFile(e)}
                                    />
                                  )}
                                />
                              </div>
                              <p className="required-field">
                                {errors.bizCertificateFile ? errors.bizCertificateFile.message : ""}
                              </p>
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <p className="mt-5">법인 인감증명서 업로드</p>
                            <p>
                              <span className="focus-field">※ 특허고객번호 발급을 위해 필요한 서류입니다.</span>
                              <br />
                              <span className="focus-field">
                                ※ 법인의 특허고객번호가 있는 경우에는 제출하실 필요가 없습니다.
                              </span>
                            </p>
                            <div className="cuponForm">
                              <div className="file-box">
                                <Controller
                                  name="corporationCertificateFile"
                                  control={control}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      type="file"
                                      name="corporationCertificateFile"
                                      className="formInput radiusNone"
                                      onChange={(e) => onChangeFile(e)}
                                    />
                                  )}
                                />
                              </div>
                              <p className="required-field">
                                {errors.corporationCertificateFile ? errors.corporationCertificateFile.message : ""}
                              </p>
                            </div>
                          </Grid>
                          <Grid item xs={12}>
                            <p className="mt-5">법인 중소기업확인서 업로드</p>
                            <p>
                              <span className="focus-field">
                                ※ 지금 법인 중소기업확인서가 없어도 출원은 가능합니다. 단, 약 1개월내에 제출해주셔야
                                합니다.
                              </span>
                              <br />
                              <span className="focus-field">※ 특허청 관납료 감면을 위해 필요한 서류입니다.</span>
                              <br />
                              <span className="focus-field">
                                ※ 미제출시 감면금액을 추가로 납부하시거나, 납부하지 않을 경우 출원이 무효로 됩니다.
                              </span>
                            </p>
                            <div className="cuponForm">
                              <div className="file-box">
                                <Controller
                                  name="smallMediumConfirmFile"
                                  control={control}
                                  render={({ field }) => (
                                    <input
                                      {...field}
                                      type="file"
                                      name="smallMediumConfirmFile"
                                      className="formInput radiusNone"
                                      onChange={(e) => onChangeFile(e)}
                                    />
                                  )}
                                />
                              </div>
                              <p className="required-field">
                                {errors.smallMediumConfirmFile ? errors.smallMediumConfirmFile.message : ""}
                              </p>
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Collapse>
                </Grid>
                {/* <Grid item xs={12} container justifyContent="center" alignItems="center">
                                    <FormControlLabel
                                        className="checkBox"
                                        control={
                                            <Checkbox
                                                {...register("applicantFg")}
                                                color="primary"
                                                defaultValue={false}
                                                inputProps={{
                                                    "aria-label": "applicant-flag",
                                                }}
                                            />
                                        }
                                        label="본 출원인이 발명자에도 포함되나요?"
                                    />
                                </Grid> */}
              </Grid>
            </Grid>

            <Grid item md={8} xs={12} className={step[2] ? "mt-5" : "d-none"}>
              <div>
                <h2>3단계 : 발명자 정보 입력</h2>
              </div>
              <Grid className="cuponWrapper">
                <Grid className="cuponWrap checkoutCard">
                  <Button className="collapseBtn" fullWidth onClick={() => onClickTab("inventor")}>
                    1. 발명자 정보 입력
                    <span>{tabs.inventor ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>} </span>
                  </Button>
                  <Collapse in={tabs.inventor} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <p>
                        <span>① 발명자는 발명을 완성하는데 실질적으로 기여한 사람을 말합니다.</span>
                        <br />
                        <span>② 법인은 발명자가 될 수 없습니다.</span>
                        <br />
                      </p>
                      <div className="cuponForm">
                        <Grid container spacing={3}>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="inventorNameKr"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  name="inventorNameKr"
                                  className="formInput radiusNone"
                                  placeholder="한글 이름"
                                  label="발명자 한글이름"
                                  type="text"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="inventorNameEn"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="inventorNameEn"
                                  className="formInput radiusNone"
                                  placeholder="영문 이름"
                                  label="발명자 영문이름"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="inventor_social_no_first"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="inventor_social_no_first"
                                  className="formInput radiusNone"
                                  placeholder="주민등록번호 앞자리"
                                  label="발명자 주민등록번호"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 6,
                                  }}
                                  onChange={(e) => {
                                    const regex = /^[0-9\b]+$/;
                                    if (e.target.value === "" || regex.test(e.target.value)) {
                                      field.onChange(e.target.value);
                                    }
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="inventor_social_no_last"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="inventor_social_no_last"
                                  className="formInput radiusNone"
                                  placeholder="주민등록번호 뒷자리"
                                  label=" "
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 7,
                                  }}
                                  onChange={(e) => {
                                    const regex = /^[0-9\b]+$/;
                                    if (e.target.value === "" || regex.test(e.target.value)) {
                                      field.onChange(e.target.value);
                                    }
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item md={4} xs={12}>
                            <Controller
                              name="inventorPostcode"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="inventorPostcode"
                                  className="formInput radiusNone"
                                  placeholder="우편번호"
                                  label="우편번호"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 6,
                                  }}
                                  onChange={(e) => {
                                    const regex = /^[0-9\b]+$/;
                                    if (e.target.value === "" || regex.test(e.target.value)) {
                                      field.onChange(e.target.value);
                                    }
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Controller
                              name="inventorAddress1"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="inventorAddress1"
                                  className="formInput radiusNone"
                                  placeholder="주소"
                                  label="주소"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 50,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Controller
                              name="inventorAddress2"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="inventorAddress2"
                                  className="formInput radiusNone"
                                  placeholder="상세주소"
                                  label="상세주소"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 50,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Collapse>
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={8} xs={12} className={step[3] ? "mt-5" : "d-none"}>
              <div>
                <h2>4단계 : 기타 정보 입력</h2>
              </div>
              <Grid className="cuponWrapper">
                <Grid className="cuponWrap checkoutCard">
                  <Button className="collapseBtn" fullWidth onClick={() => onClickTab("etc")}>
                    1. 담당자 정보 입력
                    <span>{tabs.etc ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>} </span>
                  </Button>
                  <Collapse in={tabs.etc} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <p>
                        <span className="focus-field">
                          ※ 본 임시출원건에 대하여 연락 가능한 담당자 정보를 입력하세요.
                        </span>
                      </p>
                      <div className="cuponForm">
                        <Grid container spacing={3}>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="managerName"
                              control={control}
                              defaultValue=""
                              rules={{ required: "담당자 이름을 입력해 주세요." }}
                              render={({ field : {ref, ...field}}) => (
                                <TextField
                                  {...field}
                                  inputRef={ref}
                                  fullWidth
                                  type="text"
                                  name="managerName"
                                  className="formInput radiusNone"
                                  placeholder="담당자 이름"
                                  label={
                                    <>
                                      담당자 이름
                                      <span className="required-field m-1">*</span>
                                    </>
                                  }
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />
                            <p className="required-field">{errors.managerName ? errors.managerName.message : ""}</p>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="managerPhone"
                              control={control}
                              defaultValue=""
                              rules={{ required: "전화번호를 입력해 주세요." }}
                              render={({ field : {ref, ...field}}) => (
                                <TextField
                                  {...field}
                                  inputRef={ref}
                                  fullWidth
                                  type="text"
                                  name="managerPhone"
                                  className="formInput radiusNone"
                                  placeholder="휴대전화번호"
                                  label={
                                    <>
                                      휴대전화번호
                                      <span className="required-field m-1">*</span>
                                    </>
                                  }
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 20,
                                  }}
                                />
                              )}
                            />
                            <p className="required-field">{errors.managerPhone ? errors.managerPhone.message : ""}</p>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="managerEmail"
                              control={control}
                              defaultValue=""
                              rules={{ required: "이메일 주소를 입력해 주세요." }}
                              render={({ field : {ref, ...field}}) => (
                                <TextField
                                  {...field}
                                  inputRef={ref}
                                  fullWidth
                                  type="text"
                                  name="managerEmail"
                                  className="formInput radiusNone"
                                  placeholder="이메일 주소"
                                  label={
                                    <>
                                      이메일 주소
                                      <span className="required-field m-1">*</span>
                                    </>
                                  }
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 50,
                                  }}
                                />
                              )}
                            />
                            <p className="required-field">{errors.managerEmail ? errors.managerEmail.message : ""}</p>
                          </Grid>
                          <Grid item sm={6} xs={12}>
                            <Controller
                              name="managerPosition"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  type="text"
                                  name="managerPosition"
                                  className="formInput radiusNone"
                                  placeholder="직책"
                                  label="직책"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 15,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Controller
                              name="memo"
                              control={control}
                              defaultValue=""
                              render={({ field }) => (
                                <TextField
                                  {...field}
                                  fullWidth
                                  multiline
                                  type="text"
                                  name="memo"
                                  className="formInput radiusNone note"
                                  placeholder="전달하실 내용을 적어주세요"
                                  label="메모"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                  inputProps={{
                                    maxLength: 150,
                                  }}
                                />
                              )}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    </Grid>
                  </Collapse>
                </Grid>

                {/* <Grid className="cuponWrap checkoutCard">
                                    <Button className="collapseBtn" fullWidth onClick={() => onClickTab("etc")}>
                                        2. 영수증 선택
                                        <span className="required-field ml-5">*</span>
                                        <span>
                                            {tabs.etc ? (
                                                <i className="fa fa-minus"></i>
                                            ) : (
                                                <i className="fa fa-plus"></i>
                                            )}{" "}
                                        </span>
                                    </Button>
                                    <Collapse in={tabs.etc} timeout="auto" unmountOnExit>
                                        <Grid className="chCardBody">
                                            <Controller
                                                name="receipt_fg"
                                                control={control}
                                                defaultValue="1" // 초기값 설정
                                                render={({ field }) => (
                                                    <RadioGroup
                                                        className="paymentMethod"
                                                        {...field}
                                                        onChange={(e) => {
                                                            setTaxOrCash(e.target.value === "1" ? "tax" : "cash");
                                                            field.onChange(e.target.value);
                                                        }}
                                                    >
                                                        <FormControlLabel
                                                            value="1"
                                                            control={<Radio color="primary" />}
                                                            label="세금계산서"
                                                        />
                                                        <FormControlLabel
                                                            value="0"
                                                            control={<Radio color="primary" />}
                                                            label="현금영수증"
                                                        />
                                                    </RadioGroup>
                                                )}
                                            />
                                            <Collapse in={taxOrCash === "tax"} timeout="auto" unmountOnExit>
                                                <Grid container spacing={3}>
                                                    <Grid item sm={6} xs={12}>
                                                        <Controller
                                                            name="receipt_email"
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{ required: "이메일 주소를 입력해 주세요." }}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    fullWidth
                                                                    {...field}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                    placeholder="받는 분 이메일 주소"
                                                                />
                                                            )}
                                                        />
                                                        <p className="required-field">
                                                            {errors.receipt_email ? errors.receipt_email.message : ""}
                                                        </p>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <p className="mt-4">사업자등록증 업로드</p>
                                                        <Controller
                                                            name="biz_file"
                                                            control={control}
                                                            render={({ field }) => (
                                                                <div className="file-box">
                                                                    <input
                                                                        type="file"
                                                                        {...field}
                                                                        className="formInput radiusNone"
                                                                        onChange={(e) => onChangeFile(e)}
                                                                        accept=".jpg, .png"
                                                                    />
                                                                </div>
                                                            )}
                                                        />
                                                        <p className="required-field">
                                                            {errors.blicense_file ? errors.blicense_file.message : ""}
                                                        </p>
                                                    </Grid>
                                                </Grid>
                                            </Collapse>

                                            <Collapse in={taxOrCash === "cash"} timeout="auto" unmountOnExit>
                                                <Grid container spacing={3}>
                                                    <Grid item sm={6} xs={12}>
                                                        <Controller
                                                            name="receipt_phone"
                                                            control={control}
                                                            defaultValue=""
                                                            rules={{ required: "전화번호를 입력해 주세요." }}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    fullWidth
                                                                    {...field}
                                                                    type="text"
                                                                    InputLabelProps={{
                                                                        shrink: true,
                                                                    }}
                                                                    className="formInput radiusNone"
                                                                    placeholder="휴대전화 번호"
                                                                />
                                                            )}
                                                        />
                                                        <p className="required-field">
                                                            {errors.receipt_phone ? errors.receipt_phone.message : ""}
                                                        </p>
                                                    </Grid>
                                                </Grid>
                                            </Collapse>
                                        </Grid>
                                    </Collapse>
                                </Grid> */}

                <Grid className="cuponWrap checkoutCard">
                  <Button className="collapseBtn" fullWidth onClick={() => onClickTab("etc")}>
                    2. 위임 동의 및 임시출원 유의사항
                    <span className="required-field ml-5">*</span>
                    <span>{tabs.etc ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>} </span>
                  </Button>
                  <Collapse in={tabs.etc} timeout="auto" unmountOnExit>
                    <Grid className="chCardBody">
                      <p className="mt-3">
                        1. 업로드하신 도장(서명)이미지를 기반으로 아래 내용들이 포함된 표준 위임장이 파트너
                        특허사무소/특허법인을 통해 제출됩니다.
                      </p>
                      <div className="policy-field">
                        <p>- 특허등록출원에 관한 모든 절차</p>
                        <p>- 특허권 등록에 관한 모든 절차</p>
                        <p>- 특허출원, 특허등록의 포기, 취하, 청구 및 신청에 대한 취하</p>
                        <p>- 출원인 정보 변경에 대한 모든 절차</p>
                        <p>- 등록명의인 표시 통합관리 신청에 관한 모든 절차</p>
                      </div>
                      <p className="mt-5">2. 임시출원에 관한 아래 유의사항을 확인하였습니다.</p>
                      <div className="policy-field">
                        <p>
                          - 인디프로와 파트너 특허사무소/특허법인을 통해 진행되는 임시출원은 2020.3.30 특허청에서 시행된
                          '임시명세서' 방식에 의한 출원입니다.
                        </p>
                        <p>
                          - 임시출원일로부터 1년 내에 정규출원을 진행하지 않는 경우 임시출원은 출원일로부터 1년 2개월 후
                          취하간주되고 공개되지 않습니다.
                        </p>
                        <p>
                          - 정규출원을 진행하는 경우에는 향후 정규출원의 내용이 공개됨에 따라 임시출원의 내용 또한 열람
                          가능한 상태로 공개됩니다.
                        </p>
                        <p>
                          - 임시출원을 비롯한 지식재산권 업무 중 법률이 정한 자격을 갖춘 주체가 수행해야 하는 업무는
                          해당 법률이 정한 자격을 갖춘 특허법인이 수행합니다.
                        </p>
                        <p>
                          - 임시출원 후 정규출원을 진행하는 경우 양 출원을 비교하여 동일하다고 판단되는 내용에 대해서만
                          판단시점이 임시출원일로 소급됩니다. 이러한 소급이 인정되지 않는 경우 임시출원일과 정규출원일
                          사이 공개된 문헌(예: 본인의 외부 공개)에 의해 특허가 거절되거나 무효될 가능성도 있습니다.
                          임시출원 기술문서의 내용은 관련분야에서 통상의 지식을 가진 자가 반복 실시하여 목적으로 하는
                          기술효과를 얻을 수 있을 정도로 구체적, 객관적으로 기술되어야 합니다.
                        </p>
                      </div>

                      <Grid item xs={12} container justifyContent="center" alignItems="center">
                        <Controller
                          name="entrust_flag"
                          control={control}
                          defaultValue={false} // 초기값 설정 (체크되지 않은 상태)
                          rules={{
                            required: true, // 필수 필드로 설정
                          }}
                          shouldUnregister={true}
                          render={({ field : {ref, ...field}}) => (
                            <FormControlLabel
                              className="checkBox"
                              control={<Checkbox {...field} inputRef={ref} name="entrust_flag" color="primary" />}
                              label="위임 및 유의사항에 동의합니다."
                            />
                          )}
                        />
                        <p className="required-field w-100 text-center">
                          {errors.entrust_flag ? "위임 및 유의사항에 동의해야 합니다." : ""}
                        </p>
                      </Grid>
                    </Grid>
                  </Collapse>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={8} xs={12} className="mt-5" container justifyContent="center" alignItems="center">
              <Button className="cBtn cBtnBlack mt-20" onClick={() => onClickButton(this)}>
                {step.includes(false) ? "다음" : "특허 신청"}
              </Button>
            </Grid>
          </Grid>

          {/* end Container */}
        </Grid>
      </form>
    </Fragment>
  );
};

export default Contents;
