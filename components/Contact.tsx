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
      <h3 className="uppercase tracking-[10px] text-slate-400 text-2xl">
        Contact me
      </h3>

      <div className="flex flex-col space-y-4 relative">
        <h4 className="font-light leading-relaxed indent-10 text-justify absolute mx-auto tracking-wide">
          Whether you're an individual, a startup, or an organization, I'm excited to connect with you and contribute to your digital journey. Feel free to reach out, and let's build something amazing together!
        </h4>

        <span className="h-2 p-5 opacity-0">_</span>
        <p className="text-md relative top-16 underline decoration-green-300/80 font-semibold">Prathviraj.b.n@gmail.com</p>
        <p className="text-md relative top-12 underline decoration-green-300/80 font-semibold">+91 6361192712</p>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto relative top-14">
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
            Send Mail
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
