<script lang="ts">
  import {
    pokemonTypeData,
    loading,
    loadPokemonTypeData,
  } from "./../lib/pokemonTypeData";
  import Loading from "./../components/Loading.svelte";
  import { Link } from "svelte-routing";
  export let id;

  loadPokemonTypeData(id);
</script>

{#if $loading}
  <Loading />
{:else}
  <section
    class="grid my-5 grid-cols-3 lg:grid-cols-5 lg:w-4/5 lg:mx-auto gap-3"
  >
    {#each $pokemonTypeData as { id, sprite, name }}
      <div
        class="ml-auto mr-auto rounded-md bg-slate-100 p-5 w-full"
        id={id.toString()}
      >
        <h1 class="text-center capitalize font-semibold text-md">
          {name}
        </h1>
        <img class="m-auto" src={sprite} alt={name} />
        <Link
          class="m-auto bg-gray-300 hover:bg-gray-400 p-3 rounded-sm font-semibold text-gray-800"
          to={`/pokemon/${id}`}>View</Link
        >
      </div>
    {/each}
  </section>
{/if}
