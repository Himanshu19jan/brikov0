import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="container-body bg-[#1E1E1E] py-12">
      <div className="flex flex-wrap justify-between items-start">
        <div>
          <h4 className="text-white text-lg font-medium font-graphik mb-2">
            Headuaters
          </h4>
          <p className="footer-detail">DLF Phase 3, Gurugram, INDIA</p>
          <p className="text-[#F1EEE9]  text-sm font-graphik">
            Email: &nbsp;
            <Link href="mailto:geetsethi21@gmail.com">
            geetsethi21@gmail.com
            </Link>
          </p>
        </div>
        <div>
          <h4 className="text-white text-lg font-medium font-graphik mb-2">
            Office Hours
          </h4>
          <p className="footer-detail">Monday to Friday</p>
          <p className="footer-detail">9:00 am to 5:00 pm</p>
          <p className="footer-detail">Weekends by appointment</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-medium font-graphik mb-2">
            Contact Us
          </h4>
          <p className="footer-detail">
            Phone: &nbsp;
            <Link href="tel:+917350100086">+91 7350100086</Link>
          </p>
          <p className="text-[#F1EEE9]  text-sm font-graphik">
            Email: &nbsp;
            <Link href="mailto:geetsethi21@gmail.com">
            geetsethi21@gmail.com
            </Link>
          </p>
        </div>
        <div>
          <h4 className="text-white text-lg font-medium font-graphik mb-2">
            Social
          </h4>
          <div className="flex gap-2 items-center mt-2">
            <Facebook fill="#fff" color="#fff" size={16} strokeWidth={1} />
            <Instagram color="#fff" size={18} strokeWidth={2} />
            <Twitter fill="#fff" color="#fff" size={16} strokeWidth={1} />
            <Youtube color="#fff" size={18} strokeWidth={2} />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col">
        <h2 className="text-[#2D2D2D] text-6xl md:text-9xl xl:text-[462px] leading-none font-libre font-extrabold">
          briko
        </h2>
        <p className="text-[#2D2D2D]">
          © 2025 BRIKO Homes. All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
