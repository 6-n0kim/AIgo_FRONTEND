export function formatNumber(n: number) {
  return new Intl.NumberFormat("ko-KR").format(n);
}
