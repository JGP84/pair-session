const foods = [
    //veggies
    {
      id: 0,
      name: "letucce",
      type: "veggies",
      weight: 150,
      prot: 2.1,
      lip: 0.6,
      hc: 2.6,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/veggies/lettuce.png",
    },
  
    {
      id: 1,
      name: "tomato",
      type: "veggies",
      weight: 150,
      prot: 1.4,
      lip: 0.2,
      hc: 5.3,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/veggies/rsz_tomato.png",
    },
    {
      id: 2,
      name: "carrot",
      type: "veggies",
      weight: 100,
      prot: 0.8,
      lip: 0.3,
      hc: 7,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/veggies/carrot.png",
    },
    {
      id: 3,
      name: "broccoli",
      type: "veggies",
      weight: 150,
      prot: 4.5,
      lip: 0.6,
      hc: 3.6,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/veggies/broccoli_8.png",
    },
    //starchyFoods
    {
      id: 4,
      name: "oats",
      type: "starchyFoods",
      weight: 14,
      prot: 3.32,
      lip: 1.66,
      hc: 14,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/starchyFoods/oats.png",
    },
    {
      id: 5,
      name: "rice",
      type: "starchyFoods",
      weight: 20,
      prot: 1.66,
      lip: 0.49,
      hc: 14,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/starchyFoods/rice_whole.png",
    },
    {
      id: 6,
      name: "potato",
      type: "starchyFoods",
      weight: 92,
      prot: 2.03,
      lip: 0.18,
      hc: 14,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/starchyFoods/potato_2147541_640.png",
    },
    {
      id: 7,
      name: "lentils",
      type: "starchyFoods",
      weight: 39,
      prot: 9.33,
      lip: 0.74,
      hc: 14,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/starchyFoods/lentils.png",
    },
    {
      id: 8,
      name: "chickpeas",
      type: "starchyFoods",
      weight: 29,
      prot: 5.48,
      lip: 1.8,
      hc: 14,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/starchyFoods/lentils.png",
    },
    //proteinFoods
    {
      id: 9,
      name: "tofu",
      type: "proteinFoods",
      weight: 89,
      prot: 7,
      lip: 12.41,
      hc: 1.15,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/proteinFoods/tofu.png",
    },
    {
      id: 10,
      name: "egg",
      type: "proteinFoods",
      weight: 56,
      prot: 7,
      lip: 9.5,
      hc: 0.45,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/proteinFoods/egg.png",
    },
    {
      id: 11,
      name: "egg white",
      type: "proteinFoods",
      weight: 64,
      prot: 7,
      lip: 0.06,
      hc: 0.32,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/proteinFoods/eggWhite.png",
    },
    {
      id: 12,
      name: "yolk",
      type: "proteinFoods",
      weight: 44,
      prot: 7,
      lip: 11.71,
      hc: 0.22,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/proteinFoods/eggYolk.png",
    },
    {
      id: 13,
      name: "hake",
      type: "proteinFoods",
      weight: 39,
      prot: 7,
      lip: 0.47,
      hc: 0.19,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/proteinFoods/hake.png",
    },
    {
      id: 14,
      name: "chicken breast",
      type: "proteinFoods",
      weight: 30,
      prot: 7,
      lip: 0.79,
      hc: 0,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/proteinFoods/chickenBreast.png",
    },
    //nuts
    {
      id: 15,
      name: "almonds",
      type: "nuts",
      weight: 8,
      prot: 1.5,
      lip: 4.3,
      hc: 0.5,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/nuts/almond_PNG38.png",
    },
    {
      id: 16,
      name: "pipes",
      type: "nuts",
      weight: 8,
      prot: 1.84,
      lip: 3.92,
      hc: 0.96,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/nuts/seeds_pumpkin.png",
    },
    //fats
    {
      id: 17,
      name: "oil",
      type: "fats",
      weight: 5,
      prot: 0,
      lip: 5,
      hc: 0,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/fats/oil.png",
    },
    {
      id: 18,
      name: "banana",
      type: "fruits",
      weight: 80,
      prot: 0.9,
      lip: 0.2,
      hc: 16.9,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/fruits/banana_PNG842.png",
    },
    {
      id: 19,
      name: "orange",
      type: "fruits",
      weight: 200,
      prot: 2,
      lip: 0.2,
      hc: 16.4,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/fruits/orange.png",
    },
    {
      id: 20,
      name: "apple",
      type: "fruits",
      weight: 120,
      prot: 0.4,
      lip: 0.4,
      hc: 14,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/fruits/apple_K.png",
    },
  
    {
      id: 21,
      name: "soya drink",
      type: "dairyProducts",
      weight: 250,
      prot: 7.8,
      lip: 4.3,
      hc: 1.5,
      n_int_card: 1,
      img_link: "./assets/imagesFoodDatabase/dairyProducts/soy_milk.png",
    },
    {
      id: 22,
      name: "textured soya",
      type: "proteinFoods",
      weight: 14,
      prot: 7,
      lip: 0.18,
      hc: 2.75,
      n_int_card: 0,
      img_link: "./assets/imagesFoodDatabase/proteinFoods/texturedSoya.png",
    },
  ];
  
  export default foods;
  