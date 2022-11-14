export async function reqGetTodo() {
	const response = await fetch('/todo');
	return response.json();
}
