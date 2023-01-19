<script>
  import ModalSvelte from "../widgets/ModalSvelte.svelte";

  export let url;

  let currentLang = "EN";
  if (url && url.includes("/zh/")) currentLang = "ZH";
  let open = false;

  function changeLanguage() {
    if (currentLang === "CN") window.open("/zh/", "_self");
    else window.open("/", "_self");
  }
</script>

<div class="relative">
  <ModalSvelte
    btnName={`<span class="font-bold md:hidden">Language:</span>${currentLang}`}
    btnClass={"p-2"}
  >
    <div class="max-w-fit p-16 mx-auto bg-white rounded-xl">
      <p>Choose your language</p>
      <select
        class="w-full text-center"
        on:change={(self) => (currentLang = self.target.value)}
      >
        <option value="EN">English</option>
        <option value="CN">Chinese</option>
      </select>
      <button
        class="mx-auto block mt-2 py-1 px-4 border rounded-full text-white bg-[#6750A4]"
        on:click={changeLanguage}
      >
        Confirm
      </button>
    </div>
  </ModalSvelte>
  <ul
    class={`w-32 md:top-[110%] absolute overflow-hidden bg-[#E8DEF8] ${
      open ? "max-h-[500px] p-2" : "max-h-0"
    } duration-500 rounded-xl shadow-xl z-10 md:right-0 lg:top-[110%]`}
  >
    <li>
      <a href={"/"}>ENG-EN</a>
    </li>
    <li>
      <a href={"/zh/"}>CHI-ZH</a>
    </li>
  </ul>
</div>
