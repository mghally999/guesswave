const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 5500 });

const messages = [];
let usernames = ["CPU 1", "CPU 2", "CPU 3"];
const activeUsers = new Map(); // Map to store active users
const msgs = [
  "Hello Everyone",
  "I can't get enough of this game",
  "I'm sorry for late, I've just came from outside",
  "We'll have a great game guys",
  "How is everyone doing?",
  "What level are you on?",
  "I just unlocked a new achievement!",
  "Anyone up for a quick match?",
  "This game is so addictive!",
  "Can someone help me with this quest?",
  "Just made it to the top of the leaderboard!",
  "Who else loves the new update?",
  "I found a hidden secret in the game!",
  "What's your favorite character?",
  "Just beat my high score!",
  "Any tips for a beginner?",
  "The graphics are amazing!",
  "Who wants to team up?",
  "I love the soundtrack in this game.",
  "Got any strategies for the final boss?",
  "Can't wait for the next update!",
  "I just found a rare item!",
  "This game keeps getting better and better.",
  "Who else is playing right now?",
  "I need more in-game currency.",
  "Just leveled up!",
  "Anyone tried the new game mode?",
  "This game is a masterpiece.",
  "Can you believe the plot twist?",
  "I'm stuck on this level!",
  "The multiplayer mode is so fun!",
  "I love customizing my character.",
  "Just completed a tough challenge.",
  "Who's your favorite enemy?",
  "I'm aiming for 100% completion.",
  "The community is so helpful.",
  "I discovered a cool glitch.",
  "How do you defeat the final boss?",
  "Just joined a new guild.",
  "The art style is beautiful.",
  "I can't put this game down!",
  "Who else is grinding for gear?",
  "I found an easter egg!",
  "This game is my new obsession.",
  "How long have you been playing?",
  "I need to upgrade my weapons.",
  "Anyone got some spare items?",
  "I just finished the main story.",
  "What build are you using?",
  "I'm farming for materials.",
  "The lore is so deep.",
  "I love the PvP battles.",
  "The NPCs have such great dialogue.",
  "Just finished a speedrun!",
  "Who's your main character?",
  "I need help with a dungeon.",
  "The boss fights are intense!",
  "Just reached the max level!",
  "Who's excited for the expansion?",
  "I love the co-op missions.",
  "The AI is really smart.",
  "Just unlocked a new area!",
  "Anyone else love the voice acting?",
  "I'm crafting some new gear.",
  "This game has so much replay value.",
  "I love the different classes.",
  "Anyone got a good build guide?",
  "Just completed a raid!",
  "The animations are top-notch.",
  "I'm exploring every corner of the map.",
  "Who else is a completionist?",
  "I just got a legendary drop!",
  "The difficulty is just right.",
  "I need more inventory space.",
  "The side quests are really fun.",
  "Just unlocked a new ability!",
  "Anyone up for some PvP?",
  "I love the world-building.",
  "Just hit a new personal best!",
  "The game mechanics are so smooth.",
  "I'm saving up for a big purchase.",
  "The character designs are awesome.",
  "Just beat the game!",
  "The tutorials are really helpful.",
  "I can't wait for the next event.",
  "I'm trying out a new class.",
  "The endgame content is great.",
  "I love the dynamic weather system.",
  "Just found a new favorite spot.",
  "I'm writing a game guide.",
  "The community events are so fun.",
  "I'm working on my achievements.",
  "The controls are so responsive.",
  "I just joined a new server.",
  "The story mode is epic.",
  "I'm doing a no-death run.",
  "The game balance is perfect.",
  "I'm collecting all the skins.",
  "The updates are always exciting.",
  "Just finished a marathon session!"
];


// Broadcast to all clients
function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

// Function to add username to the array and simulate database storage
function addUsernameToStorage(username) {
  // Simulating database storage by pushing username to array
  usernames.push(username);
}

wss.on("connection", ws => {
  console.log("Client connected");

  // Send current state to the new client
  ws.send(JSON.stringify({ type: 'initial', messages }));

  ws.on("message", message => {
    const receivedMessage = JSON.parse(message);
    const completeMessage = {
      username: receivedMessage.user,
      message: receivedMessage.message,
      timestamp: new Date().toISOString()
    };
    console.log("Message received: ", completeMessage);
    
    // Add to message history
    messages.push(completeMessage);
    
    // Broadcast the received message to all clients
    broadcast({ type: 'message', data: completeMessage });
  });

  ws.on('close', () => {
    console.log("Client disconnected");
  });

});

// Send random messages from random users to all clients every 5 seconds
function startSendingRandomMessages() {
  const interval = setInterval(() => {
    const username = usernames[Math.floor(Math.random() * usernames.length)];
    const message = msgs[Math.floor(Math.random() * msgs.length)];
    const randomMessage = { username, message, timestamp: new Date().toISOString() };
    
    // Add to message history
    messages.push(randomMessage);
    
    // Broadcast the random message to all clients
    broadcast({ type: 'message', data: randomMessage });
  }, 5000);
}

// Start sending random messages when the WebSocket server is ready
wss.on('listening', () => {
  console.log('WebSocket server is listening on port 5500');
  startSendingRandomMessages();
});

// Error handling
wss.on('error', (err) => {
  console.error(`WebSocket server error: ${err}`);
});
