class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age
#chat1 = Cat("Bruno", 3)
#print(chat1.name, chat1.age)
def older():
    chat1 = Cat("Bruno", 3)
    chat2 = Cat("Miou",6)
    chat3 = Cat("brish",4)

    max = chat1.age
    if max > chat1.age:
        max = chat1.age
        name = chat1.name
    if max > chat2.age:
        max = chat2.age
        name = chat2.name
    if max > chat3.age:
        max = chat3.age
        name = chat3.name
   print(name)

older()