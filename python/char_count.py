def char_count(str):
  sorted_arr = list(str.replace(" ", ''))
  sorted_arr.sort()

  letter_dictionary = letter_count_dict(sorted_arr)
  return sorted_letter_arr(letter_dictionary)

def letter_count_dict(arr):
  l_dict = {}

  for letter in arr:
    if l_dict.get(letter):
      l_dict[letter] += 1
    else:
      l_dict[letter] = 1
  return l_dict


def sorted_letter_arr(dict):
  test = sorted(dict.items(), key= lambda x: (x[1] * -1, x[0]))
  test2 = []

  # same as the one below
  # test2 = [list(ele) for ele in test]
  
  for ele in test:
    test2.append(list(ele))
  return test2

