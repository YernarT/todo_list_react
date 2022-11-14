// Types
import type { FieldValues } from 'react-hook-form';
import type { I_Todo } from './types/todo';

// React
import { useState, useRef } from 'react';

// Utils
import { useForm } from 'react-hook-form';

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

const initTodoList: I_Todo[] = Array.from(Array(40).keys()).map(i => ({
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
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm();

	const addBtnRef = useRef<HTMLAnchorElement>(null);

	const handleAddTodo = (data: FieldValues) => {
		if (isValid) {
			console.log('data: ', data);
		} else {
			enqueueSnackbar(
				(Object.values(errors)[0]?.message ||
					'Something went wrong...') as string,
				{
					autoHideDuration: 3000,
					anchorOrigin: { horizontal: 'center', vertical: 'top' },
				},
			);
		}
	};

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
					<form className="toolbar" onSubmit={handleSubmit(handleAddTodo)}>
						<OutlinedInput
							placeholder="Add your new todo"
							size="small"
							className="input"
							// value={todoTitle}
							// onChange={({ target: { value } }) => setTodoTitle(value)}
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

						<IconButton
							color="primary"
							aria-label="add"
							ref={addBtnRef}
							href=""
							type="submit"
							onClick={handleAddTodo}>
							<AddIcon />
						</IconButton>
					</form>

					<TodoList todoList={todoList} />
				</Wrapper>
			</AppContainer>
		</>
	);
}
