def sum_of_two(arr, sum)
    i = 0
    span = arr.length
    # i is first index, while i < length of arr
    while i < span
    # j is second index, which we are adding to i & incrementing
      j = i+1
        while j < span
        # checks if i & j are equal to sum
          if arr[i] + arr[j] == sum
            return true
          else
            j+=1
          end
       end
       i+=1
    end
    return false
  end
  
  sum_of_two([10, 5, 4, 5], 10)
  