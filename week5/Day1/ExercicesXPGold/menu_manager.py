class MenuManager:
    def __init__(self):
        menu = ["soup":{
            'name':'soup',
            'price':10,
            'spice':'a little spicy',
            'gluten':'false',
            },
            "Hamburger" : {
            'name': 'Hamburger',
            'price': 15,
            'spice': 'not spicy',
            'gluten': 'true',
             },
            "Salad": {
            'name': 'Salad',
            'price': 18,
            'spice': 'not spicy',
            'gluten': 'false',
             },
            "French Fries": {
            'name': 'French Fries',
            'price': 5,
            'spice': 'very spicy',
            'gluten': 'false',
            },
            "Beef bourguignon": {
            'name': 'Beef bourguignon',
            'price': 25,
            'spice': 'a little spicy',
            'gluten': 'true',
             },
        ]

    def add_item(name, price, spice, gluten):
        menu.update({
        'name': name,
        'price': price,
        'spice': spice,
        'gluten': gluten,
            })

        #print(menu.keys())
        #print(menu.values())
        #print(menu['Riz'])

MyMenu = MenuManager()

MyMenu.add_item('Riz','56','a litle spicy')