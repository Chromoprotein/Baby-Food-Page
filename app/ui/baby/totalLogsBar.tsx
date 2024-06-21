import { fetchTotalLogs, fetchTotalBabyFoods } from "@/app/lib/data";

export default async function TotalLogsBar() {

  const totalLogs = await fetchTotalLogs("410544b2-4001-4271-9855-fec4b6a6442a");

  const totalFoods = await fetchTotalBabyFoods();

  const foodPercentage = (totalLogs / totalFoods) * 100;

  const style: React.CSSProperties = {
    width: `${foodPercentage}%`
  };

  return (
    <div className="mx-auto w-full md:w-1/2 m-10">
        <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-lime-700">FOOD TASTING PROGRESS</span>
        <span className="text-sm font-medium text-lime-700">{foodPercentage}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-5">
        <div className="bg-lime-600 h-5 rounded-full" style={style}></div>
        </div>
    </div>
  );

}