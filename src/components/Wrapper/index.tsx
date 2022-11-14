// Types
import type { ReactNode } from 'react';

// Styled components
import { WrapperStyled } from './style';

interface WrapperProps {
	children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
	return <WrapperStyled>{children}</WrapperStyled>;
}
