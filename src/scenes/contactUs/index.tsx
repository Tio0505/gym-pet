import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { FormEvent } from "react";

import { SelectedPage } from "@/shared/types";
import HText from "@/shared/HText";

import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white mb-5`;

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onHandleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      event.preventDefault();
    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* heading */}
        <motion.div
          className="md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="my-5">
            Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
            sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
            adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.
          </p>
        </motion.div>

        {/* form & image */}
        <div className="md:flex mt-10 justify-between gap-8">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onHandleSubmit}
              action="https://formsubmit.co/2381729c53cc20411caa7dcdabb0b5c5"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required"}
                  {errors.name.type === "maxLength" && "Max length is 100 char"}
                </p>
              )}
              <input
                className={inputStyles}
                type="email"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address"}
                </p>
              )}
              <textarea
                className={inputStyles}
                rows={4}
                cols={50}
                placeholder="MASSAGE"
                {...register("massage", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.massage && (
                <p className="mt-1 text-primary-500">
                  {errors.massage.type === "required" &&
                    "This field is required"}
                  {errors.massage.type === "maxLength" &&
                    "Max length is 2000 char"}
                </p>
              )}

              <button
                type="submit"
                className="rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>
            </form>
          </motion.div>
          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img src={ContactUsPageGraphic} alt="img" className="w-full" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
