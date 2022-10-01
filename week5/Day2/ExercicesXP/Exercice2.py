class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
    def bark(self):
        print(self.name, " aboie")

    def run_speed(self):
        return (self.weight/self.age)*10

    def fight(self, other_dog):

        weight1 = self.run_speed()*self.weight
        weight2 = other_dog.run_speed() * other_dog.weight

        if weight1 > weight2:
            print(self.name, f' power= {weight1} is winner of the fight vs ', other_dog.name, f' power= {weight2}')
        elif weight1 == weight2:
            print(f'tie in fight {self.name} and {other_dog.name} are equal')
        else:
            print(f'{other_dog.name} power= {weight2} is the winner of the fight vs {self.name} power= {weight1}')



Sheldon = Dog('Seldon', 6, 25)
Sheldon.bark()
Sheldon.run_speed()

Fayvor = Dog('Fayvor', 8, 20)
Fayvor.bark()
Fayvor.run_speed()

Loulou = Dog('Loulou', 5, 30)
Loulou.bark()
Loulou.run_speed()

Sheldon.fight(Fayvor)
Sheldon.fight(Loulou)
Fayvor.fight(Loulou)



