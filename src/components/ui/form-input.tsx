import React, { type ComponentProps } from 'react';
import type { UseFormRegisterReturn } from 'react-hook-form';

import { cn } from '@/lib/utils';

import { Input } from './input';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

type TFormInputWrapperProps = {
  name: string;
  label?: string;
  children: React.ReactNode;
  labelClassName?: string;
  containerClassName?: string;
  error?: string;
  required?: boolean;
};

export function FormInputWrapper({
  label,
  name,
  labelClassName,
  children,
  error,
  required,
  containerClassName,
}: TFormInputWrapperProps) {
  return (
    <fieldset className={cn(containerClassName, 'space-y-2')}>
      {label && (
        <label htmlFor={name} className={cn(labelClassName)}>
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <TooltipProvider>
        <Tooltip open={!!error}>
          <TooltipTrigger asChild>
            <div>{children}</div>
          </TooltipTrigger>
          <TooltipContent
            side="bottom"
            align="start"
            className="border-red-500 shadow-red-500/10"
          >
            <p>{error}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </fieldset>
  );
}

type TFormInputProps = Pick<
  TFormInputWrapperProps,
  'name' | 'label' | 'labelClassName' | 'containerClassName' | 'error'
> &
  ComponentProps<typeof Input> & {
    inputClassName?: string;
    register?: UseFormRegisterReturn;
    type?: ComponentProps<typeof Input>['type'] | 'textarea';
  };

export function FormInput({
  name,
  label,
  inputClassName,
  labelClassName,
  containerClassName,
  register,
  error,
  required,
  ...rest
}: TFormInputProps) {
  return (
    <FormInputWrapper
      name={name}
      label={label}
      labelClassName={labelClassName}
      containerClassName={containerClassName}
      error={error}
      required={required}
    >
      {rest.type === 'textarea' ? (
        <textarea
          id={name}
          placeholder={rest.placeholder}
          rows={5}
          aria-label={label}
          className={cn(inputClassName, 'input h-auto')}
          {...(register
            ? { ...register }
            : {
                name,
              })}
        />
      ) : (
        <Input
          {...rest}
          id={name}
          aria-label={label}
          className={inputClassName}
          {...(register
            ? { ...register }
            : {
                name,
              })}
        />
      )}
    </FormInputWrapper>
  );
}
