// Types
import type { I_Todo } from '@/types/todo';

const BASE_URL = 'https://637479f108104a9c5f80e2df.mockapi.io/api/v1';

// Get all todo
export async function reqGetTodo() {
	const response = await fetch(`${BASE_URL}/todo`);
	return response.json();
}

// Create todo
export async function reqAddTodo(todoTitle: string) {
	const response = await fetch(`${BASE_URL}/todo`, {
		method: 'POST',
		body: JSON.stringify({
			title: todoTitle,
			description: '',
			status: 'Not Started',
			createTime: new Date().toDateString(),
		}),
	});
	return response.json();
}

// Edit todo
export async function reqEditTodo(data: I_Todo) {
	const response = await fetch(`${BASE_URL}/todo`, {
		method: 'PUT',
		body: JSON.stringify(data),
	});
	return response.json();
}

// Delete todo
export async function reqDelTodo(todoId: number) {
	const response = await fetch(`${BASE_URL}/todo/${todoId}`, {
		method: 'DELETE',
	});
	return response.json();
}
