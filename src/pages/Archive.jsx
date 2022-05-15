import React from "react";
import { Sidebar } from "../components";
import { useNotes, useTheme } from "../context";

export const Archive = () => {
  const { archiveList, searchQuery } = useNotes();
  const { theme } = useTheme();

  console.log(archiveList);
  return (
    <div className="container">
      <Sidebar />
      <div className="flex justify-start items-start flex-wrap">
        {archiveList &&
          archiveList
            .filter((note) => {
              return !searchQuery
                ? note
                : note.title.toLowerCase().includes(searchQuery.toLowerCase());
            })
            .map(({ id, title, content, label, backgroundColor }) => (
              <div
                style={{ backgroundColor: backgroundColor[theme] }}
                key={id}
                className="note rounded-lg relative w-full px-4 py-3 border-base cursor-pointer"
              >
                <h3>{title}</h3>
                <p>{content}</p>
                <div
                  key={id}
                  className="flex flex-wrap justify-start items-start cursor-pointer"
                >
                  {label &&
                    label.map(({ id, labelName }) => (
                      <span className="archive-labels-list" key={id}>
                        {labelName}
                      </span>
                    ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};
