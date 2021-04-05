export default {
    formatCurrency: function (num) {
        return 'IDR ' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}