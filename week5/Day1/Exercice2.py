class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height

    def bark(self):
        print("Le nom du chien est :",self.name)

    def jump(self):
        print(self.name," jumps ",self.height*2," cm de haut ! ».")
        taille = self.height*2

davids_dog = Dog("Rex",50)
print(davids_dog.bark())
print(davids_dog.jump())

sarahs_dog = Dog("Teacup",20)
print(sarahs_dog.bark())
print(sarahs_dog.jump())

"""if taille1> taille2:
    print(davids_dog.bark(),"est le plus grand et sa taille est :", davids_dog.jump())
else:
    print(sarahs_dog.bark(),"est le plus grand et sa taille est :", sarahs_dog.jump())"""