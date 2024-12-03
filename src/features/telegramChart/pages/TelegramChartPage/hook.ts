import {TCheckboxField} from '@/components/CheckBox/types';
import {useCallback, useState} from 'react';

export function useTelegramChartPage() {
  const [isVisibleChart, setVisibleChart] = useState(true);
  const [toggleClassComponent, setToggleClassComponent] = useState(false);
  const onChangeVisibleHadler = useCallback(
    (field: TCheckboxField) => setVisibleChart(field.value),
    [setVisibleChart]
  );

  const onToggleClassComponent = useCallback(
    (field: TCheckboxField) => setToggleClassComponent(field.value),
    [setToggleClassComponent]
  );

  return {
    isVisibleChart,
    toggleClassComponent,
    onChangeVisibleHadler,
    onToggleClassComponent,
  };
}
