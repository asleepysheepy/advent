# frozen_string_literal: true

require 'advent_2018/day_01'

RSpec.describe Advent2018::Day01 do
  let(:input) { [7, 7, -2, -7, -4] }

  describe '#part_1' do
    it 'return the summed value of the array' do
      expect(Advent2018::Day01.part_1(input)).to eq 1
    end
  end

  describe '#part_2' do
    it 'returns the first repeated value' do
      expect(Advent2018::Day01.part_2(input)).to eq 14
    end
  end

  describe '#all' do
    let(:expected) { { part_1: 1, part_2: 14 } }
    it 'returns a hash with the answer to both parts' do
      expect(Advent2018::Day01.all(input)).to eq expected
    end
  end
end
