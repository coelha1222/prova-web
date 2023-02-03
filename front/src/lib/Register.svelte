<script>
  import { users } from "../stores";

  const form = {
    nome: "",
    email:"",
    pw: "",

  };

  const addUser = () => {
    // $users = $users.concat({ ...form })
    $users = $users.concat({
      nome: form.nome,
      email: form.email,
      pw: form.pw,
    });

    form.nome = '';
    form.email = "";
    form.pw = '';

    alert('usuário inserido');
  };
</script>

<form on:submit|preventDefault={addUser}>
  <fieldset>
    <legend>Cadastro</legend>
    <input
      type="text"
      name="nome"
      bind:value={form.nome}
      placeholder="Insira seu Nome"
      required
    />
    <input
    type="email"
    name="email"
    bind:value={form.email}
    placeholder="Insira seu Email"
    required
  />
    <input
      type="password"
      name="pw"
      bind:value={form.pw}
      placeholder="Insira Senha"
      required
    />

    <button>Cadastrar</button>
  </fieldset>
</form>

<style>
  form {
    margin-top: 2em;
  }
</style>
