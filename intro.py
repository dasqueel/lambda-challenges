def donuts(count):
  # Your code here
  return 'Number of donuts: ' + str(count if count < 10 else 'many')

print(donuts(7))
print(donuts(37))