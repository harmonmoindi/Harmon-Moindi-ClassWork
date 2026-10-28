#Array . []
#list . []
#dictionary . {}
#tuple . ()
#single linked list & double linked list

from platform import node
from symtable import Class


class Node:
    def __init__(self, value, next=None):
        self.data = value
        self.next = next

    def print_node(self):
        current = self
        print("Current value", current.data)
        print("Next value", current.next)
        print("Node value is", self.data)

#manual way of adding nodes
c = Node(value=18, next=None) #single linked list
b = Node(value=12, next=c)
a = Node(value=6, next=b)

print ("Node a value is")
a.print_node()
print ("Node b value is")
b.print_node()
print ("Node c value is")
c.print_node()



class LinkedList:
    def __init__(self):
        self.start = None

    def append(self, value): #append function
        newNode = Node(value)
        if not self.start:
            self.start = newNode
            self.last = newNode
            return newNode
        last_node = self.last #getting last node
        last_node.next = newNode #next none
        self.last = newNode
        return newNode

    def list_items(self):
        current = self.start
        if not current:
            print("Our list is empty")
            return
        while current:
            print("Current value", current.data)
            print (current.__dict__)
            if not current.next:
                print("Found the last node")
                return
            current = current.next


my_list = LinkedList()
my_list.append(60)
my_list.append(125)
my_list.append(1805)
my_list.list_items()