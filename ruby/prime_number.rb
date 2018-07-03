# prime numbers are only divisible by themselves and 1

def check_prime(num)
    if num % 2 == 0
      puts "the number is not prime it is divisible by 2"
    else 
      odd = []
      for i in 3..1000000000000000
        if i % 2 != 0
          odd.push(i)
          if num % i == 0
            if i == num
                puts "the number is prime"
            else
            puts "number is not prime, #{num} is divisible by #{i}"
            break
            end
          end 
        end
      end
    end
  end
  
  check_prime(826484093723)
  
  
  