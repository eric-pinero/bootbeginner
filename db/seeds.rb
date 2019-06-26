# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Category.destroy_all
User.destroy_all
Project.destroy_all

categories = Category.create(
    [
        {name: "boots" },
        {name: "sneakers" },
        {name: "clogs" },
        {name: "flats" },
        {name: "heels" },
        {name: "loafers" }
    ]
)

users = User.create(
[

    {username: "Bootsy Collins",
    email: "bootsonboots@bootjack.com",
    password_digest: "$2a$10$FUKCwIjyqHVAV8EtYKGrzu95/EXn4o3XiteRiIcjQEkqLQc70usPm",
    session_token: "qNqlR0ZcM2PAqYUiifKEMw"},

    {username: "Franz Shoebert",
     email: "shoebert@shoe.com",
     password_digest: "$2a$10$RIG9PuQw3m7MHPF9fZi9euxke2SCewkewxCz0unMRb2HJg11MheVa",
     session_token: "8ej_uCQsYwo6bBhx_QnHzg"
    },

 {username: "John Wilkes Boot",
  email: "feartheboot@boot.net",
  password_digest: "$2a$10$9V976FZJRWaGYfcT.28E4uIgAQxxVIiuCPHqpgaGN2rw8J2rrPwIK",
  session_token: "KaFNP86SNOPkDBKzoPCQkg"
},

 {username: "Heelers Without Borders",
  email: "test2@test.com",
  password_digest: "$2a$10$RKW.oUjJxb0Lah6MwO22PuwBLrp8DhZ8R29Xm8SMGqSpfz8YTo7ZW",
  session_token: "B5-ed2r2BkLgXbmFhQRudg"
},

 {username: "t",
  email: "1@1.com",
  password_digest: "$2a$10$xDtT73MJ6rqaAgtS0UFSaO6go8W9OJMWaJlKqlqeNk4q5qcyaRBPq",
  session_token: "ZMGfKXKhiFXZs02fVvla8w"
},

 {username: "t",
  email: "1@1.com",
  password_digest: "$2a$10$oBJ0Lonkqr4J9hh5jAjyTOQJb8GPdnlkzu6fzvVZ5xapqFe7AxBaG",
  session_token: "TYMTdsHuxgZyds-QB6qHLw"
},

 {username: "t",
  email: "3@1.com",
  password_digest: "$2a$10$9GQs/7/0Wg0SkkuohOB10u48Amj5bE8gGKWhMjP76GQlhvJk7D9rS",
  session_token: "b8rG5cQ9O411S7v2n63vhA"
},
 
 
  {username: "Jared Djared",
  email: "jdjdjd@jared.jared",
  password_digest: "$2a$10$eeBibq9EON68iOIYdh0yse8B57GBBoJYgGqnQQEW7bH8Pry/STL2i",
  session_token: "vS7uNiccxkb82BRoZlb-Qg"}
]

)

rewards = Reward.create([
  {
    title: "Lace Snack",
    description: "A set of edible laces you can boil and eat",
    items: nil,
    project_id: Project.last,
    minimum_value: 1,
    quantity: nil,
    start_time: nil,
    end_time: nil,
    estimated_month: "Mar",
    estimated_year: 2020,

  },
  {
    title: "Tasty Shoe",
    description: "A sneaker created with the most flavorful cloth available",
    items: nil,
    project_id: Project.last,
    minimum_value: 20,
    quantity: nil,
    start_time: nil,
    end_time: nil,
    estimated_month: "Apr",
    estimated_year: 2020,

  },
  {
    title: "Royal Boot",
    description: "A boot made from the most delectable leathers",
    items: nil,
    project_id: Project.last,
    minimum_value: 300,
    quantity: nil,
    start_time: nil,
    end_time: nil,
    estimated_month: "May",
    estimated_year: 2020,

  },
  {
    title: "Moon Boots",
    description: "A set of boots worn by an actual astronaut",
    items: nil,
    project_id: Project.first,
    minimum_value: 50000,
    quantity: nil,
    start_time: nil,
    end_time: nil,
    estimated_month: "Jan",
    estimated_year: 2021,

  },
    title: "Bagel",
    description: "A bagel to put boots on",
    items: nil,
    project_id: Project.second,
    minimum_value: 2,
    quantity: nil,
    start_time: nil,
    end_time: nil,
    estimated_month: "Dec",
    estimated_year: 2022,

  },
    
  {
    title: "Healing Heel",
    description: "Our flagship product, the heel that saves",
    items: nil,
    project_id: Project.third,
    minimum_value: 100,
    quantity: nil,
    start_time: nil,
    end_time: nil,
    estimated_month: "Dec",
    estimated_year: 2019,

  }
])

