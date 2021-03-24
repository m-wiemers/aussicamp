function DayCount(startDate: string, lastDate: string): number {
  if (startDate === null) {
    return;
  } else if (lastDate === null) {
    return;
  } else {
    const firstDate = new Date(startDate.replaceAll("-", "/"));
    const endDate = new Date(lastDate.replaceAll("-", "/"));
    const diffInTime = endDate.getTime() - firstDate.getTime();
    const diffInDays = diffInTime / (1000 * 60 * 60 * 24) + 1;
    return diffInDays;
  }
}

export default DayCount;
