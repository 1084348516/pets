// Pet Encyclopedia Data Configuration
const petsData = [
    {
        id: 1,
        name: "Golden Retriever",
        emoji: "🐕",
        image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=300&fit=crop",
        description: "Golden Retrievers are gentle and friendly, perfect for families. They are smart, loyal, and make excellent companions.",
        longDescription: "The Golden Retriever originated in 19th-century Scotland, initially bred for retrieving waterfowl. They are excellent swimmers and have a gentle temperament, making them one of the most popular dog breeds in the world. Golden Retrievers are very loyal to their owners and especially friendly to children, making them ideal family pets.",
        difficulty: 2,
        personality: "Gentle, friendly, intelligent, loyal, energetic",
        lifespan: "10-12 years",
        size: "Large dog",
        careLevel: "Moderate",
        audioUrl: "https://www.soundjay.com/misc/sounds/dog-barking-1.wav",
        stats: {
            intelligence: 4,
            friendliness: 5,
            energy: 4,
            trainability: 5
        },
        careTips: [
            "Needs 1-2 hours of exercise daily",
            "Brush coat regularly, 2-3 times a week",
            "Control weight to avoid obesity",
            "Regular health check-ups"
        ]
    },
    {
        id: 2,
        name: "British Shorthair",
        emoji: "🐱",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
        description: "British Shorthairs are round-bodied, gentle, and independent, making them ideal indoor pets.",
        longDescription: "The British Shorthair is one of the oldest cat breeds in the world, originating from ancient Rome. They have round faces, short dense fur, and a gentle temperament. British Shorthairs are independent and do not require excessive attention, but they also enjoy interacting with their owners. They are adaptable and suitable for various home environments.",
        difficulty: 1,
        personality: "Gentle, independent, quiet, elegant, loyal",
        lifespan: "12-20 years",
        size: "Medium cat",
        careLevel: "Easy",
        audioUrl: "https://www.soundjay.com/misc/sounds/cat-meow-1.wav",
        stats: {
            intelligence: 3,
            friendliness: 4,
            energy: 2,
            trainability: 3
        },
        careTips: [
            "Provide a clean litter box",
            "Brush fur regularly",
            "Control diet to avoid obesity",
            "Provide scratching posts and toys"
        ]
    },
    {
        id: 3,
        name: "Holland Lop",
        emoji: "🐰",
        image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=300&fit=crop",
        description: "Holland Lops are gentle and small, a popular pet rabbit breed.",
        longDescription: "The Holland Lop is named for its lopped ears and is a representative breed of small pet rabbits. They are gentle, easy to tame, and suitable for beginners. Holland Lops enjoy company and are best kept in pairs. They need plenty of space to move and play.",
        difficulty: 2,
        personality: "Gentle, quiet, curious, lively, social",
        lifespan: "7-10 years",
        size: "Small rabbit",
        careLevel: "Moderate",
        audioUrl: "https://www.soundjay.com/misc/sounds/rabbit-sound-1.wav",
        stats: {
            intelligence: 3,
            friendliness: 4,
            energy: 3,
            trainability: 2
        },
        careTips: [
            "Provide plenty of hay",
            "Keep the cage clean",
            "Trim nails regularly",
            "Provide a safe space for activity"
        ]
    },
    {
        id: 4,
        name: "Leopard Gecko",
        emoji: "🦎",
        image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=400&h=300&fit=crop",
        description: "Leopard Geckos are a great entry-level reptile pet, gentle and easy to care for.",
        longDescription: "Leopard Geckos originate from the deserts of Pakistan and Afghanistan and are nocturnal reptiles. They are gentle and do not attack humans, making them ideal reptile pets. Leopard Geckos are adaptable and have relatively simple environmental requirements.",
        difficulty: 3,
        personality: "Quiet, independent, gentle, nocturnal",
        lifespan: "15-20 years",
        size: "Small reptile",
        careLevel: "Complex",
        audioUrl: "https://www.soundjay.com/misc/sounds/lizard-sound-1.wav",
        stats: {
            intelligence: 2,
            friendliness: 2,
            energy: 1,
            trainability: 1
        },
        careTips: [
            "Maintain proper temperature and humidity",
            "Provide UVB lighting",
            "Feed insects regularly",
            "Keep the habitat clean"
        ]
    },
    {
        id: 5,
        name: "Budgerigar",
        emoji: "🦜",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop",
        description: "Budgerigars are smart and lively, can mimic human speech, and are popular pet birds.",
        longDescription: "Budgerigars originate from Australia and are one of the smallest parrot species in the world. They are intelligent and can mimic human speech and surrounding sounds. Budgerigars are lively and enjoy interacting with their owners, making them ideal companion birds.",
        difficulty: 2,
        personality: "Smart, lively, good at mimicking, social",
        lifespan: "5-10 years",
        size: "Small bird",
        careLevel: "Moderate",
        audioUrl: "https://www.soundjay.com/misc/sounds/parrot-sound-1.wav",
        stats: {
            intelligence: 4,
            friendliness: 4,
            energy: 4,
            trainability: 4
        },
        careTips: [
            "Provide a spacious cage",
            "Change drinking water regularly",
            "Provide plenty of toys",
            "Ensure a balanced diet"
        ]
    },
    {
        id: 6,
        name: "Hamster",
        emoji: "🐹",
        image: "https://images.unsplash.com/photo-1584553421349-355747226bed?w=400&h=300&fit=crop",
        description: "Hamsters are small and lively, a great pet choice for children.",
        longDescription: "Hamsters are nocturnal rodents originally from Syria. They are lively and active at night. Hamsters are small and do not require much space, making them ideal beginner pets. They love to collect food and build nests.",
        difficulty: 1,
        personality: "Lively, curious, nocturnal, solitary",
        lifespan: "2-3 years",
        size: "Tiny",
        careLevel: "Easy",
        audioUrl: "https://www.soundjay.com/misc/sounds/hamster-sound-1.wav",
        stats: {
            intelligence: 2,
            friendliness: 3,
            energy: 4,
            trainability: 1
        },
        careTips: [
            "Provide a running wheel",
            "Keep the cage clean",
            "Provide hiding places",
            "Ensure food hygiene"
        ]
    }
];

