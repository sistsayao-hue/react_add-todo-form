import { Todo } from '../../types/Todo';
import { TodoInfo } from '../TodoInfo/TodoInfo';
import { User } from '../../types/User';


type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({
  todo,
}) => {
  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${
        todo.completed
          ? 'TodoInfo--completed'
          : ''
      }`}
    >
      <h2 className="TodoInfo__title">
        {todo.title}
      </h2>

      <UserInfo user={todo.user} />
    </article>
  );
};
