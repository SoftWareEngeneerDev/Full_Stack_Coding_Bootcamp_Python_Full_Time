people = ["Rick", "Morty", "Beth", "Jerry", "Snowball"]

def nameFonc(name):
     if len(name)<=4:
         print("Hello"+name)
         return true
     else:
         return false
#print(nameFonc('kagam'))

#MapFunct = map(nameFonc,people)
#print(list(MapFunct))
#print(MapFunct)
print("------------------------------------Filter----------------------------------------")
FilterFunct = filter(nameFonc,people)
print(list(FilterFunct))
#print(list(map(lambda s: print(s),list(FilterFunct))))