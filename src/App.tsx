import { Button } from '@mui/material';

export default function App() {
	return (
		<div>
			<h1>App</h1>
			<hr />
			<Button color="secondary">Secondary</Button>
			<Button variant="contained" color="success">
				Success
			</Button>
			<Button variant="outlined" color="error">
				Error
			</Button>
		</div>
	);
}
