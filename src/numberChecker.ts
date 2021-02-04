export const numberChecker = (numberToCheck: number):string => {
    if (numberToCheck > 5) {
        return 'high'
    }
    return 'low'
}