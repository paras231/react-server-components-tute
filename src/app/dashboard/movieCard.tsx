"use client";
import React, { useState } from "react";

type cardProps = {
  data: any;
};

const MovieCard = ({ data }: cardProps) => {
  const [cardState, setCardState] = useState<Boolean>(false);
  const handleCardState = (id: number, card: any) => {
    if (card.id === id) {
      setCardState((prev) => !prev);
    }
  };
  return (
    <>
      <h1 className="font-bold text-2xl">Movie card</h1>
      <div className=" grid grid-cols-3 gap-4">
        {data.map((d: any) => {
          return (
            <div className=" " key={d.id}>
              <span
                onClick={() => handleCardState(d.id, d)}
                className={`${
                  cardState ? "bg-purple-600" : "bg-red-600"
                } rounded-lg p-2 w-96 cursor-pointer `}
              >
                {d.title}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieCard;
