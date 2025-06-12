export default function DashboardHome() {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-4rem)] p-4 overflow-hidden">
            <img
                src="/dash.jpg"
                alt="Dashboard Banner"
                className="max-w-full max-h-full object-contain rounded-xl"
            />
        </div>
    );
}