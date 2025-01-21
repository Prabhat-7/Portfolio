"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+977) 9815061795",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "contact@prabhatsitaula.com.np",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Jhapa,Nepal",
  },
];
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [selectedService, setSelectedService] = useState("");

  const handleSelectChange = (e: string) => {
    setSelectedService(e);
  };
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    if (!form.current) return;
    e.preventDefault();

    emailjs
      .sendForm("service_ovba0ob", "template_ch0baqc", form.current, {
        publicKey: "_KG1Mcf2Vu5QdFpvz",
      })
      .then(
        () => {
          form.current?.reset();
          setSelectedService(""); // Reset form fields
          toast({
            title: "Success!",
            description: "Message sent successfully!",
            className: "rounded-xl border-none text-accent bg-[#27272c]",
            duration: 2000,
          });
          // Display alert on success
        },
        (error) => {
          setSelectedService("");
          toast({
            variant: "destructive",
            title: "Error!",
            description: `Failed to send message: ${error.text}`,
            className: "bg-[#27272c] border-none text-red/80",
            duration: 2000,
          });
          // Display alert on failure
        }
      );
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.2,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <Toaster />
      <div className=" container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form  */}

          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              ref={form}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl "
              onSubmit={sendEmail}
            >
              <h3 className=" text-4xl text-accent ">Let's work together </h3>
              {/* input  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="text" name="firstname" placeholder="First name" />
                <Input type="text" name="lastname" placeholder="Last name" />
                <Input type="email" name="email" placeholder="Email" />
                <Input type="tel" name="phone" placeholder="Phone" />
              </div>
              {/* select  */}
              <Select
                name="service"
                value={selectedService}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="UI/UX design"> UI/UX design</SelectItem>
                    <SelectItem value="Website Maintainance">
                      Website Maintainance
                    </SelectItem>
                    <SelectItem value="AI Integration">
                      AI Integration
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text area  */}
              <Textarea
                name="message"
                className="h-[120px]"
                placeholder="Type your message here."
              />
              {/* btn  */}
              <Button className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>
          {/* info  */}
          <div className="flex-1 flex  items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className=" flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
