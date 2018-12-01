require 'set'

frequencies = []
File.foreach('input.txt') { |line| frequencies << line.to_i }

doubled_freq = nil
last_freq = 0
seen_freq = Set[]

until doubled_freq
  frequencies.each do |freq|
    current_freq = last_freq + freq

    if seen_freq.include? current_freq
      doubled_freq = current_freq
      break
    end

    last_freq = current_freq
    seen_freq << current_freq
  end
end

puts doubled_freq