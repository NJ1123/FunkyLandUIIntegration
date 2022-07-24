export const convertStringToHex = (string) => {
  return bytesToHex(stringToUTF8Bytes(string)).toUpperCase();
};

function bytesToHex(bytes) {
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
}
function stringToUTF8Bytes(string) {
  return new TextEncoder().encode(string);
}
