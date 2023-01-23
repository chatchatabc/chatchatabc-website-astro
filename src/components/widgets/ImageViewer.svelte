<script lang="ts">
  export let className: string, imgUrl: string;
  let currentZoom = 100;

  const handleZoom = (action: string) => {
    if (action === "in" && currentZoom < 200) {
      currentZoom += 25;
    } else if (action === "out" && currentZoom > 100) {
      currentZoom -= 25;
    } else if (action === "reset") {
      currentZoom = 100;
    }
  };
</script>

<div class={`flex flex-col ${className}`}>
  <div
    class="hidden items-center justify-end w-full text-2xl space-x-4 lg:flex"
  >
    <p class="ml-auto text-sm">Zoom: {currentZoom}%</p>
    <button on:click={() => handleZoom("in")}> + </button>
    <button on:click={() => handleZoom("out")}> - </button>
    <button class="text-sm" on:click={() => handleZoom("reset")}>
      reset
    </button>
  </div>
  <div
    class={`flex-1 overflow-auto ${
      currentZoom !== 100 ? "max-h-[calc(100vh-20vh)]" : ""
    }`}
  >
    <div style={`width:${currentZoom}%`} class="object-contain relative group">
      {#if imgUrl}
        <div
          class="opacity-0 duration-500 bg-gray-600 bg-opacity-50 absolute top-0 left-0 h-full w-full flex justify-center items-center group-hover:opacity-100"
        >
          <a
            href={imgUrl}
            target="_blank"
            rel="noreferrer"
            class="bg-[#E8DEF8] text-[#6750A4] px-4 py-1 rounded-full duration-500 hover:bg-slate-100"
          >
            View image
          </a>
        </div>
      {/if}
      <slot />
    </div>
  </div>
</div>
