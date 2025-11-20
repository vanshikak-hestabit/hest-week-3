"use client";

import Card from "@/components/ui/Card";
import Modal from "@/components/ui/Modal";
import { useState } from "react";
import TakeInput from "@/components/ui/Input";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>

      {/* ↓ makes the whole page a relative container so absolute works inside */}
      
      <h1 className="font-bold text-4xl mb-4">Dashboard</h1>

      {/* CARDS COMPONENT */}
      <div className="grid grid-cols-4 gap-6">
        <Card
          title="Primary Card"
          text="Quick summary or value"
          bg="bg-blue-800"
          onArrowClick={openModal}
        />

        <Card
          title="Sucess Card"
          text="Reach the top"
          bg="bg-green-600"
          onArrowClick={openModal}
        />

        <Card
          title="Warning"
          text="What not to do"
          bg="bg-yellow-600"
          onArrowClick={openModal}
        />

        <Card
          title="Danger"
          text="View details"
          bg="bg-red-700"
          onArrowClick={openModal}
        />
      </div>

      <Modal open={isModalOpen} close={closeModal} />

      {/* INPUT → BOTTOM RIGHT */}
      <div className="absolute bottom-0 right-0">
        <TakeInput />
      </div>
    </div>
  );
}
