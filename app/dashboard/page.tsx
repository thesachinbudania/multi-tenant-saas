import TaskCard from "../src/components/dashboard/TaskCard";
import Button from "../src/components/ui/Button";

// Dummy Data
const tasks = [
    { title: "Review Q3 Marketing Strategy", assignee: "Sarah", dueDate: "Oct 24", status: "In Progress", priority: "High" },
    { title: "Update Security Protocols", assignee: "Mike", dueDate: "Oct 25", status: "To Do", priority: "High" },
    { title: "Onboard New Engineers", assignee: "Jessica", dueDate: "Oct 28", status: "To Do", priority: "Medium" },
    { title: "Fix iOS Navigation Bug", assignee: "Tom", dueDate: "Oct 22", status: "Done", priority: "High" },
    { title: "Prepare Client Presentation", assignee: "Sarah", dueDate: "Oct 30", status: "In Progress", priority: "Medium" },
    { title: "Audit Finance Reports", assignee: "Alex", dueDate: "Nov 01", status: "To Do", priority: "Low" }
] as const;

export default function DashboardPage() {
    return (
        <main className="flex-1 flex flex-col p-8 md:p-12 gap-12 overflow-y-auto h-full">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-6xl font-bold tracking-tight text-black">
                        My Tasks
                    </h1>
                    <p className="text-xl text-text-secondary">
                        You have <span className="font-bold text-black">3 tasks</span> due this week.
                    </p>
                </div>

                <Button variant="primary" size="lg">
                    + Create New Task
                </Button>
            </div>

            {/* Filters / Utility Bar (Visual only for now) */}
            <div className="flex gap-4 border-b border-gray-200 pb-4">
                <button className="text-black font-bold border-b-2 border-black pb-4 -mb-4.5">All Tasks</button>
                <button className="text-gray-400 font-medium hover:text-black transition-colors">Assigned to Me</button>
                <button className="text-gray-400 font-medium hover:text-black transition-colors">Completed</button>
            </div>

            {/* Task Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tasks.map((task, idx) => (
                    <TaskCard key={idx} {...task} />
                ))}
            </div>

        </main>
    );
}
