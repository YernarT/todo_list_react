// Types
import type { I_Todo } from '@/types/todo';

// React
import { memo } from 'react';

// Components
import { Todo } from '@/components';
import { OutboxOutlined } from '@mui/icons-material';

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
			{/* When list is empty */}
			{todoList.length === 0 && (
				<div className="empty">
					<OutboxOutlined />
					<span>List is empty</span>
				</div>
			)}
		</TodoListStyled>
	);
});
