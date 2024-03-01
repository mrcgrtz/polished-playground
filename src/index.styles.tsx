import {styled, type DefaultTheme} from 'styled-components';

type Properties = {
	theme: DefaultTheme;
};

export const Block = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 0.25em;
	transition: all 0.2s ease;

	&:hover {
		font-size: 2em;
		letter-spacing: 0.5rem;
		text-shadow: 0 0.1em 0 rgb(255 255 255 / 40%);
	}
`;

export const Original = styled(Block)`
	background-color: ${(p: Properties) => p.theme.source};
`;

export const Target = styled(Block)`
	background-color: ${(p: Properties) => p.theme.target};
`;

export const Polished = styled(Block)`
	background-color: ${(p: Properties) => p.theme.calculate(p.theme.source)};
`;
