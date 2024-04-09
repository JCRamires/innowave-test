import { FormEvent, useState } from "react";
import type { Todo } from "../app.types";
import { convertStringToTags, createId } from "../utils";

type AddTodoFormProps = {
  onAdd: (todo: Todo) => void;
};

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");

  const resetForm = () => {
    setTitle("");
    setTags("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTodo: Todo = {
      id: createId(),
      title,
      tags: convertStringToTags(tags),
      completed: false,
    };

    onAdd(newTodo);
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New task</label>
      <input
        id="task"
        name="task"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label htmlFor="tags">Tags (comma separated)</label>
      <input
        id="tags"
        name="tags"
        placeholder="Task tags (separate with comma)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <input type="submit" />
    </form>
  );
}
