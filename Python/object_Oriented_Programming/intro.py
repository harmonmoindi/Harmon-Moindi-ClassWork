'''
Object oriented programming.
<JS, Python, Java, C++, C#, Ruby, etc. are some of the programming languages that support object-oriented programming (OOP). 
OOP is a programming paradigm that uses objects and classes to structure code in a way that is more modular and reusable.>
-------------------------------------------------

Concept in programming to make work easier by using principles.
1. Encapsulation:
        - Keeping data and methods <functions> inside a class while 
        restricting direct access to internal data. 
2. Abstraction:
        - Hiding the complex implementation details and showing only the necessary features of an object.
3. Inheritance:
        - A mechanism where a new class can inherit properties and behaviors (methods) from an existing class.
4. Polymorphism:
        - The ability of different classes to be treated as instances of the same class through a common interface. 
        It allows methods to do different things based on the object it is acting upon.
-----------------------------------------------------

JS and Python are object-oriented programming languages. 
--> number.toString() is a method in JavaScript that converts a number to a string representation.
--> string.toLowerCase() is a method in JavaScript that converts a string to lowercase letters.
'''

"""
Class
- blueprint for an object.

- Class could be an architectural design of a building, 
while an object is the actual building constructed based on that design.
"""

class House:
    bedrooms = 5
    bathrooms = 3
    floors = 1
    area = 1700
    owner = ""
    location = ""
    architect = "Moindi"

    def config(self, owner, location):
        self.owner = owner
        self.location = location

    def print_self(self):
        # This prints the object itself. 
        print(self)
        print(self.__dict__)

Lucy_house = House()
#Lucy_house.owner = "Lucy"
#Lucy_house.location = "Nairobi"
Lucy_house.config(owner="Lucy", location="Nairobi")
print (f"Lucy's House Owner is {Lucy_house.owner}")
print (f"Lucy's location is {Lucy_house.location}")
print (f"Lucy's House Architect is {Lucy_house.architect}")
print (f"Lucy's House bathrooms is {Lucy_house.bathrooms}")
print (f"Lucy's House bedrooms is {Lucy_house.bedrooms}")
print (f"Lucy's House floors is {Lucy_house.floors}")
print (f"Lucy's House area is {Lucy_house.area}")
Lucy_house.print_self()
print ("-----------------------------------")

Harmon_house = House()
Harmon_house.config(owner="Harmon", location="Mombasa")
print (f"Harmon's House Owner is {Harmon_house.owner}") 
print (f"Harmon's House Location is {Harmon_house.location}") 
print (f"Harmon's House Architect is {Harmon_house.architect}")
print (f"Harmon's House bathrooms is {Harmon_house.bathrooms}")
print (f"Harmon's House bedrooms is {Harmon_house.bedrooms}")
print (f"Harmon's House floors is {Harmon_house.floors}")
print (f"Harmon's House area is {Harmon_house.area}")
Harmon_house.print_self()
print ("-----------------------------------")
