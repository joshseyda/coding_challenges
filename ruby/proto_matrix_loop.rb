arr = ['a', 'b', 'c', 'd']
stocks = ['aapl', 'amzn', 'baba', 'csiq' ]
i = 0
while i <= arr.length-1 do
  stocks.each do |stock|
  @thing = stock.split("")
    if (@thing[0] == arr[i])
      puts stock
    else
      puts "switched to the #{arr[i]} column"
    end
  end
      i += 1
end 