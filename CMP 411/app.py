
#Inheritance
# Parent class
class Animal:
    def eat(self):
        print("This animal is eating.")

# Child class inherits from Animal
class Dog(Animal):
    def bark(self):
        print("Woof!")

my_dog = Dog()
my_dog.eat()  # Inherited from Animal [cite: 520]
my_dog.bark() # Defined in Dog


#polymorphism
class Cat:
    def speak(self):
        print("Meow!")

class Dog:
    def speak(self):
        print("Woof!")

# Same function name works differently for each object [cite: 527]
for animal in [Cat(), Dog()]:
    animal.speak()

#Abstraction
class CoffeeMachine:
    def make_coffee(self):
        self._boil_water() # Hidden step
        print("Coffee is ready!")

    def _boil_water(self): # Internal detail you don't see
        print("Boiling water...")

my_machine = CoffeeMachine()
my_machine.make_coffee() # You only care about this part [cite: 535]

#Encapsulation
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance # Private data (wrapped/protected) [cite: 530]

    def get_balance(self):
        return self.__balance

account = BankAccount(1000)
print(account.get_balance())
# You cannot access account.__balance directly; it's encapsulated [cite: 530]