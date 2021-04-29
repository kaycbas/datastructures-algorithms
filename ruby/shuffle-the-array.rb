# Leetcode: https://leetcode.com/problems/shuffle-the-array/
# O(n) time | O(n) space - where n is length of nums
def shuffle(nums, n)
    merged = []
    n.times { |i| merged.push(nums[i], nums[n + i]) }
    return merged
end