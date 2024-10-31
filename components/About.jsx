import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase, University } from "lucide-react";
import DevImg from "./DevImg";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Emmanuel Famakindde'
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+234 905 8413 579'
    },
    {
        icon: <MailIcon size={20} />,
        text: 'famakindeolamide@gmail.com'
    },
];

const qualificatonData = [
    {
        title: 'education',
        data: [
            {
                university: 'Joseph Ayo Babalola University',
                qualification: 'Bachelor of Science',
                years: '2019 - 2022'
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Unified Payment',
                qualification: 'Software Engineer',
                years: '2024 - Till Date'
            }
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'Javascript C#',
            },
            {
                name: 'Back-end Development',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath:  '/about/figma.svg',
            },
            {
                imgPath:  '/about/photoshop.svg',
            },
            {
                imgPath:  '/about/wordpress.svg',
            },
        ]
    }
]

 

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
            <div className="flex flex-col xl:flex-row">
                <div className="hidden xl:flex flex-1 relative">
                    <DevImg containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative' imgSrc=''/>
                </div>
                <div className="flex-1 ml-2">
                    <Tabs defaultValue="personal">
                        <TabsList>
                            <TabsTrigger value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger value='qualificaton'>Qualifications</TabsTrigger>
                            <TabsTrigger value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value='personal'>personal info</TabsContent>
                            <TabsContent value='qualificaton'>qualifications info</TabsContent>
                            <TabsContent value='skills'>skills info</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
 