magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

def show_magicians(magician):
    #print(type(len(magician)))
    for i in range(0,len(magician)):
        print(magician[i])

def make_great(Great):
    Great.append("the Great")

make_great(magician_names)
print("-------------------------------------------------")
show_magicians(magician_names)
print("-------------------------------------------------")