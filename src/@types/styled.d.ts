import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;

    colors: {
      black: string;
      background: string;
      white: string;
      placeholder: string;
      gray: string;
      focusInput: string;
      primary: string;
      danger: string;
      success: string;
    };

    fonts: {
      default: {
        size: number;
        color: string;
        family: string;
      };
    };
  }
}
