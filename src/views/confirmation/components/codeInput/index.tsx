import { ArrowPathIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useRef, useState } from 'react';

interface Props {
  onConfirm: (code: string) => void;
}

const ConfirmationCodeInput: React.FC<Props> = ({ onConfirm }) => {
  const inputs = useRef<HTMLInputElement[]>([]);
  const [values, setValues] = useState<string[]>(new Array(6).fill(''));

  const handleChange = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (index < inputs.current.length - 1 && value) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();
    const clipboardData = event.clipboardData.getData('text/plain').slice(0, 6);
    const newValues = [...values];
    for (let i = 0; i < clipboardData.length && i < inputs.current.length; i++) {
      const digit = clipboardData[i];
      newValues[i] = digit;
    }
    setValues(newValues);
    inputs.current[0]?.focus();
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newValue = [...values];
      newValue[index] = "";
      setValues(newValue);

      if (index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleReset = () => {
    setValues(new Array(6).fill(''));
    inputs.current[0]?.focus();
  };

  useEffect(() => {
    if (values.every((value) => value !== '') && values.length === 6) {
      handleSubmit();
    }
  }, [values]);

  const handleSubmit = () => {
    const code = values.join('');
    onConfirm(code);
  };

  return (
    <div className='flex gap-2'>
      {values.map((value, index) => (
        <input
          className="w-10 h-10 rounded border-2 border-gray-300 text-lg leading-none"
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          ref={(el) => (inputs.current[index] = el!)}
        />
      ))}
      <div className='flex flex-col items-center justify-center ml-2'>
        <ArrowPathIcon className='text-gray-500 h-6 w-6' />
        <button className='text-sm text-gray-500' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default ConfirmationCodeInput;

