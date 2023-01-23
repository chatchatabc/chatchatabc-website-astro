<script>
  let test = null;
  const handleBtn = (index) => {
    if (test) test = null;
    else test = index;
    const card = document.getElementById("card-focus");
    if (card) card.focus();
  };
</script>

<div>
  <button on:click={() => handleBtn(1)}>Test Svelte: {test}</button>
</div>
