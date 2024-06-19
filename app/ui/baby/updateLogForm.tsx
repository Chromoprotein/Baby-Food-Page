import { Log } from "@/app/lib/definitions";
import { updateFoodLog } from "@/app/lib/actions";

export default function UpdateLogForm({ log }: { log: Log }) {
  const updateFoodLogWithId = updateFoodLog.bind(null, log.id);
 
  return (
    <form action={updateFoodLogWithId} className="bg-slate-50 m-3 p-5 border-l-2 border-lime-600 min-w-96 max-w-96 min-h-24 p-3 text-sm font-bold text-slate-800 flex flex-row justify-center items-center gap-4">
        {log.name.toUpperCase()}
        <div className="flex flex-row gap-3">

            <div className="flex items-center">
                <input type="radio" id={`${log.id}love`} name="opinion" value="love" className="sr-only" />
                <label htmlFor={`${log.id}love`} className="cursor-pointer">
                    <span className="emoji-radio text-2xl">😍</span>
                </label>
            </div>

            <div className="flex items-center">
                <input type="radio" id={`${log.id}like`} name="opinion" value="like" className="sr-only" />
                <label htmlFor={`${log.id}like`} className="cursor-pointer">
                    <span className="emoji-radio text-2xl">😀</span>
                </label>
            </div>

            <div className="flex items-center">
                <input type="radio" id={`${log.id}dislike`} name="opinion" value="dislike" className="sr-only" />
                <label htmlFor={`${log.id}dislike`} className="cursor-pointer">
                    <span className="emoji-radio text-2xl">😠</span>
                </label>
            </div>

            <button type="submit">Submit</button>
        </div>
    </form>
  );
}