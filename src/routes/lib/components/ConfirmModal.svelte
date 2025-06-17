<script>
  import { AlertTriangle } from 'lucide-svelte';

  let { title, message, onConfirm, onCancel } = $props();

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      onCancel();
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<!-- Modal Backdrop -->
<div class="fixed inset-0 bg-gradient-to-br from-red-900/50 via-pink-900/50 to-orange-900/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
  <div class="bg-white rounded-2xl shadow-2xl w-full max-w-sm border-4 border-red-200">
    <div class="p-6">
      <div class="flex items-center gap-3 mb-4">
        <div class="flex-shrink-0 p-2 bg-gradient-to-r from-red-100 to-orange-100 rounded-full">
          <AlertTriangle class="w-6 h-6 text-red-600" />
        </div>
        <h3 class="text-lg font-bold text-gray-800">{title}</h3>
      </div>
      
      <p class="text-gray-700 mb-6 leading-relaxed">{message}</p>
      
      <div class="flex gap-3 justify-end">
        <button
          onclick={onCancel}
          class="px-6 py-3 text-gray-700 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl hover:from-gray-200 hover:to-gray-300 transition-all font-semibold"
        >
          Cancel
        </button>
        <button
          onclick={onConfirm}
          class="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-xl hover:from-red-600 hover:to-orange-600 transition-all font-semibold shadow-lg transform hover:scale-105"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</div>
