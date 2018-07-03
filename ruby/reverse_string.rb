def str_rev(str)
    str_reversed = []
    str = str.split(//)
    i = str.length-1
    until i == -1 do 
      str_reversed.push(str[i])
      i -= 1
    end
    str_reversed = str_reversed.join
    puts str_reversed
  end
  
  str_rev("whiteboarding is fun")