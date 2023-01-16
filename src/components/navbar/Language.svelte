<script>
  export let url;

  let currentLang = "EN";
  if (url && url.includes("/zh/")) currentLang = "ZH";
  let open = false;
</script>

<div class="relative">
  <button class="p-2" on:click={() => (open = !open)}>
    <span class="font-bold md:hidden">Language:</span>
    {currentLang}
  </button>
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
