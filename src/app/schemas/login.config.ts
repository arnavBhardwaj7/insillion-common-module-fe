export const LOGIN_CONFIG = {
  formTitle: 'Login to your account',
  subTitle: 'Select your user type',
  schemas: {
    external: {
      type: 'form',
      label: 'External User',
      fields: [
        {
          type: 'input',
          label: 'Username',
          name: 'username',
          placeholder: 'Enter Username',
          validators: ['required'],
          imageUrl: '../../../../assets/images/username_logo.svg',
        },
        {
          type: 'input',
          label: 'Email',
          name: 'email',
          placeholder: 'Enter Email',
          validators: ['required', 'email'],
          imageUrl: '../../../../assets/images/email_logo.svg',
        },
        {
          type: 'password',
          label: 'Password',
          name: 'password',
          placeholder: 'Enter Password',
          validators: ['required', 'minLength:6'],
          imageUrl: '../../../../assets/images/password_logo.svg',
        },
      ],
      submitButton: {
        label: 'Submit',
      },
    },
    sso: {
      type: 'button',
      label: 'SSO Login',
      submitButton: {
        label: 'Login with AD',
      },
    },
  },
};
