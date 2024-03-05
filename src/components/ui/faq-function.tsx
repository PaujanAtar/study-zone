import React, { useState } from "react";
import Image from "next/image";

export default function FAQItem({ faq }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="shadow-left w-full max-w-[889px] rounded-[12px] border-2 border-[#000000] bg-[#FEDB99] p-[48px]">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-semibold md:text-2xl">{faq.title}</h1>
        <button onClick={toggleExpansion}>
          <Image
            src={isExpanded ? "/remove.png" : "/add.png"}
            alt="button"
            width={28}
            height={28}
          />
        </button>
      </div>
      {isExpanded && (
        <h2 className="mt-[12px] text-xl font-normal md:text-base">
          {faq.description}
        </h2>
      )}
    </div>
  );
}
