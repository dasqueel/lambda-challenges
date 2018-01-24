# def find_rotation_point(words):
#     sort = sorted(words)

#     return words.index(sort[0])

# def find_rotation_point(words):
#     idx = 0
#     while (words[idx] < words[idx + 1]): idx += 1

#     return idx + 1

def find_rotation_point(words):
    firstWord = words[0]
    floorIdx = 0
    ceilIdx = len(words) - 1

    while floorIdx < ceilIdx:
        # guess point between two idxs
        midpoint = (ceilIdx + floorIdx) // 2

        if words[midpoint] >= firstWord:
            # go right
            floorIdx = midpoint
        else:
            ceilIdx = midpoint

    return ceilIdx



words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage',
]

print find_rotation_point(words)