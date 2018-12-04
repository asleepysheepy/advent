# frozen_string_literal: false

module Advent2018
  module Day02
    def self.part_1(data)
      occurances = data.map do |line|
        chars = line.chars.sort
        chars.each_with_object(Hash.new(0)) { |char, counts| counts[char] += 1 }
      end

      two_of_letter = occurances.select { |line| line.value? 2 }
      three_of_letter = occurances.select { |line| line.value? 3 }

      two_of_letter.count * three_of_letter.count
    end

    def self.part_2(data)
      strings = []

      data.each do |string|
        data.each do |comp_string|
          next if string == comp_string

          differences = _compare_strings string, comp_string
          strings = [string, comp_string] if differences == 1
        end

        data.shift
      end

      _formatted_strings strings
    end

    def self.all(data)
      {
        part_1: part_1(data),
        part_2: part_2(data)
      }
    end

    def self._compare_strings(string_a, string_b)
      differences = 0
      string_a.chars.each_with_index do |char, i|
        differences += 1 unless char == string_b[i]
      end
      differences
    end

    def self._formatted_strings(strings)
      new_string = ''
      strings.first.chars.each_with_index do |char, i|
        new_string << char if char == strings.last[i]
      end
      new_string
    end
  end
end
