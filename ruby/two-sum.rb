# O(n) time | O(n) space
def two_sum(nums, target)
    found = {}
    
    nums.each_with_index do |num, i|
        complement = target - num
        return [found[complement], i] if found[complement]
        found[num] = i;
    end
end