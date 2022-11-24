class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        jLen = len(nums)
        iLen = jLen - 1
        output = 0
        for i in range(iLen):
            iVal = nums[i]
            for j in range(i + 1, jLen):
                if iVal == nums[j]:
                    output += 1
        return output
