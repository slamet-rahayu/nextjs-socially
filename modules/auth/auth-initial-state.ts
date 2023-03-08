export const loginInitialState = {
  isLoading: false,
  isError: false,
  loginRes: {},
  loginFailed: {}
};

export const registerInitialState = {
  isLoading: false,
  isError: false,
  registerRes: {},
  registerFailed: {}
};

export const authInitialState = {
  userData: {
    jwt: '',
    user: {
      id: null,
      username: '',
      email: '',
      provider: 'local',
      confirmed: null,
      blocked: null,
      createdAt: '',
      updatedAt: ''
    }
  }
};
