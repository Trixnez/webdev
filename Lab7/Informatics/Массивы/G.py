n = int(input())
a = list(map(int, input().split()))
for i in range(n//2):
    t = a[i]
    a[i] = a[n-i-1]
    a[n-i-1] = t
print(*a, sep = " ")