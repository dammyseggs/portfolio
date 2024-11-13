import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const serviceData = [
     {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Web Desgin',
        description: 'A keen eye for detail and a passion for design, I create websites that reflect your brand and resonate with your target audience.'
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description: 'A passion for designing and developing robust, scalable, user-friendly, and high-quality software solutions . '
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'App Development',
        description: 'I specialize in developing high-quality mobile and web applications that deliver exceptional user experiences'
    }, 
];
   
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
            <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                {serviceData.map((item, index) => {
                    return (
                        <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                            <CardHeader className="text-primary absolute -top-[60px]">
                                <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                                    {item.icon}
                                </div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <CardTitle className="mb-4 text-xl">{item.title}</CardTitle>
                                <CardDescription className="text-lg">{item.description}</CardDescription>
                            </CardContent>
                        </Card>
                    );
                })}    
            </div>
        </div>
    </section> 
  );
};

export default Services