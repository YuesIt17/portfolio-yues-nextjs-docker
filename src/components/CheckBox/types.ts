export type TCheckBox = TCheckboxField & {
  label: string;
  color?: string;
  onChange?: (field: TCheckboxField) => void;
};

export type TCheckboxField = {
  name: string;
  value: boolean;
};
