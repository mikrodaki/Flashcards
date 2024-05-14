import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

export default App;

const questions = [
  {
    id: 1,
    question:
      "How do you list all files and directories in the current directory?",
    answer: "ls",
  },
  {
    id: 2,
    question: "How do you change directory to a specific directory?",
    answer: "cd <directory_name>",
  },
  {
    id: 3,
    question: "How do you create a new directory?",
    answer: "mkdir <directory_name>",
  },
  {
    id: 4,
    question: "How do you create a new file?",
    answer: "touch <file_name>",
  },
  {
    id: 5,
    question: "How do you remove a file?",
    answer: "rm <file_name>",
  },
  {
    id: 6,
    question: "How do you remove a directory?",
    answer: "rm -r <directory_name>",
  },
  {
    id: 7,
    question: "How do you copy a file from one location to another?",
    answer: "cp <source_file> <destination_directory>",
  },
  {
    id: 8,
    question: "How do you move a file from one location to another?",
    answer: "mv <source_file> <destination_directory>",
  },
  {
    id: 9,
    question: "How do you display the contents of a file?",
    answer: "cat <file_name>",
  },
  {
    id: 10,
    question: "How do you search for a pattern in a file?",
    answer: "grep <pattern> <file_name>",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(0);

  const handleDivClick = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div className="flashcards">
      {questions.map((q) => (
        <div
          key={q.id}
          className={q.id === selectedId ? "selected" : ""}
          onClick={() => handleDivClick(q.id)}
        >
          <p>{q.id === selectedId ? q.answer : q.question}</p>
        </div>
      ))}
    </div>
  );
}
