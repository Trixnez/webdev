def min(a,b,c,d):
    arr = [a,b,c,d]
    arr.sort()
    return arr[0]

a,b,c,d = list(map(int, input().split()))
print(min(a,b,c,d))