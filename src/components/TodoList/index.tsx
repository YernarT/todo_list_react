// Types
import type { I_Todo } from '@/types/todo';

// React
import { memo } from 'react';
// UI lib
import {
	ListItem,
	ListItemButton,
	ListItemText,
	IconButton,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

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
				<ListItem
					key={todo.id}
					secondaryAction={
						<IconButton
							edge="end"
							aria-label="delete"
							onClick={() => handleDeleteTodo(todo.id)}>
							<DeleteIcon color="error" />
						</IconButton>
					}
					disablePadding
					className="item">
					<ListItemButton>
						<ListItemText primary={todo.title} />
					</ListItemButton>
				</ListItem>
			))}
		</TodoListStyled>
	);
});
