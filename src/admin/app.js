const config = {
  config: {
    translations: {
      en: {
        "Auth.form.welcome.title": "Welcome to Your Custom App!",
        "Auth.form.welcome.subtitle": "Log in to access your dashboard",
        "Auth.form.button.login": "Sign In",
        "Auth.link.forgot-password": "Forgot your password?",
        // Add more translation keys as needed
      },
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
