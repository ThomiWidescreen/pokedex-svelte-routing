<script>
  import { Link } from "svelte-routing";
</script>

<nav class="flex justify-center">
  <Link
    class="bg-teal-400 hover:bg-teal-500 shadow-md shadow-red-800 p-3 m-3 text-2xl rounded-sm italic text-white"
    to="/pokeman">Pokeman</Link
  >
  <Link
    class="bg-rose-400 hover:bg-rose-500 shadow-md shadow-red-800 p-3 m-3 text-2xl rounded-sm italic text-white"
    to="/types">Poke Types</Link
  >
</nav>
