export const noRecharge = (event: React.FormEvent<HTMLFormElement> | undefined) => {
  if (event) return event.preventDefault();
};