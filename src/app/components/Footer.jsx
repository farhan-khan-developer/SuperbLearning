import React from "react";
// import Logo from "";
// import { Link } from "react-router-dom";
import Link from "next/link"; 

const FOOTER_SECTIONS = [
  {
    title: "Superb Learning",
    contents: [
      {
        label: "About Us",
        link: "/",
      },
      {
        label: "Offers",
        link: "/",
      },
      {
        label: "Download App",
        link: "/",
      },
      {
        label: "Contact Us",
        link: "/contactUs",
      },
    ],
  },
  {
    title: "Discover",
    contents: [
      {
        label: "Courses",
        link: "/",
      },
      {
        label: "Blogs",
        link: "/",
      }
    ],
  },
  {
    title: "For You",
    contents: [
      {
        label: "Refer and Earn",
        link: "/",
      },
      {
        label: "Privacy policy",
        link: "/",
      },
      {
        label: "Terms and conditions",
        link: "/",
      },
    ],
  },
  
  {
    title: "Connect with Us",
    contents: [
      {
        label: "Whatsapp",
        link: "/",
      },
      {
        label: "Facebook",
        link: "/",
      },
      {
        label: "Instagram",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col w-full px-32 bg-black bottom-0">
      <div className="flex items-center justify-between footer-top pt-[50px] pb-5 px-[75px] ">
        
          <div className="flex flex-col items-center justify-center gap-5 ">
            <img src="/superbruclogo 1.png" className="footer-logo w-[90px]" alt="Logo" />
            <h3 className="text-white">Superb Learning</h3>
         
        </div>
        <div className="flex flex-wrap justify-around gap-16 footer-sections">
          {FOOTER_SECTIONS.map((item, index) => (
            <div className="footer-section" key={index}>
              <h4 className="m-0 font-semibold text-white mb-14 text-xl">{item.title}</h4>
              {item.contents.map((content, index) => (
                <Link href={content.link} key={index}>
                  <h4 className="p-0 m-0 mt-8 mb-8 block text-[#989ab0] hover:text-white text-lg">
                    {content.label}
                  </h4>
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-divider-container">
        <hr className="footer-divider bg-[#989ab0]" />
      </div>
      <div className="text-center footer-bottom">
        <p className="pt-5 pb-5 mt-10 text-xs text-[#989ab0]">
          © 2024 Superb Learning.
        </p>
      </div>
    </div>
  );
};

export default Footer;
