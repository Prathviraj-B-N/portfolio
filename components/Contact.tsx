"use client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  msg: string;
};

type Props = {};

// implement email.js
const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    window.location.href = `mailto:prathviraj.b.n@gmail?subject=${data.subject}&body=Hi, i'm ${data.name}. ${data.msg}`;
    console.log(data);
  };
  return (
    <div className="h-screen flex top-24 flex-col relative text-left max-w-7xl px-10 mx-auto items-center gap-5">
      <h3 className="uppercase tracking-[10px] text-slate-400 text-2xl">
        Contact me
      </h3>

      <div className="flex flex-col w-screen items-center justify-between p-5 gap-5">
        <h4 className="font-light text-sm sm:text-xl leading-relaxed text-justify relative mx-auto tracking-wide max-w-2xl ">
          Whether you're an individual, a startup, or an organization, I'm
          excited to connect with you and contribute to your digital journey.
          Feel free to reach out, and let's build something amazing together!
        </h4>
        <div className="relative">
          <p className="text-md  underline decoration-green-300/80 font-semibold">
            Prathviraj.b.n@gmail.com
          </p>
          <p className="text-md  underline decoration-green-300/80 font-semibold">
            +91 6361192712
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 mx-auto relative w-full sm:w-fit"
        >
          <div className="flex space-y-2 md:space-y-0 md:space-x-2 space-x-0 flex-col md:flex-row">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("msg")}
            placeholder="message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-green-300/80 py-1 px-2 w-full sm:py-5 sm:px-10 rounded-md text-slate-900 font-bold text-lg hover:bg-emerald-400/80 transition-colors "
          >
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
