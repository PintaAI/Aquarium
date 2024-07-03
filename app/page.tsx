// Import yang diperlukan
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/landing/infinite-moving-cards.tsx";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import { InfiniteMovingCards } from "@/components/landing/infinite-moving-cards.tsx";
import Image from "next/image";
import { PinContainer } from "@/components/landing/3d-pin";

// Data testimoni untuk InfiniteMovingCards
const testimonials = [
  {
    image: "/image/kucing1.jpeg",
    name: "kucing1",
    title: "kucing",
  },
  {
    image: "/image/kucing2.jpeg",
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    image: "/image/kucing3.webp",
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    image: "/image/kucing4.webp",
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    image: "/image/kucing5.jpeg",
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];


// Halaman utama
const Page = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="mt-16">
        <div>
          <div className="h-auto min-h-[50rem] p-8 rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
            <div className="mt-16 w-full flex items-center justify-center">
      <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
    </div>
          </div>
        </div>
      </main>
      <footer className="mt-16">
        Footer
      </footer>
    </div>
  );
};

export default Page;
