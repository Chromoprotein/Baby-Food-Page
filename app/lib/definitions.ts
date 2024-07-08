import React from "react";

export type BabyFood = {
    id: string;
    name: string;
    category: string;
    stage: number;
};

export type User = {
  id: string;
  name: string;
  dob: string;
  email: string;
  password: string;
}

export type Log = {
    id: string;
    name: string;
    category: string;
    stage: number;
    date: string;
    opinion: string;
}

export type InfoCardProps = {
  children: string;
  imgSrc: string;
}

export type InputProps = {
  name: string;
  placeholder?: string;
  action?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaulty?: string;
}

export type ButtonProps = {
  name: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
  href?: URL | string;
  isDisabled?: boolean;
  type?: "button" | "submit";
}

export type CaterpillarButtonProps = {
  options: string[];
  label: string;
  action?: React.MouseEventHandler<HTMLButtonElement>;
  defaulty?: string;
}

export type FoodCardPartProps = {
  opinion: JSX.Element;
  foods: BabyFood[];
}

export type AddFoodLog = {
  id: string; // Will be created on the database
  userId: string;
  foodId: string;
  opinion: 'love' | 'like' | 'dislike';
  date: string;
};

export type RadioButtonProps = {
  food: string;
  value: string;
  emoji: JSX.Element;
  defaultChecked?: boolean;
}