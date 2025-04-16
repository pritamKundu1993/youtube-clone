export const formatViews = (num: string | number): string => {
    const views = typeof num === 'string' ? parseInt(num) : num;

    if (views >= 1_000_000_000) return (views / 1_000_000_000).toFixed(1) + 'B';
    if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + 'M';
    if (views >= 1_000) return (views / 1_000).toFixed(1) + 'K';
    return views.toString();
};
