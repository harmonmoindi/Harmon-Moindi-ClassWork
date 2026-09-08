'''
try {} catch (e) {} throw
try except exception as (e)
try except <>
raise
syntax, name, typeError, valueError
zeroDivision
Index Error<list>, keyword
Exception as e
'''

try:
    result = 10/0
except ZeroDivisionError:
    print ("Zero division")
except Exception as e:
    print(e)
finally:
    print("completed error handling")


class Pos(Exception):
    pass

raise Pos("Not Enough items")
     