const babyFoods = [
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: "Apple Puree",
    category: "Fruit",
    age: 6
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: "Banana Mash",
    category: "Fruit",
    age: 6
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    name: "Rice Cereal",
    category: "Grain",
    age: 4
  },
  {
    id: '126eed9c-c90c-4ef6-a4a8-fcf7408d3c66',
    name: "Lentil Soup",
    category: "Protein",
    age: 8
  }
];

const users = [
    {
        id: '410544b2-4001-4271-9855-fec4b6a6442a',
        name: "Baby John",
        dob: "2023-08-31",
        email: "something@gmail.com",
        password: "123456",
    }
]

const foodLog = [
    {
        user_id: "410544b2-4001-4271-9855-fec4b6a6442a",
        food_id: "126eed9c-c90c-4ef6-a4a8-fcf7408d3c66",
        date: "2024-05-31",
    }
]

module.exports = {
  users,
  babyFoods,
  foodLog,
};