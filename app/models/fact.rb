class Fact < ApplicationRecord
    validates :text, presence: true
    validates_numericality_of :stars, greater_than_or_equal_to: 0, less_than_or_equal_to: 5, message: 'Must be between 0 to 5!'
end
