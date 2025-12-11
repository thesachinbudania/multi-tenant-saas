import { InputHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, label, id, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            {label && (
                <label htmlFor={id} className="text-sm font-bold text-black uppercase tracking-wider">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                id={id}
                className={twMerge(
                    "w-full px-4 py-4 border border-black text-black text-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all bg-white",
                    className
                )}
                {...props}
            />
        </div>
    );
});

Input.displayName = "Input";

export default Input;
