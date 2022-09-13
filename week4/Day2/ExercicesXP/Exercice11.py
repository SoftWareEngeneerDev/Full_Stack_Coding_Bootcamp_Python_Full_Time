sandwich_orders = ["Tuna sandwich","Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Sabih sandwich","Pastrami sandwich", "Pastrami sandwich"]
finished_sandwiches = []
for sandwich in sandwich_orders:
    #print("Est ce le Sandwich est fini ? (Y/N)")
    reponse = input("Est ce le "+sandwich+" est fini ? (Y/N):")
    if reponse == "y" or reponse == "Y":
        finished_sandwiches.append(sandwich)
for finished_s in finished_sandwiches:
    print("I make your",finished_s)
print("-----Nous sommes à court de charcuterie pastrami sandwich-----")
for sandwichs in finished_sandwiches:
    if sandwichs == "Pastrami sandwich":
        finished_sandwiches.remove(sandwichs)

print(finished_sandwiches)

