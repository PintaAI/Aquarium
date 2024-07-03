// Import yang diperlukan
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/landing/infinite-moving-cards.tsx";
import Link from "next/link";
import Navbar from "@/components/landing/navbar";
import { InfiniteMovingCards } from "@/components/landing/infinite-moving-cards.tsx";

//di sini adalah landing page
export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
 
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
      <InfiniteMovingCards items={testimonials}/>
      </main>
      <footer>
        footer
      </footer>
    </div>
  )
}

export default Page;
