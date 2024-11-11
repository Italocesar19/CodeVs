from turtle import Screen, Turtle

# Definindo o Screen (janela)
wn = Screen()
wn.bgcolor("black")
wn.setup(width=450, height=500)
wn.title("Heart")

# Definindo o Turtle
heart = Turtle()
heart.pencolor("red")
heart.pensize(3)
heart.speed(0)

# Função para desenhar o coração
def draw_heart():
    heart.fillcolor("red")
    heart.begin_fill()  # Começa a preencher o coração
    heart.left(140)
    heart.forward(113)
    heart.circle(-57, 200)
    heart.left(120)
    heart.circle(-57, 200)
    heart.forward(112)
    heart.end_fill()  # Termina o preenchimento do coração

# Função para escrever o texto dentro do coração
def write_text(message, pos):
    x, y = pos
    heart.penup()
    heart.goto(x, y)
    heart.pendown()
    heart.color("white")
    style = ('Script MT Bold', 30, 'bold')  # Definindo a fonte e tamanho
    heart.write(message, font=style, align="center")
    heart.hideturtle()  # Esconde a tartaruga depois de escrever

# Desenha o coração
draw_heart()

# Escreve o texto no meio do coração
write_text("I LOVE SUICIDE", (0, -10))

# Mantém a janela aberta
wn.mainloop()
