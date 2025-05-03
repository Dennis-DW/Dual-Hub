import React from 'react';
import LoginForm from '@/components/forms/Login';
import RegisterForm from '@/components/forms/Register';
import Reset from '@/components/forms/Reset';
import { MODE } from '../../lib/constants';

const FormRenderer = ({
  mode,
  setMode,
  setEmail,
  setPassword,
  setUsername,
  handleSubmit,
  isLoading,
  email,
}: any) => {
  switch (mode) {
    case MODE.REGISTER:
      return (
        <RegisterForm
          setMode={setMode}
          MODE={MODE}
          setEmail={setEmail}
          setPassword={setPassword}
          setUsername={setUsername}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      );
    case MODE.EMAIL_VERIFICATION:
    case MODE.RESET_PASSWORD:
      return (
        <Reset
          setMode={setMode}
          MODE={MODE}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
          setEmail={setEmail}
          email={email}
        />
      );
    case MODE.LOGIN:
    default:
      return (
        <LoginForm
          setMode={setMode}
          MODE={MODE}
          setEmail={setEmail}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      );
  }
};

export default FormRenderer;