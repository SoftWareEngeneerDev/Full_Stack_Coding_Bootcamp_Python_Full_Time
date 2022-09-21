class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

def older():
    chat1 = Cat("Bruno", 3)
    chat2 = Cat("Miou",6)
    chat3 = Cat("brish",4)
    age_chat=[chat1.age,chat2.age,chat3.age]
    max_age = age_chat[0]
    for i in range(0,len(age_chat)):
        if age_chat[i] >max_age:
            max_age = age_chat[i]
    print("le plus agé a",max_age,"ans")


print(older())

