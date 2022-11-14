// Types
import type { I_Todo } from './types/todo';

// React
import { useState } from 'react';
// UI lib
import {
	CssBaseline,
	Typography,
	IconButton,
	OutlinedInput,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
// Components
import { Wrapper, TodoList } from '@/components';
// Styled components
import { AppContainer } from './App.style';

const initTodoList: I_Todo[] = Array.from(Array(4).keys()).map(i => ({
	id: i + 1,
	title: 'Lorem ipsum dolor',
	description:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, natus ipsam eius perspiciatis eum commodi alias impedit ea at numquam. Repellat non quia voluptatum porro dicta iusto eius explicabo earum?',
	status: 'Not Started',
	createTime: '2022-11-14 16:41:00',
}));

export default function App() {
	const [todoList, setTodoList] = useState<I_Todo[]>(initTodoList);

	return (
		<>
			<CssBaseline />

			<AppContainer>
				<Wrapper>
					{/* Header */}
					<Typography variant="h4" noWrap fontWeight="bolder" gutterBottom>
						Todo App
					</Typography>

					{/* Create Todo */}
					<div className="toolbar">
						<OutlinedInput
							placeholder="Add your new todo"
							size="small"
							className="input"
						/>

						<IconButton color="primary" aria-label="add">
							<AddIcon />
						</IconButton>
					</div>

					<TodoList todoList={todoList} />
				</Wrapper>
			</AppContainer>
		</>
	);
}
