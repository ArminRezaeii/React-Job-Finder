import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function () {
  return (
    <div className="footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center">
      <div>
        <div className="logoDiv">
          <h1 className="logo text-[25px] text-white pb-[1.5rem]">
            <strong>Job</strong>Search
          </h1>
        </div>
        <p className="text-white pb-[13px]  opacity-70 leading-7 ">
          We always make our seekers and companies find the best jobs and
          employer find the best candidates.
        </p>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
          Company
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[0.7] hover:opacity-100">
            About us
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-100">
            Features
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-100">New</li>
          <li className="text-white opacity-[0.7] hover:opacity-100">FAQ</li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
          Support
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[0.7] hover:opacity-100">Events</li>
          <li className="text-white opacity-[0.7] hover:opacity-100">Promo</li>
          <li className="text-white opacity-[0.7] hover:opacity-100">
            Req Demo
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-100">
            Careers
          </li>
        </div>
      </div>

      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
          Resources
        </span>
        <div className="grid gap-3">
          <li className="text-white opacity-[0.7] hover:opacity-100">
            Account
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-100">
            Support Center
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-100">
            Feedback
          </li>
          <li className="text-white opacity-[0.7] hover:opacity-100">
            Contact Us
          </li>
        </div>
      </div>
      <div className="grid">
        <span className="divTitle text-[18px] font-semibold pb-[1.5rem] text-white ">
          Contact Info
        </span>
        <div>
          <small className="text-[14px] text-white">
            arminrezaei53@gmail.com
          </small>
          <div className="icons flex gap-4 py-[1rem]">
            <a href="https://twitter.com/ArminRezaeeii">
              <FaXTwitter className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            </a>
            <a href="https://www.linkedin.com/in/armin-rezaei-96615a277/">
              <CiLinkedin className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            </a>
            <a href="https://github.com/ArminRezaeii">
              <FaGithub className="bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-blueColor" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
