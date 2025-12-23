import Button from "../ui/Button";

interface TaskCardProps {
    title: string;
    assignee: string;
    dueDate: string;
    status: "To Do" | "In Progress" | "Done";
    priority: "High" | "Medium" | "Low";
}

export default function TaskCard({ title, assignee, dueDate, status, priority }: TaskCardProps) {

    const statusStyles = {
        "To Do": "bg-gray-100 text-black border border-black",
        "In Progress": "bg-blue-600 text-white border border-black",
        "Done": "bg-green-500 text-black border border-black",
    };

    return (
        <div className="flex flex-col gap-6 p-6 border border-[var(--color-foreground)] bg-white hover:shadow-lg transition-shadow cursor-pointer group">
            <div className="flex justify-between items-start">
                <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${statusStyles[status]}`}>
                    {status}
                </span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {priority}
                </span>
            </div>

            <h3 className="text-2xl font-bold group-hover:underline decoration-2 underline-offset-4">
                {title}
            </h3>

            <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-[10px] font-bold">
                        {assignee.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-text-secondary">{assignee}</span>
                </div>
                <span className="text-sm font-bold text-black">{dueDate}</span>
            </div>
        </div>
    );
}
