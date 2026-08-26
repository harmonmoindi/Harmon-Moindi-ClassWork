#testing kwargs

def myKwargs (**kwargs):
    print("Kwargs is", type(kwargs))
    print(kwargs)


myKwargs(a = 40, b = 23, v = 100)

myKwargs(name = "Harmon", email = "harmonmoindi@gmail.com", dict = {"a":"a"})

def area_rectangle(length, width):
    area = length * width
    print(f"For rectangle with length {length} and width {width} area is {area}")

#option 1 - call it directly with args.
area_rectangle (5, 2) #args
width = 4
length = 50
area_rectangle (width, length) #args
area_rectangle (width = width, length = length) #Kwargs
area_rectangle (width = 20, length = 60) #kwargs

#you have to match the parameter names with arguments
