class HouseholdItem < ApplicationRecord
  validates :name, presence: true
  validates :volume, presence: true
  validates :quantity, presence: true
  validates :description, length: { maximum: 255 }
end
