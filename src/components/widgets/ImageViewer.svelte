<script lang="ts">
  export let className: string;
  let currentZoom = 100;

  const handleZoom = (action: string) => {
    if (action === "in" && currentZoom < 200) {
      currentZoom += 10;
    } else if (action === "out" && currentZoom > 100) {
      currentZoom -= 10;
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
    <div style={`width:${currentZoom}%`} class="object-contain">
      <slot />
    </div>
  </div>
</div>
