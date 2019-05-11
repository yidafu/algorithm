
var RecentCounter = function() {
    this.timeSeq = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    if (!t) return null;
    this.timeSeq.push(t);
    while(t - this.timeSeq[0] > 3000) {
        this.timeSeq.shift();
    }
    return this.timeSeq.length;
};
