class Queue
  
    def initialize(size)
      @value = Array.new(size) 
      @size = size
      @counter = 0
    end
    
    def dequeue
      if empty?
        return "Error: Empty"
      else
        @value.delete_at(0)
        @value[@counter-1]=nil
        @counter -= 1
      end
    end
    
    def enqueue(element)
      if full? == true
        p "Error: Full"
      else 
        @value[@counter] = element
        @counter += 1
      end 
    end
    
    def size
      @size
    end
    
    # private
    
    def full?
      @counter == @size
    end
    
    def empty?
      @counter == 0
    end
    
  end
  
  queue = Queue.new(5)
  
  # queue.dequeue
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  queue.enqueue(5)
  queue.dequeue
  
  p queue
  