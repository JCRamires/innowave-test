import type { Todo } from "../app.types";
import { convertStringToTags } from "../utils";

type AddTodoFormProps = {
  onAdd: (todo: Todo) => void;
};

export function AddTodoForm({ onAdd }: AddTodoFormProps) {
  return <form>{/* implement me */}</form>;
}
