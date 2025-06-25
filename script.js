// 宠物百科图鉴主要JavaScript逻辑

// 全局变量
let currentAudio = null;
let currentPet = null;

// DOM元素
const petsGrid = document.getElementById('petsGrid');
const petModal = document.getElementById('petModal');
const petDetail = document.getElementById('petDetail');
const closeBtn = document.querySelector('.close');

// 初始化应用
document.addEventListener('DOMContentLoaded', function() {
    renderPetsGrid();
    setupEventListeners();
    updateStats();
});

// 设置事件监听器
function setupEventListeners() {
    // 关闭模态框
    closeBtn.addEventListener('click', closeModal);
    
    // 点击模态框外部关闭
    petModal.addEventListener('click', function(e) {
        if (e.target === petModal) {
            closeModal();
        }
    });
    
    // ESC键关闭模态框
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// 渲染宠物网格
function renderPetsGrid() {
    petsGrid.innerHTML = '';
    
    petsData.forEach((pet, index) => {
        const petCard = createPetCard(pet, index);
        petsGrid.appendChild(petCard);
    });
}

// 创建宠物卡片
function createPetCard(pet, index) {
    const card = document.createElement('div');
    card.className = 'pet-card';
    card.setAttribute('data-pet-id', pet.id);
    card.style.setProperty('--card-index', index);
    
    const ownershipCount = getPetOwnershipCount(pet.id);
    const isOwned = petStats.ownedPets.has(pet.id);
    
    card.innerHTML = `
        <img src="${pet.image}" alt="${pet.name}" class="pet-image" loading="lazy">
        <div class="pet-info">
            <h3 class="pet-name">${pet.emoji} ${pet.name}</h3>
            <p class="pet-description">${pet.description}</p>
            <div class="pet-stats">
                <div class="difficulty">
                    <span>饲养难度:</span>
                    <span class="difficulty-stars">${'⭐'.repeat(pet.difficulty)}</span>
                </div>
                <span class="ownership-count">${ownershipCount} 人养过</span>
            </div>
            <div class="pet-actions">
                <button class="btn btn-primary" onclick="openPetDetail(${pet.id})">
                    📖 查看详情
                </button>
                <button class="btn btn-secondary ${isOwned ? 'owned' : ''}" 
                        onclick="toggleOwnership(${pet.id})">
                    ${isOwned ? '✅ 已养过' : '💝 我养过这个'}
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// 打开宠物详情
function openPetDetail(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return;
    
    currentPet = pet;
    renderPetDetail(pet);
    petModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// 渲染宠物详情
function renderPetDetail(pet) {
    const ownershipCount = getPetOwnershipCount(pet.id);
    const isOwned = petStats.ownedPets.has(pet.id);
    
    petDetail.innerHTML = `
        <div class="pet-detail-header">
            <img src="${pet.image}" alt="${pet.name}" class="pet-detail-image">
            <div class="pet-detail-info">
                <h2>${pet.emoji} ${pet.name}</h2>
                <p class="pet-detail-description">${pet.longDescription}</p>
                <div class="pet-detail-stats">
                    <div class="stat-item">
                        <div class="stat-label">性格特点</div>
                        <div class="stat-value">${pet.personality}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">寿命</div>
                        <div class="stat-value">${pet.lifespan}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">体型</div>
                        <div class="stat-value">${pet.size}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-label">饲养难度</div>
                        <div class="stat-value">${'⭐'.repeat(pet.difficulty)}</div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="pet-detail-actions">
            <button class="btn btn-primary" onclick="playPetSound(${pet.id})">
                🔊 听${pet.name}的声音
            </button>
            <button class="btn btn-secondary ${isOwned ? 'owned' : ''}" 
                    onclick="toggleOwnership(${pet.id})">
                ${isOwned ? '✅ 已养过' : '💝 我养过这个'}
            </button>
        </div>
        
        <div class="audio-player" id="audioPlayer" style="display: none;">
            <h3>🎵 ${pet.name}的声音</h3>
            <div class="audio-controls">
                <audio id="petAudio" controls>
                    <source src="${pet.audioUrl}" type="audio/wav">
                    您的浏览器不支持音频播放。
                </audio>
            </div>
        </div>
        
        <div class="stats-section">
            <h3>📊 统计信息</h3>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${ownershipCount}</div>
                    <div class="stat-label">人养过</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${pet.stats.intelligence}</div>
                    <div class="stat-label">智力评分</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${pet.stats.friendliness}</div>
                    <div class="stat-label">友善度</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${pet.stats.energy}</div>
                    <div class="stat-label">活跃度</div>
                </div>
            </div>
        </div>
        
        <div class="care-tips">
            <h3>💡 饲养小贴士</h3>
            <ul>
                ${pet.careTips.map(tip => `<li>${tip}</li>`).join('')}
            </ul>
        </div>
    `;
    
    // 设置音频事件监听器
    setupAudioEvents();
}

// 设置音频事件监听器
function setupAudioEvents() {
    const audio = document.getElementById('petAudio');
    if (audio) {
        audio.addEventListener('ended', function() {
            document.getElementById('audioPlayer').style.display = 'none';
        });
        
        audio.addEventListener('error', function() {
            showMessage('音频加载失败，请稍后重试', 'error');
        });
    }
}

// 播放宠物声音
function playPetSound(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return;
    
    const audioPlayer = document.getElementById('audioPlayer');
    const audio = document.getElementById('petAudio');
    
    if (audio) {
        // 停止当前播放的音频
        if (currentAudio && currentAudio !== audio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
        }
        
        currentAudio = audio;
        audioPlayer.style.display = 'block';
        
        audio.play().catch(error => {
            console.error('音频播放失败:', error);
            showMessage('音频播放失败，请检查网络连接', 'error');
        });
    }
}

// 切换拥有状态
function toggleOwnership(petId) {
    const pet = petsData.find(p => p.id === petId);
    if (!pet) return;
    
    addPetOwnership(petId);
    
    // 更新UI
    updatePetCard(petId);
    if (currentPet && currentPet.id === petId) {
        renderPetDetail(pet);
    }
    
    updateStats();
    
    const isOwned = petStats.ownedPets.has(petId);
    const message = isOwned ? 
        `恭喜！您已记录养过${pet.name} 🎉` : 
        `您已经养过${pet.name}了！`;
    
    showMessage(message, 'success');
}

// 更新宠物卡片
function updatePetCard(petId) {
    const card = document.querySelector(`[data-pet-id="${petId}"]`);
    if (!card) return;
    
    const pet = petsData.find(p => p.id === petId);
    const ownershipCount = getPetOwnershipCount(petId);
    const isOwned = petStats.ownedPets.has(petId);
    
    const ownershipCountEl = card.querySelector('.ownership-count');
    const toggleBtn = card.querySelector('.btn-secondary');
    
    if (ownershipCountEl) {
        ownershipCountEl.textContent = `${ownershipCount} 人养过`;
    }
    
    if (toggleBtn) {
        toggleBtn.textContent = isOwned ? '✅ 已养过' : '💝 我养过这个';
        toggleBtn.classList.toggle('owned', isOwned);
    }
}

// 更新统计信息
function updateStats() {
    const totalOwned = getTotalOwned();
    const mostPopular = getMostPopularPet();
    
    // 这里可以添加更多统计信息的显示
    console.log(`总共有 ${totalOwned} 种不同的宠物被养过`);
    if (mostPopular) {
        console.log(`最受欢迎的宠物是: ${mostPopular.name}`);
    }
}

// 关闭模态框
function closeModal() {
    petModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // 停止音频播放
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
    
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) {
        audioPlayer.style.display = 'none';
    }
    
    currentPet = null;
}

// 显示消息提示
function showMessage(message, type = 'info') {
    // 移除现有的消息
    const existingMessage = document.querySelector('.message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = message;
    
    // 添加到页面顶部
    document.body.insertBefore(messageDiv, document.body.firstChild);
    
    // 3秒后自动移除
    setTimeout(() => {
        if (messageDiv.parentNode) {
            messageDiv.remove();
        }
    }, 3000);
}

// 添加CSS样式用于消息提示
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
    
    .btn.owned {
        background: #28a745;
        color: white;
    }
    
    .btn.owned:hover {
        background: #218838;
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

// 图片加载错误处理
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjhmOWZhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPuWbvueJh+WKoOi9veWksei0pTwvdGV4dD48L3N2Zz4=';
    }
}, true);

// 添加页面加载动画
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// 添加滚动动画
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

// 观察宠物卡片
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const cards = document.querySelectorAll('.pet-card');
        cards.forEach(card => observer.observe(card));
    }, 100);
}); 