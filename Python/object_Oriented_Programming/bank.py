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
        

    #latter change gee
    def get_balance(self):
        pass

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