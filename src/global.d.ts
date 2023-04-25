// eslint-disable-next-line import/no-unassigned-import
import 'styled-components';

declare module 'styled-components' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	export interface DefaultTheme {
		source: string;
		target: string;
		calculate: (color: string) => string;
	}
}
