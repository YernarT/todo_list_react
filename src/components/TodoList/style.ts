// Styled
import styled from '@emotion/styled';

// UI lib
import { List } from '@mui/material';

export const TodoListStyled = styled(List)`
	margin-top: 8px;
	padding-right: 8px;
	max-height: 240px;

	overflow: hidden auto;
	scroll-behavior: smooth;

	&::-webkit-scrollbar-track {
		background-color: rgba(0, 0, 0, 0.15);
	}

	&::-webkit-scrollbar {
		width: 2px;
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #1976d2;
	}

	.item {
		border-radius: 4px;
		border: 1px solid #000;
		margin: 8px 0;

		&:first-child {
			margin-top: 0;
		}
		&:last-child {
			margin-bottom: 0;
		}
	}
`;
