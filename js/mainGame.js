const gameData = {
    "1": {
        "text": "Chloe's journey begins at home. She realizes she needs a pepper for her favorite recipe. What should she do first?",
        "image": "images/home.png",
        "choices": {
            "Head straight to the supermarket": [2, ["Helper", "Shopper"]],
            "Call a friend to ask if they have a pepper": [3, ["Helper"]],
            "Look online for pepper delivery": [4, ["Shopper"]]
        }
    },
    "2": {
        "text": "On the way to the supermarket, Chloe encounters a charming stranger who offers to help her find the perfect pepper. What does she do?",
        "image": "images/stranger.png",
        "choices": {
            "Accept the stranger's help": [5, ["Suitor"]],
            "Politely decline and continue on her own": [6, ["Shopper"]],
            "Ask for more information about the stranger": [7, ["Suitor", "Guard"]]
        }
    },
    "3": {
        "text": "Chloe calls her friend, but they are busy. They suggest Chloe goes to the supermarket and offers some advice on the best route. What does Chloe do?",
        "image": "images/call_friend.png",
        "choices": {
            "Follow the friend's advice": [2, ["Helper"]],
            "Decide to take a different route": [8, ["Shopper"]],
            "Ask the friend to join her later": [9, ["Helper", "Suitor"]]
        }
    },
    "4": {
        "text": "Chloe finds a delivery service that can bring a pepper to her house, but it will take a few hours. She decides to...",
        "image": "images/online_delivery.png",
        "choices": {
            "Wait for the delivery": [10, ["Shopper"]],
            "Go to the supermarket anyway": [2, ["Shopper"]],
            "Call the service to see if they can expedite": [11, ["Helper"]]
        }
    },
    "5": {
        "text": "The charming stranger leads Chloe to a secret corner of the supermarket where they claim the best peppers are kept. Chloe starts to feel...",
        "image": "images/secret_corner.png",
        "choices": {
            "Excited about the special peppers": [12, ["Suitor"]],
            "Suspicious of the stranger's intentions": [13, ["Guard"]],
            "Grateful for the help": [14, ["Helper", "Suitor"]]
        }
    },
    "6": {
        "text": "Chloe continues on her own and encounters a group of supermarket sirens with beautiful voices, distracting her from her quest. What does she do?",
        "image": "images/sirens.png",
        "choices": {
            "Ignore the sirens and stay focused": [15, ["Guard"]],
            "Listen to the sirens and enjoy the music": [16, ["Sirens"]],
            "Ask the sirens for directions to the peppers": [17, ["Sirens", "Helper"]]
        }
    },
    "7": {
        "text": "The stranger explains they work at the supermarket and are passionate about peppers. Chloe feels...",
        "image": "images/stranger_explains.png",
        "choices": {
            "More comfortable and accepts their help": [5, ["Suitor", "Helper"]],
            "Still cautious and decides to go alone": [6, ["Guard"]],
            "Intrigued and asks more about peppers": [18, ["Suitor", "Helper"]]
        }
    },
    "8": {
        "text": "Taking a different route, Chloe stumbles upon a pepper thief in the act! What does she do?",
        "image": "images/thief.png",
        "choices": {
            "Confront the thief": [19, ["Guard", "Thief"]],
            "Report the thief to the supermarket staff": [20, ["Helper"]],
            "Follow the thief secretly": [21, ["Thief"]]
        }
    },
    "9": {
        "text": "Her friend agrees to join her later. While waiting, Chloe decides to...",
        "image": "images/waiting.png",
        "choices": {
            "Prepare other ingredients at home": [22, ["Helper"]],
            "Relax and read a book": [23, ["Shopper"]],
            "Call another friend for a chat": [24, ["Helper", "Suitor"]]
        }
    },
    // Further game states with additional encounters and choices
    "10": {
        "text": "While waiting for the delivery, Chloe hears a knock on the door. It's an unexpected suitor with a pepper. What does she do?",
        "image": "images/unexpected_suitor.png",
        "choices": {
            "Accept the pepper and chat with the suitor": [25, ["Suitor"]],
            "Politely decline and wait for the delivery": [26, ["Shopper"]],
            "Ask the suitor how they knew she needed a pepper": [27, ["Suitor", "Guard"]]
        }
    },
    "11": {
        "text": "The delivery service agrees to expedite, but it will cost extra. Chloe decides to...",
        "image": "images/expedite.png",
        "choices": {
            "Pay the extra fee": [28, ["Shopper"]],
            "Wait for the regular delivery time": [10, ["Shopper"]],
            "Cancel the order and go to the supermarket": [2, ["Shopper"]]
        }
    },
    "12": {
        "text": "Chloe finds the special peppers and feels a sense of achievement. However, the stranger now asks for her phone number. What does she do?",
        "image": "images/special_peppers.png",
        "choices": {
            "Give her phone number": [29, ["Suitor"]],
            "Politely refuse": [30, ["Guard"]],
            "Ask why they want her number": [31, ["Suitor", "Guard"]]
        }
    },
    "13": {
        "text": "Chloe's suspicion grows as the stranger acts more oddly. She decides to...",
        "image": "images/suspicion.png",
        "choices": {
            "Leave immediately": [6, ["Guard"]],
            "Confront the stranger": [32, ["Guard"]],
            "Seek help from the supermarket staff": [20, ["Helper"]]
        }
    },
    "14": {
        "text": "Grateful for the help, Chloe finds the perfect pepper. The stranger now suggests they cook together. What does she do?",
        "image": "images/cooking.png",
        "choices": {
            "Agree to cook together": [33, ["Suitor", "Helper"]],
            "Thank them and leave": [34, ["Guard"]],
            "Suggest cooking another time": [35, ["Suitor", "Helper"]]
        }
    },
    // End state example
    "0": {
        "text": "Chloe finally gets her pepper and makes it back home. Along the way, she made new friends and had quite the adventure. Chloe is...",
        "image": "images/home.png",
        "choices": {
            "Happy and ready to cook": [0, ["Pepper"]],
            "Exhausted but satisfied": [0, ["Pepper"]],
            "Already planning her next adventure": [0, ["Pepper"]]
        }
    }
};

const personalities = { 
    "Suitor": 0, // The Charmer
    "Sirens": 0, // The Enchanter
    "Thief": 0, // The Trickster
    "Helper": 0, // The Ally
    "Guard": 0, // The Protector
    "Shopper": 0, // The Commoner
    "Pepper": 0, // The Prize
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
    // console.log(personalities); 
    selectedPersonalities.forEach(personality => {
        personalities[personality]++;
    });

    currentState = newState;

    if (currentState === 0) {
        revealMostSelectedVegetable();
    } else {
        renderState(currentState);
    }
}
function revealMostSelectedVegetable() {
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
    const personalityImagePath = `images/personality_cards/${maxPersonality}.png`;

    // Preload the image
    const img = new Image();
    img.src = personalityImagePath;
    img.className = 'responsive-image';

    // Create the share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share your journey with friends';
    shareButton.className = 'choice-button';

    // Once the image is loaded, update the DOM
    img.onload = () => {
        storyImage.style.display = 'none';
        choicesContainer.style.display = 'none';

        text.textContent = `You are a ${maxPersonality}! (Right click or hold the image to save)`;
        text.appendChild(img);

        // Share button functionality
        shareButton.onclick = () => {
            const shareMessage = `Check out my journey as a ${maxPersonality}! You can create yours at https://your-game-url.com`;
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
