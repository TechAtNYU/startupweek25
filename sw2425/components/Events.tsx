"use client";

import React from "react";
import { Carousel, Card } from "./applestyleCarousel";
import EventContent from "./EventConent"

const Events = () => {
  // Define the items for the carousel as Card components
  const items = [
    <Card
      key={1}
      index={0}
      card={{
        src: "/eventTypes/DoubleSemi.svg",
        title: "Annual Buildathon",
        category: "Build something in 36 hours",
        content: <EventContent
                text="Attendees will gain exclusive insights into the journeys, challenges, and opportunities of leading innovators in startups, venture capital, and cutting-edge technology. The keynote panel provides practical advice, inspiration, and an opportunity to connect with industry leaders shaping the future of tech and entrepreneurship."
                link="https://engage.nyu.edu/event/11062870"/>,
      }}
    />,
    <Card
      key={2}
      index={1}
      card={{
        src: "/eventPics/terri.jpg",
        title: "Keynote Event",
        category: "Watch industry leaders speak",
        content: <EventContent 
                  text="Attendees will gain exclusive insights into the journeys, challenges, and opportunities of leading innovators in startups, venture capital, and cutting-edge technology. The keynote panel provides practical advice, inspiration, and an opportunity to connect with industry leaders shaping the future of tech and entrepreneurship." 
                  link="https://engage.nyu.edu/event/11066495"/>,
      }}
    />,
    <Card
      key={3}
      index={2}
      card={{
        src: "/eventPics/banquet.JPG",
        title: "End of Week Social",
        category: "Network with industry professionals",
        content: <EventContent
                  text="The Networking Mixer Social provides a relaxed and engaging environment for students, professionals, and industry leaders to connect, exchange ideas, and build meaningful relationships. Attendees will have the opportunity to expand their networks, explore collaborative opportunities, and gain insights into career paths and industry trends while enjoying light refreshments and interactive activities."
                  link="https://engage.nyu.edu/event/11077107"/>,
      }}
    />,
    <Card
      key={4}
      index={3}
      card={{
        src: "/eventPics/notion.png",
        title: "Notion Workshop",
        category: "Maximize your productivity with Notion",
        content: <EventContent
                  text="This workshop will teach participants how to use Notion to streamline their personal and professional workflows, organize projects, and improve productivity. The session will provide hands-on guidance tailored for students, professionals, and team collaboration."
                  link="https://engage.nyu.edu/event/11077107"
                  />,
      }}
    />,
    <Card
      key={5}
      index={4}
      card={{
        src: "/eventPics/panel.jpg",
        title: "Future of Tech Panel",
        category: "Hear what today's pros see in tomorrow",
        content: <EventContent
                text="Future of Tech Panel brings together visionary leaders and innovators to discuss emerging trends, groundbreaking technologies, and their real-world applications. Attendees will gain exclusive insights into how cutting-edge tech is shaping industries and experience live demonstrations of innovative products. This event offers a unique opportunity to explore the intersection of creativity, technology, and future possibilities."
                link="https://engage.nyu.edu/event/11066505"/>,
      }}
    />,
    <Card
      key={6}
      index={5}
      card={{
        src: "/eventPics/keynote.png",
        title: "Z-Fellows Q&A",
        category: "Learn what it takes to be an entrepreneur",
        content: <EventContent
                text="The Z-Fellows Office Tour and Program Orientation offers participants an exclusive glimpse into the student startup accelerator program. Attendees will learn about the program&#39;s mission, resources, and success stories while touring the facilities and connecting with peers, mentors, and program leaders. This event sets the stage for collaboration, innovation, and entrepreneurial growth, inspiring students to take their ideas to the next level."
                link="https://engage.nyu.edu/organization/tech-at-nyu-all-university/events"
                />,
      }}
    />,
    <Card
      key={7}
      index={6}
      card={{
        src: "/eventPics/panel3.jpg",
        title: "Demo Day",
        category: "Pitch your creation to actual VC's",
        content: <EventContent
                  text="Hackathon Demo Day showcases the innovative solutions and creative projects developed by hackathon participants. Attendees will witness live demonstrations of cutting-edge ideas and technologies, network with talented developers and industry professionals, and celebrate the culmination of an exciting, collaborative journey. This event provides an opportunity for participants to present their work, gain valuable feedback, and connect with potential collaborators, mentors, and employers. "
                  link="https://engage.nyu.edu/event/11099512"/>,
      }}
    />,
    <Card
      key={8}
      index={7}
      card={{
        src: "/eventPics/panel2.jpg",
        title: "Big Tech v. Startup Panel",
        category: "Learn about industry giants and startups",
        content: <EventContent
                  text="Attendees will gain exclusive insights into the differences between big tech companies and startups, hearing from professionals about their personal experience, all the ups and downs, and challenges they encounter throughout their way. It will not only be a valuable information session useful for students deciding their path, but also a great opportunity to connect with these industry leaders. "
                  link="https://engage.nyu.edu/event/11066493"
                  />,
      }}
    />,
  ];

  return (
    <section className="relative z-10 w-full h-[50%] flex flex-col">
      <div className=" px-4 text-center md:text-left flex-row justify-center w-full items-center flex pt-10 mt-5 ">
        <h2 className="text-2xl md:text-5xl font-extrabold text-white inline-block ">
          Events
        </h2>
        <p className="text-lg md:text-3xl text-white pl-20">
          Startup Week is one of NYU&#39;s largest tech-fest events It is Tech@NYU&#39;s
          flagship conference, bringing industry experts with partners from with
          eBay, YC, Berkeley Entrepreneurship Center, and other up and coming
          startups.
        </p>
      </div>
      <div className="w-full py-10 min-h-[40vh]">
        <Carousel items={items} />
      </div>
    </section>
  );
};

export default Events;


