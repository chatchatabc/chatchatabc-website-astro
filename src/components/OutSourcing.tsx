import React, { useEffect, useState } from "react";
// https://github.com/zloirock/core-js
import "core-js/stable";

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

  useEffect(() => {
    document.getElementById("card-focus")?.focus();
  });

  return (
    <div>
      {/* Card Container */}
      <ul
        className={`flex px-8 relative justify-center flex-wrap gap-8 ${
          selected ? "lg:gap-0" : ""
        } lg:flex-nowrap lg:px-16`}
      >
        {positions.map((position, index) => {
          index += 1;
          const isSelected = selected === index;
          return (
            <li
              key={position + index}
              id={isSelected ? "card-focus" : ""}
              tabIndex={selected === index ? -1 : index}
              className={`text-center outsourcing-cards duration-500 ${
                selected && !isSelected
                  ? "md:w-0 md:h-0 md:opacity-0"
                  : selected
                  ? "w-full"
                  : "opacity-100 w-full md:w-[45%]"
              }`}
            >
              {/* Title */}
              <div className="relative">
                <div className="h-8 w-1 bg-[#6750A4] absolute rounded-full bottom-1/4" />
                <h4 className="text-xl capitalize">{position}</h4>
              </div>

              {/* Card */}
              <div
                className={`mt-2 rounded-xl flex-col bg-[#9A82DB] flex group overflow-hidden ${
                  isSelected
                    ? "min-h-[500px] shadow-2xl lg:shadow-neutral-700 lg:flex-row"
                    : "shadow-xl min-h-[18rem]"
                } duration-500 relative`}
              >
                {/* Image || Avatar */}
                <div
                  className={`mx-auto border duration-300 overflow-hidden ${
                    isSelected
                      ? "w-full h-32 lg:h-full lg:w-1/3"
                      : "w-24 h-24 rounded-full mt-2"
                  }`}
                >
                  <img
                    src="?"
                    className="w-full h-full object-cover"
                    alt={position}
                  />
                </div>

                {/* Description */}
                <p className="text-left text-sm px-4 py-2 md:text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore repudiandae similique porro aut.
                </p>

                {/* Button for Desktop */}
                <button
                  onClick={() => handleButton(index)}
                  className={`hidden pointer-events-none from-transparent py-4 to-[#6750A4] ${
                    selected
                      ? "absolute top-0 h-full bg-gradient-to-r px-2"
                      : "bg-gradient-to-b"
                  } mt-auto duration-1000 right-0 lg:block lg:pointer-events-auto 
                  lg:opacity-0 group-hover:opacity-100`}
                >
                  {selected ? "Close" : "Show more"}
                </button>

                {/* Button for Smaller Screens */}
                <button
                  onClick={() => handleButton(index)}
                  className="mt-auto p-2 bg-[#E8DEF8] text-[#6750A4] lg:hidden"
                >
                  <span className="animate-pulse">
                    {selected ? "Close" : "Show more"}
                  </span>
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
