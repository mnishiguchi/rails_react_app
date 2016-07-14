class HouseholdItem < ApplicationRecord
  validates :name, presence: true
  validates :volume, presence: true, numericality: { greater_than: 0 }
  validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validates :description, length: { maximum: 255 }
end
