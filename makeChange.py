
# def make_change(amount, denominations):
#     if sorted(denominations)[0] > amount: return 'done'
#     for d in denominations:
#         if amount - d >= 0:
#             print d, amount
#             amount -= d
#             make_change(amount, denominations)

# def make_change(amount, denominations):
#   answer = 0
#   for denomination in denominations:
#     for number_of_times_to_use_denomination in possible_number_of_times_to_use_denomination_without_overshooting:
#       answer += make_change(amount_remaining, other_denominations)
#   return answer

def make_change(amount, denominations):
  if amount == 0: return 1
  if amount < 0: return 0
  answer = 0
  for d in denominations:
    possible_number_of_times_to_use_denomination_without_overshooting = amount / d
    for i in range(0, possible_number_of_times_to_use_denomination_without_overshooting + 1):
      amount_remaining = amount - d * i
      other_denominations = denominations.remove(d)
      answer += make_change(amount_remaining, denominations)
  return answer

make_change(4, [1,2,3])

# def make_change(amount, denominations):
#     if amount == 0: return answer
#     answer = 0
    
#     for d in denominations:
#         if amount - d >= 0:
#             amount -= d
#             answer += make_change(amount, denominations)
#             # amount += 1
#             # make_change(amount, denominations)
    
#     return answer

# print make_change(4, [1,2,3])

# def min_change(V, C):
#     m, n = len(V)+1, C+1
#     table = [[0] * n for x in xrange(m)]
#     for j in xrange(1, n):
#         table[0][j] = float('inf')
#     for i in xrange(1, m):
#         for j in xrange(1, n):
#             aC = table[i][j - V[i-1]] if j - V[i-1] >= 0 else float('inf')
#             table[i][j] = min(table[i-1][j], 1 + aC)
#     return table[m-1][n-1]

# print min_change([1,2,3], 4)

# Dynamic Programming Python implementation of Coin 
# Change problem
# def count(S, n):
#     m = len(S)
#     # We need n+1 rows as the table is constructed 
#     # in bottom up manner using the base case 0 value
#     # case (n = 0)
#     table = [[0 for x in range(m)] for x in range(n+1)]
 
#     # Fill the entries for 0 value case (n = 0)
#     for i in range(m):
#         table[0][i] = 1
 
#     # Fill rest of the table entries in bottom up manner
#     for i in range(1, n+1):
#         for j in range(m):
 
#             # Count of solutions including S[j]
#             x = table[i - S[j]][j] if i-S[j] >= 0 else 0
 
#             # Count of solutions excluding S[j]
#             y = table[i][j-1] if j >= 1 else 0
 
#             # total count
#             table[i][j] = x + y
 
#     return table[n][m-1]
 
# # Driver program to test above function
# arr = [1, 2, 3]
# m = len(arr)
# n = 4
# print(count(arr, n))

# def count(S, n):
#     m = len(S)
#     # If n is 0 then there is 1
#     # solution (do not include any coin)
#     if (n == 0): return 1
 
#     # If n is less than 0 then no
#     # solution exists
#     if (n < 0): return 0
 
#     # If there are no coins and n
#     # is greater than 0, then no
#     # solution exist
#     if (m <=0 and n >= 1) return 0
 
#     # count is sum of solutions (i) 
#     # including S[m-1] (ii) excluding S[m-1]
#     return count( S, m - 1, n ) + count( S, m, n-S[m-1] )