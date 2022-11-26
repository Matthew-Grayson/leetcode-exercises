class Solution:

    def mostWordsFound(self, sentences: List[str]) -> int:
        lenDict = {}
        for sentence in sentences:
            lenDict.update({len(sentence.split()):''})
        return max(lenDict.keys())