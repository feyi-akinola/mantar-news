
export const formatTime = (time: string) => {
  const date = new Date(time);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const diffInMinutes = Math.floor(diff / 1000 / 60);
  const diffInHours = Math.floor(diff / 1000 / 60 / 60);
  const diffInDays = Math.floor(diff / 1000 / 60 / 60 / 24);
  const diffInMonths = Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
  const diffInYears = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
  
  if (diffInYears > 0) {
    return `${diffInYears} years ago`;
  } else if (diffInMonths > 0) {
    return `${diffInMonths} months ago`;
  } else if (diffInDays > 0) {
    return `${diffInDays} days ago`;
  } else if (diffInHours > 0) {
    return `${diffInHours} hours ago`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} minutes ago`;
  } else {
    return "just now";
  }
};