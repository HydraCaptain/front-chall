<script>
  import { X } from 'lucide-svelte';

  let { note = null, onSave, onCancel } = $props();
  
  let title = $state(note?.title || '');
  let content = $state(note?.content || '');
  let loading = $state(false);

  async function handleSubmit(event) {
    event.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      return;
    }

    loading = true;
    try {
      await onSave({ title: title.trim(), content: content.trim() });
    } finally {
      loading = false;
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      onCancel();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Modal Backdrop -->
<div class="fixed inset-0 bg-gradient-to-br from-purple-900/50 via-pink-900/50 to-orange-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md border-4 border-purple-200">
    <!-- Header -->
    <div class="flex items-center justify-between p-6 border-b-2 border-purple-100 bg-gradient-to-r from-purple-50 to-pink-50 rounded-t-xl">
      <h2 class="text-lg font-bold text-gray-800">
        {note ? 'Edit Note' : 'Create New Note'}
      </h2>
      <button
        onclick={onCancel}
        class="p-2 text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 rounded-lg transition-all"
      >
        <X class="w-5 h-5" />
      </button>
    </div>

    <!-- Form -->
    <form onsubmit={handleSubmit} class="p-6">
      <div class="mb-4">
        <label for="title" class="block text-sm font-medium text-gray-700 mb-2">
          Title
        </label>
        <input
          id="title"
          type="text"
          bind:value={title}
          placeholder="Enter note title..."
          class="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 outline-none transition-all"
          required
          disabled={loading}
        />
      </div>

      <div class="mb-6">
        <label for="content" class="block text-sm font-medium text-gray-700 mb-2">
          Content
        </label>
        <textarea
          id="content"
          bind:value={content}
          placeholder="Write your note content..."
          rows="4"
          class="w-full px-4 py-3 border-2 border-purple-200 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 outline-none resize-none transition-all"
          required
          disabled={loading}
        ></textarea>
      </div>

      <div class="flex gap-3 justify-end">
        <button
          type="button"
          onclick={onCancel}
          class="px-6 py-3 text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all font-semibold"
          disabled={loading}
        >
          Cancel
        </button>
        <button
          type="submit"
          class="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold shadow-lg transform hover:scale-105"
          disabled={loading || !title.trim() || !content.trim()}
        >
          {loading ? 'Saving...' : (note ? 'Update' : 'Create')}
        </button>
      </div>
    </form>
  </div>
</div>
