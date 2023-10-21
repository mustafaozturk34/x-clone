import store from "~/store";
import { _setBackgroundColor, _setBowShadow, _setColor, _setFontSize } from ".";

export const setBackgroundColor = (data) => store.dispatch(_setBackgroundColor(data));
export const setColor = (data) => store.dispatch(_setColor(data));
export const setFontSize = (data) => store.dispatch(_setFontSize(data));
export const setBoxShadow = (data) => store.dispatch(_setBowShadow(data));
