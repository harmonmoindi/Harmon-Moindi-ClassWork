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

class BankAccount:
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
        pass

    def withdraw(self, amount):
        pass

    def show_account_details(self):
        print(f"Account Owner: {self.name}")
        print(f"Account Balance: {self.balance}")
        print(f"Account Number: {self.account_no}")

harmon = BankAccount(name="Harmon Moindi", balance=80000, account_no=123456)
harmon.show_account_details()
harmon.balance = 95000
harmon.show_account_details()