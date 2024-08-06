const gameData = {
  '1': {
    'text': 'Chloe starts her day with a mission: get a fresh pepper from the supermarket. What does she grab before heading out?',
    'image': 'images/starting_point.png',
    'choices': {
      'Her lucky charm': [2, ['Adventurous', 'Hopeful']],
      'A shopping list': [2, ['Organized', 'Practical']],
      'Her phone': [2, ['Connected', 'Modern']],
      'A reusable bag': [2, ['Eco-friendly', 'Prepared']]
    }
  },
  '2': {
    'text': 'On her way to the supermarket, Chloe bumps into an old friend. Who is it?',
    'image': 'images/old_friend.png',
    'choices': {
      'Frank, the fish market hottie': [3, ['Charming', 'Flirty']],
      'Lori McPhillan, the villain': [4, ['Cunning', 'Competitive']],
      'Quinn, the shelf master': [5, ['Organized', 'Efficient']],
      'Taylor, the mysterious stranger': [6, ['Mysterious', 'Intriguing']]
    }
  },
  '3': {
    'text': 'Frank insists on accompanying Chloe to the supermarket. What do they talk about on the way?',
    'image': 'images/talking_with_frank.png',
    'choices': {
      'Fish market gossip': [41, ['Gossipy', 'Flirty']],
      'Past memories': [41, ['Nostalgic', 'Emotional']],
      'Future dreams': [41, ['Ambitious', 'Hopeful']],
      'Just enjoy the walk silently': [41, ['Contemplative', 'Peaceful']]
    }
  },
  '4': {
    'text': 'Lori challenges Chloe to a friendly competition. What do they compete in?',
    'image': 'images/competing_with_lori.png',
    'choices': {
      'A race to the supermarket': [42, ['Competitive', 'Energetic']],
      'A trivia quiz': [42, ['Smart', 'Witty']],
      'A game of wit': [42, ['Clever', 'Strategic']],
      'Just enjoy the walk silently': [42, ['Contemplative', 'Peaceful']]
    }
  },
  '5': {
    'text': 'Quinn shares organizing tips with Chloe. What do they focus on?',
    'image': 'images/talking_with_quinn.png',
    'choices': {
      'Organizing groceries': [43, ['Organized', 'Efficient']],
      'Current challenges': [43, ['Practical', 'Supportive']],
      'Future goals': [43, ['Ambitious', 'Hopeful']],
      'Just enjoy the walk silently': [43, ['Contemplative', 'Peaceful']]
    }
  },
  '6': {
    'text': 'Taylor shares mysterious stories and thoughts. What does Chloe focus on?',
    'image': 'images/talking_with_taylor.png',
    'choices': {
      "Taylor's mysterious past": [44, ['Curious', 'Intrigued']],
      "Taylor's travel stories": [44, ['Adventurous', 'Inspired']],
      'Future possibilities': [44, ['Ambitious', 'Hopeful']],
      'Just enjoy the walk silently': [44, ['Contemplative', 'Peaceful']]
    }
  },
  '41': {
    'text': 'They arrive at the supermarket. Chloe needs to find the pepper quickly, but Frank suggests taking a detour. What does Chloe do?',
    'image': 'images/supermarket.png',
    'choices': {
      "Follow Frank's suggestion": [7, ['Trusting', 'Adventurous']],
      'Stick to her plan and go straight to the produce section': [7, ['Determined', 'Focused']],
      'Explore the supermarket together': [7, ['Curious', 'Open-minded']],
      'Ask Frank to wait while she quickly grabs the pepper': [7, ['Practical', 'Efficient']]
    }
  },
  '42': {
    'text': 'They arrive at the supermarket. Chloe needs to find the pepper quickly, but Lori suggests a different approach. What does Chloe do?',
    'image': 'images/supermarket.png',
    'choices': {
      "Follow Lori's advice": [7, ['Cunning', 'Strategic']],
      'Stick to her plan and go straight to the produce section': [7, ['Determined', 'Focused']],
      'Explore the supermarket together': [7, ['Curious', 'Open-minded']],
      'Ask Lori to wait while she quickly grabs the pepper': [7, ['Practical', 'Efficient']]
    }
  },
  '43': {
    'text': 'They arrive at the supermarket. Chloe needs to find the pepper quickly, but Quinn suggests a different approach. What does Chloe do?',
    'image': 'images/supermarket.png',
    'choices': {
      "Follow Quinn's suggestion": [7, ['Organized', 'Efficient']],
      'Stick to her plan and go straight to the produce section': [7, ['Determined', 'Focused']],
      'Explore the supermarket together': [7, ['Curious', 'Open-minded']],
      'Ask Quinn to wait while she quickly grabs the pepper': [7, ['Practical', 'Efficient']]
    }
  },
  '44': {
    'text': 'They arrive at the supermarket. Chloe needs to find the pepper quickly, but Taylor suggests a different path. What does Chloe do?',
    'image': 'images/supermarket.png',
    'choices': {
      "Follow Taylor's suggestion": [7, ['Curious', 'Intrigued']],
      'Stick to her plan and go straight to the produce section': [7, ['Determined', 'Focused']],
      'Explore the supermarket together': [7, ['Curious', 'Open-minded']],
      'Ask Taylor to wait while she quickly grabs the pepper': [7, ['Practical', 'Efficient']]
    }
  },
  '7': {
    'text': 'Chloe finally finds the pepper, but a supermarket siren starts singing, distracting her. What does she do?',
    'image': 'images/siren_singing.png',
    'choices': {
      'Cover her ears and focus on the pepper': [8, ['Determined', 'Focused']],
      "Listen to the siren's song": [8, ['Curious', 'Enchanted']],
      'Ask for help from her friend': [8, ['Trusting', 'Collaborative']],
      'Run away from the siren': [8, ['Scared', 'Cautious']]
    }
  },
  '8': {
    'text': 'Chloe manages to grab the pepper, but a pepper thief appears and snatches it! What does she do?',
    'image': 'images/pepper_thief.png',
    'choices': {
      'Chase the thief': [9, ['Determined', 'Brave']],
      'Ask for help from her friend': [9, ['Collaborative', 'Trusting']],
      'Set a trap for the thief': [9, ['Clever', 'Strategic']],
      'Try to negotiate with the thief': [9, ['Diplomatic', 'Calm']]
    }
  },
  '9': {
    'text': "Chloe successfully retrieves the pepper from the thief. Now, she needs to get back home safely. What's her plan?",
    'image': 'images/getting_home.png',
    'choices': {
      'Take a shortcut through the park': [10, ['Adventurous', 'Brave']],
      'Stick to the main road': [10, ['Safe', 'Practical']],
      'Ask her friend to accompany her home': [10, ['Trusting', 'Collaborative']],
      'Call a ride-share service': [10, ['Modern', 'Efficient']]
    }
  },
  '10': {
    'text': 'Chloe finally reaches home with her pepper. How does she feel about her adventure?',
    'image': 'images/home_sweet_home.png',
    'choices': {
      'Excited and fulfilled': [11, ['Happy', 'Content']],
      'Tired but accomplished': [11, ['Exhausted', 'Proud']],
      'Relieved to be home': [11, ['Relieved', 'Calm']],
      'Already thinking about the next adventure': [11, ['Ambitious', 'Eager']]
    }
  },
  '11': {
    'text': "Now that she's home, should Chloe invite friends over for sushi or make pizza instead?",
    'image': 'images/home_decision.png',
    'choices': {
      'Invite friends over for sushi': [12, ['Social', 'Friendly']],
      'Make pizza instead': [12, ['Creative', 'Independent']]
    }
  },
  '12': {
    'text': 'As Chloe is deciding, she comes across Kiwi the Tarot card reader offering free readings. Does she take the offer?',
    'image': 'images/tarot_card_reader.png',
    'choices': {
      'Yes, get a reading': [13, ['Curious', 'Open-minded']],
      'No, continue with her plan': [13, ['Determined', 'Focused']]
    }
  },
  '13': {
    'text': "Chloe's journey comes to an end. How does she feel about her day?",
    'image': 'images/end_of_day.png',
    'choices': {
      'Reflect on the adventure': [0, ['Reflective', 'Thoughtful']],
      'Plan for the next adventure': [0, ['Ambitious', 'Eager']]
    }
  },
  '0': {
    'text': "Congratulations! Chloe successfully completed her quest. Here's her personality profile based on your choices:",
    'image': 'images/personality_profile.png',
    'choices': {
      "See Chloe's personality profile": [0, []]
    }
  }
}

