class Zoo:
    def __init__(self,zoo_name):
        self.zoo_name = zoo_name
        self.animals =[]

    def add_animal(self,new_animal):
        if new_animal in self.animals:
            return self.animals
        else:
            self.animals.append(new_animal)
    def get_animals(self):
        for i in range(0,len(self.animals)):
            print(self.animals[i])
    def sell_animal(self,animal_sold):
        if animal_sold in self.animals:
            self.animals.pop("animal_sold")
        else:
            return self.animals
    def sort_animals(self):
        self.animals.sort()

    def get_groups(self):
        for i in range(0,len(self.animals)):
            print(self.animals[i])

#Appelle des fonctions
ramat_gan_safari = Zoo("Bangre-Weogo")
ramat_gan_safari.add_animal("Lion")
ramat_gan_safari.get_groups()
ramat_gan_safari.sell_animal("Lion")
ramat_gan_safari.sort_animals()
