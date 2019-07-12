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
Reward.destroy_all
Pledge.destroy_all

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
  session_token: "qNqlR0ZcM2PAqYUiifKEMw"
},

  {
    username: "Franz Shoebert",
    email: "shoebert@shoe.com",
    password_digest: "$2a$10$FUKCwIjyqHVAV8EtYKGrzu95/EXn4o3XiteRiIcjQEkqLQc70usPm",
    session_token: "8ej_uCQsYwo6bBhx_QnHzg"
  },

  {
    username: "John Wilkes Boot",
    email: "feartheboot@boot.net",
    password_digest: "$2a$10$FUKCwIjyqHVAV8EtYKGrzu95/EXn4o3XiteRiIcjQEkqLQc70usPm",
    session_token: "KaFNP86SNOPkDBKzoPCQkg"
  },

  {
    username: "Heelers Without Borders",
    email: "feelings@heelings.org",
    password_digest: "$2a$10$FUKCwIjyqHVAV8EtYKGrzu95/EXn4o3XiteRiIcjQEkqLQc70usPm",
    session_token: "B5-ed2r2BkLgXbmFhQRudg"
  }

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
    location: "USA"
  }
  
]
)


rewards = Reward.create!([
  {
    title: "Lace Snack",
    description: "A set of edible laces you can boil and eat",
    items: nil,
    project_id: Project.last.id,
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
    project_id: Project.last.id,
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
    project_id: Project.last.id,
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
    project_id: Project.first.id,
    minimum_value: 50000,
    quantity: nil,
    start_time: nil,
    end_time: nil,
    estimated_month: "Jan",
    estimated_year: 2021,

  },
    
  {
    title: "Bagel",
    description: "A bagel to put boots on",
    items: nil,
    project_id: Project.second.id,
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
    project_id: Project.third.id,
    minimum_value: 100,
    quantity: nil,
    start_time: nil,
    end_time: nil,
    estimated_month: "Dec",
    estimated_year: 2019,

  }
])

pledges = Pledge.create!(
  {
    user: User.first,
    project: Project.last,
    reward_id: nil,
    pledged_amount: 1,
  }
)

