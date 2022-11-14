import styled from '@emotion/styled';

export const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background: #667db6;
	background: linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);

	overflow: auto hidden;
	position: relative;

	.toolbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 8px;

		.input {
			flex: 1 1 160px;
		}
	}
`;
