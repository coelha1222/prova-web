<script>
  import { currentPage, currentUser, login } from "../stores";

  const form = {
    nome: "",
    pw: "",
  };

  const handleForm = async () => {
    await login(form.nome, form.pw);
    if ($currentUser) {
        $currentPage = 'home';
    }
  };
</script>

<form on:submit|preventDefault={handleForm}>
  <fieldset>
    <legend>Login</legend>
    <input
      type="text"
      name="nome"
      bind:value={form.nome}
      placeholder="Seu Nome"
      required
    />
    <input
      type="senha"
      name="pw"
      bind:value={form.pw}
      placeholder="Senha Cadastrada"
      required
    />
    <button>Login</button>
  </fieldset>
</form>
