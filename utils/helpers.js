module.exports = {
    format_date: date => {
        return `${new Date(date).toLocaleString()}`;
    }
}