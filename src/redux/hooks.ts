import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from './initStore';

export const useTypeDispatch = () => useDispatch<AppDispatch>();
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
