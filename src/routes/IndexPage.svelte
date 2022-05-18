<script lang="ts">
  import { Link } from "svelte-routing";
</script>

<div class="flex flex-col items-center my-10 mx-5">
  <h1 class="text-3xl font-semibold italic text-center">Simple Pokedex App</h1>
  <p class="m-1">
    Made with <a class="font-semibold underline" href="https://svelte.dev/"
      >Svelte</a
    >
    and
    <a class="font-semibold underline" href="https://tailwindcss.com/"
      >Tailwind CSS</a
    >
  </p>
</div>

<div class="flex flex-col items-center my-10 mx-5">
  <h2 class="text-3xl font-semibold italic text-center">Consumes PokeAPI</h2>
  <p class="m-1">
    All data are from http request to <a
      class="font-semibold underline"
      href="https://pokeapi.co/">PokeAPI</a
    >
  </p>
</div>

<div class="flex flex-col items-center my-10 mx-5">
  <h3 class="text-3xl font-semibold italic text-center">
    Client Side Rendering and Routes
  </h3>
  <p class="m-1">
    Uses <a
      class="font-semibold underline"
      href="https://www.npmjs.com/package/svelte-routing">Svelte Routing</a
    >
    library to get a dinamic routes.
  </p>
</div>

<div class="flex flex-col items-center my-10 mx-5">
  <h4 class="text-3xl font-semibold italic text-center">Get Started!</h4>
  <p class="m-1">
    Go to <Link class="font-semibold underline" to="/pokeman">Pokeman</Link> or <Link
      class="font-semibold underline"
      to="/types">PokeTypes</Link
    >
  </p>
</div>
