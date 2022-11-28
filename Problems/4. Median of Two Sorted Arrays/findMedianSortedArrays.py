class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        nums = (nums1 + nums2)
        nums.sort()
        nLen = len(nums)
        hLen = nLen / 2
        if nLen % 2 == 1:
            return nums[int(hLen)]
        return (nums[int(hLen - .5)] + nums[int(hLen + .5)]) / 2
