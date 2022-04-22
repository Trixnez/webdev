x = int(input())
d = int(input())
cnt = 0
for i in range(len(str(x))):
    if str(x)[i] == d:
        cnt += 1
print(cnt)