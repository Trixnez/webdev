def count_substring(string, sub_string):
    S, sub = string, sub_string
    count = 0

    while sub in S:
        i = S.find(sub)
        S = S[:i] + S[i + 1:]
        count += 1
        
    return count 

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)