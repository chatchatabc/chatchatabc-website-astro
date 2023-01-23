<script>
  export let btnClass = "",
    btnName = "button";
  let showModal = false;
</script>

<div>
  <!-- Button to open the modal -->
  <button class={btnClass} on:click={() => (showModal = !showModal)}>
    {@html btnName}
  </button>

  <!-- Modal background -->
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    class={`${
      showModal
        ? "opacity-100 pointers-event-auto"
        : "opacity-0 pointer-events-none"
    } flex duration-500 fixed top-0 left-0 w-screen h-screen justify-center bg-neutral-700 bg-opacity-50 items-center z-10`}
    on:click|self={() => (showModal = !showModal)}
  >
    <!-- Modal Container -->
    <div
      class={`${
        showModal ? "translate-y-0" : "translate-y-full"
      } duration-500 max-w-2xl w-full px-2 mx-auto`}
    >
      <!-- Modal Content -->
      <slot />
    </div>
  </div>
</div>
