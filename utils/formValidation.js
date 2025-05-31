export const isOnlyCharacters = (value) => /^[a-zA-Z\s]*$/.test(value);
export const isOnlyNumbers = (value) => /^[0-9]*$/.test(value);
export const isValidMonth = (value) => {
  const month = parseInt(value, 10); // Convert the input to an integer
  return /^[0-9]+$/.test(value) && month >= 1 && month <= 12;
};
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isValidPhone = (phone) =>
  /^(?:\+1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/.test(phone);

export function isAdult(dob) {
  if (!dob) return false;

  const dateOfBirth = new Date(dob);
  if (!(dateOfBirth instanceof Date) || isNaN(dateOfBirth)) {
    throw new Error("Invalid date of birth provided.");
  }

  const today = new Date();
  const age = today.getFullYear() - dateOfBirth.getFullYear();

  const hasHadBirthdayThisYear =
    today.getMonth() > dateOfBirth.getMonth() ||
    (today.getMonth() === dateOfBirth.getMonth() &&
      today.getDate() >= dateOfBirth.getDate());

  const actualAge = hasHadBirthdayThisYear ? age : age - 1;

  return actualAge >= 18;
}
