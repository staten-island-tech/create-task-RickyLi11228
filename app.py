import random
response = 0
list = []
randomnumber = int(random.randrange(1,3))
if int(randomnumber) == 1:
    response = "Rock"
elif int(randomnumber) == 2:
    response = "Paper"
elif int(randomnumber) == 3:
    response = "Scissors"
def rps():
   Input = input("Rock Paper or Scissors?: ")
   Input = Input.lower()
   if Input == "rock" and response == "Paper":
       print("You lose")
       list.append("lose")
   elif Input == "scissors" and response == "Paper":
       print("You won")
       list.append("win")
   elif Input == "rock" and response == "Scissors":
       print("You won")
       list.append("win")
   elif Input == "paper" and response == "Scissors":
       print("You lost")
       list.append("lose")
   elif Input == "paper" and response == "Rock":
       print("You won")
       list.append("win")
   elif Input == "scissors" and response == "Rock":
       print("You lost")
       list.append("lose")
   elif Input == response.lower():
       print("You draw")
       list.append("draw")
   else:
       print("Error")
   print(response)
continue_play = input("Would you like to keep playing? Y/N 💖 ")
while continue_play.upper() == "Y":
    rps()
    continue_play = input("Would you like to keep playing? Y/N 💖 ")
print("Your history:",list)