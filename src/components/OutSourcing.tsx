import React, { useState } from "react";

function OutSourcing() {
  const positions = [
    "java developer",
    "web developer",
    "backend engineer",
    "designer",
  ];
  const [selected, setSelected] = useState<null | Number>(null);
  const handleButton = (index: Number) => {
    if (selected) setSelected(null);
    else setSelected(index);
  };
  return (
    <div>
      <ul className="flex gap-8 px-16 relative justify-center flex-wrap">
        {positions.map((position, index) => {
          index += 1;
          return (
            <li
              key={position + index}
              className={`text-center outsourcing-cards duration-500 ${
                selected && index !== selected
                  ? "w-0 hidden opacity-0"
                  : index === selected
                  ? "w-full"
                  : "w-[45%] lg:w-1/4"
              }`}
            >
              <div className="relative">
                <div className="h-8 w-1 bg-[#6750A4] absolute rounded-full bottom-1/4" />
                <h4 className="text-xl capitalize">{position}</h4>
              </div>
              <div
                className={`mt-2 h-72 rounded-xl bg-[#9A82DB] flex flex-col group overflow-hidden ${
                  index === selected
                    ? "shadow-2xl shadow-neutral-700"
                    : "shadow-xl"
                }`}
              >
                <div className="w-24 h-24 mx-auto mt-2 border rounded-full overflow-hidden">
                  <img
                    src="?"
                    className="w-full h-full object-cover"
                    alt={position}
                  />
                </div>
                <p className="text-left px-4 py-2">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore repudiandae similique porro aut.
                </p>
                <button
                  onClick={() => handleButton(index)}
                  className="bg-gradient-to-b from-transparent py-4 to-[#6750A4] mt-auto duration-1000 lg:opacity-0 group-hover:opacity-100"
                >
                  Show more
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OutSourcing;
