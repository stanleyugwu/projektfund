let timeoutId: number | NodeJS.Timeout;

const useDebounce = <Fn extends (...args: any) => void>(
  fn: Fn,
  time: number = 300
) => {
  return (...args: Parameters<Fn>) => {
    console.log("Debounced");
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), time);
  };
};

export default useDebounce;
