hello = "Hello World";
print(hello);

nombre = int(input("Entrer un nombre ici:"))
if nombre%3==0:
    print("Fizz")
if nombre%5==0:
    print("Buzz")
if nombre%3==0 and nombre%5==0:
    print("FizzBuzz")