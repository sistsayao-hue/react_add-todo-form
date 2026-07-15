import { Todo } from '../../types/Todo.ts';
import { User } from '../../types/User.ts';
import { TodoInfo } from '../TodoInfo';

type Props = {
  todos: Todo[];
  users?: User[];
};

export const TodoList: React.FC<Props> = ({ todos, users = [] }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = todo.user || users.find(item => item.id === todo.userId);

        return (
          <TodoInfo
            key={todo.id}
            todo={{
              ...todo,
              user,
            }}
          />
        );
      })}
    </section>
  );
};
