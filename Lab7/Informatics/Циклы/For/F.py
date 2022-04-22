a = int(input())
d = ""
for i in range(len(str(a))):
    d += str(a % 10)
    a = a // 10
print(int(d))