a = int(input())
d = 0
for i in range(len(str(a))):
    d += a % 10
    a = a // 10
print(int(d)) 