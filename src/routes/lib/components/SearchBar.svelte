<script>
  import { Search, X } from 'lucide-svelte';

  let { onSearch } = $props();
  
  let query = $state('');

  function handleInput(event) {
    query = event.target.value;
    onSearch(query);
  }

  function clearSearch() {
    query = '';
    onSearch('');
  }
</script>

<div class="relative">
  <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
    <Search class="w-5 h-5 text-purple-500" />
  </div>
  
  <input
    type="text"
    bind:value={query}
    oninput={handleInput}
    placeholder="Search notes..."
    class="w-full pl-12 pr-12 py-4 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 outline-none transition-all bg-gradient-to-r from-white to-purple-50 font-medium"
  />
  
  {#if query}
    <button
      onclick={clearSearch}
      class="absolute inset-y-0 right-0 pr-4 flex items-center text-purple-500 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg transition-all mr-2"
    >
      <X class="w-5 h-5" />
    </button>
  {/if}
</div>
