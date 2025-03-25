let currentGame = "Spyro's Adventure";
let collectibles = games[currentGame];
let collectiblesQueue = [...collectibles];
let tempCollected = [];
let skippedQueue = [];

const gameSelector = document.getElementById("gameSelector");
const img = document.getElementById("collectibleImage");
const name = document.getElementById("collectibleName");
const submitBtn = document.getElementById("submitInventoryBtn");
const reviewBtn = document.getElementById("reviewSkippedBtn");
const grid = document.getElementById("cardGrid");

function populateGameSelector() {
  for (const game in games) {
    const opt = document.createElement("option");
    opt.value = game;
    opt.textContent = game;
    gameSelector.appendChild(opt);
  }
}

function showCurrentCollectible() {
  const current = collectiblesQueue[0];
  if (current && current.image) {
    img.src = current.image;
    name.textContent = current.name;
    reviewBtn.style.display = "none";
    submitBtn.style.display = "none";
    img.style.display = "block";
  } else if (skippedQueue.length > 0) {
    reviewBtn.style.display = "inline-block";
    img.src = "";
    name.textContent = "";
    img.style.display = "none";
  } else {
    img.src = "";
    name.textContent = "All Skylanders Reviewed! 🎉";
    submitBtn.style.display = "block";
    img.style.display = "none";
  }
}

function handleDecision(type) {
  const current = collectiblesQueue.shift();
  if (!current) return;

  if (type === "have") {
    img.classList.add("animate-right");
    const handler = () => {
      img.classList.remove("animate-right");
      img.removeEventListener("animationend", handler);
      current.quantity = 1;
      tempCollected.push(current);
      showCurrentCollectible();
    };
    img.addEventListener("animationend", handler);
  } else {
    img.classList.add("animate-left");
    const handler = () => {
      img.classList.remove("animate-left");
      img.removeEventListener("animationend", handler);
      skippedQueue.push(current);
      showCurrentCollectible();
    };
    img.addEventListener("animationend", handler);
  }
}

document.getElementById("haveItBtn").onclick = () => handleDecision("have");
document.getElementById("dontHaveItBtn").onclick = () => handleDecision("skip");

submitBtn.onclick = () => {
  const user = localStorage.getItem("sky_user") || "guest";
  const key = `sky_progress_${user}_${currentGame}`;
  let data = JSON.parse(localStorage.getItem(key)) || { collected: [] };
  data.collected = [...data.collected, ...tempCollected];
  localStorage.setItem(key, JSON.stringify(data));
  tempCollected = [];
  alert("Inventory updated!");
  renderCollectedList();
  submitBtn.style.display = "none";
};

reviewBtn.onclick = () => {
  if (skippedQueue.length === 0) return;
  collectiblesQueue = [...skippedQueue];
  skippedQueue = [];
  showCurrentCollectible();
};

gameSelector.onchange = () => {
  currentGame = gameSelector.value;
  const user = localStorage.getItem("sky_user") || "guest";
  const key = `sky_progress_${user}_${currentGame}`;
  const saved = JSON.parse(localStorage.getItem(key));
  collectibles = games[currentGame];
  collectiblesQueue = [...collectibles];
  tempCollected = [];
  skippedQueue = [];
  if (saved) {
    renderCollectedList(saved.collected);
  } else {
    renderCollectedList();
  }
  showCurrentCollectible();
};

function renderCollectedList(collected = []) {
  grid.innerHTML = "";
  collected.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}" />
      <div><strong>${item.name}</strong></div>
      <input type="number" min="1" value="${item.quantity}" class="qty-input" onchange="updateQuantity('${item.name}', this)" />
    `;
    grid.appendChild(card);
  });
}

function updateQuantity(name, input) {
  const value = parseInt(input.value);
  if (isNaN(value) || value < 1) return;
  const user = localStorage.getItem("sky_user") || "guest";
  const key = `sky_progress_${user}_${currentGame}`;
  const data = JSON.parse(localStorage.getItem(key));
  const item = data.collected.find(i => i.name === name);
  if (item) item.quantity = value;
  localStorage.setItem(key, JSON.stringify(data));
}

function logout() {
  localStorage.removeItem("sky_user");
  location.reload();
}

function setupSwipe() {
  let startX = 0;
  let endX = 0;

  img.addEventListener("touchstart", e => startX = e.changedTouches[0].screenX);
  img.addEventListener("touchend", e => {
    endX = e.changedTouches[0].screenX;
    if (startX - endX > 50) {
      handleDecision("skip");
    } else if (endX - startX > 50) {
      handleDecision("have");
    }
  });

  let startY = 0;
  img.addEventListener("touchstart", e => startY = e.changedTouches[0].screenY);
  img.addEventListener("touchend", e => {
    const endY = e.changedTouches[0].screenY;
    if (startY - endY > 50 && collectiblesQueue.length === 0) {
      submitBtn.click();
    }
  });
}

window.onload = () => {
  populateGameSelector();
  gameSelector.value = currentGame;
  gameSelector.dispatchEvent(new Event("change"));
  setupSwipe();
  const user = localStorage.getItem("sky_user");
  document.getElementById("loginBtn").style.display = user && user !== "guest" ? "none" : "inline-block";
  document.getElementById("signupBtn").style.display = user && user !== "guest" ? "none" : "inline-block";
  document.getElementById("logoutBtn").style.display = user && user !== "guest" ? "inline-block" : "none";
};
