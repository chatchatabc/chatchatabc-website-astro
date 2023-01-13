<script lang="ts">
  export let src: string, className: string;

  let currentSize = 100;

  const handleZoom = (action: string) => {
    if (action === "in" && currentSize < 200) {
      currentSize += 20;
    } else if (action === "out" && currentSize > 100) {
      currentSize -= 20;
    } else {
      currentSize = 100;
    }
    console.log(currentSize);
  };
  console.log(currentSize);
</script>

<div class="flex flex-col w-full h-[calc(100vh-100px)]">
  <div class="flex space-x-8 [&>*]:bg-blue-500 [&>*]:text-xl [&>*]:p-2">
    <button id="zoom-in-image-btn" on:click={() => handleZoom("in")}>
      +
    </button>
    <button id="zoom-out-image-btn" on:click={() => handleZoom("out")}>
      -
    </button>
    <button id="zoom-reset-image-btn" on:click={() => handleZoom("reset")}>
      =
    </button>
  </div>
  <div class="flex-1 overflow-auto">
    <div style={`width:${currentSize}%`} class="object-contain">
      <img {src} alt="test" />
    </div>
  </div>
</div>
