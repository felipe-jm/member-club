const clietIdPattern = /^\d{3}-\d{3}-\d{3}-\d{3}$/;

export function isClientIdValid(id: string) {
  return clietIdPattern.test(id);
}
