import {h} from 'preact';
import {ThemeProvider} from 'styled-components';
import {lighten, desaturate} from 'polished';
import {Original, Polished, Target} from './index.styles';

const theme = {
	source: '#00977d',
	target: '#6ec2b7',
	calculate: (color: string) =>
		// Adjust this function to your needs
		lighten(0.3, desaturate(0.6, color)),
};

const App = () => (
	<ThemeProvider theme={theme}>
		<Original>Original</Original>
		<Polished>Polished</Polished>
		<Target>Target</Target>
	</ThemeProvider>
);

export default App;