// Statistics structure
let petStats = {
    totalOwned: 0,
    ownedPets: new Set(),
    petOwnershipCount: {}
};

// Initialize statistics
petsData.forEach(pet => {
    petStats.petOwnershipCount[pet.id] = 0;
});

// Load statistics from localStorage
function loadStats() {
    const savedStats = localStorage.getItem('petStats');
    if (savedStats) {
        const parsed = JSON.parse(savedStats);
        petStats.totalOwned = parsed.totalOwned || 0;
        petStats.ownedPets = new Set(parsed.ownedPets || []);
        petStats.petOwnershipCount = parsed.petOwnershipCount || {};
    }
}

// Save statistics to localStorage
function saveStats() {
    localStorage.setItem('petStats', JSON.stringify({
        totalOwned: petStats.totalOwned,
        ownedPets: Array.from(petStats.ownedPets),
        petOwnershipCount: petStats.petOwnershipCount
    }));
}

// Add pet ownership record
function addPetOwnership(petId) {
    if (!petStats.ownedPets.has(petId)) {
        petStats.ownedPets.add(petId);
        petStats.totalOwned++;
    }
    petStats.petOwnershipCount[petId]++;
    saveStats();
}

// Get pet ownership count
function getPetOwnershipCount(petId) {
    return petStats.petOwnershipCount[petId] || 0;
}

// Get total owned count
function getTotalOwned() {
    return petStats.totalOwned;
}

// Get most popular pet
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

// Initialize statistics on page load
document.addEventListener('DOMContentLoaded', loadStats); 