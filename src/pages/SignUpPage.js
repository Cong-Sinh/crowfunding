import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { Input } from '../components/input';
import { Label } from '../components/label';
import LayoutAuthentication from '../layouts/LayoutAuthentication';
import FormGroup from '../components/common/FormGroup';
import { Button } from '../components/button';
import { CheckBox } from '../components/checkbox';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { IconEyeToggle } from '../components/icons';
import UseToggleValue from '../hooks/useToggleValue';

const schema = yup.object({
  name: yup.string().required('This field is required'),
  email: yup.string().required('this field is required').email('Invalid email address'),
  password: yup.string().required('This field is required').min(8, 'Password min 8'),
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
  const handleSignUp = (values) => {
    console.log(values);
  };

  const { values: accepTerm, handleToggleValue: handleToggleTerm } = UseToggleValue();

  const { values: showPassword, handleToggleValue: handleTogglePassword } = UseToggleValue();

  return (
    <LayoutAuthentication heading="SignUp">
      <p className="mb-6 text-xs font-normal text-center lg:text-sm text-text3 lg:mb-8">
        Already have an account?{' '}
        <Link to="/sign-in" className="font-medium underline text-primary">
          Sign in
        </Link>
      </p>
      <button className="flex items-center justify-center w-full py-4 mb-5 text-base font-semibold border dark:border-darkStroke dark:text-white gap-x-3 border-strock rounded-xl text-text2">
        <img srcSet="/icon-google.png 2x" alt="icon-google" />
        <span>Sign up with google</span>
      </button>
      <p className="mb-4 text-xs font-normal text-center lg:text-sm lg:mb-8 dark:text-white text-text2">
        Or sign up with email
      </p>
      <form onSubmit={handleSubmit(handleSignUp)}>
        <FormGroup>
          <Label htmlFor="name">Full Name *</Label>
          <Input control={control} name="name" type="text" placeholder="Jhon Doe" error={errors.name?.message}></Input>
        </FormGroup>
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
            placeholder="Create a password"
            error={errors.password?.message}
          >
            <IconEyeToggle open={showPassword} onClick={handleTogglePassword}></IconEyeToggle>
          </Input>
        </FormGroup>
        <CheckBox name="term" checked={accepTerm} onClick={handleToggleTerm}>
          <p className="flex-1 mb-4 text-xs text-text2 lg:text-sm dark:text-text3">
            I agree to the <span className="underline text-secondary">Terms of Use</span> and have read and understand
            the <span className="underline text-secondary">Privacy policy</span>
          </p>
        </CheckBox>
        <Button className="w-full bg-primary" type="submit">
          Create my account
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignUpPage;
