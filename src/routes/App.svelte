<script>
  import { onMount } from 'svelte';
  import NoteCard from './lib/components/NoteCard.svelte';
  import NoteForm from './lib/components/NoteForm.svelte';
  import SearchBar from './lib/components/SearchBar.svelte';
  import LoadingSpinner from './lib/components/LoadingSpinner.svelte';
  import ConfirmModal from './lib/components/ConfirmModal.svelte';
  import { notesApi } from './lib/api/notesApi.js';
  import { Plus, StickyNote } from 'lucide-svelte';
  import AnimatedBackground from './lib/components/AnimatedBackground.svelte';

  let notes = $state([]);
  let filteredNotes = $state([]);
  let loading = $state(false);
  let error = $state('');
  let searchQuery = $state('');
  let showForm = $state(false);
  let editingNote = $state(null);
  let deleteConfirm = $state({ show: false, note: null });

  onMount(() => {
    loadNotes();
  });

  async function loadNotes() {
    loading = true;
    error = '';
    try {
      notes = await notesApi.getNotes();
      filterNotes();
    } catch (err) {
      error = 'Failed to load notes. Please try again.';
      console.error('Error loading notes:', err);
    } finally {
      loading = false;
    }
  }

  function filterNotes() {
    if (!searchQuery.trim()) {
      filteredNotes = [...notes];
    } else {
      const query = searchQuery.toLowerCase();
      filteredNotes = notes.filter(note => 
        note.title.toLowerCase().includes(query) || 
        note.content.toLowerCase().includes(query)
      );
    }
  }

  function handleSearch(query) {
    searchQuery = query;
    filterNotes();
  }

  async function handleCreateNote(noteData) {
    try {
      const newNote = await notesApi.createNote(noteData);
      notes = [newNote, ...notes];
      filterNotes();
      showForm = false;
    } catch (err) {
      error = 'Failed to create note. Please try again.';
      console.error('Error creating note:', err);
    }
  }

  async function handleUpdateNote(id, noteData) {
    try {
      const updatedNote = await notesApi.updateNote(id, noteData);
      notes = notes.map(note => note.id === id ? updatedNote : note);
      filterNotes();
      editingNote = null;
    } catch (err) {
      error = 'Failed to update note. Please try again.';
      console.error('Error updating note:', err);
    }
  }

  async function handleDeleteNote(noteToDelete) {
    try {
      await notesApi.deleteNote(noteToDelete.id);
      notes = notes.filter(note => note.id !== noteToDelete.id);
      filterNotes();
      deleteConfirm = { show: false, note: null };
    } catch (err) {
      error = 'Failed to delete note. Please try again.';
      console.error('Error deleting note:', err);
    }
  }

  function startEdit(note) {
    editingNote = note;
    showForm = true;
  }

  function confirmDelete(note) {
    deleteConfirm = { show: true, note };
  }

  function cancelDelete() {
    deleteConfirm = { show: false, note: null };
  }

  function closeForm() {
    showForm = false;
    editingNote = null;
  }
</script>

<div class="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 relative overflow-hidden">
  <AnimatedBackground />
  <!-- Header -->
  <header class="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 shadow-lg">
    <div class="max-w-4xl mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <StickyNote class="w-8 h-8 text-white" />
          <h1 class="text-2xl font-bold text-white">My Notes</h1>
        </div>
        <button
          onclick={() => showForm = true}
          class="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-all transform hover:scale-105 font-semibold shadow-lg"
        >
          <Plus class="w-4 h-4" />
          New Note
        </button>
      </div>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-4 py-8 relative z-10">
    <!-- Error Message -->
    {#if error}
      <div class="mb-6 p-4 bg-gradient-to-r from-red-100 to-pink-100 border-2 border-red-300 rounded-xl shadow-lg">
        <p class="text-red-800 font-medium">{error}</p>
        <button
          onclick={() => error = ''}
          class="mt-2 text-sm text-red-600 hover:text-red-800 underline font-semibold"
        >
          Dismiss
        </button>
      </div>
    {/if}

    <!-- Search Bar -->
    <div class="mb-8">
      <SearchBar onSearch={handleSearch} />
    </div>

    <!-- Loading State -->
    {#if loading}
      <div class="flex justify-center py-12">
        <LoadingSpinner />
      </div>
    {:else if filteredNotes.length === 0 && searchQuery}
      <!-- No Search Results -->
      <div class="text-center py-12">
        <StickyNote class="w-16 h-16 text-orange-400 mx-auto mb-4" />
        <h3 class="text-lg font-bold text-gray-800 mb-2">No notes found</h3>
        <p class="text-gray-600">Try adjusting your search terms</p>
      </div>
    {:else if filteredNotes.length === 0}
      <!-- Empty State -->
      <div class="text-center py-12">
        <StickyNote class="w-16 h-16 text-purple-400 mx-auto mb-4" />
        <h3 class="text-lg font-bold text-gray-800 mb-2">No notes yet</h3>
        <p class="text-gray-600 mb-4">Create your first note to get started</p>
        <button
          onclick={() => showForm = true}
          class="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 font-semibold shadow-lg"
        >
          Create Note
        </button>
      </div>
    {:else}
      <!-- Notes Grid -->
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {#each filteredNotes as note (note.id)}
          <NoteCard
            {note}
            onEdit={() => startEdit(note)}
            onDelete={() => confirmDelete(note)}
          />
        {/each}
      </div>
    {/if}
  </main>

  <!-- Note Form Modal -->
  {#if showForm}
    <NoteForm
      note={editingNote}
      onSave={editingNote ? (data) => handleUpdateNote(editingNote.id, data) : handleCreateNote}
      onCancel={closeForm}
    />
  {/if}

  <!-- Delete Confirmation Modal -->
  {#if deleteConfirm.show}
    <ConfirmModal
      title="Delete Note"
      message="Are you sure you want to delete '{deleteConfirm.note?.title}'? This action cannot be undone."
      onConfirm={() => handleDeleteNote(deleteConfirm.note)}
      onCancel={cancelDelete}
    />
  {/if}
</div>
