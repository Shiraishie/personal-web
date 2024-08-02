import { motion } from "framer-motion";
import "./Contact.css";
import { IconBrandTelegram, IconMail, IconSchool } from "@tabler/icons-react";

type RobotEffectProps = {
  icon: any;
  email: any;
};

export default function Contact() {
  const robotEffect = ({ icon, email }: RobotEffectProps) => {
    return (
      <>
        <div className="flex space-x-0 items-center mt-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mr-5"
          >
            {icon}
          </motion.div>
          {email.split("").map((i, index) =>
            i == " " ? (
              "\u00A0"
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 0.5 + index / 20 }}
                className="text-xl"
              >
                {i}
              </motion.div>
            )
          )}
        </div>
      </>
    );
  };

  const c = "Contact Me";

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <div className="contact-box flex justify-center items-center text-black w-full h-96">
          {c.split("").map((i, index) =>
            i == " " ? (
              <span style={{ fontSize: "55px" }}>{"\u00A0"}</span>
            ) : (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.05, delay: 0.2 + index / 10 }}
                className="text-7xl"
              >
                {i}
              </motion.div>
            )
          )}
        </div>
        <div className="contact-icon">
          {robotEffect({
            icon: <IconMail size={35} />,
            email: "Personal Email: alexxtm.at@gmail.com",
          })}
          {robotEffect({
            icon: <IconSchool size={35} />,
            email: "School Email: e0969604@u.nus.edu",
          })}
          {robotEffect({
            icon: <IconBrandTelegram size={35} />,
            email: "Telegram: @shiraishieie",
          })}
        </div>
      </div>
    </>
  );
}
