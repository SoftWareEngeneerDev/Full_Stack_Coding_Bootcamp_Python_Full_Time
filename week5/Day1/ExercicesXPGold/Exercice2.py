class MyList:
    def __init__(self,list):
        self.list = list

    def listReverse(self):
        return reversed(self.list)
    def trie(self):
        return self.list.sort()

kaga = MyList(["k","a","g","a","m"])


print(kaga)
print(kaga.listReverse())
print(kaga.trie())

"""liste = ["k","a","g","a","m"]
print(liste)
rev = liste.reverse()
print(rev)"""