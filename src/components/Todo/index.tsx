// Types
import type { I_Todo } from '@/types/todo';

// React
import { memo, useState } from 'react';
// UI lib
import {
	ListItemButton,
	ListItemText,
	IconButton,
	Modal,
	Box,
	Typography,
	Chip,
} from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

// Styled Components
import { TodoStyled, ModalContainer } from './style';

interface TodoProps {
	todo: I_Todo;
	handleDeleteTodo: Function;
}

export default memo(function Todo({ todo, handleDeleteTodo }: TodoProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<TodoStyled
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
				<ListItemButton onClick={() => setIsOpen(true)}>
					<ListItemText primary={todo.title} />
				</ListItemButton>
			</TodoStyled>

			<Modal open={isOpen} onClose={() => setIsOpen(false)}>
				<ModalContainer>
					<Typography variant="h6" component="h2">
						{todo.title}
					</Typography>
					<Typography sx={{ mt: 2 }}>
						{todo.description || 'Not description'}
					</Typography>
					<Box
						sx={{
							mt: 2,
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Typography>Create time: {todo.createTime}</Typography>
						<Chip label={todo.status} variant="outlined" />
					</Box>
				</ModalContainer>
			</Modal>
		</>
	);
});
