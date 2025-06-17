// Mock API service that simulates a real API
// In a real application, replace this with actual API calls

class MockNotesAPI {
  constructor() {
    this.notes = [
      {
        id: 1,
        title: "Welcome to Notes App",
        content:
          "This is your first note! You can create, edit, and delete notes using this application. Try creating a new note or editing this one.",
        createdAt: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
      },
      {
        id: 2,
        title: "Meeting Notes",
        content: "Discussed project timeline and deliverables. Next meeting scheduled for Friday at 2 PM.",
        createdAt: new Date(Date.now() - 3600000).toISOString(), // 1 hour ago
      },
      {
        id: 3,
        title: "Shopping List",
        content: "Milk, Bread, Eggs, Apples, Chicken, Rice, Pasta, Tomatoes",
        createdAt: new Date(Date.now() - 1800000).toISOString(), // 30 minutes ago
      },
    ]
    this.nextId = 4
  }

  // Simulate network delay
  delay(ms = 500) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  async getNotes() {
    await this.delay(300)
    // Sort by creation date, newest first
    return [...this.notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
  }

  async createNote(noteData) {
    await this.delay(400)

    const newNote = {
      id: this.nextId++,
      title: noteData.title,
      content: noteData.content,
      createdAt: new Date().toISOString(),
    }

    this.notes.push(newNote)
    return newNote
  }

  async updateNote(id, noteData) {
    await this.delay(400)

    const noteIndex = this.notes.findIndex((note) => note.id === id)
    if (noteIndex === -1) {
      throw new Error("Note not found")
    }

    this.notes[noteIndex] = {
      ...this.notes[noteIndex],
      title: noteData.title,
      content: noteData.content,
    }

    return this.notes[noteIndex]
  }

  async deleteNote(id) {
    await this.delay(300)

    const noteIndex = this.notes.findIndex((note) => note.id === id)
    if (noteIndex === -1) {
      throw new Error("Note not found")
    }

    this.notes.splice(noteIndex, 1)
    return true
  }
}

export const notesApi = new MockNotesAPI()
