
## ✨ Features

### Core Functionality

- 📝 **Create Notes** - Add new notes with title and content
- 👀 **View Notes** - Display all notes in a beautiful grid layout
- ✏️ **Edit Notes** - Modify existing notes with inline editing
- 🗑️ **Delete Notes** - Remove notes with confirmation dialog
- 🔍 **Search Notes** - Real-time search through titles and content


### Enhanced User Experience

- 🎨 **Vibrant Design** - Energetic gradient backgrounds and colorful UI
- 📱 **Responsive Layout** - Works perfectly on mobile, tablet, and desktop
- ⚡ **Loading States** - Smooth loading animations and feedback
- 🚨 **Error Handling** - User-friendly error messages
- 💫 **Hover Effects** - Interactive animations and transforms
- ⌨️ **Keyboard Support** - ESC to close modals, full keyboard navigation


## 🛠️ Tech Stack

- **Frontend Framework**: Svelte 5 (with modern runes API)
- **Styling**: TailwindCSS
- **Icons**: Lucide Svelte
- **API**: Mock API service (easily replaceable with real backend)
- **Build Tool**: Vite


## 📁 Project Structure

```plaintext
src/
├── App.svelte                 # Main application component
├── lib/
│   ├── components/
│   │   ├── NoteCard.svelte    # Individual note display
│   │   ├── NoteForm.svelte    # Create/edit note modal
│   │   ├── SearchBar.svelte   # Search functionality
│   │   ├── LoadingSpinner.svelte # Loading animation
│   │   └── ConfirmModal.svelte   # Delete confirmation
│   └── api/
│       └── notesApi.js        # Mock API service
├── app.html                   # HTML template
└── app.css                    # Global styles
```

## 🎨 Design System

### Color Palette

- **Primary**: Purple gradients (`from-purple-500 to-pink-500`)
- **Secondary**: Orange accents (`from-orange-500 to-red-500`)
- **Background**: Multi-color gradients (`from-purple-50 via-pink-50 to-orange-50`)
- **Success**: Green tones
- **Warning**: Orange/red combinations


### Animations

- **Hover Effects**: Scale transforms and color transitions
- **Loading States**: Smooth spinning animations
- **Modal Transitions**: Backdrop blur and scale effects


## 🔌 API Integration

The app currently uses a mock API service that simulates real backend behavior. To connect to a real API:

1. **Replace the mock service** in `lib/api/notesApi.js`
2. **Update the base URL** and endpoints
3. **Add authentication** if required


### API Endpoints Expected

```plaintext
GET    /notes           # Fetch all notes
POST   /notes           # Create new note
PUT    /notes/:id       # Update existing note
DELETE /notes/:id       # Delete note
```

### Note Data Structure

```json
{
  "id": 1,
  "title": "Note Title",
  "content": "Note content here...",
  "createdAt": "2024-01-01T12:00:00.000Z"
}
```