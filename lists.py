# 1. match_ends
# Given a list of strings, return the count of the number of
# strings where the string length is 2 or more and the first
# and last chars of the string are the same.
# Note: python does not have a ++ operator, but += works.
def match_ends(words):
  return len([w for w in words if len(w) >= 2 and w[0] == w[-1]])

# print(match_ends(['mom','dog','pig','dad']))
  
# 2. front_x
# Given a list of strings, return a list with the strings
# in sorted order, except group all the strings that begin with 'x' first.
# e.g. ['mix', 'xyz', 'apple', 'xanadu', 'aardvark'] yields
# ['xanadu', 'xyz', 'aardvark', 'apple', 'mix']
# Hint: this can be done by making 2 lists and sorting each of them
# before combining them.
def front_x(words):
  xlist = []
  normlist = []
  for i in words:
    if i[0] == 'x': xlist.append(i)
    else: normlist.append(i)
  return sorted(xlist) + sorted(normlist)

# print(front_x(['mix', 'xyz', 'apple', 'xanadu', 'aardvark']))
# 3. sort_last
# Given a list of non-empty tuples, return a list sorted in increasing
# order by the last element in each tuple.
# e.g. [(1, 7), (1, 3), (3, 4, 5), (2, 2)] yields
# [(2, 2), (1, 3), (3, 4, 5), (1, 7)]
# Hint: use a custom key= function to extract the last element form each tuple.
def sort_last(tuples):
  # return tuples.sort(key=lambda tup: tup[-1], reverse=True)
  return sorted(tuples, key=lambda tup: tup[-1], reverse=False)

print(sort_last([(1, 7), (1, 3), (3, 4, 5), (2, 2)]))