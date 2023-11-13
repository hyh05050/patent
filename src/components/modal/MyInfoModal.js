import React, { useEffect } from "react";
import Modal from "react-modal";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { myInfoModalAtom } from "../../model/Modal";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { getChangePassword } from "../../api/axios/common";

const MyInfoModal = () => {
  const modal = useRecoilValue(myInfoModalAtom);
  const resetModal = useResetRecoilState(myInfoModalAtom);

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    // 모달이 열릴 때 이벤트 처리
    if (modal.modalState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal.modalState]);

  const closeModal = () => {
    resetModal();
  };

  const mutation = useMutation(
    async (data) => {
      return await getChangePassword(data);
    },
    {
      enabled: false,
      onSuccess: (res) => {
        if (res.status === "success") {
          toast.success("비밀번호 변경에 성공하였습니다.");
        } else {
          toast.error("비밀번호 변경에 실패하였습니다.");
        }
        closeModal();
      },
      onError: () => {
        toast.error("비밀번호 변경에 실패하였습니다.");
        closeModal();
      },
    },
  );

  const onSubmit = (data) => {
    if (data.password != data.password_check) {
      setError(
        "password_check",
        { message: "새 비밀번호와 비밀번호 확인이 일치하지 않습니다." },
        { shouldFocus: true },
      );
      return;
    }

    if (data.pre_password == data.password) {
      setError("password", { message: "새 비밀번호와 현재 비밀번호가 일치합니다." }, { shouldFocus: true });
      return;
    }

    mutation.mutate(data);
  };

  return (
    <Modal
      className={"myinfo-modal"}
      isOpen={modal.modalState}
      onRequestClose={closeModal}
      contentLabel="내정보 변경"
      style={{
        overlay: {
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          zIndex: 9998, // 원하는 z-index 값
          overflow: "auto",
        },
        content: {
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          maxWidth: "600px",
          minWidth: "350px",
          border: "1px solid rgb(204, 204, 204)",
          background: "rgb(255, 255, 255)",
          overflow: "auto",
          borderRadius: "4px",
          outline: "none",
          padding: "20px",
        },
      }}
    >
      <div className="contents-header">
        <div className="header-title">
          <span>내정보 변경</span>
        </div>
        <div className="header-close">
          <button onClick={closeModal}>
            <i className="ti-close"></i>
          </button>
        </div>
      </div>

      <section className="wpo-contact-pg-section">
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          <div className="row justify-content-center">
            <p className="contents-title">비밀번호 변경</p>
            <div className="col-12">
              <div className="form-field">
                <input
                  type="password"
                  name="pre_password"
                  placeholder="현재 비밀번호"
                  {...register("pre_password", {
                    required: "현재 비밀번호는 필수 입력 항목입니다.",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+-^])[A-Za-z\d@$!%*#?&+-^]{8,}$/,
                      message: "영문, 숫자, 특수문자 조합 및 최소 8자 이상이어야 합니다.",
                    },
                  })}
                />
                <p>{errors.pre_password ? errors.pre_password.message : ""}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="form-field">
                <input
                  type="password"
                  name="password"
                  placeholder="새 비밀번호"
                  {...register("password", {
                    required: "새 비밀번호는 필수 입력 항목입니다.",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+-^])[A-Za-z\d@$!%*#?&+-^]{8,}$/,
                      message: "영문, 숫자, 특수문자 조합 및 최소 8자 이상이어야 합니다.",
                    },
                  })}
                />
                <p>{errors.password ? errors.password.message : ""}</p>
              </div>
            </div>
            <div className="col-12">
              <div className="form-field">
                <input
                  type="password"
                  name="password_check"
                  placeholder="새 비밀번호 확인"
                  {...register("password_check", {
                    required: "새 비밀번호 확인은 필수 입력 항목입니다.",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&+-^])[A-Za-z\d@$!%*#?&+-^]{8,}$/,
                      message: "영문, 숫자, 특수문자 조합 및 최소 8자 이상이어야 합니다.",
                    },
                  })}
                />
                <p>{errors.password_check ? errors.password_check.message : ""}</p>
              </div>
            </div>
            <div className="col-12">
              <p>{errors.etc ? errors.etc.message : ""}</p>
              <button type="submit" className="pwd-change-btn">
                비밀번호 변경
              </button>
            </div>
          </div>
        </form>
      </section>
    </Modal>
  );
};

export default MyInfoModal;
