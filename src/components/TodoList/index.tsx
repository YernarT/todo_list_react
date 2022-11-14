// Types
import type { I_Todo } from '@/types/todo';

// React
import { memo } from 'react';

// Components
import { Todo } from '@/components';

// Styled Components
import { TodoListStyled } from './style';

interface TodoListProps {
	todoList: I_Todo[];
	handleDeleteTodo: Function;
}

export default memo(function TodoList({
	todoList,
	handleDeleteTodo,
}: TodoListProps) {
	return (
		<TodoListStyled>
			{todoList.map(todo => (
				<Todo key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />
			))}
		</TodoListStyled>
	);
});
