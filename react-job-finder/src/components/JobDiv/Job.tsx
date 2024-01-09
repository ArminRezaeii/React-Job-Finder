import { BiTimeFive } from "react-icons/bi";
import { useAppDispatch, useAppSelector } from "../../hooks/hook";
import { useEffect, useState } from "react";
import { getJobData } from "../../api/api";
import { DataParams } from "../../Types";

export default function Job() {
  const jobParams = useAppSelector<DataParams>((state) => state.job.params);
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.job.isLoading);
  const jobData = useAppSelector((state) => state.job.data);
  const [showMore, setShowMore] = useState(false);
// @ts-ignore
// eslint-disable-next-line
const ignoreUnusedVariable = setShowMore;
  const [pageNumber, setPageNumber] = useState(2);
  useEffect(() => {
    dispatch(getJobData({ pageNumber, jobParams }));
  }, [dispatch, pageNumber, jobParams]);
  const truncateDescription = (
    description: string,
    maxLength: number
  ): string => {
    if (description.length <= maxLength) {
      return description;
    } else {
      return description.slice(0, maxLength) + "...";
    }
  };
  console.log(jobData);
  if (!loading) {
    return <div className="loader"></div>;
  }

  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {jobData && jobData.length > 0 ? (
          jobData?.map((data) => (
            <div
              key={data.job_id}
              className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-geryIsh-400/700 hover:shadow-lg"
            >
              <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white mb-2">
                {data.job_title}
              </h1>
              <span className="flex items-center text-[#ccc] gap-1">
                <BiTimeFive />
                <span className="text-[14px]  ml-1">
                  {new Date(data.job_posted_at_datetime_utc).toLocaleString(
                    "en-US",
                    {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "numeric",
                      minute: "numeric",
                      hour12: true,
                    }
                  )}
                </span>
              </span>
              <h6 className="text-[#ccc] mt-2">{data.job_country}</h6>
              <p
                className={`text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white`}
              >
                {showMore
                  ? data.job_description
                  : truncateDescription(data.job_description, 100)}
              </p>
              <div className="company flex items-center gap-2">
                <img
                  src={
                    data.employer_logo == undefined
                      ? "https://p1.hiclipart.com/preview/518/630/522/metal-job-logo-business-job-description-employment-management-consulting-job-fair-png-clipart.jpg"
                      : data.employer_logo
                  }
                  alt="Company Logo"
                  className="w-[10%]"
                />
                <span className="text-[14px] py-[1rem] block group-hover:text-white">
                  {data.employer_name}
                </span>
              </div>
             <a href={data.job_apply_link
            }>
             <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-black group-hover:text-white">
                Apply Now
              </button>
             </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-4 pr-[90px]">
            No jobs found
          </p>
        )}
      </div>
      <div className="w-[200px] mx-auto">
        <button
          onClick={() => {
            setPageNumber(pageNumber + 1);
          }}
          className="border-[2px] rounded-[10px] px-2 hover:bg-blueColor hover:text-white py-2"
        >
          Show More
        </button>
      </div>
    </div>
  );
}