pledges = Pledge.create([
  {
    user_id: User.first,
    project_id: Project.last,
    reward_id: nil,
    pledged_amount: 1,
  },
])



projects = Project.create([
    {title: "Moon Boots",
    subtitle: "Boots like the astronauts wear!",
    creator_id: User.third.id,
    category_id: Category.fourth.id,
    subcategory_id: nil,
    description: "These boots are heavy, durable, and keep out a fair amount of radiation",
    risks: "May not keep out enough radiation. Also NASA is getting better at guarding their shoe lockers",
    faqs: "",
    length: "",
    amount_received: 0,
    goal: 2000,
    launched?: false,
    location: "Australia",
    },

    {title: "Bagel Boots",
    subtitle: "Footwear for bagels has finally arrived",
    creator_id: User.second.id,
    category_id: Category.third.id,
    subcategory_id: "",
    description: "Don't be fooled by our title, we'll be providing all different kinds of footwear for your bagels",
    risks: "Nobody seems to want this",
    faqs: "",
    length: "",
    amount_received: "0",
    goal: 10000000,
    launched?: false,
    location: "Australia",
    },

    {title: "Let the Heeling Begin",
    subtitle: "We will save the world with heels",
    creator_id: User.fourth.id,
    category_id: Category.second.id,
    subcategory_id: "",
    description: "We believe that good heels can do more than look good, they can cure disease",
    risks: "So far there is no evidece our belief is true",
    faqs: "",
    length: "",
    amount_received: 120000,
    goal: 100000,
    launched?: false,
    location: "Denmark",
    },

    {title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Denmark",
    },

    {title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Denmark",
    },

    {  title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Canada",
    },

    {  title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Canada",
    },

    { title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Canada",
    },

    {  title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Canada",
    },
    
    { title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Belgium",
    } ,
    
    {  title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Belgium",
    },
    
    {  title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Japan",
    },
    
    {  title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Hong Kong",
    },
    
    {  title: nil,
    subtitle: "Test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "France",
    },
    
    {title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "australia",
    },

    {title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "australia",
    },


    {title: nil,
    subtitle: "test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "boots",
    },


    {title: nil,
    subtitle: "test13",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "canada",
    },

    {title: nil,
    subtitle: "Test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Belgium",},



    {title: nil,
    subtitle: "Test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Belgium",
    },

    {title: nil,
    subtitle: "Test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Belgium",
    },

    { title: nil,
    subtitle: "Test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Belgium",
    },
    
    {title: nil,
    subtitle: "Test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: nil,
    risks: nil,
    faqs: nil,
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "Belgium",
    },
    
    {title: "Shoes",
    subtitle: "Another Test",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description: "",
    risks: "",
    faqs: "",
    length: nil,
    amount_received: nil,
    goal: nil,
    launched?: false,
    location: "france",},

    {
    title: "Put your Boot in your Mouth",
    subtitle: "Edible boots for the modern worker",
    creator_id: User.first.id,
    category_id: Category.first.id,
    subcategory_id: nil,
    description:
     "For too long, people have had to choose between wearing their shoes and eating them. We aim to change all of that.",
    risks: "Some people may not be able to digest shoe leather",
    faqs: "",
    length: 30,
    amount_received: 0,
    goal: 50000,
    launched?: false,
    location: "USA"}
  
    ]
)