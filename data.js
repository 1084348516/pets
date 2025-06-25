// 宠物百科数据配置
const petsData = [
    {
        id: 1,
        name: "金毛寻回犬",
        emoji: "🐕",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
        description: "金毛寻回犬性格温顺友善，非常适合家庭饲养。它们聪明、忠诚，是优秀的伴侣犬。",
        longDescription: "金毛寻回犬起源于19世纪的苏格兰，最初被培育用于猎取水鸟。它们具有出色的游泳能力和温和的性格，是世界上最受欢迎的犬种之一。金毛寻回犬对主人非常忠诚，对儿童特别友善，是理想的家庭宠物。",
        difficulty: 2,
        personality: "温顺友善、聪明忠诚、活泼好动",
        lifespan: "10-12年",
        size: "大型犬",
        careLevel: "中等",
        audioUrl: "https://www.soundjay.com/misc/sounds/dog-barking-1.wav",
        stats: {
            intelligence: 4,
            friendliness: 5,
            energy: 4,
            trainability: 5
        },
        careTips: [
            "每天需要1-2小时的运动",
            "定期梳理毛发，每周2-3次",
            "注意控制体重，避免过度肥胖",
            "定期进行健康检查"
        ]
    },
    {
        id: 2,
        name: "英国短毛猫",
        emoji: "🐱",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
        description: "英国短毛猫体型圆润，性格温和独立，是理想的室内宠物。",
        longDescription: "英国短毛猫是世界上最古老的猫种之一，起源于古罗马时期。它们具有圆润的脸庞、短而密的毛发和温和的性格。英短猫独立性强，不需要过多的关注，但也喜欢与主人互动。它们适应能力强，适合各种家庭环境。",
        difficulty: 1,
        personality: "温和独立、安静优雅、忠诚",
        lifespan: "12-20年",
        size: "中型猫",
        careLevel: "简单",
        audioUrl: "https://www.soundjay.com/misc/sounds/cat-meow-1.wav",
        stats: {
            intelligence: 3,
            friendliness: 4,
            energy: 2,
            trainability: 3
        },
        careTips: [
            "提供干净的猫砂盆",
            "定期梳理毛发",
            "控制饮食，避免肥胖",
            "提供抓挠板和玩具"
        ]
    },
    {
        id: 3,
        name: "荷兰垂耳兔",
        emoji: "🐰",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop",
        description: "荷兰垂耳兔性格温顺，体型小巧，是受欢迎的宠物兔品种。",
        longDescription: "荷兰垂耳兔因其下垂的耳朵而得名，是小型宠物兔的代表品种。它们性格温顺，容易驯养，适合初学者饲养。荷兰垂耳兔喜欢群居，建议成对饲养。它们需要充足的空间活动和玩耍。",
        difficulty: 2,
        personality: "温顺安静、好奇活泼、群居",
        lifespan: "7-10年",
        size: "小型兔",
        careLevel: "中等",
        audioUrl: "https://www.soundjay.com/misc/sounds/rabbit-sound-1.wav",
        stats: {
            intelligence: 3,
            friendliness: 4,
            energy: 3,
            trainability: 2
        },
        careTips: [
            "提供充足的干草",
            "保持笼舍清洁",
            "定期修剪指甲",
            "提供安全的活动空间"
        ]
    },
    {
        id: 4,
        name: "豹纹守宫",
        emoji: "🦎",
        image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=400&h=300&fit=crop",
        description: "豹纹守宫是爬虫类宠物的入门选择，性格温和，易于饲养。",
        longDescription: "豹纹守宫原产于巴基斯坦和阿富汗的沙漠地区，是夜行性爬行动物。它们性格温和，不会主动攻击人类，是爬虫类宠物的理想选择。豹纹守宫适应能力强，对环境要求相对简单。",
        difficulty: 3,
        personality: "安静独立、温和、夜行性",
        lifespan: "15-20年",
        size: "小型爬虫",
        careLevel: "复杂",
        audioUrl: "https://www.soundjay.com/misc/sounds/lizard-sound-1.wav",
        stats: {
            intelligence: 2,
            friendliness: 2,
            energy: 1,
            trainability: 1
        },
        careTips: [
            "维持适宜的温度和湿度",
            "提供UVB照明",
            "定期喂食昆虫",
            "保持栖息地清洁"
        ]
    },
    {
        id: 5,
        name: "虎皮鹦鹉",
        emoji: "🦜",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop",
        description: "虎皮鹦鹉聪明活泼，能够模仿人声，是受欢迎的宠物鸟。",
        longDescription: "虎皮鹦鹉原产于澳大利亚，是世界上最小的鹦鹉品种之一。它们聪明好学，能够模仿人声和周围的声音。虎皮鹦鹉性格活泼，喜欢与主人互动，是理想的伴侣鸟。",
        difficulty: 2,
        personality: "聪明活泼、善于模仿、群居",
        lifespan: "5-10年",
        size: "小型鸟",
        careLevel: "中等",
        audioUrl: "https://www.soundjay.com/misc/sounds/parrot-sound-1.wav",
        stats: {
            intelligence: 4,
            friendliness: 4,
            energy: 4,
            trainability: 4
        },
        careTips: [
            "提供宽敞的鸟笼",
            "定期更换饮用水",
            "提供丰富的玩具",
            "注意营养均衡"
        ]
    },
    {
        id: 6,
        name: "仓鼠",
        emoji: "🐹",
        image: "cangshu.png",
        description: "仓鼠体型小巧，性格活泼，是适合儿童的宠物选择。",
        longDescription: "仓鼠是夜行性啮齿类动物，原产于叙利亚。它们性格活泼，喜欢在夜间活动。仓鼠体型小巧，饲养空间要求不高，是理想的入门宠物。它们喜欢收集食物和筑巢。",
        difficulty: 1,
        personality: "活泼好奇、夜行性、独居",
        lifespan: "2-3年",
        size: "超小型",
        careLevel: "简单",
        audioUrl: "https://www.soundjay.com/misc/sounds/hamster-sound-1.wav",
        stats: {
            intelligence: 2,
            friendliness: 3,
            energy: 4,
            trainability: 1
        },
        careTips: [
            "提供运动轮",
            "保持笼舍清洁",
            "提供藏身之处",
            "注意饮食卫生"
        ]
    }
];

