n = int(input())
a = list(map(int, input().split()))
s = 0
for i in range(1, n):
    if abs(a[i]) // a[i] == abs(a[i-1]) // a[i-1]:
        s += 1
if s:
    print("YES")
else:
    print("NO")