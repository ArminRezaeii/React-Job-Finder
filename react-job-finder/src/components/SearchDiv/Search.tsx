import {useRef, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

import { useAppDispatch } from "../../hooks/hook";
import { paramsData } from "../../store/JobData/JobData";
export default function Search() {
  const [jobName, setJobName] = useState("");
  const sltJobRemote = useRef<HTMLInputElement>(null);
  const sltJobDayPosted = useRef<HTMLSelectElement>(null);
  const sltJobTime = useRef<HTMLSelectElement>(null);
  const sltExperience = useRef<HTMLSelectElement>(null);
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();
  return (
    <div className="searchDiv grid gap-10 bg-geryIsh rounded-[10px] p-[3rem]">
      <form action="">
        <div className="firstDiv flex justify-between items-center rounded-[8px] bg-white p-5 shadow-lg shadow-geryIsh-700">
          <div className="flex gap-2 items-center flex-grow">
            <AiOutlineSearch className="text-[25px] icon" />
            <input
              type="text"
              required
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
              className="bg-transparent text-blueColor focus:outline-none w-full"
              placeholder="Search Job Here..."
            />
          </div>

          <button
            type="button"
            onClick={() =>
              jobName.length > 0 ? (
                <>
                  {dispatch(
                    paramsData({
                      jobName: jobName,
                      jobDate: sltJobDayPosted.current?.value,
                      jobRemote: String(sltJobRemote.current?.checked),
                      jobTime: sltJobTime.current?.value,
                      jobExperience: sltExperience.current?.value,
                    })
                  )}
                  {setError("")}
                </>
              ) : (
                setError("Job name is empty")
              )
            }
            className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300 transition duration-150"
          >
            Search
          </button>
        </div>
        <p className="font-semibold text-[16px] text-red-600 mt-3 ml-5">
          {" "}
          {error}
        </p>
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
              className="cursor-pointer text-[16px] font-medium text-textColor"
            >
              Remote
            </label>
          </form>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relveance" className="text-[#808080]  font-semibold">
            Sort by:
          </label>
          <select
            ref={sltJobDayPosted}
            id="relveance"
            className="bg-white cursor-pointer  rounded-[3px]  px-4 py-1"
          >
            <option value="today">Today</option>
            <option value="3days">3Days</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="all">All</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relveance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select
            ref={sltJobTime}
            id="relveance"
            className="bg-white cursor-pointer  rounded-[3px]  px-4 py-1"
          >
            <option value="FULLTIME">Full time</option>
            <option value="CONTRACTOR">Contractor</option>
            <option value="PARTTIME">Part time</option>
            <option value="INTERN">Intern</option>
          </select>
        </div>
        <div className="singleSearch flex items-center gap-2">
          <label htmlFor="relveance" className="text-[#808080] font-semibold">
            Sort by:
          </label>
          <select
            ref={sltExperience}
            id="relveance"
            className="bg-white cursor-pointer  rounded-[3px]  px-4 py-1"
          >
            <option value="under_3_years_experience">
              under 3 years experience
            </option>
            <option value="more_than_3_years_experience">
              more than 3 years experience
            </option>
            <option value="no_experience">no experience</option>
            <option value="no_degree">no degree</option>
          </select>
        </div>
      </div>
    </div>
  );
}