const personalities = {
  'Adventurous': 0,
  'Hopeful': 0,
  'Organized': 0,
  'Practical': 0,
  'Connected': 0,
  'Modern': 0,
  'Eco-friendly': 0,
  'Prepared': 0,
  'Charming': 0,
  'Flirty': 0,
  'Cunning': 0,
  'Competitive': 0,
  'Organized': 0,
  'Efficient': 0,
  'Mysterious': 0,
  'Intriguing': 0,
  'Inspirational': 0,
  'Nostalgic': 0,
  'Emotional': 0,
  'Ambitious': 0,
  'Peaceful': 0,
  'Trusting': 0,
  'Determined': 0,
  'Focused': 0,
  'Curious': 0,
  'Open-minded': 0,
  'Enchanted': 0,
  'Collaborative': 0,
  'Scared': 0,
  'Cautious': 0,
  'Brave': 0,
  'Strategic': 0,
  'Diplomatic': 0,
  'Calm': 0,
  'Happy': 0,
  'Content': 0,
  'Exhausted': 0,
  'Proud': 0,
  'Relieved': 0,
  'Eager': 0,
  'Social': 0,
  'Friendly': 0,
  'Creative': 0,
  'Independent': 0,
  'Reflective': 0,
  'Thoughtful': 0
}

