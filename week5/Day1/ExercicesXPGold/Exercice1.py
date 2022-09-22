class Circle:
    def __init__(self,rayon = 1):
        self.rayon = rayon

    def perimeter(self):
        return 2*3.14*self.rayon

    def area(self):
        return 3.14*self.rayon*self.rayon


def circle_Geo(self):
   Circle1 = Circle()
   print("Le rayon du circle est :",Circle1.rayon," son périmetre est :",Circle1.perimeter()," sa surface est :",Circle1.area())

circle_Geo(self=1)


