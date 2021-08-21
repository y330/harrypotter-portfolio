export const mapToArray = (map) => {
	return Array.from(map, ([key, value]) => ({ key, value }));
}
export const stringToArray = (string, delimiter = ",") => {
	return string.split(delimiter)
}