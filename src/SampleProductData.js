import { faker } from '@faker-js/faker';
const	arrayOfProducts= [
		{
			imgUrl: "https://images.pexels.com/photos/5084352/pexels-photo-5084352.jpeg?cs=srgb&dl=pexels-apurva-singh-5084352.jpg&fm=jpg",
			name: "RAGGI LADDU",
			price: 110,
            description: faker.lorem.lines(1),
			ingredients : [
				"Ragi",
				"Jaggary",
				"DryFruit"
			],
			nutriants:[
               "Iron",
			   "Calcium",
			   "Carbs"
			]

		},
		{
			"imgUrl": "https://images.unsplash.com/photo-1553557202-e8e60357f061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80",
			"name": "RAGGI CHIPS",
			"price": 450,
            description: faker.lorem.lines(1),
			ingredients : [
				"Ragi",
				"Jaggary",
				"DryFruit"
			],
			nutriants:[
               "Iron",
			   "Calcium",
			   "Carbs"
			]

		},
		{
			"imgUrl": "https://images.pexels.com/photos/7133661/pexels-photo-7133661.jpeg?cs=srgb&dl=pexels-kiro-wang-7133661.jpg&fm=jpg",
			"name": "PEANUT LADDU",
			"price": 300,
            description: faker.lorem.lines(1),
			ingredients : [
				"Peanuts",
				"Jaggary",
				"Rasins"
			],
			nutriants:[
               "Iron",
			   "Calcium",
			   "Carbs"
			]

		},
		{
			"imgUrl": "https://images.pexels.com/photos/6210740/pexels-photo-6210740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
			"name": "CUP CAKES",
			"price": 500,
            description: faker.lorem.lines(1),
			ingredients : [
				"Sugar",
				"Chocolate",
				"WHeat"
			],
			nutriants:[
               "Iron",
			   "Calcium",
			   "Fat"
			]

		},
		{
			"imgUrl": "https://images.unsplash.com/photo-1613744479780-ca40bb7eeff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
			"name": "OAT COOKES",
			"price": 200,
            description: faker.lorem.lines(1),
			ingredients : [
				"Sugar",
				"OATS",
				"CornFlour"
			],
			nutriants:[
               "Magnisium",
			   "Calcium",
			   "Fat"
			]


		}
	]
    export default arrayOfProducts;
