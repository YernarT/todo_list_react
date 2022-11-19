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

	.empty {
		min-height: 140px;
		border-radius: 4px;
		border: 1px solid rgba(0, 0, 0, 0.23);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		svg {
			width: 40px;
			height: 40px;
			color: #999;
		}

		span {
			font-size: 14px;
			color: #999;
		}
	}
`;
