"""
- Log decorator function
- Create a file based on the current time
- Function called, time called, time taken, result.
- Decorators 
- Python filr system in built
- Python time
"""

import time
from datetime import date, datetime

def logger(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        print(f"start time ${start_time}")
        result = func(*args, **kwargs)
        end_time = time.time()
        diff = end_time - start_time
        diff_in_ms = round(diff * 1000, 2)
        today = date.today()
        timestamp = datetime.now().isoformat()
        with open(f"{today}.txt", "a") as f:
            f.write(f"ts:{timestamp}---func:{func.__name__}---time:{diff_in_ms}.ms\n")
        return result
    return wrapper

@logger
def hello():
    print ("Hello World")

@logger
def big_count():
    for i in range (0, 100):
        print (i)
        pass

hello()
big_count()