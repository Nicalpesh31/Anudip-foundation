// Three sample sentences
const sentences = [
  "Node.js is a JavaScript runtime.",
  "It runs on the V8 engine.",
  "It's perfect for building fast and scalable applications."
];

// Print number of characters in each sentence
sentences.forEach((sentence, index) => {
  console.log(`Sentence ${index + 1} has ${sentence.length} characters.`);
});
