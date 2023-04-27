import 'styled-components';

interface IKeysString {
  [key: string]: string;
}

interface IKeysNumber {
  [key: string]: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IKeysString;
    spacings: IKeysNumber;
    typography: IKeysNumber;
  }
}
