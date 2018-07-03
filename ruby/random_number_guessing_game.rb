random_number = 1+rand(10)
puts "Guess a number!"
user_input = gets.chomp.to_i
counter = 1
  until user_input == random_number
    puts "Try again!"
    user_input = gets.chomp.to_i
    counter+=1
  end 
puts "Good job, you did it in #{counter} tries"