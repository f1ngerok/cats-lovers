import type { FC } from 'react';
import type { RefCallBack } from 'react-hook-form';

import React, { InputHTMLAttributes } from 'react';

import { EyeIcon, EyeOffIcon } from '@/assets/svg';
import { cn } from '@/lib/utils';

import { Button } from './button';
import { Input } from './input';

type PasswordInputProps = InputHTMLAttributes<HTMLInputElement> & {
  ref?: RefCallBack;
};

const PasswordInput: FC<PasswordInputProps> = ({
  className,
  ref,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const disabled =
    props.value === '' || props.value === undefined || props.disabled;

  return (
    <div className='relative'>
      <Input
        ref={ref}
        className={cn('hide-password-toggle pr-10', className)}
        type={showPassword ? 'text' : 'password'}
        {...props}
      />
      <Button
        className='absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent'
        disabled={disabled}
        size='sm'
        type='button'
        variant='ghost'
        onClick={() => setShowPassword(prev => !prev)}
      >
        {showPassword && !disabled ? (
          <EyeIcon aria-hidden='true' className='h-4 w-4' />
        ) : (
          <EyeOffIcon aria-hidden='true' className='h-4 w-4' />
        )}
        <span className='sr-only'>
          {showPassword ? 'Hide password' : 'Show password'}
        </span>
      </Button>

      {/* hides browsers password toggles */}
      <style>{`
					.hide-password-toggle::-ms-reveal,
					.hide-password-toggle::-ms-clear {
						visibility: hidden;
						pointer-events: none;
						display: none;
					}
				`}</style>
    </div>
  );
};
PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
