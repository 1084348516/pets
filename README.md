# 🐾 Pet Encyclopedia

A modern pet encyclopedia website that showcases detailed information, sounds, and care tips for various pets.

## ✨ Features

### 🎯 Core Features
- **Pet Display**: Beautiful pet cards with images, descriptions, and basic info
- **Detail Pages**: Each pet has a dedicated detail page
- **Audio Playback**: Listen to real pet sounds (dog, cat, bird, etc.)
- **Ownership Statistics**: "I have owned this pet" feature to record and view stats
- **Local Storage**: Uses localStorage to save your pet ownership records

### 🎨 Design Highlights
- **Responsive Design**: Perfectly adapts to desktop and mobile
- **Modern UI**: Gradient backgrounds, glassmorphism, smooth animations
- **Interactive Experience**: Hover effects, loading animations, modals
- **Accessibility**: Supports keyboard navigation and screen readers

### 📊 Pet Information
- **Basic Info**: Name, description, personality
- **Care Data**: Difficulty, lifespan, size, care level
- **Ability Ratings**: Intelligence, friendliness, energy, trainability
- **Care Tips**: Detailed care advice and notes

## 🚀 Getting Started

### Requirements
- Modern browser (ES6+ support)
- Internet connection (for images and audio)

### Usage
1. Clone or download the project files
2. Open `index.html` in your browser
3. Start exploring the world of pets!

### File Structure
```
pet_encyclopedia/
├── index.html          # Main page
├── styles.css          # Styles
├── script.js           # Main logic
├── data.js             # Pet data
├── about.html          # About page
├── demo.html           # Demo page
└── README.md           # Project info
```

## 🐕 Included Pets

### Mammals
- **Golden Retriever**: Gentle, friendly family dog
- **British Shorthair**: Independent, elegant indoor cat
- **Holland Lop**: Gentle, quiet small rabbit
- **Hamster**: Lively, curious beginner pet

### Reptiles
- **Leopard Gecko**: Gentle, easy reptile for beginners

### Birds
- **Budgerigar**: Smart, lively companion bird

## 🎵 Audio Feature

### Supported Audio Formats
- WAV (recommended)
- MP3
- Other browser-supported formats

### Audio Controls
- Play/pause
- Volume control
- Auto stop after playback

## 📱 Responsive Design

### Desktop (>768px)
- Grid layout for pet cards
- Sidebar navigation
- Large images and detailed content

### Mobile (≤768px)
- Single-column card layout
- Bottom navigation
- Optimized for touch

## 💾 Data Storage

### Local Storage
- Records of pets you have owned
- Ownership statistics for each pet
- Total owned count

### Data Persistence
- Uses localStorage
- Data is retained after browser close
- Supports data export/import

## 🛠️ Tech Stack

### Frontend
- **HTML5**: Semantic tags and modern features
- **CSS3**: Flexbox, Grid, animations, gradients
- **JavaScript ES6+**: Modular, async, DOM manipulation

### Third-party Resources
- **Google Fonts**: Noto Sans SC
- **Unsplash**: High-quality pet images
- **SoundJay**: Pet sound audio

## 🎨 Customization

### Add a New Pet
Add a new pet object in `data.js`:

```javascript
{
    id: 7,
    name: "New Pet Name",
    emoji: "🐾",
    image: "Image URL",
    description: "Short description",
    longDescription: "Detailed description",
    difficulty: 2,
    personality: "Personality traits",
    lifespan: "Lifespan",
    size: "Size",
    careLevel: "Care level",
    audioUrl: "Audio URL",
    stats: {
        intelligence: 3,
        friendliness: 4,
        energy: 3,
        trainability: 3
    },
    careTips: [
        "Care tip 1",
        "Care tip 2"
    ]
}
```

### Modify Styles
- Main color: change CSS variable `--primary-color`
- Font: change Google Fonts link
- Layout: adjust Grid and Flexbox

## 🔧 Browser Compatibility

### Supported Browsers
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Graceful Degradation
- Browsers without audio: hide audio button
- Browsers without localStorage: stats not available
- Browsers without CSS Grid: use Flexbox

## 📈 Performance Optimization

### Image Optimization
- Use WebP (if supported)
- Lazy load images
- Responsive image sizes

### Code Optimization
- Async load non-critical resources
- Event delegation to reduce DOM ops
- Debounce user interactions

## 🤝 Contributing

Contributions are welcome!

### How to Contribute
1. Fork the project
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

## 📄 License

MIT License - see LICENSE file

## 🙏 Acknowledgements

- Thanks to Unsplash for images
- Thanks to SoundJay for audio
- Thanks to all contributors

---

**Make pet life better** 🐕🐱🐰 