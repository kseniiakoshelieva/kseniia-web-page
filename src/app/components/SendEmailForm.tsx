"use client";

import styles from "../styles/SendEmailForm.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { sendEmail } from "@/services/sendEmail";

type Input = {
  name: string;
  subject: string;
  message: string;
};

export const SendEmailForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<Input>({
    mode: "onChange",
    defaultValues: {
      name: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<Input> = async (formData) => {
    console.log(formData);
    reset();
    setIsLoading(true);
    try {
      await sendEmail(formData);
    } catch (error) {
      console.log(error);
      reset();
    }
    setIsLoading(false);
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name
          <input type="text" id="name" {...register("name")} />
        </label>

        <label htmlFor="subject">
          Subject
          <input type="text" id="subject" {...register("subject")} />
        </label>
        <label htmlFor="message">
          Message
          <textarea id="message" {...register("message")} />
        </label>
        {isLoading ? (
          <span>...Loading</span>
        ) : (
          <button type="submit">Send</button>
        )}
      </form>
    </div>
  );
};
