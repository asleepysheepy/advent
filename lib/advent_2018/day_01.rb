# frozen_string_literal: true

require 'set'

module Advent2018
  module Day01
    def self.part_1(frequencies)
      frequencies.sum
    end

    def self.part_2(frequencies)
      last_freq = 0
      seen_freq = Set[]

      Kernel.loop do
        frequencies.each do |freq|
          current_freq = last_freq + freq

          return current_freq if seen_freq.include? current_freq

          last_freq = current_freq
          seen_freq << current_freq
        end
      end
    end

    def self.all(frequencies)
      {
        part_1: part_1(frequencies),
        part_2: part_2(frequencies)
      }
    end
  end
end
