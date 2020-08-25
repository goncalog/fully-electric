export default function formatRating(rating) {
    const star = '&#11088';
    return `${(Math.round(rating * 10) / 10).toFixed(1)}${star}`;
}
