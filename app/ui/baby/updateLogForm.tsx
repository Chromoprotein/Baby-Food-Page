import { Log } from "@/app/lib/definitions";
import { updateFoodLog } from "@/app/lib/actions";
import EmojiRadio from "../emojiRadio";
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import { DeleteLogButton } from "./deleteLogButton";

export default function UpdateLogForm({ log }: { log: Log }) {
  const updateFoodLogWithId = updateFoodLog.bind(null, log.id);
 
  return (
    <>
      <form action={updateFoodLogWithId} className="bg-slate-50 m-3 p-5 border-l-2 border-lime-600 min-w-96 max-w-96 min-h-24 p-3 text-sm font-bold text-slate-800 flex flex-row justify-center items-center gap-4">
          {log.name.toUpperCase()}
          <div className="flex flex-row gap-3">

            <EmojiRadio id={log.id} name="opinion" value="love" emoji={<BsEmojiHeartEyes/>} defaultChecked={log.opinion === "love"} />

              <EmojiRadio id={log.id} name="opinion" value="like" emoji={<BsEmojiSmile/>} defaultChecked={log.opinion === "like"} />

              <EmojiRadio id={log.id} name="opinion" value="dislike" emoji={<BsEmojiAngry/>} defaultChecked={log.opinion === "dislike"} />

              <button type="submit">Submit</button>
          </div>
      </form>
      
      <DeleteLogButton id={log.id} />
    </>
  );
}