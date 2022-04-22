def string_times(str, n):
    s = ""
    for i in range(n):
        s += str
    return s


def front_times(str, n):
    f_l = 3
    if f_l > len(str):
        f_l = len(str)
    f = str[:f_l]

    s = ""
    for i in range(n):
        s = s + f
    return s


def string_bits(str):
    s = ""
    for i in range(len(str)):
        if i % 2 == 0:
            s = s + str[i]
    return s


def string_splosion(str):
    s = ""
    for i in range(len(str)):
        s = s + str[:i+1]
    return s


def last2(str):
    if len(str) < 2:
        return 0

    last2 = str[len(str)-2:]
    cnt = 0

    for i in range(len(str)-2):
        sub = str[i:i+2]
        if sub == last2:
            cnt = cnt + 1

    return cnt


def array_count9(nums):
    cnt = 0
    for i in nums:
        if i == 9:
            cnt = cnt + 1

    return cnt


def array_front9(nums):
    a = len(nums)
    if a > 4:
        a = 4

    for i in range(a):
        if nums[i] == 9:
            return True
    return False


def array123(nums):
    for i in range(len(nums)-2):
        if nums[i] == 1 and nums[i+1] == 2 and nums[i+2] == 3:
            return True
    return False


def string_match(a, b):
    m = min(len(a), len(b))
    cnt = 0

    for i in range(m-1):
        a_sub = a[i:i+2]
        b_sub = b[i:i+2]
        if a_sub == b_sub:
            cnt = cnt + 1

    return cnt