let currentState = 1

function renderState (state) {
  const storyText = document.getElementById('story-text')
  const storyImage = document.getElementById('story-image')
  const choicesContainer = document.getElementById('choices')

  const img = new Image()
  img.src = 'smaller_images/cave.png'// gameData[state].image;

  img.onload = () => {
    storyImage.src = img.src
    storyText.textContent = gameData[state].text
    choicesContainer.innerHTML = ''

    for (const [choice, info] of Object.entries(gameData[state].choices)) {
      const button = document.createElement('button')
      button.textContent = choice
      button.className = 'choice-button'
      let nextState = info[0]
      button.onclick = () => changeState(nextState, info[1]) // each time you change state you update the personalities dictionary
      choicesContainer.appendChild(button)
    }
  }
}

function changeState (newState, selectedPersonalities) {
  selectedPersonalities.forEach(personality => {
    personalities[personality]++
  })

  currentState = newState

  if (currentState === 0) {
    revealMostSelectedPersonality()
  } else {
    renderState(currentState)
  }
}

function revealMostSelectedPersonality () {
  let maxCount = 0
  let maxPersonality = ''

  for (const [personality, count] of Object.entries(personalities)) {
    if (count > maxCount) {
      maxCount = count
      maxPersonality = personality
    }
  }

  const storyImage = document.getElementById('story-image')
  const text = document.getElementById('story-text')
  const choicesContainer = document.getElementById('choices')
  const personalityImagePath = 'data:,' // `images/personality/${maxPersonality}.png`

    // Preload the image
  const img = new Image()
  img.src = personalityImagePath
  img.className = 'responsive-image'

    // Create the share button
  const shareButton = document.createElement('button')
  shareButton.textContent = 'Share the game with Friends'
  shareButton.className = 'choice-button'

    // Once the image is loaded, update the DOM
  img.onload = () => {
    storyImage.style.display = 'none'
    choicesContainer.style.display = 'none'

    text.textContent = `Your personality is: ${maxPersonality}`
    text.appendChild(img)

        // Share button functionality
    shareButton.onclick = () => {
      const shareMessage = `Check out my personality profile in Chloe's adventure! You can create yours at https://lukeburns.com/vegetal/`
      navigator.clipboard.writeText(shareMessage).then(() => {
        alert('Link copied to clipboard!')
      }).catch(err => {
        alert('Failed to copy link. Please try again.')
      })
    }

    text.appendChild(shareButton)
  }
}

function startGame () {
  document.querySelector('.title').style.display = 'none'
  document.getElementById('homescreen').style.display = 'none'
  document.querySelector('.start-button').style.display = 'none'
  document.getElementById('game-container').style.display = 'block'
  renderState(currentState)
}

window.onload = () => {
  renderState(currentState)
}
