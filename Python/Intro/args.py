#Tuple 
#

def my_args(*args):
    print(f"Type of args {type(args)}")
    print(args)
    print(f"first arg {args[0]}")
    print("------------------------------")

my_args(30,45,100,105,127)
my_args("Harmon", False, 50, "Moindi")

def area_rectangle(length, width):
    area = length * width
    print("-------------------------------")
    print(f"For rec with length{length} and width {width} area is {area}")
    print("-------------------------------")

area_rectangle(30,50)

def sum(a,b):
    ans = a+b

def sum2(*args):
    #tupple
    ans = 0
    for n in args:
        print(f"n is {n}")
        ans = ans + n
    print(f"Sum is {ans}")


sum2(100, 50, 37, 829, 10, 27)
