age = 88

#if (<conditions>){}

if age>70:
    print("You can smoke, it's almost over anyway.")
    print("You want something stronger?")
    if age == 20:
        print("Welcome to Adulthood")
    print("Another line")
    if age > 90:
        pass

#else if
elif age == 50:
    print("You are not that young anymore, quit it before it ends you.")
else: 
    print("Last else")


# range(start, stop, step)
for i in range (0, 10, 2):
    print ("I is ", i)

array = [50, "sugar water", 40, 32, 15] #5

for i in range(0, len(array)):
    single_item = array[i]
    print (single_item)

for single_item in array:
    print ("Single item is", single_item)
