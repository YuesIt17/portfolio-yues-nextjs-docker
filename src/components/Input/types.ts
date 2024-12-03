import {ChangeEvent} from 'react';

export type TInput = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};
