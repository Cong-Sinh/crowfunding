import React from 'react';
import { Link } from 'react-router-dom';
import { Label } from '../components/label';
import LayoutAuthentication from '../layouts/LayoutAuthentication';
import { Button, ButtonGoogle } from '../components/button';
import FormGroup from '../components/common/FormGroup';
import { Input } from '../components/input';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UseToggleValue from '../hooks/useToggleValue';
import { IconEyeToggle } from '../components/icons';

const schema = yup.object({
  email: yup.string().required('').email('Invalid email address'),
  password: yup.string().required('').min(8, 'Password min 8'),
});

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  const { values: showPassword, handleToggleValue: handleTogglePassword } = UseToggleValue();

  const handleSignIn = (values) => {
    console.log(values);
  };
  return (
    <LayoutAuthentication heading="Welcome Back!">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Dont have an account?{' '}
        <Link to="/sign-up" className="font-medium underline text-primary">
          Sign up
        </Link>
      </p>
      <ButtonGoogle text="Sign in with google"></ButtonGoogle>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label htmlFor="email">Email *</Label>
          <Input
            control={control}
            type="email"
            name="email"
            placeholder="example@example.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={`${showPassword ? 'text' : 'password'}`}
            placeholder="Enter your password"
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <div className="text-right">
            <span className="inline-block text-sm font-medium text-primary">Forgot password</span>
          </div>
        </FormGroup>

        <Button className="w-full bg-primary" type="submit">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
