import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../utils/global";

export const useAppDispatch:()=>AppDispatch = useDispatch;

export const useAppSelecotr:TypedUseSelectorHook<RootState> = useSelector;