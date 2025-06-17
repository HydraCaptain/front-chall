<script>
  import { Edit, Trash2, Calendar } from 'lucide-svelte';

  let { note, onEdit, onDelete } = $props();

  function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

<div class="bg-gradient-to-br from-white to-purple-50 rounded-xl shadow-lg border-2 border-purple-200 p-6 hover:shadow-xl hover:border-purple-300 transition-all transform hover:scale-105 hover:-rotate-1">
  <div class="flex justify-between items-start mb-3">
    <h3 class="text-lg font-bold text-gray-800 line-clamp-2 mb-1">{note.title}</h3>
    <div class="flex gap-1 ml-2">
      <button
        onclick={onEdit}
        class="p-2 text-purple-500 hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-lg transition-all transform hover:scale-110"
        title="Edit note"
      >
        <Edit class="w-4 h-4" />
      </button>
      <button
        onclick={onDelete}
        class="p-2 text-orange-500 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 rounded-lg transition-all transform hover:scale-110"
        title="Delete note"
      >
        <Trash2 class="w-4 h-4" />
      </button>
    </div>
  </div>
  
  <p class="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">{note.content}</p>
  
  <div class="flex items-center text-xs text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-full w-fit">
    <Calendar class="w-3 h-3 mr-1" />
    {formatDate(note.createdAt)}
  </div>
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
