class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        most = max(candies)
        output = []
        for amt in candies:
            output.append(amt + extraCandies >= most)
        return output