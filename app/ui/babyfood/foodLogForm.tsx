'use client';

import React, { useState } from 'react';
import { BabyFood } from "@/app/lib/definitions";
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";
import EmojiRadio from '../emojiRadio';
import { useFormState } from 'react-dom'
import { addFoodLog, State } from '@/app/lib/actions';

export default function FoodLogForm({
  food,
}: {
  food: BabyFood;
}) {

    const userId = "410544b2-4001-4271-9855-fec4b6a6442a";

    const initialState: State = {
      message: '',
    }
    
    const addFoodLogWithIds = addFoodLog.bind(null, {
        foodId: food.id,
        userId: userId,
    });

    const [state, formAction] = useFormState(addFoodLogWithIds, initialState)

  return (
    <>
      <form action={formAction} className="bg-slate-50 m-3 p-5 border-l-2 border-lime-600 min-w-96 max-w-96 min-h-24 p-3 text-sm font-bold text-slate-800 flex flex-row justify-center items-center gap-4">
          {food.name.toUpperCase()}
          <div className="flex flex-row gap-3">

              <EmojiRadio food={food.name} value="love" emoji={<BsEmojiHeartEyes/>}/>

              <EmojiRadio food={food.name} value="like" emoji={<BsEmojiSmile/>} />

              <EmojiRadio food={food.name} value="dislike" emoji={<BsEmojiAngry/>} />

              <button type="submit">Submit</button>
          </div>
      </form>
      <div className="text-center text-red-500 font-bold" id="opinion-error" aria-live="polite" aria-atomic="true">
        {state && state.message}
      </div>
    </>
  )
}