

import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { TodoInfo } from '../TodoInfo/TodoInfo';

type Props = {
  todos: Todo[];
  users: User[];
};


export const TodoList: React.FC<Props> = ({
  todos,
  users,
}) => {
  return (
    <section className="TodoList">
      {todos.map(todo => {
        const user = todo.user || users.find(
          item => item.id === todo.userId,
        );

        if (!user) {
          return null;
        }

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
