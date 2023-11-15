import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../utils/global";

export const useReduxDispatch:()=>AppDispatch = useDispatch;

export const useReduxSelector:TypedUseSelectorHook<RootState> = useSelector;