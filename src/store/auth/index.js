import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: 1,
    fullName: "King Ragnar Lothbrok",
    username: "kingragnarlothbrok",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7LrDoQ4r9DIZ8vyfrvhKNj1OMHsCUMnujA&usqp=CAU",
  },
  accounts: [
    {
      id: 1,
      fullName: "King Ragnar Lothbrok",
      username: "kingragnarlothbrok",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF7LrDoQ4r9DIZ8vyfrvhKNj1OMHsCUMnujA&usqp=CAU",
    },
    {
      id: 2,
      fullName: "Earl Ragnar Lothbrok",
      username: "earlragnarlothbrok",
      avatar:
        "https://i.pinimg.com/236x/e9/a1/b2/e9a1b25a8423efc70bea7ca437d4e368.jpg",
    },
  ],
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(
        (account) => account.id !== action.payload
      );
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        this._setCurrentAccount(false);
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
