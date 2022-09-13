alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z"]
voyelle = ["a","e","i","o","u","y"]
for letter in alphabet:
    if letter in voyelle:
        print(letter,"est une voyelle")
    else:
        print(letter,"est une consonne")
#print(len(alphabet))