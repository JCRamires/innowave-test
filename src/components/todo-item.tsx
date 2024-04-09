import cx from "classnames";

import type { Todo } from "../app.types";

type TodoProps = Todo & { onToggle: (id: number) => void };

export function TodoItem({ onToggle, ...todo }: TodoProps) {
  const { id, title, tags = [], completed } = todo;

  return (
    <li className={cx("todo", { completed })}>
      <div>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />
        <span>{title}</span>
      </div>
      {tags.length > 0 && (
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
    </li>
  );
}
