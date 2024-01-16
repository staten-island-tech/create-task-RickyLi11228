import random
guess_history = []
guess = int(input("Pick a number between 1 and 100000 "))
guess_history.append(guess)
randomnumber = int(random.randrange(1,100000))
while guess != randomnumber: 
    if int(guess) > randomnumber:
        print("Lower")
        guess = input("Pick a different number ")
        guess_history.append(guess)
    elif int(guess) < randomnumber:
        print("Higher")
        guess = input("Pick a different number ")
        guess_history.append(guess)
    else:
        break
print("Correct!")
print("Your guess history:")
for guess in guess_history:
   print(guess)