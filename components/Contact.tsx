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
    console.log(data)
  };
  return (
    <div className="h-screen flex flex-col relative text-center md:text-left max-w-7xl md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[10px] text-slate-400 text-2xl">
        Contact me
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Lets Get in touch.
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="text-[#87f977] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+91 6361192712</p>
          </div>

          <div className="flex items-center space-x-5">
            <MapPinIcon className="text-[#87f977] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Electronic city, Bangalore</p>
          </div>

          <div className="flex items-center space-x-5">
            <EnvelopeIcon className="text-[#87f977] h-7 w-7 animate-pulse" />
            <p className="text-2xl">prathviraj.b.n@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('email')} placeholder="email" className="contactInput" type="email" />
          </div>
          <input {...register('subject')} placeholder="subject" className="contactInput" type="text" />
          <textarea {...register('msg')} placeholder="message" className="contactInput" />
          <button
            type="submit"
            className="bg-green-300/50 py-5 px-10 rounded-md text-slate-900 font-bold text-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
