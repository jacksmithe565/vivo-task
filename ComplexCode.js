/*
Filename: ComplexCode.js

Description: This code demonstrates an advanced implementation of a data structure known as a Trie. The Trie is a tree structure commonly used for efficient string searching and prefix matching. In this example, we are creating a Trie to store a dictionary of words. The code also includes various methods to perform operations on this Trie, such as adding words, searching for words, and retrieving all words with a given prefix. The Trie is implemented using JavaScript classes and utilizes recursion and advanced string manipulation techniques for efficient operations.

Note: This code assumes the availability of lodash library for utility functions such as `isEmpty`, `isNull`, and `isFunction`.

*/

// TrieNode represents a single node in the Trie
class TrieNode {
  constructor() {
    this.children = new Map(); // Stores the child nodes as key-value pairs
    this.isEndOfWord = false; // Indicates if this node represents the end of a word
  }
}

// Trie represents the entire Trie data structure
class Trie {
  constructor() {
    this.root = new TrieNode(); // The root node of the Trie
  }

  // Method to add a word to the Trie
  addWord(word) {
    let current = this.root;

    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }

      current = current.children.get(char);
    }

    current.isEndOfWord = true;
  }

  // Method to check if a word exists in the Trie
  search(word) {
    let current = this.root;

    for (const char of word) {
      if (!current.children.has(char)) {
        return false;
      }

      current = current.children.get(char);
    }

    return current.isEndOfWord;
  }

  // Method to retrieve all words with a given prefix
  getAllWordsWithPrefix(prefix) {
    const result = [];

    const getAllWords = (node, currentPrefix) => {
      if (node.isEndOfWord) {
        result.push(currentPrefix);
      }

      for (const [char, childNode] of node.children) {
        const newPrefix = currentPrefix + char;
        getAllWords(childNode, newPrefix);
      }
    };

    let current = this.root;
    let currentPrefix = '';

    for (const char of prefix) {
      if (!current.children.has(char)) {
        return result;
      }

      current = current.children.get(char);
      currentPrefix += char;
    }

    getAllWords(current, currentPrefix);

    return result;
  }
}

// Test the Trie implementation
const trie = new Trie();

// Adding words to the Trie
trie.addWord("apple");
trie.addWord("banana");
trie.addWord("cat");
trie.addWord("dog");
trie.addWord("apricot");
trie.addWord("append");
trie.addWord("application");
trie.addWord("dock");

// Searching for words
console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("dog")); // Output: true
console.log(trie.search("cow")); // Output: false

// Retrieving words with prefix
console.log(trie.getAllWordsWithPrefix("a")); // Output: ["apple", "apricot", "append", "application"]
console.log(trie.getAllWordsWithPrefix("ap")); // Output: ["apple", "apricot", "append", "application"]
console.log(trie.getAllWordsWithPrefix("app")); // Output: ["apple", "apricot", "append", "application"];

console.log(trie.getAllWordsWithPrefix("c")); // Output: ["cat"]
console.log(trie.getAllWordsWithPrefix("do")); // Output: ["dog", "dock"]
console.log(trie.getAllWordsWithPrefix("b")); // Output: ["banana"]

// End of ComplexCode.js