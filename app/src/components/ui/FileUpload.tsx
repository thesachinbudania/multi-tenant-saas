"use client";

import Image from 'next/image';
import { useState, ChangeEvent } from 'react';

interface FileUploadProps {
    label: string;
}

export default function FileUpload({ label }: FileUploadProps) {
    const [preview, setPreview] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);
        }
    };

    return (
        <div className="flex flex-col gap-2 w-full">
            <span className="text-sm font-bold text-black uppercase tracking-wider">
                {label}
            </span>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-black border-dashed bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer relative overflow-hidden">
                {preview ? (
                    <Image
                        src={preview}
                        alt="Logo Preview"
                        fill
                        className="object-contain p-4"
                    />
                ) : (
                    <div className="flex flex-col items-center gap-2 text-gray-500">
                        <span className="text-2xl font-bold">+</span>
                        <span className="font-medium text-sm">Upload Logo</span>
                    </div>
                )}
                <input type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </label>
        </div>
    );
}
