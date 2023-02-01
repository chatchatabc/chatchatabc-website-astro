<script lang="ts">
  import { onMount } from "svelte";
  import type { CollectionEntry } from "astro:content";
  import { utilGetTranslations } from "@helpers/commonUtils";
  import type { ObjectInterface } from "@helpers/commonInterface";

  export let aboutList: CollectionEntry<"about">[] = [];

  // value is null when none is selected
  let selected: number | null = null;

  let translation: ObjectInterface = { misc: {} };
  onMount(() => {
    // Gets translation and put it to the variable
    translation = utilGetTranslations(window.location.href);
  });
</script>

<ul
  class={`px-2 pb-8 relative flex flex-col h-min-[500px] ${
    selected ? "" : "space-y-4 md:-space-y-32"
  }`}
>
  {#each aboutList as about, index}
    <!-- Item container -->
    <li
      class={`bg-[#c4b8e6] border-2 shadow-xl delay-75 group overflow-hidden ${
        selected === index + 1
          ? // Displays the selected item
            "shadow-gray-500 w-full p-12"
          : selected
          ? // Make other cards hidden when one is selected
            "max-h-0 w-0 p-0 opacity-0 top-0"
          : // Make cards visible when none is selected
            "h-full max-h-[500px] p-12 opacity-100 md:w-[50%]"
      } duration-500 rounded-t-[4rem] rounded-b-xl lg:hover:z-10 even:mx-auto last:ml-auto`}
    >
      <!-- Item Title -->
      <h4 class="text-4xl pb-2">{about.data.title}</h4>

      <!-- Item Description -->

      {#if selected === index + 1}
        {#if about.data.id === "about-1"}
          <div
            class={`overflow-hidden max-h-[100px] duration-500 delay-75 w-full group-hover:w-full`}
          >
            <slot name="about-1" />
          </div>
        {/if}
        {#if about.data.id === "about-2"}
          <div
            class={`overflow-hidden max-h-[100px] duration-500 delay-75 w-full group-hover:w-full`}
          >
            <slot name="about-2" />
          </div>
        {/if}
        {#if about.data.id === "about-3"}
          <div
            class={`overflow-hidden max-h-[100px] duration-500 delay-75 w-full group-hover:w-full`}
          >
            <slot name="about-3" />
          </div>
        {/if}
      {:else}
        <div
          class={`overflow-hidden max-h-[100px] duration-500 delay-75 w-full group-hover:w-full`}
        >
          {about.data.summary}
        </div>
      {/if}

      <!-- Item button; button only shows up if user hovers on the card -->
      <button
        class={`block mt-4 underline underline-offset-4 duration-500 ${
          selected === index + 1 ? "lg:opacity-100" : "lg:opacity-0"
        } group-hover:duration-700 group-hover:opacity-100`}
        on:click={() => (selected = selected === index + 1 ? null : index + 1)}
      >
        {selected === index + 1
          ? translation.misc.close
          : `${translation.misc.read_more} >`}
      </button>
    </li>
  {/each}
</ul>
