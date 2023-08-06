import React from 'react';
import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import { withErrorBoundary } from 'react-error-boundary';
import ErrorComponent from '../common/ErrorComponent';
const Input = (props) => {
  const { control, name, type = 'text', error = '', placeholder = '', children, ...rest } = props;
  const { field } = useController({
    control,
    name,
    defaultValue: '',
  });
  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        className={`w-full px-6 py-4 text-sm font-medium border full border-strock rounded-xl 
         placeholder:text-text4 bg-transparent dark:placeholder:text-text2 dark:text-white
        ${children ? 'pr-16' : ''} 
         ${error.length > 0 ? 'border-error text-error' : 'border-strock text-text1 dark:border-darkStroke'}`}
        placeholder={error.length <= 0 ? placeholder : ''}
        {...rest}
        {...field}
      />
      {error.length > 0 && (
        <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
          {error}
        </span>
      )}
      <div className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">{children}</div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.any.isRequired,
  error: PropTypes.string,
};

export default withErrorBoundary(Input, {
  FallbackComponent: <ErrorComponent></ErrorComponent>,
});
