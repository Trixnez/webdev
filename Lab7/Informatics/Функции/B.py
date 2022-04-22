def power(a, n):
    if n == 0:
        return 1
    if n % 2 == 0:
        return power(a*a, n / 2)
    return a * power(a, n - 1)
 
a, n = list(map(float, input().split()))
print(power(a, int(n)))