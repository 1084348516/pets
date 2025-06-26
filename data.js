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
    },
    {
        id: 7,
        name: "Siamese Cat",
        emoji: "🐱",
        image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=300&fit=crop",
        description: "Siamese cats are vocal, intelligent, and social with distinctive color-pointed coats.",
        longDescription: "Siamese cats are one of the oldest and most recognizable cat breeds, originating from Thailand. They are known for their striking blue eyes, color-pointed coats, and vocal personalities. Siamese cats are highly intelligent, social, and form strong bonds with their owners.",
        difficulty: 2,
        personality: "Vocal, intelligent, social, active, loyal",
        lifespan: "15-20 years",
        size: "Medium cat",
        careLevel: "Moderate",
        audioUrl: "https://www.soundjay.com/misc/sounds/cat-meow-2.wav",
        stats: {
            intelligence: 5,
            friendliness: 4,
            energy: 4,
            trainability: 4
        },
        careTips: [
            "Provide interactive toys and puzzles",
            "Regular grooming sessions",
            "Keep them mentally stimulated",
            "Social interaction is essential"
        ]
    },
    {
        id: 8,
        name: "Bearded Dragon",
        emoji: "🦎",
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
        description: "Bearded Dragons are friendly reptiles that make excellent first-time reptile pets.",
        longDescription: "Bearded Dragons are native to Australia and are known for their spiky appearance and gentle temperament. They are diurnal (active during the day) and enjoy basking in the sun. These reptiles are relatively easy to handle and can become quite tame with regular interaction.",
        difficulty: 3,
        personality: "Gentle, curious, calm, social for reptiles",
        lifespan: "10-15 years",
        size: "Medium reptile",
        careLevel: "Complex",
        audioUrl: "https://www.soundjay.com/misc/sounds/lizard-sound-2.wav",
        stats: {
            intelligence: 3,
            friendliness: 3,
            energy: 2,
            trainability: 2
        },
        careTips: [
            "Provide UVB lighting and basking spot",
            "Maintain proper temperature gradient",
            "Feed a mix of insects and vegetables",
            "Regular handling for socialization"
        ]
    },
    {
        id: 9,
        name: "Guinea Pig",
        emoji: "🐹",
        image: "https://images.unsplash.com/photo-1584553421349-355747226bed?w=400&h=300&fit=crop",
        description: "Guinea Pigs are social, gentle rodents that make wonderful family pets.",
        longDescription: "Guinea Pigs are native to South America and have been domesticated for thousands of years. They are social animals that thrive in pairs or groups and communicate through various sounds. Guinea Pigs are gentle, rarely bite, and are excellent pets for children.",
        difficulty: 1,
        personality: "Social, gentle, vocal, curious, friendly",
        lifespan: "5-7 years",
        size: "Small rodent",
        careLevel: "Easy",
        audioUrl: "https://www.soundjay.com/misc/sounds/guinea-pig-sound.wav",
        stats: {
            intelligence: 3,
            friendliness: 5,
            energy: 3,
            trainability: 2
        },
        careTips: [
            "Keep in pairs or groups",
            "Provide unlimited hay",
            "Clean cage regularly",
            "Handle gently and frequently"
        ]
    },
    {
        id: 10,
        name: "African Grey Parrot",
        emoji: "🦜",
        image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=300&fit=crop",
        description: "African Grey Parrots are highly intelligent birds known for their exceptional talking abilities.",
        longDescription: "African Grey Parrots are considered one of the most intelligent bird species, capable of learning hundreds of words and understanding complex concepts. They are native to the rainforests of West and Central Africa. These birds require significant mental stimulation and social interaction.",
        difficulty: 4,
        personality: "Highly intelligent, talkative, sensitive, social",
        lifespan: "40-60 years",
        size: "Medium bird",
        careLevel: "Very Complex",
        audioUrl: "https://www.soundjay.com/misc/sounds/parrot-sound-2.wav",
        stats: {
            intelligence: 5,
            friendliness: 4,
            energy: 4,
            trainability: 5
        },
        careTips: [
            "Provide extensive mental stimulation",
            "Social interaction is crucial",
            "Large cage with plenty of toys",
            "Consistent training and routine"
        ]
    },
    {
        id: 11,
        name: "Betta Fish",
        emoji: "🐠",
        image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&h=300&fit=crop",
        description: "Betta Fish are colorful, low-maintenance fish perfect for beginners.",
        longDescription: "Betta Fish, also known as Siamese Fighting Fish, are native to Southeast Asia. They are known for their vibrant colors and flowing fins. Male bettas are territorial and should be kept alone, while females can sometimes be kept in groups. They are hardy fish that can survive in smaller tanks.",
        difficulty: 1,
        personality: "Territorial, curious, active, colorful",
        lifespan: "2-4 years",
        size: "Small fish",
        careLevel: "Easy",
        audioUrl: "https://www.soundjay.com/misc/sounds/fish-bubble.wav",
        stats: {
            intelligence: 2,
            friendliness: 1,
            energy: 3,
            trainability: 1
        },
        careTips: [
            "Keep males separate",
            "Maintain clean water",
            "Provide hiding places",
            "Feed high-quality food"
        ]
    },
    {
        id: 12,
        name: "Red-Eared Slider Turtle",
        emoji: "🐢",
        image: "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=400&h=300&fit=crop",
        description: "Red-Eared Sliders are popular aquatic turtles that can live for decades.",
        longDescription: "Red-Eared Sliders are semi-aquatic turtles native to the southern United States. They are named for the distinctive red stripe behind their eyes. These turtles can grow quite large and require both water and land areas in their habitat. They are long-lived pets that can become quite tame.",
        difficulty: 3,
        personality: "Calm, curious, long-lived, aquatic",
        lifespan: "20-40 years",
        size: "Medium turtle",
        careLevel: "Complex",
        audioUrl: "https://www.soundjay.com/misc/sounds/turtle-sound.wav",
        stats: {
            intelligence: 2,
            friendliness: 2,
            energy: 1,
            trainability: 1
        },
        careTips: [
            "Provide both water and basking areas",
            "Maintain proper water temperature",
            "UVB lighting is essential",
            "Regular tank cleaning required"
        ]
    }
]; 