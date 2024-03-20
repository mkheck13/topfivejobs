import React from "react";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";
import CardComponent from "./CardComponent";

const HomeComponent = () => {
  return (
    <div>
      <h1 className="text-6xl font-bold text-center mt-10 mb-12">Mike's Top 5 Jobs</h1>
      <div className="flex mx-auto space-x-10 w-5/6 justify-center mb-8">
        <CardComponent title="Discord" desc="Discord is a social platform for users to talk with people like them." link="jobone"/>
        <CardComponent title="Cisco" desc="Cisco offers an industry-leading portfolio of technology innovations." link="jobtwo"/>
        <CardComponent title="Nvidia" desc="NVIDIA pioneered accelerated computing to tackle challenges no one else can solve." link="jobthree"/>
        </div>
        <div className="flex space-x-10 mx-auto w-5/6 justify-center">
        <CardComponent title="Google" desc="Google is a multiservice company that powers most of todays online work." link="jobfour"/>
        <CardComponent title="Freelance Developer" desc="A Freelance developer is someone that takes on jobs on their on time as a career." link="jobfive"/>
        </div>
    </div>
  );
};

export default HomeComponent;