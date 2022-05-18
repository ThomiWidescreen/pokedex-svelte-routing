<script lang="ts">
  import "../css/typesColors.css";
  import Loading from "./../components/Loading.svelte";
  import { pokemon, loading, loadInfo } from "./../lib/pokemonData";
  import { Link } from "svelte-routing";
  export let id: number;

  loadInfo(id);
</script>

{#if $loading}
  <Loading />
{:else}
  <div
    class="bg-white flex flex-col items-center p-5 mt-10 m-auto w-full md:w-2/3"
  >
    <h1 class="capitalize font-bold text-4xl">{$pokemon.data.name}</h1>
    <div class="w-full flex justify-between items-center">
      {#if id != 1}
        <Link
          to={`/pokemon/${id - 1}`}
          on:click={() => {
            loadInfo(id - 1);
          }}
          class="bg-red-500 hover:bg-red-600 text-5xl px-1 pb-3 rounded-md text-red-800 font-bold text-center"
          >{"<"}</Link
        >
      {:else}
        <div
          class="bg-white text-5xl px-1 pb-3 rounded-md text-white font-bold text-center"
        >
          {"x"}
        </div>
      {/if}

      <img
        class="sprite w-full md:w-1/3"
        alt={$pokemon.data.name}
        src={$pokemon.data.sprite}
      />
      <Link
        to={`/pokemon/${id + 1}`}
        on:click={() => {
          loadInfo(id + 1);
        }}
        class="bg-green-500 hover:bg-green-600 text-5xl px-1 pb-3 rounded-md text-green-800 font-bold text-center"
        >{">"}</Link
      >
    </div>

    <section class="flex justify-center gap-5">
      {#each $pokemon.type as type}
        <div>
          <div class="capitalize font-bold text-center">{type}</div>
          <img
            class={`w-20 p-2 m-2 rounded-md ${type}`}
            src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${type}.svg`}
            alt={type}
          />
        </div>
      {/each}
    </section>
  </div>
{/if}

<style>
  .sprite {
    image-rendering: pixelated;
  }
</style>
