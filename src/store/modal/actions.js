import store from "~/store";
import { _removeModal, _setModal } from ".";

export const setModal = (name, data = false) => store.dispatch(_setModal({name, data}))
export const remmoveModal = () => store.dispatch(_removeModal())