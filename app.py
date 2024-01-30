import random
response = 0
list = []
def rps():
   Input = input("Rock Paper or Scissors?: 💋 ")
   Input = Input.lower()
   if Input == "rock" and response == "Paper" or Input == "paper" and response == "Scissors" or Input == "scissors" and response == "Rock":
       print("You lose")
       list.append("lose")
   elif Input == "scissors" and response == "Paper" or Input == "rock" and response == "Scissors" or Input == "paper" and response == "Rock":
       print("You won")
       list.append("win")
   elif Input == response.lower():
       print("You draw")
       list.append("draw")
   else:
       print("Error, check your spelling")
   print(response)
continue_play = "Y"
while continue_play.upper() == "Y":
    randomnumber = int(random.randrange(1,3))
    if int(randomnumber) == 1:
        response = "Rock"
    elif int(randomnumber) == 2:
        response = "Paper"
    elif int(randomnumber) == 3:
        response = "Scissors"
    rps()
    continue_play = input("Would you like to keep playing? Y/N 💖 ")
print("Your history 🤓🤓🤓 :",list)