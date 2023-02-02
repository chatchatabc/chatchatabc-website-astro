<script lang="ts">
  import { onMount } from "svelte";
  import type { CollectionEntry } from "astro:content";
  import { utilGetTranslations } from "@helpers/commonUtils";
  import type { ObjectInterface } from "@helpers/commonInterface";

  export let jobs: CollectionEntry<"jobs">[];

  // Value is null when none is selected
  let selected: number | null = null;

  const handleBtn = (index: number) => {
    if (selected && selected === index) selected = null;
    else selected = index;
  };

  let translation: ObjectInterface = { misc: {} };

  onMount(() => {
    // Gets translation and put it to the variable
    translation = utilGetTranslations(window.location.href);
  });
</script>

<div>
  <!-- Card Container -->
  <ul
    class={`flex relative justify-center flex-wrap md:px-4 lg:px-8 lg:flex-nowrap`}
  >
    {#each jobs as position, index}
      <li
        tabIndex={selected === index + 1 ? -1 : index + 1}
        class={`duration-500 flex-col flex ${
          index + 1 === selected
            ? // Show item design if it is selected
              "w-full"
            : selected
            ? // Hide item if other was already selected
              "md:w-0 md:h-0 md:opacity-0"
            : // Show item while none is selected
              "opacity-100 w-full md:w-[45%]"
        } py-4 p-2`}
      >
        <!-- Title -->
        <div class="relative text-center">
          <div class="h-8 w-1 bg-tertiary  absolute rounded-full bottom-1/4" />
          <h4 class="text-xl capitalize">{position.data.title}</h4>
        </div>

        <!-- Card -->
        <div
          class={`mt-2 rounded-xl flex-col bg-surfaceVariant border-tertiary border-2 ${
            selected === index + 1
              ? // if the current item is selected
                "shadow-2xl lg:shadow-neutral-700 lg:flex-row"
              : // if the current item is not selected
                "shadow-xl overflow-hidden min-h-[300px]"
          } duration-500 relative flex group flex-1 overflow-hidden`}
        >
          <!-- Image || Avatar -->
          <div
            class={`mx-auto duration-300 overflow-hidden bg-tertiary ${
              selected === index + 1
                ? // if the current item is selected
                  "w-full h-48 border-b md:h-56 lg:h-full lg:w-1/3 lg:border-r lg:border-b-0"
                : // if the current items is no selected
                  "w-24 h-24 rounded-full mt-2 border"
            } flex-shrink-0 border-tertiary`}
          >
            {#if position.data.imageUrl.length}
              <img
                src={position.data.imageUrl}
                class={`w-full h-full ${
                  selected === index + 1 ? "object-contain p-4" : "object-cover"
                }`}
                alt={position.data.title}
              />
            {:else}
              <img
                src="/images/no-image.png"
                class="w-full h-full object-cover"
                alt={position.data.title}
              />
            {/if}
          </div>

          <!-- Description -->
          {#if selected === index + 1}
            <div
              class="text-justify text-sm px-4 pb-4 flex-1 scrollbar overflow-auto [direction:rtl] md:text-base"
            >
              <div class="h-max [direction:ltr]">
                {#if position.data.id === "java-developer"}
                  <slot name="java-developer" />
                {/if}
                {#if position.data.id === "web-developer"}
                  <slot name="web-developer" />
                {/if}
                {#if position.data.id === "web-designer"}
                  <slot name="web-designer" />
                {/if}
                {#if position.data.id === "backend-engineer"}
                  <slot name="backend-engineer" />
                {/if}
              </div>
            </div>
          {:else}
            <p
              class="text-justify text-sm px-4 py-2 whitespace-pre-wrap md:text-base"
            >
              {position.data.summary}
            </p>
          {/if}

          <!-- Button for Desktop -->
          <button
            on:click={() => handleBtn(index + 1)}
            class={`hidden pointer-events-none relative p-2 text-onPrimary ${
              selected
                ? // if there's a selected item
                  "absolute top-0 right-0 h-full hover:-translate-y-2"
                : // if there's not yet a selected item
                  "lg:opacity-0 group-hover:opacity-100"
            } mt-auto duration-500 lg:block lg:pointer-events-auto`}
          >
            <div
              class={`left-0 top-0 h-full w-full absolute ${
                selected ? "" : "translate-y-full bg-tertiary duration-500"
              } group-hover:translate-y-0`}
            />
            <img
              src="/images/back.png"
              class={`relative w-8 h-8 ${
                selected === index + 1 ? "block" : "hidden"
              }`}
              alt="back button"
            />
            <span class="relative">
              {selected ? "" : translation.misc.show_more}
            </span>
          </button>

          <!-- Button for Smaller Screens -->
          <button
            on:click={() => handleBtn(index + 1)}
            class="mt-auto p-2 bg-tertiary text-onPrimary lg:hidden"
          >
            <span>
              {selected === index + 1
                ? translation.misc.close
                : translation.misc.show_more}
            </span>
          </button>
        </div>
      </li>
    {/each}
  </ul>
</div>
