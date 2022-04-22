def dividers (N) :
  D = [1] 
  d = 2
  while (d * d <= N) :
    if N % d == 0 :
      D = D + [d]
      d_new = N // d
      if d_new != d: 
        D = D + [d_new]
    d += 1
 
  D += [N] 
  D.sort ()   
 
  return D
a = int(input())
print(len(set(dividers(a))))