<script lang="ts">
  import { Link } from "svelte-routing";
  import Loading from "./../components/Loading.svelte";
  import { loadTypes, loading, typesData } from "./../lib/typesData";
  loadTypes();
</script>

{#if $loading}
  <Loading />
{:else}
  <section class="grid grid-cols-3 md:grid-cols-5 my-10">
    {#each $typesData as pokeType}
      <div class="flex flex-col items-center my-5">
        <h1 class="font-semibold text-xl capitalize">{pokeType.name}</h1>
        <Link to={`/type/${pokeType.id}`}>
          <img
            class={`w-20 p-2 m-2 rounded-md ${pokeType.name}`}
            src={`https://raw.githubusercontent.com/duiker101/pokemon-type-svg-icons/master/icons/${pokeType.name}.svg`}
            alt={pokeType.name}
          />
        </Link>
      </div>
    {/each}
  </section>
{/if}
