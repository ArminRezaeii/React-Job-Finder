import { useEffect, useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsHouseDoor } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";

export default function Search() {
  const [jobName, setJobName] = useState<string>("");
  const sltJobRemote = useRef<HTMLInputElement>(null);
  const sltJobDayPosted = useRef<HTMLSelectElement>(null);

  return (
    <div className="searchDiv grid gap-10 bg-geryIsh rounded-[10px] p-[3rem]">
      <form action="">
        <div
          className="firstDiv flex justify-between items-center rounded-[8px]
        gap-[10px] bg-white p-5 shadow-lg shadow-geryIsh-700 "
        >
          <div className="flex gap-2  items-center">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
              className="bg-transparent text-blueColor focus:outline-none w-[100%] "
              placeholder="Search Job Here..."
            />
            <AiOutlineCloseCircle
              onClick={() => setJobName("")}
              className="text-[30px] text-[#a5a6a6] hover:text-textColor icon"
            />
          </div>
          <div className="flex gap-2  items-center">
            <BsHouseDoor className="text-[25px] icon" />
            <input
              type="text"
              disabled
              className="bg-transparent text-blueColor focus:outline-none w-[100%] "
              placeholder="Search By Company..."
            />
            <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6]  icon" />
          </div>
          <div className="flex gap-2  items-center">
            <CiLocationOn className="text-[25px] icon" />
            <input
              type="text"
              value="USA"
              disabled
              className="bg-transparent text-blueColor focus:outline-none w-[100%] "
              placeholder="Search By Location..."
            />
            <AiOutlineCloseCircle
              onClick={() => setJobName("")}
              className="text-[30px] text-[#a5a6a6]  icon"
            />
          </div>
          <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300 transition duration-150">
            Search
          </button>
        </div>
      </form>
      <div className="secDiv flex items-center gap-10 justify-center">
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relveance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <form className="flex gap-3 items-center" action="">
            <input
              id="check"
              ref={sltJobRemote}
              type="checkbox"
              className="rounded-[10px]"
            />
            <label
              htmlFor="check"
              className="cursor-pointer text-[16px] font-semibold text-textColor"
            >
              Remote
            </label>
          </form>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relveance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select
            ref={sltJobDayPosted}
            id="relveance"
            className="bg-white  rounded-[3px]  px-4 py-1"
          >
            <option>today</option>
            <option>3days</option>
            <option>week</option>
            <option>month</option>
            <option>All</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relveance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select id="relveance" className="bg-white  rounded-[3px]  px-4 py-1">
            <option value="">Relevance</option>
            <option value="">Relevance</option>
            <option value="">Relevance</option>
            <option value="">Relevance</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relveance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select id="relveance" className="bg-white  rounded-[3px]  px-4 py-1">
            <option value="">Relevance</option>
            <option value="">Relevance</option>
            <option value="">Relevance</option>
            <option value="">Relevance</option>
          </select>
        </div>
        <button
          className="text-[#a1a1a1] cursor-pointer"
          onClick={() => {

            setJobName("");

          }}
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