// 统计数据结构
let petStats = {
    totalOwned: 0,
    ownedPets: new Set(),
    petOwnershipCount: {}
};

// 初始化统计数据
petsData.forEach(pet => {
    petStats.petOwnershipCount[pet.id] = 0;
});

// 从本地存储加载统计数据
function loadStats() {
    const savedStats = localStorage.getItem('petStats');
    if (savedStats) {
        const parsed = JSON.parse(savedStats);
        petStats.totalOwned = parsed.totalOwned || 0;
        petStats.ownedPets = new Set(parsed.ownedPets || []);
        petStats.petOwnershipCount = parsed.petOwnershipCount || {};
    }
}

// 保存统计数据到本地存储
function saveStats() {
    localStorage.setItem('petStats', JSON.stringify({
        totalOwned: petStats.totalOwned,
        ownedPets: Array.from(petStats.ownedPets),
        petOwnershipCount: petStats.petOwnershipCount
    }));
}

// 添加宠物拥有记录
function addPetOwnership(petId) {
    if (!petStats.ownedPets.has(petId)) {
        petStats.ownedPets.add(petId);
        petStats.totalOwned++;
    }
    petStats.petOwnershipCount[petId]++;
    saveStats();
}

// 获取宠物拥有统计
function getPetOwnershipCount(petId) {
    return petStats.petOwnershipCount[petId] || 0;
}

// 获取总拥有数量
function getTotalOwned() {
    return petStats.totalOwned;
}

// 获取最受欢迎的宠物
function getMostPopularPet() {
    let maxCount = 0;
    let mostPopular = null;
    
    for (const [petId, count] of Object.entries(petStats.petOwnershipCount)) {
        if (count > maxCount) {
            maxCount = count;
            mostPopular = petsData.find(pet => pet.id == petId);
        }
    }
    
    return mostPopular;
}

// 页面加载时初始化统计数据
document.addEventListener('DOMContentLoaded', loadStats); 