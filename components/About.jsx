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
    {
        icon: <GraduationCap size={20} />,
        text: 'BSc. Computer Science'
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Lagos, Nigeria'
    }
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
                role: 'Software Engineer',
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
                name: 'Javascript, C#',
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
               
                <div className="flex-1 ml-2 mr-2">
                    <Tabs defaultValue="personal">
                        <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                            <TabsTrigger className="w-[162px] xl:w-auto" value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value='qualificaton'>Qualifications</TabsTrigger>
                            <TabsTrigger className="w-[162px] xl:w-auto" value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        <div className="text-lg mt-12 xl:mt-8">
                            <TabsContent value='personal'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-4">Unmatched Service Quality for over 5 years</h3>
                                    <p className="subtitle max-w-xl mx-auto xl:mx-0">I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.
                                    </p>
                                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                        {infoData.map((item, index)=> {
                                            return (
                                                <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                    <div className="text-primary">{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    <div className="flex flex-col gap-y-2">
                                        <div className="text-primary">Language Skill</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, French</div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='qualificaton'>
                                <div>
                                    <h3 className="h3 mb-6 text-center xl:text-left">My Awesome Journey</h3>
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        <div className="flex flex-col gap-y-4">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <Briefcase />
                                                <h4 className="font-medium capitalize">
                                                    {getData(qualificatonData, 'experience').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">     
                                                {getData(qualificatonData, "experience").data.map((item, index)=> {
                                                   const {company, role, years} = item;
                                                   return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-2">{role}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                   )
                                                 })}
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-y-4">
                                            <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                <GraduationCap size={28}/>
                                                <h4 className="font-medium capitalize">
                                                    {getData(qualificatonData, 'education').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificatonData, "education").data.map((item, index)=> {
                                                   const {university, qualification, years} = item;
                                                   return (
                                                    <div className="flex gap-x-8 group" key={index}>
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-2">{qualification}</div>
                                                            <div className="text-base font-medium">{years}</div>
                                                        </div>
                                                    </div>
                                                   )
                                                 })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            <TabsContent value='skills'>
                                <div className="text-center xl:text-left">
                                    <h3 className="h3 mb-8">Tools I Use Everyday</h3>
                                    <div className="mb-16">
                                        <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                        <div className="border-b border-border mb-4"></div>
                                        <div className="-ml-2 -mr-2">
                                            {getData(skillData, 'skills').data.map((item, index) =>
                                                {const { name } = item;
                                                return (
                                                    <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-8" key={index}>
                                                        <div className="font-medium">{name}</div>
                                                    </div>
                                                )
                                             }
                                            )}
                                        </div>
                                    </div>
                                    <div className="">
                                        <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                                        <div className="border-b border-border mb-4"></div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  );
};

export default About;
 