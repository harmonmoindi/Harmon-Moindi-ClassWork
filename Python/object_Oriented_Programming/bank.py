"""
Abstractions
Bank Class
deposits, withdrawals
show account
getter and setter
Easy to scale functions
------------------------------------

- Login account
- Create account
- Deposit money
- Withdraw money
- Show account details
"""

"""
Static properties. <It does not change>. <Belong to the class>
Static Method. <Function that belongs to the class>

Would you want to use a class property.
"""


class BankAccount:
    bank_name = "Bank of Africa"  # Static property
    clients = 0  # Static property


    def __init__(self, name, balance, account_no):
        self.name = name
        self.balance = balance
        self.account_no = account_no

    #data i read
    @property
    def balance(self):
        print ("Somebody tried top read your balance")
        return self._balance

    #to control, updated.
    @balance.setter
    def balance(self, value):
        if not isinstance(value, (int, float)):
            print ("Ensure you pass a number for new balance")
            return
        if value < 0:
            print ("Balance must be greater than zero")
            return
        self._balance = value

    #setter
    def deposit(self, amount):
        if isinstance(amount, (int, float)):
            self.balance += amount
        else:
            print("Invalid deposit amount. Please enter a valid number.")

    def withdraw(self, amount):
        if isinstance(amount, (int, float)):
            if 0 < amount <= self.balance:
                self.balance -= amount
            else:
                print("Invalid withdrawal amount or insufficient funds.")
        else:
            print("Invalid withdrawal amount. Please enter a valid number.")

    def show_account_details(self):
        print(f"Account Owner: {self.name}")
        print(f"Account Balance: {self.balance}")
        print(f"Account Number: {self.account_no}")

harmon = BankAccount(name="Harmon Moindi", balance=80000, account_no=123456)
#harmon.show_account_details()
harmon.balance = 95000
#harmon.show_account_details()

print(f"Bank Name: {BankAccount.bank_name}") #Class property
print(f"Number of Clients: {BankAccount.clients}") #Class property
print(f"Account Number: {harmon.account_no}") 
print(f"Account Balance: {harmon.balance}")