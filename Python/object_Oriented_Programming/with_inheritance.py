"""
Shape class
properties and methods common to all shapes.
"""

class Shape:
    def __init__(self, shape_name):
        self.shape_name = shape_name

    def describe (self):
        print (f"This is a {self.shape_name}")

    def display_info (self):
        print ("--------------------------------------")
        print (f"Shape: {self.shape_name}")
        print (f"Area: {self.area()}")
        print (f"Perimeter: {self.perimeter()}")
        print ("--------------------------------------")

    #method area
    def area (self):
        print(f"For shape {self.shape_name}, area calculations missing")

    def perimeter (self):
        print(f"For shape {self.shape_name}, perimeter calculations missing")

#inheritance class Name (<class inherited from>)

class Rectangle (Shape):
    def __init__(self, length, width):
        """
        name shape shape
        super <class we are inheriting from> .__init__ (<parameters>)
        self <specific object of the class> .<property> = <value>
        """
        super().__init__(shape_name = "Rectangle")
        self.length = length
        self.width = width

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 2 * (self.length + self.width)

class triangle (Shape):
    def __init__(self, base, height):
        super().__init__(shape_name = "Triangle")

#square class inherits from shape class
class Square (Shape):
    def __init__(self, side):
        super().__init__(shape_name = "Square")
        self.length = side
        self.width = side

    def area(self):
        return self.length * self.width

    def perimeter(self):
        return 4 * self.length

s1 = Square (side = 50)

s1.describe()
s1.display_info()

"""
r1 = Rectangle (length = 50, width = 30)

print ("Shape name:", r1.shape_name)
print ("Area:", r1.area())
print ("Perimeter:", r1.perimeter())


r1.describe()
r1.display_info()
"""

t1 = triangle (40, 60)
t1.area()
t1.perimeter()