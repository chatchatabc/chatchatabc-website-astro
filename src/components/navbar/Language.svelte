<script lang="ts">
  export let url;

  let currentLang = "EN";
  let nextLang = new String(currentLang).valueOf();
  if (url && url.includes("/zh/")) currentLang = "ZH";
  let open = false;

  function changeLanguage() {
    if (nextLang === "ZH") window.open("/zh/", "_self");
    else window.open("/", "_self");
  }
</script>

<div class="relative z-[2]">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    on:click={() => (open = !open)}
    class={`fixed h-full w-full bg-gray-500 bg-opacity-50 top-0 left-0 z-[1] ${
      open ? "block" : "hidden"
    }`}
  />
  <button class="p-2 text-primary" on:click={() => (open = !open)}>
    <span class="font-bold md:hidden">Language:</span>{currentLang}
  </button>
  <!-- <ModalSvelte
    btnName={`<span class="font-bold md:hidden">Language:</span>${currentLang}`}
    btnClass={"p-2"}
  >
    <div class="max-w-fit p-16 mx-auto bg-white rounded-xl">
      <p>Choose your language</p>
      <select
        class="w-full text-center"
        on:change={(self) => (nextLang = self.target.value)}
        value={currentLang}
      >
        <option value="EN">English</option>
        <option value="ZH">Chinese</option>
      </select>
      <button
        class="mx-auto block mt-2 py-1 px-4 border rounded-full text-white bg-[#6750A4]"
        on:click={changeLanguage}
      >
        Confirm
      </button>
    </div>
  </ModalSvelte> -->
  <ul
    class={`w-32 md:top-[110%] absolute overflow-hidden bg-secondaryContainer ${
      open ? "max-h-[500px] p-2" : "max-h-0"
    } text-primary transition-all rounded-xl shadow-xl z-10 md:right-0 lg:top-[110%]`}
  >
    <li>
      <a class="block hover:bg-opacity-25 hover:bg-secondary" href={"/"}
        >ENG-EN</a
      >
    </li>
    <li>
      <a class="block hover:bg-opacity-25 hover:bg-secondary" href={"/zh/"}>
        CHI-ZH
      </a>
    </li>
  </ul>
</div>
