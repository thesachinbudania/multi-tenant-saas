import { ButtonHTMLAttributes, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { Loader2 } from 'lucide-react';

// Using a simple conditional approach since we don't have class-variance-authority installed, 
// but keeping it clean.

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'inverse' | 'inverse-outline';
    size?: 'sm' | 'md' | 'lg' | 'hero';
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    ...props
}, ref) => {

    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark font-semibold",
        outline: "border border-black text-black hover:bg-black hover:text-white",
        ghost: "text-black hover:opacity-70 bg-transparent",
        inverse: "bg-white text-black hover:bg-gray-200 font-bold",
        "inverse-outline": "border border-white text-white hover:bg-white hover:text-black"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3.5 text-base",
        lg: "px-7 py-4 text-base",
        hero: "px-14 py-5 text-lg" // Specifically for Hero section
    };

    return (
        <button
            ref={ref}
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            disabled={props.disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
            {props.children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
