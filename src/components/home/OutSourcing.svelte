<script>
  import { t } from "i18next";
  // Value is null when none is selected
  let selected = null;

  // List of items
  const positions = [
    {
      title: t("jobs.java-developer.title"),
      imageUrl: "https://avatars.githubusercontent.com/u/60991513",
      summary: t("jobs.java-developer.summary"),
      details: t("jobs.java-developer.details"),
    },
    {
      title: t("jobs.web-developer.title"),
      imageUrl: "",
      summary: t("jobs.web-developer.summary"),
      details: t("jobs.web-developer.details"),
    },
    {
      title: t("jobs.backend-engineer.title"),
      imageUrl: "",
      summary: t("jobs.backend-engineer.summary"),
      details: t("jobs.backend-engineer.details"),
    },
    {
      title: t("jobs.designer.title"),
      imageUrl: "",
      summary: t("jobs.designer.summary"),
      details: t("jobs.designer.details"),
    },
  ];

  const handleBtn = (index) => {
    if (selected && selected === index) selected = null;
    else selected = index;
    const card = document.getElementById("card-focus");
    if (card) card.focus();
  };
</script>

<div>
  <!-- Card Container -->
  <ul
    class={`flex px-8 relative justify-center flex-wrap ${
      selected ? "lg:space-x-0" : "md:gap-8 lg:gap-0 lg:space-x-8"
    } lg:flex-nowrap lg:px-16`}
  >
    {#each positions as position, index}
      <li
        id={selected === index + 1 ? "card-focus" : ""}
        tabIndex={selected === index + 1 ? -1 : index + 1}
        class={`text-center duration-500 ${
          index + 1 === selected
            ? // Show item design if it is selected
              "w-full"
            : selected
            ? // Hide item if other was already selected
              "md:w-0 md:h-0 md:opacity-0"
            : // Show item while none is selected
              "opacity-100 w-full md:w-[45%]"
        } mb-8`}
      >
        <!-- Title -->
        <div class="relative">
          <div class="h-8 w-1 bg-[#6750A4] absolute rounded-full bottom-1/4" />
          <h4 class="text-xl capitalize">{position.title}</h4>
        </div>

        <!-- Card -->
        <div
          class={`mt-2 rounded-xl flex-col bg-[#9A82DB] flex group overflow-hidden ${
            selected === index + 1
              ? // if the current item is selected
                "min-h-[500px] shadow-2xl  md:h-[350px] lg:min-h-[unset] lg:shadow-neutral-700 lg:flex-row"
              : // if the current item is not selected
                "shadow-xl min-h-[18rem] md:h-[18rem]"
          } duration-500 relative`}
        >
          <!-- Image || Avatar -->
          <div
            class={`mx-auto border duration-300 overflow-hidden ${
              selected === index + 1
                ? // if the current item is selected
                  "w-full h-48 md:h-56 lg:h-full lg:w-1/3"
                : // if the current items is no selected
                  "w-24 h-24 rounded-full mt-2"
            }`}
          >
            {#if position.imageUrl.length}
              <img
                src={position.imageUrl}
                class="w-full h-full object-cover"
                alt={position.title}
              />
            {:else}
              <img
                src="/images/no-image.png"
                class="w-full h-full object-cover"
                alt={position.title}
              />
            {/if}
          </div>

          <!-- Description -->
          <p
            class="text-left text-sm px-4 py-2 flex-1 whitespace-pre-wrap md:text-base"
          >
            {selected === index + 1 ? position.details : position.summary}
          </p>

          <!-- Button for Desktop -->
          <button
            on:click={() => handleBtn(index + 1)}
            class={`hidden pointer-events-none from-transparent py-4 to-[#6750A4] ${
              selected
                ? // if there's a selected item
                  "absolute top-0 h-full bg-gradient-to-r px-2"
                : // if there's not yet a selected item
                  "bg-gradient-to-b"
            } mt-auto duration-1000 right-0 lg:block lg:pointer-events-auto 
            lg:opacity-0 group-hover:opacity-100`}
          >
            {selected ? "Close" : "Show more"}
          </button>

          <!-- Button for Smaller Screens -->
          <button
            on:click={() => handleBtn(index + 1)}
            class="mt-auto p-2 bg-[#E8DEF8] text-[#6750A4] lg:hidden"
          >
            <span>
              {selected === index + 1 ? "Close" : "Show more"}
            </span>
          </button>
        </div>
      </li>
    {/each}
  </ul>
</div>
