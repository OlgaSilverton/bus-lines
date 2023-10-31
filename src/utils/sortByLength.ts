export function sortByLength(data: Record<string, string[]>): string[] {
    const sortedLineNumbers = Object.keys(data).sort(
        (a, b) => data[b].length - data[a].length
    );

    return sortedLineNumbers;
}
