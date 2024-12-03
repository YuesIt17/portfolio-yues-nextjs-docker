import {useCallback, useEffect, useState} from 'react';
import {TCheckBox} from './types';

export function useCheckBox({
  name,
  value,
  onChange,
}: Pick<TCheckBox, 'name' | 'value' | 'onChange'>) {
  const [field, setFieldValue] = useState({name: '', value: false});

  useEffect(() => {
    setFieldValue({name, value});
  }, [name, value]);

  const onClickHandler = useCallback(() => {
    const updatedField = {name, value: !field.value};
    setFieldValue(updatedField);
    onChange && onChange(updatedField);
  }, [name, field.value, onChange]);

  return {field, onClickHandler};
}
