numbers = [5, 2, 5, 2, 2]

for symbol in numbers: # первый цикл
    words = ''

    for symbol_one in range(symbol): # второй цикл
        words = words + '*'

    print(words)
