# Big O Notation
#Loops - linear time complexity O(n)
#constant time complexity O(1) - Execution time stays the same regardless of input size
#O(log n) - logarithmic time complexity - Binary search
import time


def up_to_n(n):
    sum = 0
    for i in range(1, n + 1):
        sum = sum + i
        print ("i is", i, "Sum is", sum)
    return sum
start_time = time.perf_counter()
up_to_n(5)
end_time = time.perf_counter()
diff_ms = (end_time - start_time) * 1000
print("Time taken:", diff_ms, "ms")

def up_to_n_2(n):
    sum = n*(n + 1) / 2
    print ("Sum for n2 is", sum)
    return sum
start_time = time.perf_counter()
up_to_n_2(50000)
end_time = time.perf_counter()
diff_ms = (end_time - start_time) * 1000
print("Time taken:", diff_ms, "ms") 
