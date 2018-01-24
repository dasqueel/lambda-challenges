from functools import reduce

def meanMedianMode(numbers):
    # numbers = sorted(numbers)
    numbers.sort()
    answers = {}
    #mean
    answers['mean'] = float(sum(numbers)) / float(len(numbers))

    #median
    if len(numbers) % 2 == 0:
        answers['median'] = (numbers[(len(numbers) // 2) - 1] + numbers[len(numbers) // 2]) // 2.0
    else:
        answers['median'] = numbers[len(numbers) // 2]

    # mode
    occurences = {}
    for i in numbers:
        if str(i) not in occurences.keys():
            occurences[str(i)] = 1
        else:
            occurences[str(i)] += 1
    
    mode = 1
    for k,v in occurences.iteritems():
        if v > mode:
            mode = int(k)

    answers['mode'] = mode

    return answers

print(meanMedianMode([1,2,6,7,8,3,9,3,4,5,10,10]))