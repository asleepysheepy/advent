# frozen_string_literal: true

module Advent2017
  module Day01
    def self.part_1(data)
      digits = data_to_array data

      doubled_digits = []
      digits.each_with_index do |digit, i|
        doubled_digits << digit if digit == digits[i + 1]
      end
      doubled_digits << digits.last if digits.last == digits.first

      doubled_digits.sum
    end

    def self.part_2(data)
      digits = data_to_array data

      doubled_digits = []
      digits.each_with_index do |digit, i|
        halfway_index = i + (digits.length / 2)
        halfway_index -= digits.length if halfway_index > digits.length
        doubled_digits << digit if digit == digits[halfway_index]
      end

      doubled_digits.sum
    end

    def self.all(data)
      {
        part_1: part_1(data),
        part_2: part_2(data)
      }
    end

    def self.data_to_array(data)
      data.to_s.split('').map(&:to_i)
    end
  end
end
