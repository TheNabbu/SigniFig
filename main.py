nums = "000012340.0560"
print(f"nums: {nums}")

numArr = list(nums)

dotIndex = nums.find(".")
if dotIndex != -1:
    numArr.pop(dotIndex)
print(f"numArr: {numArr}")

sigArr = []
NsigArr = []

firstNonZeroFound = False

for i in range(len(numArr)):
    num = numArr[i]
    print(f"num: {num}")

    if num != "0" or firstNonZeroFound or i == len(numArr) - 1:
        sigArr.append(num)
        firstNonZeroFound = True
    else:
        NsigArr.append(num)

print(f"sigArr: {sigArr}")
print(f"NsigArr: {NsigArr}")
print("")
print(f"Number of Significant Figures are {len(sigArr)}")
print(f"Number of Non-Significant Figures are {len(NsigArr)}")