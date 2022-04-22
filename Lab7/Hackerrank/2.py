def minion_game(string):
    # your code goes here
    vowels = "AEUIO"
    kn = 0
    st = 0
    for i in range(len(string)):
        if string[i] in vowels:
            kn += len(string) - i
        else:
            st += len(string) - i
    if kn > st: print("Kevin", kn)
    elif st > kn: print("Stuart", st)
    else: print("Draw")
if __name__ == '__main__':
    s = input()
    minion_game(s)