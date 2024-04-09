import type { Todo } from "../app.types";

type TodoProps = Todo & { onToggle: (todo: Todo) => void };

export function TodoItem({ onToggle, ...todo }: TodoProps) {
  const { title, tags = [], completed } = todo;
  return <li className={`todo`}>{/* implement me */}</li>;
}
