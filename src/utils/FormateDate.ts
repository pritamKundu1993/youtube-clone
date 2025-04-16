export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diff < 60) return `${diff} second${diff !== 1 ? 's' : ''} ago`;
    if (diff < 3600) {
        const mins = Math.floor(diff / 60);
        return `${mins} minute${mins !== 1 ? 's' : ''} ago`;
    }
    if (diff < 86400) {
        const hours = Math.floor(diff / 3600);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    }
    if (diff < 2592000) {
        const days = Math.floor(diff / 86400);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    }
    if (diff < 31536000) {
        const months = Math.floor(diff / 2592000);
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    }

    const years = Math.floor(diff / 31536000);
    return `${years} year${years !== 1 ? 's' : ''} ago`;
};
