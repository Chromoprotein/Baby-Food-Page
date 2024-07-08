import TotalLogsBar from '@/app/ui/baby/totalLogsBar';
import FoodCard from '@/app/ui/baby/foodCard';

export default function FoodLogWrapper({ userId }: { userId: string }) {
    return (
        <>
            <TotalLogsBar userId={userId} />
            <FoodCard userId={userId} />
        </>
    );
}