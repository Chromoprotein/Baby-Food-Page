const babyFoods = [
  {
    id: "CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",
    name: "Mashed Bananas",
    category: "snacks",
    stage: 1
  },
  {
    id: "76d65c26-f784-44a2-ac19-586678f7c2f2",
    name: "Apple Puree",
    category: "snacks",
    stage: 1
  },
  {
    id: "a6b7c8d9-e0f1-2g3h-4i5j-6k7l8m9n0o1p",
    name: "Avocado Puree",
    category: "main meals",
    stage: 1
  },
  {
    id: "p1o2n3m4-l5k6-j7i8-h9g0-f1e2-d3c4b5a6",
    name: "Sweet Potato Puree",
    category: "main meals",
    stage: 1
  },
  {
    id: "z9y8x7w6-v5u4-t3s2-r1q0-p9o8n7m6l5k4",
    name: "Rice Cereal",
    category: "main meals",
    stage: 1
  },
  {
    id: "a0b1c2d3-e4f5-6g7h-8i9j-0k1l2m3n4o5p",
    name: "Mashed Carrots",
    category: "main meals",
    stage: 1
  },
  {
    id: "p6o5n4m3-l2k1-j0i9-h8g7-f6e5-d4c3b2a1",
    name: "Peach Puree",
    category: "snacks",
    stage: 1
  },
  {
    id: "x1y2z3w4-v5u6-t7s8-r9q0-p1o2n3m4l5k6",
    name: "Pear Puree",
    category: "snacks",
    stage: 1
  },
  {
    id: "a7b8c9d0-e1f2-3g4h-5i6j-7k8l9m0n1o2p",
    name: "Mashed Green Beans",
    category: "main meals",
    stage: 1
  },
  {
    id: "p9o8n7m6-l5k4-j3i2-h1g0-f9e8-d7c6b5a4",
    name: "Pumpkin Puree",
    category: "main meals",
    stage: 1
  },
  {
    id: "b1c2d3e4-f5g6-h7i8-j9k0-l1m2n3o4p5q6",
    name: "Blueberry Banana Puree",
    category: "snacks",
    stage: 2
  },
  {
    id: "q5p4o3n2-m1l2-k9j8-i7h6-g5f4-e3d2c1b0",
    name: "Chicken and Rice Puree",
    category: "main meals",
    stage: 2
  },
  {
    id: "b6c7d8e9-f0g1-2h3i-4j5k-6l7m8n9o0p1q",
    name: "Peach Apple Puree",
    category: "snacks",
    stage: 2
  },
  {
    id: "q1p2o3n4-m5l6-k7j8-i9h0-g1f2-e3d4c5b6",
    name: "Lentil and Carrot Puree",
    category: "main meals",
    stage: 2
  },
  {
    id: "y9x8w7v6-u5t4-s3r2-q1p0-o9n8m7l6k5j4",
    name: "Broccoli and Sweet Potato Puree",
    category: "main meals",
    stage: 2
  },
  {
    id: "b0c1d2e3-f4g5-6h7i-8j9k-0l1m2n3o4p5q",
    name: "Mango and Yogurt",
    category: "snacks",
    stage: 2
  },
  {
    id: "q6p5o4n3-m2l1-k0j9-i8h7-g6f5-e4d3c2b1",
    name: "Strawberry Banana Puree",
    category: "snacks",
    stage: 2
  },
  {
    id: "z2y3x4w5-v6u7-t8s9-r0q1-p2o3n4m5l6k7",
    name: "Beef and Vegetable Puree",
    category: "main meals",
    stage: 2
  },
  {
    id: "b2c3d4e5-f6g7-8h9i-0j1k-2l3m4n5o6p7q",
    name: "Quinoa and Apple Puree",
    category: "main meals",
    stage: 2
  },
  {
    id: "q7p6o5n4-m3l2-k1j0-i9h8-g7f6-e5d4c3b2",
    name: "Spinach and Potato Puree",
    category: "main meals",
    stage: 2
  },
  {
    id: "c1d2e3f4-g5h6-i7j8-k9l0-m1n2o3p4q5r6",
    name: "Chicken and Vegetable Stew",
    category: "main meals",
    stage: 3
  },
  {
    id: "r5q4p3o2-n1m2-l9k8-j7i6-h5g4-f3e2d1c0",
    name: "Beef and Barley Stew",
    category: "main meals",
    stage: 3
  },
  {
    id: "c6d7e8f9-g0h1-2i3j-4k5l-6m7n8o9p0q1r",
    name: "Turkey and Sweet Potato Mash",
    category: "main meals",
    stage: 3
  },
  {
    id: "r1q2p3o4-n5m6-l7k8-j9i0-h1g2-f3e4d5c6",
    name: "Pasta with Tomato Sauce",
    category: "main meals",
    stage: 3
  },
  {
    id: "z3y4x5w6-v7u8-t9s0-r1q2-p3o4n5m6l7k8",
    name: "Chicken and Quinoa",
    category: "main meals",
    stage: 3
  },
  {
    id: "c0d1e2f3-g4h5-6i7j-8k9l-0m1n2o3p4q5r",
    name: "Lentil and Vegetable Stew",
    category: "main meals",
    stage: 3
  },
  {
    id: "r6q5p4o3-n2m1-l0k9-j8i7-h6g5-f4e3d2c1",
    name: "Salmon and Potato",
    category: "main meals",
    stage: 3
  },
  {
    id: "z4y5x6w7-v8u9-t0s1-r2q3-p4o5n6m7l8k9",
    name: "Cheesy Broccoli and Rice",
    category: "main meals",
    stage: 3
  },
  {
    id: "c2d3e4f5-g6h7-8i9j-0k1l-2m3n4o5p6q7r",
    name: "Beef and Vegetable Casserole",
    category: "main meals",
    stage: 3
  },
  {
    id: "r7q6p5o4-n3m2-l1k0-j9i8-h7g6-f5e4d3c2",
    name: "Pasta with Cheese and Peas",
    category: "main meals",
    stage: 3
  },
  {
    id: "d1e2f3g4-h5i6-j7k8-l9m0-n1o2p3q4r5s6",
    name: "Apple and Sweet Potato Puffs",
    category: "snacks",
    stage: 2
  },
  {
    id: "s5r4q3p2-o1n2-m9l8-k7j6-h5g4-f3e2d1c0",
    name: "Banana and Pumpkin Biscuits",
    category: "snacks",
    stage: 2
  },
  {
    id: "d6e7f8g9-h0i1-2j3k-4l5m-6n7o8p9q0r1s",
    name: "Yogurt Melts",
    category: "snacks",
    stage: 2
  },
  {
    id: "s1r2q3p4-o5n6-m7l8-k9j0-h1g2-f3e4d5c6",
    name: "Strawberry and Beetroot Crisps",
    category: "snacks",
    stage: 2
  },
  {
    id: "d0e1f2g3-h4i5-6j7k-8l9m-0n1o2p3q4r5s",
    name: "Peach and Carrot Puffs",
    category: "snacks",
    stage: 2
  },
  {
    id: "s6r5q4p3-o2n1-m0l9-k8j7-h6g5-f4e3d2c1",
    name: "Cheese and Spinach Bites",
    category: "snacks",
    stage: 3
  },
  {
    id: "d2e3f4g5-h6i7-8j9k-0l1m-2n3o4p5q6r7s",
    name: "Whole Grain Cereal Bars",
    category: "snacks",
    stage: 3
  },
  {
    id: "s2r3q4p5-o6n7-m8l9-k0j1-h2g3-f4e5d6c7",
    name: "Fruit and Veggie Strips",
    category: "snacks",
    stage: 3
  },
  {
    id: "d4e5f6g7-h8i9-0j1k-2l3m-4n5o6p7q8r9s",
    name: "Oatmeal and Raisin Cookies",
    category: "snacks",
    stage: 3
  },
  {
    id: "s3r4q5p6-o7n8-m9l0-k1j2-h3g4-f5e6d7c8",
    name: "Veggie and Cheese Muffins",
    category: "snacks",
    stage: 3
  }
];

module.exports = {
  babyFoods,
};