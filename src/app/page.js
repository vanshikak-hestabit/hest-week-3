"use client";
import Modal from "@/components/ui/Modal";
import Card from "@/components/ui/Card";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">

      {/* ================================
          HERO BEACH IMAGE (Enhanced)
      ================================= */}
      <div className="relative w-full h-[450px] overflow-hidden">

        {/* Image with slight zoom on hover */}
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="Beach"
          className="w-full h-full object-cover transition-transform duration-[5000ms] hover:scale-110"
        />

        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>

        {/* Center heading with glow */}
        <h1
          className="
            absolute inset-0 flex items-center justify-center 
            text-white font-bold text-5xl 
            tracking-wide
          "
        >
          Welcome to WanderSphere Travels
        </h1>
      </div>

      {/* ================================
          TRAVEL HELP SECTION (Enhanced)
      ================================= */}
      <div className="mt-16 text-center px-6">
        <h2 className="text-4xl font-bold tracking-wide">
          Having trouble planning a trip?
        </h2>

        <p className="text-2xl mt-4 leading-relaxed opacity-90">
          Don’t worry — let our experts design the perfect journey for you.
          From destinations to budgets, we handle everything.
        </p>

        {/* Premium animated button */}
        <button
          className="
            mt-6 bg-blue-900 hover:bg-blue-700 text-white 
            text-xl px-8 py-3 rounded-xl shadow-xl 
            transition-all duration-300 transform hover:scale-105
            hover:shadow-blue-500/40
          "
        >
          Book With Us
        </button>
      </div>

      {/* ================================
          FEATURE CARDS (Enhanced Hover)
      ================================= */}
      <div className="flex justify-between p-6 gap-4 mt-10">

        {/* Each Card wrapped in hover animation */}
        <div className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-xl">
          <Card
            classes="w-md"
            title="About Us"
            text="Know about us"
            bg="bg-red-200"
            onArrowClick={openModal}
          />
        </div>

        <div className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-xl">
          <Card
            classes="w-md"
            title="Where to go?"
            text="Best for you"
            bg="bg-blue-300"
            onArrowClick={openModal}
          />
        </div>

        <div className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-xl">
          <Card
            classes="w-md"
            title="Family, Solo & Friends"
            text="Customise your package"
            bg="bg-orange-200"
            onArrowClick={openModal}
          />
        </div>

        <div className="transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl rounded-xl">
          <Card
            classes="w-md"
            title="Meet Us"
            text="Contact"
            bg="bg-green-300"
            onArrowClick={openModal}
          />
        </div>

      </div>

      <Modal open={isModalOpen} close={closeModal} content={""} />
    </div>
  );
}
