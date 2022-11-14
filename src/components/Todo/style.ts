// Styled
import styled from '@emotion/styled';

// UI lib
import { ListItem } from '@mui/material';

export const TodoStyled = styled(ListItem)`
	border-radius: 4px;
	border: 1px solid #000;
	margin: 8px 0;

	&:first-of-type {
		margin-top: 0;
	}
	&:last-of-type {
		margin-bottom: 0;
	}
`;

export const ModalContainer = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	width: 500px;
	max-width: 90%;
	padding: 24px;
	background-color: #fff;
`;
