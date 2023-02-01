<script lang="ts">
  let open = false;
</script>

<div id="focus">
  <div
    class={`overflow-hidden duration-300 ellipsis h-full ${
      open ? "" : "[-webkit-line-clamp:8] lg:[-webkit-line-clamp:14]"
    }`}
  >
    <slot />
  </div>

  <!-- Button with custom background animation -->
  <button
    on:click={() => {
      open = !open;
      const element = document.getElementById("software-development");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }}
    class="relative w-full py-1 group overflow-hidden flex items-center justify-center"
  >
    <div
      class="absolute w-full h-full duration-300 from-transparent to-[#6750A4] bg-gradient-to-b translate-y-full group-hover:translate-y-0"
    />
    <span
      class="relative animate-pulse font-medium group-hover:animate-[unset] group-hover:font-normal"
    >
      {open ? "Close" : "Show more"}
    </span>
  </button>
</div>
