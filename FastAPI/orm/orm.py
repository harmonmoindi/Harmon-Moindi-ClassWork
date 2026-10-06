#Object Relational Mapping
# is a programming technique for converting data between incompatible type systems in object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

class Inventory:
    def __init__(self, db):
        self.db = db

    def create_table(self):
        #creating an inventory table
        query = """
            CREATE TABLE IF NOT EXISTS inventory (
                id SERIAL PRIMARY KEY,
                name VARCHAR(250) NOT NULL,
                quantity INTEGER NOT NULL,
                buying_price INTEGER NOT NULL,
                selling_price INTEGER NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        """
        with self.db.get_cursor() as cursor:
            cursor.execute(query)
            print ("Inventory table created successfully.")

    def add_item(self, name, quantity, buying_price, selling_price):
        query = """
            INSERT INTO inventory (name, quantity, buying_price, selling_price)
            VALUES (%s, %s, %s, %s);
        """
        with self.db.get_cursor() as cursor:
            cursor.execute(query, (name, quantity, buying_price, selling_price))
            print(f"Item '{name}' added successfully.")

    def get_all_items(self):
        query = "SELECT * FROM inventory;"
        with self.db.get_cursor() as cursor:
            cursor.execute(query)
            items = cursor.fetchall()
            return items

if __name__ == "__main__":
    from db import Database

    db = Database()
    inventory = Inventory(db)

    # Create the inventory table
    inventory.create_table()

    # Add an item to the inventory
    inventory.add_item("Laptop", 10, 500, 700)

    # Retrieve and print all items in the inventory
    items = inventory.get_all_items()
    print(items)
    for item in items:
        print(item)
