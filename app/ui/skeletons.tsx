export default function DashboardSkeleton() {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="spinner"></div>
        </div>
    )
}

export function FoodLogSkeleton() {
    return (
        <>
            <div className="mx-auto w-full md:w-1/2 m-10">
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-slate-50">FOOD TASTING PROGRESS</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-5 skeleton">
                </div>
            </div>

            <div className="mb-10">
                <div className="border-t-2 shadow my-4 p-4 w-full min-h-24 md:w-2/3 mx-auto skeleton"></div>
                <div className="border-t-2 shadow my-4 p-4 w-full min-h-24 md:w-2/3 mx-auto skeleton"></div>
                <div className="border-t-2 shadow my-4 p-4 w-full min-h-24 md:w-2/3 mx-auto skeleton"></div>
            </div>
        </>
    )
}

export function BabyFoodsSkeleton() {
    return (
        <div className="m-4">
            <div className="bg-slate-50 m-3 p-5 border-l-2 min-w-96 min-h-24 p-3 skeleton"></div>
            <div className="bg-slate-50 m-3 p-5 border-l-2 min-w-96 min-h-24 p-3 skeleton"></div>
            <div className="bg-slate-50 m-3 p-5 border-l-2 min-w-96 min-h-24 p-3 skeleton"></div>
            <div className="bg-slate-50 m-3 p-5 border-l-2 min-w-96 min-h-24 p-3 skeleton"></div>
            <div className="bg-slate-50 m-3 p-5 border-l-2 min-w-96 min-h-24 p-3 skeleton"></div>
            <div className="bg-slate-50 m-3 p-5 border-l-2 min-w-96 min-h-24 p-3 skeleton"></div>

            <div className="flex flex-col md:flex-row justify-center items-center">
                <div className="rounded-full bg-slate-50 border-2 p-3 m-3 w-48 h-12 skeleton">
                </div>
                <div className="rounded-full bg-slate-50 border-2 p-3 m-3 w-48 h-12 skeleton">
                </div>
            </div>
        </div>
    )
}