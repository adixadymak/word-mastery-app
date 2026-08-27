function getUnlockStatus(name) {
  const raw = localStorage.getItem(`wordmastery_${name}`);
  const data = raw ? JSON.parse(raw) : {};
  return data.unlocked || { part2: false, wordbank: false };
}

function setUnlockStatus(name, material, value) {
  const key = `wordmastery_${name}`;
  const raw = localStorage.getItem(key);
  const data = raw ? JSON.parse(raw) : { score: 0, streak: 0, words: {} };
  if (!data.unlocked) data.unlocked = { part2: false, wordbank: false };
  data.unlocked[material] = value;
  localStorage.setItem(key, JSON.stringify(data));
}

function getCustomWords() {
  return JSON.parse(localStorage.getItem("customWords") || "[]");
}

function saveCustomWords(words) {
  localStorage.setItem("customWords", JSON.stringify(words));
}

const MATERIAL_LABELS = {
  part1: {
    title: "Part 1",
    subtitle: "Foundation decoding words",
    cls: "part1",
  },
  part2: {
    title: "Part 2",
    subtitle: "Advanced decoding words",
    cls: "part2",
  },
  wordbank: {
    title: "Word Bank",
    subtitle: "Common words by subject",
    cls: "wordbank",
  },
};

function getAllWords() {
  return [...WORDS, ...getCustomWords()];
}

function addCustomWord(wordObj) {
  const custom = getCustomWords();
  wordObj.id = 1000 + custom.length;
  custom.push(wordObj);
  saveCustomWords(custom);
}
