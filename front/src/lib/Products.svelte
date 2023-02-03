<script>
  import { currentUser, products, addProduct, removeProduct } from "../stores";

  const form = {
    music: "",
    artista:"",
    album:"",
    genero:"",
  };

  function handleForm() {
    addProduct(form.music, form.artista , $currentUser.id)

    form.music = '';
  }

  function remove(id) {
    removeProduct(id, $currentUser.id)
  }
</script>

{#if $currentUser}
  <div>
    <h2>Musicas</h2>
    {#each $products as prod}
        <div>{prod.name} <a href="#" on:click|preventDefault={() => remove(prod.id)}>remover</a></div>
    {/each}
    <form on:submit|preventDefault={handleForm}>
      <fieldset>
        <legend>Adicionar Musicas</legend>
        <input
          type="text"
          name="musica"
          bind:value={form.music}
          placeholder="Nome da musica"
          required
        />
        <input
        type="text"
        name="nome"
        bind:value={form.artista}
        placeholder="Qual é o Artista Dessa Musica "
        required
      />

      <input
      type="text"
      name="nome"
      bind:value={form.album}
      placeholder="Qual é o Album ?"
      required
    />
    <input
    type="text"
    name="nome"
    bind:value={form.genero}
    placeholder="Qual é o genero?"
    required
  />
        <button>Adicionar</button>
      </fieldset>
    </form>
  </div>
{/if}
