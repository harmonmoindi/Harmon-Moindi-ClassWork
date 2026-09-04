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

Would you want to use a class property...

Static Metchod -> @staticmethod <class method>
"""


class BankAccount:
    bank_name = "Bank of Africa"  # Static property
    clients = 0  # Static property


    def __init__(self, name, balance, account_no):
        self.name = name
        self.balance = balance
        self.account_no = account_no
        #BankAccount.clients += 1
        BankAccount.add_client()  # Call the class method

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

    #static method.
    @staticmethod
    def calculate_interest (amount, year):
        rate = 10
        interest_per_year = amount * (rate / 100)
        total_interest = interest_per_year * year
        total = amount + total_interest
        print (f"If you take a loan of {amount}, interest rate per year {interest_per_year}")
        print (f"Total interest for {year} years is {total_interest}")

    #Class method
    @classmethod
    def add_client(cls):
        cls.clients = cls.clients + 1

harmon = BankAccount(name="Harmon Moindi", balance=80000, account_no=123456)
print ("Total clients in the bank is", BankAccount.clients)
#harmon.show_account_details()
harmon.balance = 95000
#harmon.show_account_details()

print(f"Bank Name: {BankAccount.bank_name}") #Class property
print(f"Number of Clients: {BankAccount.clients}") #Class property
print(f"Account Number: {harmon.account_no}") 
print(f"Account Balance: {harmon.balance}")

deborah = BankAccount(name="Deborah Chebet", balance=50000, account_no=654321)
print ("Total clients in the bank is", BankAccount.clients)