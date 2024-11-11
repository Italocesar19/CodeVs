import math
from turtle import *

speed(10000)
bgcolor("black")

def heart1(a):
    result = 12 * math.sin(a) ** 3
    print(f"heart1({a}) = {result}")  # Debugging print
    return result

def heart2(b):
    result = 10 * math.cos(b) - 5 * math.cos(2 * b) - 2 * math.cos(3 * b) - math.cos(4 * b)
    print(f"heart2({b}) = {result}")  # Debugging print
    return result

for i in range(6000):
    x = heart1(i) * 20
    y = heart2(i) * 20
    print(f"goto({x}, {y})")  # Debugging print
    goto(x, y)
    
    for i in range(5):
        color("#f73480")
        goto(0, 0)

done()
