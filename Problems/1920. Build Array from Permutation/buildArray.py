class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        q = len(nums)
        for i in range(q):
            r = nums[i]
            b = nums[r] % q
            nums[i] = q * b + r
        for i in range(q):
            nums[i] //= q
        return nums
