export type BabyFood = {
    id: string;
    name: string;
    category: string;
    age: number;
    opinion: string;
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
    age: number;
    date: string;
    opinion: string;
}

export type InfoCardProps = {
  children: string;
  imgSrc: string;
}

export type InputProps = {
  name: string;
  placeholder: string;
}

export type ButtonProps = {
  name: string;
}

export type CaterpillarButtonProps = {
  options: string[];
  label: string;
  selectedOption: string;
}

export type FoodCardPartProps = {
  opinion: JSX.Element;
  foods: BabyFood[];
}