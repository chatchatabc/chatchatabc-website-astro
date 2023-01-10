<script>
  let selected = null;
  const dataList = [
    {
      title: "Priority",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit voluptatum delectus doloremque nesciunt optio, nobis neque perferendis aliquam dignissimos dolores voluptate provident! Facilis alias ad dolorem nisi velit dicta eum.",
    },
    {
      title: "PTEriority",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit voluptatum delectus doloremque nesciunt optio, nobis neque perferendis aliquam dignissimos dolores voluptate provident! Facilis alias ad dolorem nisi velit dicta eum.",
    },
    {
      title: "Priasdsority",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit voluptatum delectus doloremque nesciunt optio, nobis neque perferendis aliquam dignissimos dolores voluptate provident! Facilis alias ad dolorem nisi velit dicta eum.",
    },
  ];
</script>

<ul
  class={`px-2 pb-8 relative flex flex-col h-min-[500px] ${
    selected ? "" : "space-y-4 md:-space-y-32"
  }`}
>
  {#each dataList as data, index}
    <li
      class={`bg-[#c4b8e6] border-2 shadow-xl delay-75 group overflow-hidden ${
        selected === index + 1
          ? "shadow-gray-500 w-full p-12"
          : selected
          ? "max-h-0 w-0 p-0 opacity-0 top-0"
          : "h-full max-h-[500px] p-12 opacity-100 md:w-[50%]"
      } duration-500 rounded-t-[4rem] rounded-b-xl lg:hover:z-10 even:mx-auto last:ml-auto`}
    >
      <h4 class="text-4xl pb-2">{data.title}</h4>
      <p
        class={`overflow-hidden max-h-[100px] duration-500 delay-75 w-full group-hover:w-full`}
      >
        {data.desc}
      </p>
      <button
        class="block mt-4 underline underline-offset-4 duration-500 lg:opacity-0 group-hover:duration-700 group-hover:opacity-100"
        on:click={() => (selected = selected === index + 1 ? null : index + 1)}
      >
        {selected === index + 1 ? "Close" : "Read more >"}
      </button>
    </li>
  {/each}
</ul>
