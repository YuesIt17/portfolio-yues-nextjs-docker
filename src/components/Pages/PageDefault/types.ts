import {SerializedStyles} from '@emotion/react';

export type TPageDefault = {
  title: string;
  buttonText?: string;
  buttonHandler?: () => void;
  style?: SerializedStyles;
};
