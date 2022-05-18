<script lang="ts">
  import Loading from "./../components/Loading.svelte";
  import {
    pokeman,
    loading,
    fillData,
    previousData,
    nextData,
  } from "./../lib/pokemanData";
  import { Link } from "svelte-routing";
  fillData();
</script>

<section class="flex justify-end gap-3 mx-10">
  <button
    class="bg-red-500 hover:bg-red-600 text-3xl px-1 rounded-md text-red-800 font-bold text-center"
    on:click={() => {
      previousData();
    }}>{"<"}</button
  >
  <button
    class="bg-green-500 hover:bg-green-600 text-3xl px-1 rounded-md text-green-800 font-bold text-center"
    on:click={() => {
      console.log("coso");
      nextData();
    }}>{">"}</button
  >
</section>
{#if $loading}
  <Loading />
{:else}
  <section
    class="grid my-5 grid-cols-3 lg:grid-cols-5 lg:w-4/5 lg:mx-auto gap-3"
  >
    {#each $pokeman as { id, sprite, name }}
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
