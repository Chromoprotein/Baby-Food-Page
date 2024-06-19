'use client';

import React, { useState } from 'react';
import { addFoodLog } from "@/app/lib/actions";
import { BabyFood } from "@/app/lib/definitions";
import { BsEmojiAngry } from "react-icons/bs";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { BsEmojiSmile } from "react-icons/bs";

export default function FoodLogForm({
  food,
}: {
  food: BabyFood;
}) {

    const userId = "410544b2-4001-4271-9855-fec4b6a6442a";

    const addFoodLogWithIds = addFoodLog.bind(null, {
        foodId: food.id,
        userId: userId,
    });

  return (
    <form action={addFoodLogWithIds} className="bg-slate-50 m-3 p-5 border-l-2 border-lime-600 min-w-96 max-w-96 min-h-24 p-3 text-sm font-bold text-slate-800 flex flex-row justify-center items-center gap-4">
        {food.name.toUpperCase()}
        <div className="flex flex-row gap-3">

            <div className="flex items-center">
                <input type="radio" id={`${food.id}love`} name="opinion" value="love" className="sr-only" />
                <label htmlFor={`${food.id}love`} className="cursor-pointer">
                    <span className="emoji-radio text-2xl">😍</span>
                </label>
            </div>

            <div className="flex items-center">
                <input type="radio" id={`${food.id}like`} name="opinion" value="like" className="sr-only" />
                <label htmlFor={`${food.id}like`} className="cursor-pointer">
                    <span className="emoji-radio text-2xl">😀</span>
                </label>
            </div>

            <div className="flex items-center">
                <input type="radio" id={`${food.id}dislike`} name="opinion" value="dislike" className="sr-only" />
                <label htmlFor={`${food.id}dislike`} className="cursor-pointer">
                    <span className="emoji-radio text-2xl">😠</span>
                </label>
            </div>

            <button type="submit">Submit</button>
        </div>
    </form>
  )
}