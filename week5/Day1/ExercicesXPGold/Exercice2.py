class MyList:
    def __init__(self,list):
        self.list = list

    def affichage(self):
        print(self.list)

    def listReverse(self):
        self.list.reverse()

    def trie(self):
        self.list.sort()

    def listAleatoir(self):
        liste2 = []
        for i in range(0,5):
            liste2.append(i)
        print(liste2)



MonListe = MyList(["k","a","g","a","m"])
MonListe.affichage()
MonListe.listReverse()
MonListe.affichage()
MonListe.trie()
MonListe.affichage()
MonListe.listAleatoir()
