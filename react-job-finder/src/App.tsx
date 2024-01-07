import React, { useEffect } from "react";
import { Footer, Job, Navbar, Search } from "./components";
import Value from "./components/ValueDiv/Value";
import { useAppDispatch, useAppSelector } from "./hooks/hook";
import axios from "axios";
import { getJobData } from "./api/api";

export default function App() {
  // const dispatch = useAppDispatch();
  // const name:string="backend"
  // useEffect(() => {
  //   dispatch(getJobData());
  // }, [dispatch]);
  // const data = useAppSelector((state) => state.job.data);
  // console.log(data);
  return (
    <div className="w-[85%] m-auto bg-white">
      <Navbar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
}
