'use client';

import Image from "next/image";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css'
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'; 

const reviewsData = [
    {
        avatar: '/reviews/avatar-1.png',
        name: "Demilade Olorode",
        job: 'Chef',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos impedit consectetur sapiente voluptates nisi, perferendis perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-2.png',
        name: "Eunice Winipeg",
        job: 'Interior Designer',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos impedit consectetur sapiente voluptates nisi, perferendis perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-3.png',
        name: "Entoy Autos",
        job: 'Game Dev',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos impedit consectetur sapiente voluptates nisi, perferendis perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-4.png',
        name: "Zee Zuwa",
        job: 'Therapist',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos impedit consectetur sapiente voluptates nisi, perferendis perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: "Chima Amanda",
        job: 'Engineer',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos impedit consectetur sapiente voluptates nisi, perferendis perspiciatis.',
    },
    {
        avatar: '/reviews/avatar-1.png',
        name: "Ronald D Daddy",
        job: 'Video Editor',
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos impedit consectetur sapiente voluptates nisi, perferendis perspiciatis.',
    },
]

const Reviews = () => {
  return (
    <section  className="mb-12 xl:mb-32">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
            <Swiper slidesPerView={1} breakpoints={{
                640: {slidesPerView: 2},
                1400: {slidesPerView: 3},
            }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true,}} 
            className="h-[350px]"
           >
                {reviewsData.map((person, index) => {
                    return <SwiperSlide key={index}>
                        <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px] ">
                            <CardHeader className="p-0 mb-10">
                                <div className="flex items-center gap-x-4">
                                    <Image src={person.avatar} width={70} height={70} alt="" priority />
                                    <div className="flex flex-col">
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className="text-lg text-muted-foreground">{person.review}</CardDescription>
                        </Card>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews