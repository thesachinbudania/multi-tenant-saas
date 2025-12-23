"use client";

import { useState } from "react";
import Button from "../../src/components/ui/Button";
import Input from "../../src/components/ui/Input";

// Dummy Data
const initialEmployees = [
    { id: 1, name: "Sarah Connor", email: "sarah@skynet.com", role: "Product Manager", status: "Active" },
    { id: 2, name: "Kyle Reese", email: "kyle@resistance.org", role: "Security Lead", status: "Active" },
    { id: 3, name: "John Doe", email: "john@tech.com", role: "Engineer", status: "On Leave" },
];

export default function EmployeesPage() {
    const [employees, setEmployees] = useState(initialEmployees);
    const [isAdding, setIsAdding] = useState(false);
    const [newEmp, setNewEmp] = useState({ name: "", email: "", role: "" });

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault();
        setEmployees([...employees, { id: Date.now(), ...newEmp, status: "Active" }]);
        setIsAdding(false);
        setNewEmp({ name: "", email: "", role: "" });
    };

    const handleRemove = (id: number) => {
        setEmployees(employees.filter(emp => emp.id !== id));
    };

    return (
        <main className="flex-1 flex flex-col p-8 md:p-12 gap-8 overflow-y-auto h-full">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-6xl font-bold tracking-tight text-black">
                        Team Members
                    </h1>
                    <p className="text-xl text-text-secondary">
                        Manage who has access to your workspace.
                    </p>
                </div>

                <Button variant="primary" size="lg" onClick={() => setIsAdding(!isAdding)}>
                    {isAdding ? "Cancel" : "+ Add New Member"}
                </Button>
            </div>

            {/* Add Employee Form (Inline for simplicity) */}
            {isAdding && (
                <form onSubmit={handleAdd} className="bg-gray-50 border border-black p-8 flex flex-col gap-6 animate-in slide-in-from-top-4">
                    <h3 className="text-2xl font-bold">New Employee Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Input
                            placeholder="Full Name"
                            required
                            value={newEmp.name}
                            onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
                        />
                        <Input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={newEmp.email}
                            onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
                        />
                        <Input
                            placeholder="Role (e.g. Engineer)"
                            required
                            value={newEmp.role}
                            onChange={(e) => setNewEmp({ ...newEmp, role: e.target.value })}
                        />
                    </div>
                    <div className="flex justify-end">
                        <Button type="submit" variant="inverse-outline" className="bg-black text-white px-8">
                            Add Member
                        </Button>
                    </div>
                </form>
            )}

            {/* Employee List */}
            <div className="flex flex-col gap-4">
                <div className="grid grid-cols-12 px-6 py-3 border-b-2 border-black font-bold text-sm uppercase tracking-wider text-gray-500">
                    <div className="col-span-4">Name</div>
                    <div className="col-span-4">Role</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2 text-right">Actions</div>
                </div>

                {employees.map((emp) => (
                    <div key={emp.id} className="grid grid-cols-12 px-6 py-6 border border-gray-200 bg-white items-center hover:shadow-md transition-shadow">
                        <div className="col-span-4 flex flex-col">
                            <span className="font-bold text-lg">{emp.name}</span>
                            <span className="text-sm text-gray-400">{emp.email}</span>
                        </div>
                        <div className="col-span-4 font-medium text-text-secondary">
                            {emp.role}
                        </div>
                        <div className="col-span-2">
                            <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider border ${emp.status === 'Active' ? 'bg-green-100 text-green-800 border-green-200' : 'bg-yellow-100 text-yellow-800 border-yellow-200'
                                }`}>
                                {emp.status}
                            </span>
                        </div>
                        <div className="col-span-2 flex justify-end">
                            <button
                                onClick={() => handleRemove(emp.id)}
                                className="text-red-600 hover:text-red-800 font-bold text-sm underline underline-offset-4"
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}

                {employees.length === 0 && (
                    <div className="p-12 text-center text-gray-400 border border-dashed border-gray-300">
                        No team members found.
                    </div>
                )}
            </div>

        </main>
    );
}
