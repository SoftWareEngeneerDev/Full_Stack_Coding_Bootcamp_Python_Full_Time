from Exercice1 import Family

class TheIncredibles(Family):

    def __init__(self, last_name):
        super().__init__(last_name)
        self.member[0]['power'] = 'fly'
        self.member[0]['incredible_name'] = 'MikeFly'

        self.member[1]['power'] = 'read minds'
        self.member[1]['incredible_name'] = 'SuperWoman'

    def use_power(self, last_name):
        rep = self.is_18(last_name)
        if rep == True:
            for i in self.member:
                if self.member[i]['name'] == last_name:
                    print(self.member[i]['name'], "use is power , his power name is ", self.member[i]['power'])
        else:
            raise Exception(f'{last_name} you are not over 18 years old so you are not allowed to use your power')

    def incredible_presentation(self):

        self.family_presentation()
        print("--------------------------------------------------------------------------------")
        for i in self.member:
            print(f'----- {i["name"]} allias {i["incredible_name"]} Power can {i["power"]} -----')
        print('\n')


Michael = TheIncredibles('Michael')
Michael.incredible_presentation()
Michael.born(name='Baby Jack', age=0, gender='Male', is_child=True, power='Unknow Power', incredible_name='Unknow')
Michael.incredible_presentation()
Michael.use_power('Sarah')
Michael.use_power('Michael')
Michael.use_power('Baby Jack')
