'use client'

import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";


const Hero = () => {
  
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Path to your CV in the public folder
    link.download = "Emmanuel Famakinde's CV.pdf"; // Name for the downloaded file
    link.click();
 };


  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto relative">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Web Developer
            </div>
            <h1 className="h1">Hello, my name is Emmanuel Famakinde</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
               A professional software engineer with a focus on creating user-friendly and visually appealing websites.
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-5">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <Button variant="secondary" className="gap-x-2" onClick={handleDownload}>
                Download CV <Download size={18} />
              </Button>
            </div>
            <Socials
              containerStyles="flex gap-x-4 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={4}
              badgeText="Years Of experince"
            />
            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={20}
              badgeText="Finished Projects"
            />
             <Badge
              containerStyles="absolute top-[55%]  -right-8"
              icon={<RiTeamFill />}
              endCountNum={50}
              badgeText="Happy Clients"
            />
            
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[490px] h-[490px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles="bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom"
              imgSrc=""
            />
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 top-[64vh]  animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
