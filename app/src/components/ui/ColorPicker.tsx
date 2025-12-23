"use client";

import { useState, ChangeEvent } from 'react';
import Input from './Input';

interface ColorPickerProps {
    label: string;
    value?: string;
    onChange?: (value: string) => void;
}

export default function ColorPicker({ label, value = "#000000", onChange }: ColorPickerProps) {
    const [color, setColor] = useState(value);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newVal = e.target.value;
        setColor(newVal);
        onChange?.(newVal);
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <span className="text-sm font-bold text-black uppercase tracking-wider">
                {label}
            </span>
            <div className="flex gap-4 items-center">
                {/* Visual Picker */}
                <div className="relative w-16 h-16 border border-black shrink-0 overflow-hidden group cursor-pointer">
                    <input
                        type="color"
                        value={color}
                        onChange={handleChange}
                        className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] p-0 m-0 cursor-pointer opacity-0"
                    />
                    <div
                        className="w-full h-full"
                        style={{ backgroundColor: color }}
                    />
                </div>

                {/* Hex Input */}
                <Input
                    placeholder="#000000"
                    value={color}
                    onChange={handleChange}
                    className="font-mono uppercase"
                />
            </div>
        </div>
    );
}
