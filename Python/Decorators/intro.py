"""
Decorators are a powerful tool.
Modifying or extending the behavior of functions or methods without changing
their code.

- A decorator function should take another function as an argument/parameter.
- It should have a wrapper function.
- This function calls the passed function. 

- To use a decorator you use;
@<decorator function> before function defination. 
"""

def my_deco(func):
    def wrapper():
        print("This is before we call the function")
        func()
        print("This is after we call the function")
    return wrapper

@my_deco
def kenyan_hello():
    print("Swahili: Hamna jambo, la kuambaa?")
    print("Tuambaa jasho la biryani, maisha peupe nyororo")

kenyan_hello()

#Example2
def my_deco2(func):
    def wrapper():
        print("This is my example practise")
        func()
        print("This is the end of my example practice")
    return wrapper()

@my_deco2
def hello():
    print ("Previously on Python vs Js")
    print ("Hello viewers")

hello()