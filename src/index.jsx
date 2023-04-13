import {ThemeProvider} from 'styled-components';
import {lighten, desaturate} from 'polished';
import {GlobalStyle, Original, Polished, Target, Wrapper} from './index.styles';

const theme = {
	source: '#00977d',
	target: '#6ec2b7',
	calculate: (color) =>
		// Adjust this function to your needs
		lighten(0.3, desaturate(0.6, color)),
};

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Wrapper>
			<Original>Original</Original>
			<Polished>Polished</Polished>
			<Target>Target</Target>
		</Wrapper>
	</ThemeProvider>
);

export default App;
