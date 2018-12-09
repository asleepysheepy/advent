# frozen_string_literal: true

require 'ostruct'

module Advent2018
  module Day03
    def self.part_1(data)
      claims = data.map { |line| _parse_line line.split(' ') }

      _conflicted_cells_count(_process_claims(claims))
    end

    def self.part_2(data)
      claims = data.map { |line| _parse_line line.split(' ') }

      _intact_claim(_process_claims(claims), claims)
    end

    def self.all(data)
      {
        part_1: part_1(data),
        part_2: part_2(data)
      }
    end

    def self._parse_line(data, claim_attributes = {})
      claim_attributes[:id] = data[0].delete_prefix('#').to_i
      claim_attributes[:x] = data[2].split(',').first.to_i
      claim_attributes[:y] = data[2].split(',').last.delete_suffix(';').to_i
      claim_attributes[:width] = data[3].split('x').first.to_i
      claim_attributes[:height] = data[3].split('x').last.to_i

      OpenStruct.new claim_attributes
    end

    def self._process_claims(claims, fabric = {})
      claims.each do |claim|
        claim.width.times do |i|
          claim.height.times do |j|
            x = claim.x + i
            y = claim.y + j

            fabric[x] = {} unless fabric[x]
            fabric[x][y] = [] unless fabric[x][y]

            fabric[x][y] << claim.id
          end
        end
      end

      fabric
    end

    def self._conflicted_cells_count(fabric)
      conflicted = 0

      fabric.each_value do |col|
        col.each_value { |cell| conflicted += 1 if cell.size > 1 }
      end

      conflicted
    end

    def self._unique_cells(fabric)
      claims = Hash.new 0

      fabric.each_value do |col|
        col.each_value { |cell| claims[cell.first] += 1 if cell.size == 1 }
      end

      claims
    end

    def self._intact_claim(fabric, claims)
      unique_claim_areas = _unique_cells fabric

      unique = 0
      claims.each do |claim|
        area = claim.width * claim.height
        unique = claim.id if unique_claim_areas[claim.id] == area
      end

      unique
    end
  end
end
