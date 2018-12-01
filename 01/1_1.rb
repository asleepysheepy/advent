frequencies = []
File.foreach('input.txt') { |line| frequencies << line.to_i }
puts frequencies.inject(0) { |sum, x| sum + x }