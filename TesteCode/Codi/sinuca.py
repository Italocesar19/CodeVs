import math
from turtle import *

speed(3000)
bgcolor("black")
penup()  # Levanta a caneta para não desenhar linhas ao mover

def heart1(k):
    return 15 * math.sin(k)**3

def heart2(k):
    return 12 * math.cos(k) - 5 * math.cos(2 * k) - 2 * math.cos(3 * k) - math.cos(4 * k)

# Desenhando o coração
for i in range(6000):
    goto(heart1(i) * 20, heart2(i) * 20)
    pendown()
    color("#f73480")
    dot(2)  # Desenha pequenos pontos para formar o coração
    penup()

# Posicionando a frase no centro do coração
goto(0, -20)  # Ajuste fino da posição para centralizar a frase
color("white")
write("I LOVE", align="center", font=("Arial", 24, "bold"))  # Escreve a frase

hideturtle()  # Esconde a tartaruga
done()
