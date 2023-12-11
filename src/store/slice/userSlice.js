import { createSlice } from '@reduxjs/toolkit';

const emptyState = {
  name: '',
  lastName: '',
  email: '',
  profile: '',
  unit: '',
  password: '',
  loggin: false,
};

const inicialStateLocalStorage = JSON.parse(localStorage.getItem('userData'));

const userSlice = createSlice({
  name: 'user',
  initialState: inicialStateLocalStorage || emptyState,
  reducers: {
    updateUserData(state, action) {
      const newUserData = action.payload;
      const stateLocalStorage = structuredClone({ ...state });

      state.name = newUserData.name;
      stateLocalStorage.name = newUserData.name;
      state.lastName = newUserData.lastName;
      stateLocalStorage.lastName = newUserData.lastName;
      state.email = newUserData.email;
      stateLocalStorage.email = newUserData.email;
      state.profile = newUserData.profile;
      stateLocalStorage.profile = newUserData.profile;
      state.unit = newUserData.unit;
      stateLocalStorage.unit = newUserData.unit;
      state.password = newUserData.password;
      stateLocalStorage.password = newUserData.password;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },
    logIn(state) {
      const stateLocalStorage = structuredClone({ ...state });
      state.loggin = true;
      stateLocalStorage.loggin = true;

      localStorage.removeItem('userData');
      localStorage.setItem('userData', JSON.stringify(stateLocalStorage));
    },
    reset() {
      localStorage.removeItem('userData');
      return emptyState;
    },
  },
});

export const { updateUserData, logIn, reset } = userSlice.actions;

export default userSlice.reducer;
