<script lang="ts">
  import NavBar from "./components/NavBar.svelte";
  import { Router, Route, navigate } from "svelte-routing";
  import Pokeman from "./routes/Pokeman.svelte";
  import Pokemon from "./routes/Pokemon.svelte";
  import PokeTypes from "./routes/PokeTypes.svelte";
  import PokeType from "./routes/PokeType.svelte";
  import IndexPage from "./routes/IndexPage.svelte";

  export let url = "";
</script>

<main>
  <Router {url}>
    <header class="bg-red-500 -translate-y-3">
      <img
        class="w-1/3 ml-auto mr-auto mt-3 cursor-pointer hover:brightness-90"
        src="https://camo.githubusercontent.com/7f1f1e69bef239378a28e8aca7d1d7bd0890d37a7871d01135e2d044da6e2157/68747470733a2f2f692e696d6775722e636f6d2f415975745a4f462e706e67"
        alt="Pokedex Logo"
        on:click={() => {
          navigate("/");
        }}
      />
      <NavBar />
    </header>
    <section>
      <Route path="/" component={IndexPage} />
      <Route path="/pokemon/:id" let:params>
        <Pokemon id={parseInt(params.id)} />
      </Route>
      <Route path="/type/:id" let:params>
        <PokeType id={parseInt(params.id)} />
      </Route>
      <Route path="/pokeman" component={Pokeman} />
      <Route path="/types" component={PokeTypes} />
    </section>
  </Router>
</main>
