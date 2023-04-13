import styled, {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	html, body, #root {
		height: 100%;
	}

	body {
		margin: 0;
		font-family: Superclarendon, 'Bookman Old Style', 'URW Bookman', 'URW Bookman L', 'Georgia Pro', Georgia, serif;
		line-height: 1.5;
	}
`;

export const Wrapper = styled.main`
	display: grid;
	height: 100%;
`;

export const Block = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 0.25em;
	transition: letter-spacing 0.2s ease;

	&:hover {
		letter-spacing: 0.5rem;
	}
`;

export const Original = styled(Block)`
	background-color: ${(p) => p.theme.source};
`;

export const Target = styled(Block)`
	background-color: ${(p) => p.theme.target};
`;

export const Polished = styled(Block)`
	background-color: ${(p) => p.theme.calculate(p.theme.source)};
`;
