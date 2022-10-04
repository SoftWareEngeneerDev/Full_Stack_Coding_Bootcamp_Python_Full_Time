class Family:
    def __init__(self, last_name):
       self.member = [
                    {
                       'name': 'Michael',
                       'age': 35,
                       'gender': 'Male',
                       'is_child': False
                     },

                    {
                        'name': 'Sarah',
                        'age': 32,
                        'gender': 'Female',
                        'is_child': False
                    }
       ]
       self.last_name = last_name

    def born(self, **kwargs):
        dict = {}
        for x,y in kwargs.items():
            dict[x] = y
        self.member.append(dict)
        print(f'{self.last_name} was born and his name is{kwargs["name"]} congrutilation!!!')

    def is_18(self, name):
        for i in range(0, len(self.member)):
            if self.member[i]['name'] == name:
                if self.member[i]['age'] >= 18:
                    return True
                else:
                    return False
            else:
                print("Le nom que vous avez renseigner n'est pas dans le dico")

    def family_presentation(self):
        print("Le nom de la famille est :", self.last_name)
        for i in range(0, len(self.member)):
            print(self.member[i]['name'])


Ma_famille = Family('KAGAMBEGA')

Ma_famille.born(name='Aboubacar', age=80, gender='Male', is_child=True)

Ma_famille.is_18('Michael')
Ma_famille.family_presentation()