"""
Inheritance
Can extend class using another class.
-> a class inherits methods and properties of another class.
-> DRY -> Don't Repeat Yourself
--------------------------------------
Biology Classification
--------------------------------------
shapes 
Rectangle and Square . <triangle>
--- shapes .<shape_name>
--- sides .<rectangle, square, trapezium> sideA, sideB, sideC
--- area .<>
--- methods. perimeter of the rectangle.
--------------------------------------
"""

class Rectangle:
    def __init__(self, length, width):
        self.length = length
        self.width = width
        self.shape_name = "Rectangle"

    def area(self):
        area = self.length * self.width
        print (f"For reactangle length {self.length} and width {self.width}, area is {area}")

class Square:
    def __init__(self, side):
        self.length = side
        self.width = side
        self.shape_name = "Square"

    def area(self):
        area = self.length * self.width
        print (f"For square length {self.length} and width {self.width}, area is {area}")


r1 = Rectangle (length = 50, width = 30)
r1.area()

print (r1.shape_name)

s1 = Square (side = 50)
s1.area()
print (s1.shape_name)