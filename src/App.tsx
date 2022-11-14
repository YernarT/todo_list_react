// Types
import type { FieldValues } from 'react-hook-form';
import type { I_Todo } from './types/todo';

// React
import { useState, useRef, useCallback } from 'react';

// Utils
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
// API
import { reqGetTodo } from './service/todo.api';

// UI lib
import {
	CssBaseline,
	Typography,
	IconButton,
	OutlinedInput,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
// Components
import { Wrapper, TodoList } from '@/components';
// Styled components
import { AppContainer } from './App.style';

const initTodoList: I_Todo[] = Array.from(Array(3).keys()).map(i => ({
	id: i + 1,
	title: 'Lorem ipsum dolor',
	description:
		'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, natus ipsam eius perspiciatis eum commodi alias impedit ea at numquam. Repellat non quia voluptatum porro dicta iusto eius explicabo earum?',
	status: 'Not Started',
	createTime: '2022-11-14 16:41:00',
}));

export default function App() {
	const { enqueueSnackbar } = useSnackbar();
	const [todoList, setTodoList] = useState<I_Todo[]>(initTodoList);

	const { data, status } = useQuery('testSet', reqGetTodo, {
		retry: 0,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		refetchIntervalInBackground: false,
		retryOnMount: false,
	});
	console.log(data, status);

	const { register, handleSubmit } = useForm();
	const submitBtnRef = useRef<HTMLButtonElement>(null);

	const onSumbit = (data: FieldValues) => {
		console.log('form data: ', data);

		setTodoList(prevState => [
			...prevState,
			{
				id: prevState.length + 1,
				title: data.title,
				status: 'Not Started',
				createTime: Date.now().toString(),
			},
		]);
	};
	const onError = (errors: Object) => {
		enqueueSnackbar(
			(Object.values(errors)[0]?.message ||
				'Something went wrong...') as string,
			{
				autoHideDuration: 3000,
				anchorOrigin: { horizontal: 'center', vertical: 'top' },
			},
		);
	};

	const handleDeleteTodo = useCallback((todoId: number) => {
		setTodoList(prevState => prevState.filter(todo => todo.id !== todoId));
	}, []);

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
					<form className="toolbar" onSubmit={handleSubmit(onSumbit, onError)}>
						<OutlinedInput
							placeholder="Add your new todo"
							size="small"
							className="input"
							{...register('title', {
								required: {
									value: true,
									message: 'Title is required',
								},
								maxLength: {
									value: 32,
									message: 'Title maximum length is 32 characters',
								},
							})}
						/>

						<IconButton color="primary" ref={submitBtnRef} type="submit">
							<AddIcon />
						</IconButton>
					</form>

					<TodoList todoList={todoList} handleDeleteTodo={handleDeleteTodo} />
				</Wrapper>
			</AppContainer>
		</>
	);
}
