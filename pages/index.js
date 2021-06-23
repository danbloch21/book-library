import { useState } from "react";
import { initialLibrary } from "../libs/library";

export default function Home() {
  const [library, setLibrary] = useState(initialLibrary);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [section, setSection] = useState("");

  return (
    <div className="flex flex-col p-8 min-h-screen py-2">
      <div className="text-3xl py-8">My Book Library</div>
      <div className="flex flex-col gap-2">
        <div>Add a Book to the Library</div>
        <div>
          <input
            value={title}
            placeholder="Please add a title..."
            className="border"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <input
            value={author}
            placeholder="Please add an author"
            className="border"
            type="text"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <input
            value={section}
            placeholder="Please add a section..."
            className="border"
            type="text"
            onChange={(e) => setSection(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 text-white text-sm w-24 rounded-lg"
          onClick={() =>
            setLibrary([
              ...library,
              {
                id: 1000,
                title,
                author,
                section,
                read: false,
              },
            ])
          }
        >
          Add Book
        </button>
      </div>
      {library.map((book, index) => {
        return (
          <div key={index} className="py-4">
            <div>Title: {book.title}</div>
            <div>Author: {book.author}</div>
            <div>Section: {book.section}</div>
            <div>
              Read:{" "}
              <input
                type="checkbox"
                checked={book.read}
                onChange={() =>
                  setLibrary(
                    library.map((item) => {
                      if (item.id === book.id) {
                        return {
                          ...item,
                          read: !item.read,
                        };
                      }
                      return item;
                    })
                  )
                }
              />
            </div>
            <button
              className="bg-red-500 text-white rounded-lg w-32"
              onClick={() =>
                setLibrary(library.filter((item) => item.id !== book.id))
              }
            >
              Remove Book
            </button>
          </div>
        );
      })}
    </div>
  );
}
