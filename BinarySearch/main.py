
def binary_search(array, search):
  low = 0
  high = len(array) - 1
  
  while low<=high:
    mid = int((low+high)/2)
    guess = array[mid]

    if guess == search:
      print("here")
      return array[mid]
    if guess > search: 
      high = mid-1
      print("here1")
    else:
      low = mid+1
      print("here2")
    return None

array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]



print(binary_search(array, 20))