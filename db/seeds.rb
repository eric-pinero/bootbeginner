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

    {username: "test",
     email: "test123@test.com",
     password_digest: "$2a$10$RIG9PuQw3m7MHPF9fZi9euxke2SCewkewxCz0unMRb2HJg11MheVa",
     session_token: "8ej_uCQsYwo6bBhx_QnHzg"
    },

 {username: "test123",
  email: "test@test.com",
  password_digest: "$2a$10$9V976FZJRWaGYfcT.28E4uIgAQxxVIiuCPHqpgaGN2rw8J2rrPwIK",
  session_token: "KaFNP86SNOPkDBKzoPCQkg"
},

 {username: "t",
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


projects = Project.create([
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
    location: "Australia",
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
    location: "Australia",
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
    location: "france",}
    ]
)