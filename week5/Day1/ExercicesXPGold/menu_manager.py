class MenuManager:
    def __init__(self):
        self.menu = [
            {
                'name': 'soup',
                'price': 10,
                'spice': {'B': 'a little spicy'},
                'gluten': 'false'
            },
            {
                'name': 'Hamburger',
                'price': 15,
                'spice': {'A': 'not spicy'},
                'gluten': 'true'
            },
            {
                'name': 'Salad',
                'price': 18,
                'spice': {'A': 'not spicy'},
                'gluten': 'false'
            },
            {
                'name': 'French Fries',
                'price': 5,
                'spice': {'C': 'very spicy'},
                'gluten': 'false'
            },
            {
                'name': 'Beef bourguignon',
                'price': 25,
                'spice': {'B': 'a little spicy'},
                'gluten': 'true'
            },
        ]

    def add_item(self, name, price, spice, gluten):
        if spice.upper() == 'C':
            spice = {'C': 'very spicy'}
        elif spice.upper() == 'B':
            spice = {'B': 'a little spicy'}
        else:
            spice = {'A': 'not spicy'}

        nouveau_plat = {
            'name': name,
            'price': price,
            'spice': spice,
            'gluten': gluten
        }
        self.menu.append(nouveau_plat)
    def update_item(self, name, price, spice, gluten):

        if spice.upper() == 'C':
            spice = {'C': 'very spicy'}
        elif spice.upper() == 'B':
            spice = {'B': 'a little spicy'}
        else:
            spice = {'A': 'not spicy'}

        Plat_mise_A_jour = {
            'name': name,
            'price': price,
            'spice': spice,
            'gluten': gluten
        }
        if Plat_mise_A_jour in self.menu:
            print("Ce menu existe dans le menu")
        else:
            self.menu.append(Plat_mise_A_jour)

    def remove_item(self, name):
        for i in range(0,len(self.menu)):
            if MyMenu.menu[i]['name'] == name:
                Elem_A_Supprimer = MyMenu.menu[i]
                del Elem_A_Supprimer

        print("Le plat plat que vous avez renseigner n'existe pas dans le menu")


MyMenu = MenuManager()

MyMenu.update_item('Tot', '150', 'A', 'true')
MyMenu.remove_item('French Fries')
print(MyMenu.menu)
print(MyMenu.menu[0]['name'])