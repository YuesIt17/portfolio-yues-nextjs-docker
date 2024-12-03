import '@emotion/react';
import {Property} from 'csstype';

type TColorStyle = 'light' | 'main' | 'dark';

declare module '@emotion/react' {
  export interface Theme {
    name: string;
    paper: {
      backgroundColor: Property.Color;
    };
    colors: {
      primary: Record<TColorStyle, Property.Color>;
      secondary: Record<TColorStyle, Property.Color>;
      font: Partial<Record<TColorStyle, Property.Color>>;
    };
  }
}
