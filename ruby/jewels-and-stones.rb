# Leetcode: https://leetcode.com/problems/jewels-and-stones/
# O(n) time | O(n) space
def num_jewels_in_stones(jewels, stones)
    jewel_hash = {}
    jewels.each_char { |ch| jewel_hash[ch] = true }
    
    return stones.split('').count { |ch| jewel_hash.key?(ch) }
end