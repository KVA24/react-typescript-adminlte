export const data: any = [
	{
		id: 0,
		role: "ADMIN",
		menu: [
			{
				"id": 0,
				"name": "Home",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/dashboard'],
				"subMenu": [
					{
						"id": 0,
						"name": "Dashboard",
						"link": '/dashboard'
					}
				]
			},
			{
				"id": 1,
				"name": "Users",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/user', '/delete-user'],
				"subMenu": [
					{
						"id": 0,
						"name": "Users",
						"link": '/user'
					}
				]
			},
			{
				"id": 2,
				"name": "Banner",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/banner'],
				"subMenu": [
					{
						"id": 0,
						"name": "Banner",
						"link": '/banner'
					},
				]
			},
			{
				"id": 3,
				"name": "Payments",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/payment', '/add-payment'],
				"subMenu": [
					{
						"id": 0,
						"name": "Payments",
						"link": '/payment'
					},
					{
						"id": 1,
						"name": "Add New Payment",
						"link": '/add-payment'
					},
				]
			},
			{
				"id": 4,
				"name": "Games",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/game'],
				"subMenu": [
					{
						"id": 0,
						"name": "Games Category",
						"link": '/game-category'
					},
					{
						"id": 1,
						"name": "Games List",
						"link": '/game-list'
					},
					{
						"id": 2,
						"name": "Add new game",
						"link": '/add-new-game'
					},
				]
			},
			{
				"id": 5,
				"name": "Transaction",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/transaction'],
				"subMenu": [
					{
						"id": 0,
						"name": "Transaction List",
						"icon": "fas fa-user-friends",
						"link": '/transaction'
					}
				]
			},
			{
				"id": 6,
				"name": "Promotion",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/promotionType'],
				"subMenu": [
					{
						"id": 0,
						"name": "Promotion Type",
						"icon": "fas fa-user-friends",
						"link": '/promotionType'
					}
				]
			},
			{
				"id": 7,
				"name": "Language",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/promotionType'],
				"subMenu": [
					{
						"id": 0,
						"name": "Language List",
						"icon": "fas fa-user-friends",
						"link": '/language'
					}
				]
			}
		]
	},
	{
		id: 1,
		role: "PUBLISHER",
		menu: [
			{
				"id": 0,
				"name": "Home",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/dashboard'],
				"subMenu": [
					{
						"id": 0,
						"name": "Dashboard",
						"link": '/dashboard'
					},
					{
						"id": 1,
						"name": "Users Access",
						"link": '/user-access'
					}
				]
			},
			{
				"id": 3,
				"name": "Games",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/game'],
				"subMenu": [
					{
						"id": 1,
						"name": "Games List",
						"link": '/game-list'
					}
				]
			},
			{
				"id": 4,
				"name": "Transaction",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/transaction'],
				"subMenu": [
					{
						"id": 0,
						"name": "Transaction List",
						"icon": "fas fa-user-friends",
						"link": '/transaction'
					}
				]
			}
		]
	},
	{
		id: 2,
		role: "PAYMENT_MYTEL",
		menu: [
			{
				"id": 0,
				"name": "Transaction",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/transaction'],
				"subMenu": [
					{
						"id": 0,
						"name": "Transaction List",
						"icon": "fas fa-user-friends",
						"link": '/transaction'
					}
				]
			}
		]
	},
	{
		id: 3,
		role: "MANAGER",
		menu: [
			{
				"id": 0,
				"name": "Home",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/dashboard'],
				"subMenu": [
					{
						"id": 0,
						"name": "Dashboard",
						"link": '/dashboard'
					}
				]
			},
			{
				"id": 3,
				"name": "Games",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/game'],
				"subMenu": [
					{
						"id": 1,
						"name": "Games List",
						"link": '/game-list'
					}
				]
			},
			{
				"id": 4,
				"name": "Transaction",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/transaction'],
				"subMenu": [
					{
						"id": 0,
						"name": "Transaction List",
						"icon": "fas fa-user-friends",
						"link": '/transaction'
					}
				]
			}
		]
	},
	{
		id: 4,
		role: "SUPPORTER",
		menu: [
			{
				"id": 4,
				"name": "Transaction",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/transaction'],
				"subMenu": [
					{
						"id": 0,
						"name": "Transaction List",
						"icon": "fas fa-user-friends",
						"link": '/transaction'
					}
				]
			}
		]
	},
	{
		id: 4,
		role: "OPERATOR",
		menu: [
			{
				"id": 0,
				"name": "Home",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/dashboard'],
				"subMenu": [
					{
						"id": 0,
						"name": "Dashboard",
						"link": '/dashboard'
					}
				]
			},
			{
				"id": 4,
				"name": "Transaction",
				"icon": "fas fa-user-friends",
				"rootMenu": ['/transaction'],
				"subMenu": [
					{
						"id": 0,
						"name": "Transaction List",
						"icon": "fas fa-user-friends",
						"link": '/transaction'
					}
				]
			}
		]
	},
];