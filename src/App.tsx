// Types
import type { AlertColor } from '@mui/material';
import type { I_Todo } from './types/todo';

// React
import { useState, useRef, useCallback } from 'react';

// Hooks
import { useSetState } from 'ahooks';
// API
import {
	reqGetTodo,
	reqAddTodo,
	reqEditTodo,
	reqDelTodo,
} from './service/todo.api';

// UI lib
import {
	CssBaseline,
	Typography,
	IconButton,
	OutlinedInput,
	Snackbar,
	Alert,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
// Components
import { Wrapper, TodoList } from '@/components';
// Styled components
import { AppContainer } from './App.style';

// const initTodoList: I_Todo[] = Array.from(Array(3).keys()).map(i => ({
// 	id: i + 1,
// 	title: 'Lorem ipsum dolor',
// 	description:
// 		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, natus ipsam eius perspiciatis eum commodi alias impedit ea at numquam. Repellat non quia voluptatum porro dicta iusto eius explicabo earum?',
// 	status: 'Not Started',
// 	createTime: '2022-11-14 16:41:00',
// }));

export default function App() {
	interface I_State {
		todoList: I_Todo[];
		todoTitle: string;
		snackbarIsOpen: boolean;
		snackbarSeverity: AlertColor;
		snackbarText: string;
	}
	const [state, setState] = useSetState<I_State>({
		todoList: [],
		todoTitle: '',
		snackbarIsOpen: false,
		snackbarSeverity: 'error',
		snackbarText: '',
	});

	const handleAdd = () => {
		if (state.todoTitle === '') {
			setState({
				snackbarIsOpen: true,
				snackbarText: 'Title is required',
			});
			return;
		}

		let newTodo = {
			title: state.todoTitle,
		};

		setState(prevState => ({
			...prevState,
			todoList: [...prevState.todoList, newTodo],
		}));
	};

	return (
		<>
			<CssBaseline />

			<AppContainer>
				<Snackbar
					open={state.snackbarIsOpen}
					autoHideDuration={2000}
					onClose={() => setState({ snackbarIsOpen: false })}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}>
					<Alert
						onClose={() => setState({ snackbarIsOpen: false })}
						severity={state.snackbarSeverity}>
						{state.snackbarText}
					</Alert>
				</Snackbar>

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
							value={state.todoTitle}
							onChange={({ target: { value } }) =>
								setState({ todoTitle: value })
							}
						/>

						<IconButton color="primary" onClick={handleAdd}>
							<AddIcon />
						</IconButton>
					</div>

					<TodoList todoList={state.todoList} />
				</Wrapper>
			</AppContainer>
		</>
	);
}
