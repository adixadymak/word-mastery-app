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

const ROSTER = [
  { name: "Emmanuel Ifeanyichukwu", pin: "1024" },
  { name: "Oluoti Mahmud", pin: "3391" },
  { name: "Chantel Christian", pin: "5820" },
  { name: "Charissa Christian", pin: "7146" },
  { name: "Chimdalu Emmanuel", pin: "9053" },
];

const WORDS = [
  { id: 1, material: "part1", page: 1, word: "cat", ipa: "/kæt/" },
  { id: 2, material: "part1", page: 1, word: "dog", ipa: "/dɒɡ/" },
  { id: 3, material: "part1", page: 2, word: "fish", ipa: "/fɪʃ/" },
  { id: 4, material: "part1", page: 2, word: "bird", ipa: "/bɜːd/" },

  { id: 5, material: "part2", page: 1, word: "light", ipa: "/laɪt/" },
  { id: 6, material: "part2", page: 1, word: "night", ipa: "/naɪt/" },
  { id: 7, material: "part2", page: 2, word: "thought", ipa: "/θɔːt/" },

  {
    id: 8,
    material: "wordbank",
    page: 1,
    topic: "mathematics",
    word: "add",
    ipa: "/æd/",
  },
  {
    id: 9,
    material: "wordbank",
    page: 1,
    topic: "mathematics",
    word: "number",
    ipa: "/ˈnʌmbə/",
  },
  {
    id: 10,
    material: "wordbank",
    page: 2,
    topic: "science",
    word: "plant",
    ipa: "/plɑːnt/",
  },
  {
    id: 11,
    material: "wordbank",
    page: 2,
    topic: "science",
    word: "energy",
    ipa: "/ˈɛnədʒi/",
  },
  {
    id: 12,
    material: "wordbank",
    page: 3,
    topic: "phe",
    word: "jump",
    ipa: "/dʒʌmp/",
  },
  {
    id: 13,
    material: "wordbank",
    page: 3,
    topic: "phe",
    word: "run",
    ipa: "/rʌn/",
  },
];

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

function getCustomWords() {
  return JSON.parse(localStorage.getItem("customWords") || "[]");
}

function saveCustomWords(words) {
  localStorage.setItem("customWords", JSON.stringify(words));
}

function getAllWords() {
  return [...WORDS, ...getCustomWords()];
}

function addCustomWord(wordObj) {
  const custom = getCustomWords();
  wordObj.id = 1000 + custom.length;
  custom.push(wordObj);
  saveCustomWords(custom);
}
