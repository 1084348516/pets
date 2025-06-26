// Main JavaScript logic for Pet Encyclopedia

// Global variables
let currentAudio = null;
let currentPet = null;

// DOM elements
const petsGrid = document.getElementById('petsGrid');
const petModal = document.getElementById('petModal');
const petDetail = document.getElementById('petDetail');
const closeBtn = document.querySelector('.close');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    renderPetsGrid();
    setupEventListeners();
});

// Set up event listeners
function setupEventListeners() {
    // Close modal
    closeBtn.addEventListener('click', closeModal);
    
    // Click outside modal to close
    petModal.addEventListener('click', function(e) {
        if (e.target === petModal) {
            closeModal();
        }
    });
    
    // ESC key to close modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Render pet grid
function renderPetsGrid() {
    petsGrid.innerHTML = '';
    
    petsData.forEach((pet, index) => {
        const petCard = createPetCard(pet, index);
        petsGrid.appendChild(petCard);
    });
}

// Create pet card
function createPetCard(pet, index) {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.setAttribute('data-pet-id', pet.id);
    card.style.setProperty('--card-index', index);
    
    card.innerHTML = `
        <div class="sound-indicator" id="sound-indicator-${pet.id}">
            🔊
        </div>
        <img src="${pet.image}" alt="${pet.name}" class="pet-image" loading="lazy">
        <div class="pet-info">
            <h3 class="pet-name">
                <span class="emoji">${pet.emoji}</span>
                ${pet.name}
            </h3>
            <p class="pet-description">${pet.description}</p>
            <div class="pet-stats">
                <div class="difficulty">
                    <span>Care Difficulty:</span>
                    <span class="difficulty-stars">${'⭐'.repeat(pet.difficulty)}</span>
                </div>
            </div>
            <div class="pet-actions">
                <button class="btn btn-primary" onclick="openPetDetail(${pet.id})">
                    📖 View Details
                </button>
                <button class="btn btn-sound" onclick="playPetSoundFromCard(${pet.id})" id="sound-btn-${pet.id}">
                    🔊
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Open pet detail
function openPetDetail(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return;
    
    currentPet = pet;
    renderPetDetail(pet);
    petModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Render pet detail
function renderPetDetail(pet) {
    petDetail.innerHTML = `
        <div class="pet-detail-header">
            <img src="${pet.image}" alt="${pet.name}" class="pet-detail-image">
            <div class="pet-detail-info">
                <h2>${pet.emoji} ${pet.name}</h2>
                <p class="pet-detail-description">${pet.longDescription}</p>
                <div class="pet-detail-stats">
                    <div class="stat-item">
                        <div class="stat-label">Personality</div>
                        <div class="stat-value">${pet.personality}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Lifespan</div>
                        <div class="stat-value">${pet.lifespan}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Size</div>
                        <div class="stat-value">${pet.size}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">Care Difficulty</div>
                        <div class="stat-value">${'⭐'.repeat(pet.difficulty)}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="pet-detail-actions">
            <button class="btn btn-primary" onclick="playPetSound(${pet.id})">
                🔊 Listen to ${pet.name}
            </button>
        </div>
        
        <div class="audio-player" id="audioPlayer" style="display: none;">
            <h3>🎵 ${pet.name} Sound</h3>
            <div class="audio-controls">
                <audio id="petAudio" controls>
                    <source src="${pet.audioUrl}" type="audio/wav">
                    Your browser does not support audio playback.
                </audio>
            </div>
        </div>
        
        <div class="stats-section">
            <h3>📊 Pet Stats</h3>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${pet.stats.intelligence}</div>
                    <div class="stat-label">Intelligence</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${pet.stats.friendliness}</div>
                    <div class="stat-label">Friendliness</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${pet.stats.energy}</div>
                    <div class="stat-label">Energy</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${pet.stats.trainability}</div>
                    <div class="stat-label">Trainability</div>
                </div>
            </div>
        </div>
        
        <div class="care-tips">
            <h3>💡 Care Tips</h3>
            <ul>
                ${pet.careTips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // Set up audio event listeners
    setupAudioEvents();
}

// Set up audio event listeners
function setupAudioEvents() {
    const audio = document.getElementById('petAudio');
    if (audio) {
        audio.addEventListener('ended', function() {
            document.getElementById('audioPlayer').style.display = 'none';
        });
        
        audio.addEventListener('error', function() {
            showMessage('Audio failed to load, please try again later', 'error');
        });
    }
}

// Play pet sound from card
function playPetSoundFromCard(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return;
    
    const soundBtn = document.getElementById(`sound-btn-${petId}`);
    const soundIndicator = document.getElementById(`sound-indicator-${petId}`);
    
    // Stop currently playing audio
    if (currentAudio && currentAudio !== soundBtn) {
        stopCurrentAudio();
    }
    
    // If this audio is already playing, stop it
    if (soundBtn.classList.contains('playing')) {
        stopCurrentAudio();
        return;
    }
    
    // Update UI to show playing state
    soundBtn.classList.add('playing');
    soundBtn.innerHTML = '⏹️';
    soundIndicator.classList.add('visible', 'playing');
    soundIndicator.innerHTML = '🔊';
    
    // Try to play audio, if it fails, show a message
    try {
        const audio = new Audio(pet.audioUrl);
        currentAudio = audio;
        
        // Set a timeout to handle loading issues
        const audioTimeout = setTimeout(() => {
            showMessage('Audio is taking longer than expected to load', 'info');
        }, 3000);
        
        // Play audio
        audio.play().then(() => {
            clearTimeout(audioTimeout);
            showMessage(`Playing ${pet.name} sound! 🔊`, 'success');
        }).catch(error => {
            clearTimeout(audioTimeout);
            console.error('Audio playback failed:', error);
            // Fallback to simulated sound
            simulatePetSound(pet, soundBtn, soundIndicator);
        });
        
        // Handle audio end
        audio.addEventListener('ended', function() {
            stopCurrentAudio();
        });
        
        // Handle audio error
        audio.addEventListener('error', function(e) {
            console.error('Audio failed to load:', e);
            simulatePetSound(pet, soundBtn, soundIndicator);
        });
        
    } catch (error) {
        console.error('Audio creation failed:', error);
        simulatePetSound(pet, soundBtn, soundIndicator);
    }
}

// Simulate pet sound when audio fails
function simulatePetSound(pet, soundBtn, soundIndicator) {
    showMessage(`Simulating ${pet.name} sound! 🔊`, 'info');
    
    // Create a simple beep sound using Web Audio API
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        // Set different frequencies for different pets
        let frequency = 440; // Default A note
        let duration = 1000; // 1 second
        
        switch(pet.name) {
            case "Golden Retriever":
                frequency = 200; // Low bark-like sound
                duration = 800;
                break;
            case "British Shorthair":
            case "Siamese Cat":
                frequency = 800; // High meow-like sound
                duration = 600;
                break;
            case "Holland Lop":
                frequency = 300; // Soft rabbit sound
                duration = 500;
                break;
            case "Leopard Gecko":
            case "Bearded Dragon":
                frequency = 150; // Very low reptile sound
                duration = 400;
                break;
            case "Budgerigar":
            case "African Grey Parrot":
                frequency = 1200; // High bird chirp
                duration = 700;
                break;
            case "Hamster":
            case "Guinea Pig":
                frequency = 600; // Medium rodent sound
                duration = 400;
                break;
            case "Betta Fish":
                frequency = 100; // Very low bubble sound
                duration = 300;
                break;
            case "Red-Eared Slider Turtle":
                frequency = 80; // Very low turtle sound
                duration = 600;
                break;
        }
        
        oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration / 1000);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration / 1000);
        
        // Stop the sound after duration
        setTimeout(() => {
            stopCurrentAudio();
        }, duration);
        
    } catch (error) {
        console.error('Web Audio API failed:', error);
        // Final fallback - just show a message
        showMessage(`🎵 ${pet.name} would make a sound here!`, 'success');
        setTimeout(() => {
            stopCurrentAudio();
        }, 2000);
    }
}

