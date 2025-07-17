"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { MdOutlineWork, MdOutlineSchool } from "react-icons/md";

const Career = () => {
  return (
    <section id="career">
      <div className="py-20">
        <h4 className="text-5xl font-semibold text-white text-center">
          Career
        </h4>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="July 2025 - July 2027"
          dateClassName="text-white"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<MdOutlineSchool />}
        >
          <h3 className="vertical-timeline-element-title">MSC-IT</h3>
          <h4 className="vertical-timeline-element-subtitle">GLS University</h4>
          <p>Ahmedabad, IN</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="November 2024 - July 2025"
          dateClassName="text-white"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Ahmedabad, IN</h4>
          <p>Creating User Interface, Daynamic UI, Responsive Design</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="August 2021 - June 2024"
          dateClassName="text-white"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<MdOutlineSchool />}
        >
          <h3 className="vertical-timeline-element-title">BCA</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Silver Oak University
          </h4>
          <p>Ahmedabad, IN</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="February 2023 - August 2023"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdOutlineWork />}
          dateClassName="text-white"
        >
          <h3 className="vertical-timeline-element-title">
            React Developer Intern
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Codage Habitation
          </h4>
          <p>Ahmedabad, IN</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Career;
