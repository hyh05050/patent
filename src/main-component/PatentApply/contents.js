import React, { Fragment, useState, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

import "./style.scss";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Contents = () => {
    const history = useHistory();
    // states
    const [tabs, setExpanded] = useState({
        patent: true,
        applicant: false,
        inventor: false,
        etc: false,
    });
    const [step, setStep] = useState([true, false, false, false]);
    const [forms, setForms] = useState({
        patent_id: 0,
        register_id: 0,
        patent_kind: "",
        patent_name: "",
        keyword: "",
        open_fg: 1,
        foreign_fg: 1,
        proposer_kind: "개인",
        proposer_name_kr: "",
        proposer_name_en: "",
        proposer_social_no: "",
        proposer_social_first: "",
        proposer_social_last: "",
        proposer_address: "",
        proposer_address_postcode: "",
        proposer_address_detail: "",
        inventor_name_kr: "",
        inventor_name_en: "",
        inventor_social_no: "",
        inventor_social_first: "",
        inventor_social_last: "",
        inventor_address: "",
        inventor_address_postcode: "",
        inventor_address_detail: "",
        manager_name: "",
        manager_phone: "",
        manager_email: "",
        manager_position: "",
        receipt_json: "",
        memo: "",
        receipt_fg: "1",
        receipt_phone: "",
        receipt_email: "",
        use_fg: true,
    });
    const [error, setError] = useState({});

    const [applicantFlag, setApplicantFlag] = useState(false);
    const [entrustFlag, setEntrustFlag] = useState(false);
    const [patentFile, setPatentFile] = useState(null);
    const [signFile, setSignFile] = useState(null);
    const [blicenseFile, setBlicenseFile] = useState(null);
    const errorRefs = useRef({
        keyword: null,
        patent_file: null,
        open_fg: null,
        foreign_fg: null,
        proposer_name_en: null,
        sign_file: null,
        manager_name: null,
        manager_phone: null,
        manager_email: null,
        receipt_phone: null,
        receipt_email: null,
        blicense_file: null,
        entrust_flag: null,
    });

    // tabs handler
    function faqHandler(name) {
        setExpanded({
            ...tabs,
            [name]: !tabs[name],
        });
    }

    // forms handler
    const changeHandler = (e) => {
        setForms({ ...forms, [e.target.name]: e.target.value });
    };

    const onChangeFileHandler = (e, target) => {
        if (target === "patentFile") {
            setPatentFile(e.target.files[0]);
        }
        if (target === "signFile") {
            setSignFile(e.target.files[0]);
        }
        if (target === "blicenseFile") {
            setBlicenseFile(e.target.files[0]);
        }
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

    function validate() {
        const newError = {};

        if (!forms.keyword) {
            newError.keyword = "키워드를 입력해 주세요.";
        }
        if (!patentFile) {
            newError.patent_file = "문서를 등록해 주세요.";
        }
        if (!forms.open_fg) {
            newError.subject = "공개 여부를 선택해 주세요.";
        }
        if (!forms.foreign_fg) {
            newError.phone = "해외출원 여부를 선택해  주세요.";
        }
        if (!forms.proposer_name_en) {
            newError.proposer_name_en = "이름을 입력해 주세요.";
        }
        if (!signFile) {
            newError.sign_file = "서명 이미지를 등록해 주세요.";
        }
        if (!forms.manager_name) {
            newError.manager_name = "이름을 입력해 주세요.";
        }
        if (!forms.manager_phone) {
            newError.manager_phone = "전화번호를 입력해 주세요.";
        }
        if (!forms.manager_email) {
            newError.manager_email = "이메일을 입력해 주세요.";
        }
        if (forms.receipt_fg == 1) {
            if (!forms.receipt_email) {
                newError.receipt_email = "이메일을 입력해 주세요.";
            }
            if (!blicenseFile) {
                newError.blicense_file = "사업자 등록증을 등록해 주세요.";
            }
        } else {
            if (!forms.receipt_phone) {
                newError.receipt_phone = "이메일을 입력해 주세요.";
            }
        }
        if (!entrustFlag) {
            newError.entrust_flag = "위임에 대한 동의를 체크해 주세요.";
        }

        if (Object.keys(newError).length > 0) {
            setError(newError);
            focusHandler(Object.keys(newError)[0]);
            return false;
        }

        return true;
    }

    function focusHandler(name) {
        errorRefs.current[name].focus();
        errorRefs.current[name].scrollIntoView({ behavior: "smooth", block: "center" });
    }

    const clickHandler = () => {
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
            if (!validate()) {
                return false;
            }

            window.scrollTo(10, 0);
            // history.push("/mypage");
        }
    };

    return (
        <Fragment>
            <Grid className="checkoutWrapper section-padding">
                <Grid className="container" container justifyContent="center" alignItems="center">
                    <Grid item md={8} xs={12} className={step[0] ? "" : "d-none"}>
                        <div>
                            <h2>
                                1단계 : 특허 출원 정보{" "}
                                <span className="warning-field">
                                    <span className="required-field">*</span>는{" "}
                                    <span className="required-field">필수입력항목</span> 입니다.
                                </span>
                            </h2>
                        </div>
                        <Grid className="cuponWrapper">
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("patent")}>
                                    1. 발명의 명칭에 반영될 키워드를 입력하세요.
                                    <span className="required-field ml-5">*</span>
                                    <span>
                                        {tabs.patent ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.patent} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <p>
                                            Tip. 발명의 명칭은 향후 정규출원시 바꿀 수 있습니다.
                                            <br />
                                            {"ex)"} 데이팅 앱, 마스크 제조"
                                        </p>
                                        <form className="cuponForm">
                                            <TextField
                                                fullWidth
                                                type="text"
                                                className="formInput radiusNone"
                                                value={forms.keyword}
                                                name="keyword"
                                                onChange={(e) => changeHandler(e)}
                                                placeholder="키워드를 입력해 주세요"
                                                ref={(el) => (errorRefs.current.keyword = el)}
                                            />
                                            <p className="required-field">{error.keyword ? error.keyword : ""}</p>
                                        </form>
                                    </Grid>
                                </Collapse>
                            </Grid>
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("patent")}>
                                    2. 임시출원을 진행할 문서를 업로드하세요.
                                    <span className="required-field ml-5">*</span>
                                    <span>
                                        {tabs.patent ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.patent} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <p>
                                            <span className="required-field">
                                                ※기술문서보완을 위해 문서는 편집가능한 원문(예:워드)으로 업로드해주세요.
                                            </span>
                                        </p>
                                        <form className="cuponForm">
                                            <div className="file-box">
                                                <input
                                                    type="file"
                                                    className="formInput radiusNone"
                                                    onChange={(e) => onChangeFileHandler(e, "patentFile")}
                                                    ref={(el) => (errorRefs.current.patent_file = el)}
                                                />
                                            </div>
                                        </form>
                                        <p className="required-field">{error.patent_file ? error.patent_file : ""}</p>
                                        <p className="mt-3">
                                            <span className="focus-field">
                                                ① 출원할 내용과 도표 등 모든 자료가 통합된 1개의 문서를 업로드하세요.
                                            </span>
                                            <br />
                                            <span>② 문서가 그대로 출원되기 때문에 개인정보 등은 삭제해주세요.</span>
                                            <br />
                                            <span>③ 문서 포맷 : PDF, DOC, DOCX, PPT, PPTX, HWP, JPG, TIF</span>
                                            <br />
                                            <span>
                                                ④ 자주 이용되는 기술문서 : 연구노트, 사업계획서, 아이디어노트, 발표자료
                                                등
                                            </span>
                                            <br />
                                            <span>
                                                ⑤임시출원 기술문서의 내용은 관련 분야에서 통상의 지식을 가진 자가 반복
                                                실시하여 목적으로 하는 기술효과를 얻을 수 있을 정도로 구체적, 객관적으로
                                                기술되어야 합니다.
                                            </span>
                                            <br />
                                        </p>
                                    </Grid>
                                </Collapse>
                            </Grid>
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("patent")}>
                                    3. 기술자료 내용이 외부에 공개된 적이 있나요?
                                    <span className="required-field ml-5">*</span>
                                    <span>
                                        {tabs.patent ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.patent} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <RadioGroup
                                            className="paymentMethod"
                                            name="open_fg"
                                            value={forms.open_fg}
                                            onChange={(e) => changeHandler(e)}
                                            ref={(el) => (errorRefs.current.open_fg = el)}
                                        >
                                            <FormControlLabel
                                                value={1}
                                                control={<Radio color="primary" />}
                                                label="예"
                                            />
                                            <FormControlLabel
                                                value={0}
                                                control={<Radio color="primary" />}
                                                label="아니요"
                                            />
                                        </RadioGroup>
                                    </Grid>
                                </Collapse>
                            </Grid>
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("patent")}>
                                    4. 해외출원이 예정되어 있습니까?
                                    <span className="required-field ml-5">*</span>
                                    <span>
                                        {tabs.patent ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.patent} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <p>
                                            ※ 임시명세서 방식 출원은 국가에 따라 정규출원 시 우선권의 효과를 인정하지
                                            않을 수도 있습니다.{" "}
                                            <span className="focus-field">임시출원 후 1년 이내</span>에 국내뿐 아니라
                                            해외로도 정규출원을 진행할 의사가 있다면 체크해 주세요. 신청 완료 후
                                            담당자와 상담이 진행됩니다.
                                        </p>
                                        <RadioGroup
                                            className="paymentMethod"
                                            name="foreign_fg"
                                            value={forms.foreign_fg}
                                            onChange={(e) => changeHandler(e)}
                                            ref={(el) => (errorRefs.current.foreign_fg = el)}
                                        >
                                            <FormControlLabel
                                                value={1}
                                                control={<Radio color="primary" />}
                                                label="예"
                                            />
                                            <FormControlLabel
                                                value={0}
                                                control={<Radio color="primary" />}
                                                label="아니요"
                                            />
                                        </RadioGroup>
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
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("applicant")}>
                                    1. 출원인의 종류를 선택하세요.
                                    <span>
                                        {tabs.applicant ? (
                                            <i className="fa fa-minus"></i>
                                        ) : (
                                            <i className="fa fa-plus"></i>
                                        )}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.applicant} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <RadioGroup
                                            className="paymentMethod"
                                            name="proposer_kind"
                                            value={forms.proposer_kind}
                                            onChange={(e) => changeHandler(e)}
                                        >
                                            <FormControlLabel
                                                value="개인"
                                                control={<Radio color="primary" />}
                                                label="개인"
                                            />
                                            <FormControlLabel
                                                value="법인"
                                                control={<Radio color="primary" />}
                                                label="법인"
                                            />
                                            <FormControlLabel
                                                value="법인+개인"
                                                control={<Radio color="primary" />}
                                                label="법인+개인"
                                            />
                                        </RadioGroup>
                                    </Grid>
                                </Collapse>
                            </Grid>
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("applicant")}>
                                    2. 출원인 정보 입력(개인)
                                    <span>
                                        {tabs.applicant ? (
                                            <i className="fa fa-minus"></i>
                                        ) : (
                                            <i className="fa fa-plus"></i>
                                        )}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.applicant} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <form className="cuponForm">
                                            <Grid container spacing={3}>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="한글이름"
                                                        name="proposer_name_kr"
                                                        value={forms.proposer_name_kr}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="한글 이름"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        name="proposer_name_en"
                                                        value={forms.proposer_name_en}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="영문 이름"
                                                        label={
                                                            <>
                                                                영문이름
                                                                <span className="required-field m-1">*</span>
                                                            </>
                                                        }
                                                        ref={(el) => (errorRefs.current.proposer_name_en = el)}
                                                    />
                                                    <p className="required-field">
                                                        {error.proposer_name_en ? error.proposer_name_en : ""}
                                                    </p>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="주민등록번호"
                                                        name="proposer_social_no_first"
                                                        value={forms.proposer_social_no_first}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="주민등록번호 앞자리"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label=" "
                                                        name="proposer_social_no_last"
                                                        value={forms.proposer_social_no_last}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="주민등록번호 뒷자리"
                                                    />
                                                </Grid>
                                                <Grid item md={4} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="주소"
                                                        name="proposer_address_postcode"
                                                        value={forms.proposer_address_postcode}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="우편번호"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        name="proposer_address"
                                                        value={forms.proposer_address}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="주소"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        name="proposer_address_detail"
                                                        value={forms.proposer_address_detail}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="상세주소"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </form>

                                        <p className="mt-5">도장 또는 서명 이미지 업로드</p>
                                        <form className="cuponForm">
                                            <div className="file-box">
                                                <input
                                                    type="file"
                                                    className="formInput radiusNone"
                                                    onChange={(e) => onChangeFileHandler(e, "signFile")}
                                                    ref={(el) => (errorRefs.current.sign_file = el)}
                                                />
                                            </div>
                                            <p className="required-field">{error.sign_file ? error.sign_file : ""}</p>
                                        </form>
                                    </Grid>
                                </Collapse>
                            </Grid>
                            <Grid item xs={12} container justifyContent="center" alignItems="center">
                                <FormControlLabel
                                    className="checkBox"
                                    control={
                                        <Checkbox
                                            checked={applicantFlag}
                                            onChange={() => setApplicantFlag(!applicantFlag)}
                                            value={applicantFlag}
                                            color="primary"
                                        />
                                    }
                                    label="본 출원인이 발명자에도 포함되나요?"
                                />
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item md={8} xs={12} className={step[2] ? "mt-5" : "d-none"}>
                        <div>
                            <h2>3단계 : 발명자 정보 입력</h2>
                        </div>
                        <Grid className="cuponWrapper">
                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("inventor")}>
                                    1. 발명자 정보 입력
                                    <span>
                                        {tabs.inventor ? (
                                            <i className="fa fa-minus"></i>
                                        ) : (
                                            <i className="fa fa-plus"></i>
                                        )}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.inventor} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <p>
                                            <span>① 발명자는 발명을 완성하는데 실질적으로 기여한 사람을 말합니다.</span>
                                            <br />
                                            <span>② 법인은 발명자가 될 수 없습니다.</span>
                                            <br />
                                        </p>
                                        <form className="cuponForm">
                                            <Grid container spacing={3}>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="발명자 한글이름"
                                                        name="inventor_name_kr"
                                                        value={forms.inventor_name_kr}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="한글 이름"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="발명자 영문이름"
                                                        name="inventor_name_en"
                                                        value={forms.inventor_name_en}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="영문 이름"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="발명자 주민등록번호"
                                                        name="inventor_social_no_first"
                                                        value={forms.inventor_social_no_first}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="주민등록번호 앞자리"
                                                    />
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label=" "
                                                        name="inventor_social_no_last"
                                                        value={forms.inventor_social_no_last}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="주민등록번호 뒷자리"
                                                    />
                                                </Grid>
                                                <Grid item md={4} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="주소"
                                                        name="inventor_address_postcode"
                                                        value={forms.inventor_address_postcode}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="우편번호"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        name="inventor_address"
                                                        value={forms.inventor_address}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="주소"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        name="inventor_address_detail"
                                                        value={forms.inventor_address_detail}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="상세주소"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </form>
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
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("etc")}>
                                    1. 담당자 정보 입력
                                    <span>
                                        {tabs.etc ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.etc} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <p>
                                            <span className="focus-field">
                                                ※ 본 임시출원건에 대하여 연락 가능한 담당자 정보를 입력하세요.
                                            </span>
                                        </p>
                                        <form className="cuponForm">
                                            <Grid container spacing={3}>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        name="manager_name"
                                                        value={forms.manager_name}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="담당자 이름"
                                                        label={
                                                            <>
                                                                담당자 이름
                                                                <span className="required-field m-1">*</span>
                                                            </>
                                                        }
                                                        ref={(el) => (errorRefs.current.manager_name = el)}
                                                    />
                                                    <p className="required-field">
                                                        {error.manager_name ? error.manager_name : ""}
                                                    </p>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        name="manager_phone"
                                                        value={forms.manager_phone}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="휴대전화번호"
                                                        label={
                                                            <>
                                                                휴대전화번호
                                                                <span className="required-field m-1">*</span>
                                                            </>
                                                        }
                                                        ref={(el) => (errorRefs.current.manager_phone = el)}
                                                    />
                                                    <p className="required-field">
                                                        {error.manager_phone ? error.manager_phone : ""}
                                                    </p>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        name="manager_email"
                                                        value={forms.manager_email}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="이메일 주소"
                                                        label={
                                                            <>
                                                                이메일 주소
                                                                <span className="required-field m-1">*</span>
                                                            </>
                                                        }
                                                        ref={(el) => (errorRefs.current.manager_email = el)}
                                                    />
                                                    <p className="required-field">
                                                        {error.manager_email ? error.manager_email : ""}
                                                    </p>
                                                </Grid>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="직책"
                                                        name="manager_position"
                                                        value={forms.manager_position}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone"
                                                        placeholder="직책"
                                                    />
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        multiline
                                                        label="메모"
                                                        placeholder="전달하실 내용을 적어주세요"
                                                        name="memo"
                                                        value={forms.memo}
                                                        onChange={(e) => changeHandler(e)}
                                                        type="text"
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        className="formInput radiusNone note"
                                                    />
                                                </Grid>
                                            </Grid>
                                        </form>
                                    </Grid>
                                </Collapse>
                            </Grid>

                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("etc")}>
                                    2. 영수증 선택
                                    <span className="required-field ml-5">*</span>
                                    <span>
                                        {tabs.etc ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.etc} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <RadioGroup
                                            className="paymentMethod"
                                            name="receipt_fg"
                                            value={forms.receipt_fg}
                                            onChange={(e) => changeHandler(e)}
                                        >
                                            <FormControlLabel
                                                value={"1"}
                                                control={<Radio color="primary" />}
                                                label="세금계산서"
                                            />
                                            <FormControlLabel
                                                value={"0"}
                                                control={<Radio color="primary" />}
                                                label="현금영수증"
                                            />
                                        </RadioGroup>
                                        <Collapse in={forms.receipt_fg == 1} timeout="auto" unmountOnExit>
                                            <Grid container spacing={3}>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        type="text"
                                                        className="formInput radiusNone"
                                                        value={forms.receipt_email}
                                                        name="receipt_email"
                                                        onChange={(e) => changeHandler(e)}
                                                        placeholder="받급받는 분 이메일 주소"
                                                        ref={(el) => (errorRefs.current.receipt_email = el)}
                                                    />
                                                    <p className="required-field">
                                                        {error.receipt_email ? error.receipt_email : ""}
                                                    </p>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <p className="mt-4">사업자등록증 업로드</p>
                                                    <div className="file-box">
                                                        <input
                                                            type="file"
                                                            className="formInput radiusNone"
                                                            onChange={(e) => onChangeFileHandler(e, "blicenseFile")}
                                                            ref={(el) => (errorRefs.current.blicense_file = el)}
                                                        />
                                                    </div>
                                                    <p className="required-field">
                                                        {error.blicense_file ? error.blicense_file : ""}
                                                    </p>
                                                </Grid>
                                            </Grid>
                                        </Collapse>

                                        <Collapse in={forms.receipt_fg == 0} timeout="auto" unmountOnExit>
                                            <Grid container spacing={3}>
                                                <Grid item sm={6} xs={12}>
                                                    <TextField
                                                        fullWidth
                                                        type="text"
                                                        className="formInput radiusNone"
                                                        value={forms.receipt_phone}
                                                        name="receipt_phone"
                                                        onChange={(e) => changeHandler(e)}
                                                        placeholder="휴대전화 번호"
                                                        ref={(el) => (errorRefs.current.receipt_phone = el)}
                                                    />
                                                    <p className="required-field">
                                                        {error.receipt_phone ? error.receipt_phone : ""}
                                                    </p>
                                                </Grid>
                                            </Grid>
                                        </Collapse>
                                    </Grid>
                                </Collapse>
                            </Grid>

                            <Grid className="cuponWrap checkoutCard">
                                <Button className="collapseBtn" fullWidth onClick={() => faqHandler("etc")}>
                                    3. 위임 동의 및 임시출원 유의사항
                                    <span className="required-field ml-5">*</span>
                                    <span>
                                        {tabs.etc ? <i className="fa fa-minus"></i> : <i className="fa fa-plus"></i>}{" "}
                                    </span>
                                </Button>
                                <Collapse in={tabs.etc} timeout="auto" unmountOnExit>
                                    <Grid className="chCardBody">
                                        <p>
                                            1. 업로드하신 도장(서명)이미지를 기반으로 아래 내용들이 포함된 표준 위임장이
                                            파트너 특허법인을 통해 제출됩니다.
                                        </p>
                                        <div className="policy-field">
                                            <p>- 특허등록출원에 관란 모든 절차</p>
                                            <p>- 특허권 등록에 관한 모든 절차</p>
                                            <p>- 특허등록출원의 포기</p>
                                            <p>- 특허등록출원의 취하</p>
                                            <p>- 특허등록출원에 관한 청구의 취하</p>
                                            <p>- 특허등록출원에 관한 신청의 취하</p>
                                            <p>- 출원인정보변경에 대한 모든 절차</p>
                                            <p>- 등록명의인 표시 통합관리 신청에 관한 모든 절차</p>
                                        </div>
                                        <p>2. 임시출원에 관한 아래 유의사항을 확인하였습니다.</p>
                                        <div className="policy-field">
                                            <p>
                                                - 비긴과 파트너 특허법인을 통해 진행되는 임시출원은 2020.3.30 특허청에서
                                                시행된 '임시명세서' 방식에 의한 출원입니다.
                                            </p>
                                            <p>
                                                - 임시출원일로부터 1년 내에 정규출원을 진행하지 않는 경우 임시출원은
                                                출원일로부터 1년 2개월 후 취하간주되고 공개되지 않습니다.
                                            </p>
                                            <p>
                                                - 정규출원을 진행하는 경우에는 향후 정규출원의 내용이 공개됨에 따라
                                                임시출원의 내용 또한 열람 가능한 상태로 공개됩니다.
                                            </p>
                                            <p>
                                                - 임시출원을 비롯한 지식재산권 업무 중 법률이 정한 자격을 갖춘 주체가
                                                수행해야 하는 업무는 해당 법률이 정한 자격을 갖춘 특허법인이 수행합니다.
                                            </p>
                                            <p>
                                                - 임시출원 후 정규출원을 진행하는 경우 양 출원을 비교하여 동일하다고
                                                판단되는 내용에 대해서만 판단시점이 임시출원일로 소급됩니다. 이러한
                                                소급이 인정되지 않는 경우 임시출원일과 정규출원일 사이 공개된 문헌(예:
                                                본인의 외부 공개)에 의해 특허가 거절되거나 무효될 가능성도 있습니다.
                                                임시출원 기술문서의 내용은 관련분야에서 통상의 지식을 가진 자가 반복
                                                실시하여 목적으로 하는 기술효과를 얻을 수 있을 정도로 구체적, 객관적으로
                                                기술되어야 합니다.
                                            </p>
                                        </div>

                                        <Grid item xs={12} container justifyContent="center" alignItems="center">
                                            <FormControlLabel
                                                className="checkBox"
                                                control={
                                                    <Checkbox
                                                        checked={entrustFlag}
                                                        onChange={() => setEntrustFlag(!entrustFlag)}
                                                        value={entrustFlag}
                                                        color="primary"
                                                    />
                                                }
                                                label="위임 및 유의사항에 동의합니다."
                                                ref={(el) => (errorRefs.current.entrust_flag = el)}
                                            />
                                            <p className="required-field w-100 text-center">
                                                {error.entrust_flag ? error.entrust_flag : ""}
                                            </p>
                                        </Grid>
                                    </Grid>
                                </Collapse>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={8} xs={12} className="mt-5" container justifyContent="center" alignItems="center">
                        <Button className="cBtn cBtnBlack mt-20" onClick={clickHandler}>
                            {step.includes(false) ? "다음" : "특허 신청"}
                        </Button>
                    </Grid>
                </Grid>

                {/* end Container */}
            </Grid>
        </Fragment>
    );
};

export default Contents;