// Stop current audio
function stopCurrentAudio() {
    if (currentAudio) {
        if (currentAudio.pause) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        currentAudio = null;
    }
    
    // Reset all sound buttons and indicators
    document.querySelectorAll('.btn-sound.playing').forEach(btn => {
        btn.classList.remove('playing');
        btn.innerHTML = '🔊';
    });
    
    document.querySelectorAll('.sound-indicator.visible').forEach(indicator => {
        indicator.classList.remove('visible', 'playing');
    });
}

// Enhanced play pet sound for modal
function playPetSound(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return;
    
    const audioPlayer = document.getElementById('audioPlayer');
    const audio = document.getElementById('petAudio');
    
    if (audio) {
        // Stop currently playing audio
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        currentAudio = audio;
        audioPlayer.style.display = 'block';
        
        audio.play().catch(error => {
            console.error('Audio playback failed:', error);
            showMessage('Audio playback failed, trying simulated sound...', 'info');
            simulatePetSound(pet, null, null);
        });
    }
}

// Close modal
function closeModal() {
    petModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Stop audio playback
    stopCurrentAudio();
    
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.style.display = 'none';
    }
    
    currentPet = null;
}

// Show message prompt
function showMessage(message, type = 'info') {
    // Remove existing message
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = message;
    
    // Add to top of page
    document.body.insertBefore(messageDiv, document.body.firstChild);
    
    // Remove after 3 seconds
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 3000);
}

// Add CSS for message prompt
const style = document.createElement('style');
style.textContent = `
    .message {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        max-width: 300px;
    }
    
    .success-message {
        background: #28a745;
    }
    
    .error-message {
        background: #dc3545;
    }
    
    .info-message {
        background: #17a2b8;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    .care-tips {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 10px;
        margin-top: 1rem;
    }
    
    .care-tips h3 {
        margin-bottom: 1rem;
        color: #333;
    }
    
    .care-tips ul {
        list-style: none;
        padding: 0;
    }
    
    .care-tips li {
        padding: 0.5rem 0;
        border-bottom: 1px solid #e9ecef;
        position: relative;
        padding-left: 1.5rem;
    }
    
    .care-tips li:before {
        content: "💡";
        position: absolute;
        left: 0;
    }
    
    .care-tips li:last-child {
        border-bottom: none;
    }
    
    .pet-card {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease;
    }
    
    .pet-card.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    body.loaded .pet-card {
        transition-delay: calc(var(--card-index, 0) * 0.1s);
    }
`;
document.head.appendChild(style);

// Image load error handling
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
    }
}, true);

// Add page load animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add scroll animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe pet cards
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const cards = document.querySelectorAll('.pet-card');
        cards.forEach(card => observer.observe(card));
    }, 100);
}); 