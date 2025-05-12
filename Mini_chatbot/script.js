// Chatbot knowledge base
const botKnowledge = {
  greetings: ["Hello!", "Hi there!", "How are you?"],
  farewells: ["Goodbye!", "See you later!", "Thanks for chatting!"],
  questions: {
    "what is your name?":
      "I'm just a simple chatbot. I don't have a specific name.",
    "what can you do?":
      "I can have simple conversations. You can ask me various questions.",
    "what's the date today?": new Date().toLocaleDateString("en-US"),
    "what time is it?": new Date().toLocaleTimeString("en-US"),
    "how are you?":
      "I'm just a program, so I don't have feelings, but thanks for asking!",
  },
  defaultResponses: [
    "I didn't understand that. Could you rephrase?",
    "I don't know about that topic.",
    "I'm just a simple chatbot with limited knowledge.",
  ],
};

// DOM elements
const chatContainer = document.getElementById("chat-container");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Initial bot message
addBotMessage("Hello! I'm a simple chatbot. How can I help you today?");

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// Send message function
function sendMessage() {
  const message = userInput.value.trim();
  if (message !== "") {
    addUserMessage(message);
    userInput.value = "";
    setTimeout(() => {
      respondToMessage(message);
    }, 500);
  }
}

// Add user message to chat
function addUserMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("user-message");
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Add bot message to chat
function addBotMessage(message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("bot-message");
  messageElement.textContent = message;
  chatContainer.appendChild(messageElement);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Generate response to user message
function respondToMessage(message) {
  message = message.toLowerCase();

  // Handle greetings
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    const randomGreeting =
      botKnowledge.greetings[
        Math.floor(Math.random() * botKnowledge.greetings.length)
      ];
    addBotMessage(randomGreeting);
    return;
  }

  // Handle farewells
  if (
    message.includes("goodbye") ||
    message.includes("bye") ||
    message.includes("see you")
  ) {
    const randomFarewell =
      botKnowledge.farewells[
        Math.floor(Math.random() * botKnowledge.farewells.length)
      ];
    addBotMessage(randomFarewell);
    return;
  }

  // Handle specific questions
  for (const [question, answer] of Object.entries(botKnowledge.questions)) {
    if (message.includes(question.toLowerCase())) {
      addBotMessage(answer);
      return;
    }
  }

  // Default response
  const randomDefault =
    botKnowledge.defaultResponses[
      Math.floor(Math.random() * botKnowledge.defaultResponses.length)
    ];
  addBotMessage(randomDefault);
}
