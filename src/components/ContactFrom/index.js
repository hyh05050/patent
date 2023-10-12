import React, { Component } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { getContact } from "../../api/axios/common";
import { useRecoilState } from "recoil";
import { loadingModalAtom } from "../../model/Modal";

const ContactForm = () => {
  const [modal, setModal] = useRecoilState(loadingModalAtom);
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(
    async (data) => {
      return await getContact(data);
    },
    {
      enabled: false,
      onSuccess: (res) => {
        setModal({
          ...modal,
          modalState: false,
        });
        if (res.status === "success") {
          toast.success("문의 메일 전송에 성공하였습니다.");
        } else {
          toast.error("문의 메일 전송에 실패하였습니다.");
        }
      },
      onError: () => {
        setModal({
          ...modal,
          modalState: false,
        });
        toast.error("문의 메일 전송에 실패하였습니다.");
      },
    },
  );

  const onSubmit = (data) => {
    setModal({
      ...modal,
      modalState: true,
    });
    mutation.mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              type="text"
              name="name"
              placeholder="이름"
              {...register("name", {
                required: "이름은 필수 입력 항목입니다.",
              })}
            />
            <p>{errors.name ? errors.name.message : ""}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              type="email"
              name="email"
              placeholder="이메일"
              {...register("email", {
                required: "이메일은 필수 입력 항목입니다.",
              })}
            />
            <p>{errors.email ? errors.email.message : ""}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <input
              type="text"
              name="phone"
              placeholder="전화번호"
              {...register("phone", {
                required: "전화번호는 필수 입력 항목입니다.",
              })}
            />
            <p>{errors.phone ? errors.phone.message : ""}</p>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
          <div className="form-field">
            <select
              className="form-control"
              name="subject"
              {...register("subject", {
                required: "주제를 선택해주세요.", // 필수 입력 항목임을 설정
              })}
            >
              <option value="">주제 선택</option> {/* 기본 선택 옵션 */}
              <option value={"특허"}>특허</option>
              <option value={"디자인"}>디자인</option>
            </select>
            <p>{errors.subject ? errors.subject.message : ""}</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-field">
            <textarea
              name="notes"
              placeholder="내용을 입력해 주세요"
              {...register("notes", {
                required: "내용은 필수 입력 항목입니다.",
              })}
            ></textarea>
            <p>{errors.notes ? errors.notes.message : ""}</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-submit">
            <button type="submit" className="theme-btn">
              문의하기
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default ContactForm;
