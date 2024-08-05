const gameData = {
    "1": {
        "text": "Chloe starts her day with a mission: get a fresh pepper from the supermarket. What does she grab before heading out?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Her lucky charm": [2, ["Adventurous", "Hopeful"]],
            "A shopping list": [2, ["Organized", "Practical"]],
            "Her phone": [2, ["Connected", "Modern"]],
            "A reusable bag": [2, ["Eco-friendly", "Prepared"]]
        }
    },
    "2": {
        "text": "On her way to the supermarket, Chloe bumps into an old friend. Who is it?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Alex, the flirtatious artist": [3, ["Charming", "Artistic"]],
            "Jordan, the wise mentor": [4, ["Wise", "Supportive"]],
            "Casey, the competitive rival": [5, ["Competitive", "Driven"]],
            "Taylor, the mysterious stranger": [6, ["Mysterious", "Intriguing"]]
        }
    },
    "3": {
        "text": "Alex insists on accompanying Chloe to the supermarket. What do they talk about on the way?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Art and creativity": [41, ["Artistic", "Inspirational"]],
            "Past memories": [41, ["Nostalgic", "Emotional"]],
            "Future dreams": [41, ["Ambitious", "Hopeful"]],
            "Just enjoy the walk silently": [41, ["Contemplative", "Peaceful"]],
        }
    },
    "41": {
        "text": "They arrive at the supermarket. Chloe needs to find the pepper quickly, but Alex suggests taking a detour. What does Chloe do?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Follow Alex's suggestion": [7, ["Trusting", "Adventurous"]],
            "Stick to her plan and go straight to the produce section": [7, ["Determined", "Focused"]],
            "Explore the supermarket together": [7, ["Curious", "Open-minded"]],
            "Ask Alex to wait while she quickly grabs the pepper": [7, ["Practical", "Efficient"]],
        }
    },
    "7": {
        "text": "Chloe finally finds the pepper, but a supermarket siren starts singing, distracting her. What does she do?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Cover her ears and focus on the pepper": [8, ["Determined", "Focused"]],
            "Listen to the siren's song": [8, ["Curious", "Enchanted"]],
            "Ask Alex for help": [8, ["Trusting", "Collaborative"]],
            "Run away from the siren": [8, ["Scared", "Cautious"]],
        }
    },
    "8": {
        "text": "Chloe manages to grab the pepper, but a pepper thief appears and snatches it! What does she do?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Chase the thief": [9, ["Determined", "Brave"]],
            "Ask for help from Alex": [9, ["Collaborative", "Trusting"]],
            "Set a trap for the thief": [9, ["Clever", "Strategic"]],
            "Try to negotiate with the thief": [9, ["Diplomatic", "Calm"]],
        }
    },
    "9": {
        "text": "Chloe successfully retrieves the pepper from the thief. Now, she needs to get back home safely. What's her plan?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Take a shortcut through the park": [10, ["Adventurous", "Brave"]],
            "Stick to the main road": [10, ["Safe", "Practical"]],
            "Ask Alex to accompany her home": [10, ["Trusting", "Collaborative"]],
            "Call a ride-share service": [10, ["Modern", "Efficient"]],
        }
    },
    "10": {
        "text": "Chloe finally reaches home with her pepper. How does she feel about her adventure?",
        "image": "smaller_images/snackies.png",
        "choices": {
            "Excited and fulfilled": [0, ["Happy", "Content"]],
            "Tired but accomplished": [0, ["Exhausted", "Proud"]],
            "Relieved to be home": [0, ["Relieved", "Calm"]],
            "Already thinking about the next adventure": [0, ["Ambitious", "Eager"]],
        }
    },
    "0": {
        "text": "Congratulations! Chloe successfully completed her quest. Here's her personality profile based on your choices:",
        "image": "smaller_images/snackies.png",
        "choices": {
            "See Chloe's personality profile": [0, []]
        }
    },
};

const personalities = { 
    "Adventurous": 0,
    "Hopeful": 0,
    "Organized": 0,
    "Practical": 0,
    "Connected": 0,
    "Modern": 0,
    "Eco-friendly": 0,
    "Prepared": 0,
    "Charming": 0,
    "Artistic": 0,
    "Wise": 0,
    "Supportive": 0,
    "Competitive": 0,
    "Driven": 0,
    "Mysterious": 0,
    "Intriguing": 0,
    "Artistic": 0,
    "Inspirational": 0,
    "Nostalgic": 0,
    "Emotional": 0,
    "Ambitious": 0,
    "Hopeful": 0,
    "Contemplative": 0,
    "Peaceful": 0,
    "Trusting": 0,
    "Adventurous": 0,
    "Determined": 0,
    "Focused": 0,
    "Curious": 0,
    "Open-minded": 0,
    "Practical": 0,
    "Efficient": 0,
    "Enchanted": 0,
    "Collaborative": 0,
    "Scared": 0,
    "Cautious": 0,
    "Brave": 0,
    "Strategic": 0,
    "Diplomatic": 0,
    "Calm": 0,
    "Safe": 0,
    "Modern": 0,
    "Efficient": 0,
    "Happy": 0,
    "Content": 0,
    "Exhausted": 0,
    "Proud": 0,
    "Relieved": 0,
    "Calm": 0,
    "Ambitious": 0,
    "Eager": 0
};

let currentState = 1;

function renderState(state) {
    const storyText = document.getElementById('story-text');
    const storyImage = document.getElementById('story-image');
    const choicesContainer = document.getElementById('choices');

    const img = new Image();
    img.src = gameData[state].image;

    img.onload = () => {
        storyImage.src = img.src;
        storyText.textContent = gameData[state].text;
        choicesContainer.innerHTML = '';

        for (const [choice, info] of Object.entries(gameData[state].choices)) {
            const button = document.createElement('button');
            button.textContent = choice;
            button.className = 'choice-button';
            let nextState = info[0];
            button.onclick = () => changeState(nextState, info[1]); //each time you change state you update the personalities dictionary
            choicesContainer.appendChild(button);
        }
    };
}

function changeState(newState, selectedPersonalities) { 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedPersonality();
    } else {
        renderState(currentState);
    }
}

function revealMostSelectedPersonality() {
    let maxCount = 0;
    let maxPersonality = '';

    for (const [personality, count] of Object.entries(personalities)) {
        if (count > maxCount) {
            maxCount = count;
            maxPersonality = personality;
        }
    }

    const storyImage = document.getElementById('story-image');
    const text = document.getElementById('story-text');
    const choicesContainer = document.getElementById('choices');
    const personalityImagePath = `images/personality/${maxPersonality}.png`;

    // Preload the image
    const img = new Image();
    img.src = personalityImagePath;
    img.className = 'responsive-image'; 

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share the game with Friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';
    
        text.textContent = "Here's your personality profile! Don't lose it! (Right click or hold the image to save)";
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my personality profile in Chloe's adventure! You can create yours at https://sophie006liu.github.io/vegetal/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
        };

        text.appendChild(shareButton);
    };
}

function startGame() {
    document.querySelector('.title').style.display = 'none';
    document.getElementById('homescreen').style.display = 'none';
    document.querySelector('.start-button').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    renderState(currentState);
}

window.onload = () => {
    renderState(currentState);
}
