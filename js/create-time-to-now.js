<link rel="stylesheet" class="aplayer-secondary-style-marker" href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css"><script src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js"></script>var now = new Date();

function createtime() {
    var grt = new Date("07/16/2018 15:00:00");//此处修改你的建站时间或者网站上线时间
    now.setTime(now.getTime() + 250);
    var years = (now - grt) / 1000 / 60 / 60 / 24 / 365;
    var ynum = Math.floor(years);
    var days = (now - grt) / 1000 / 60 / 60 / 24;
    var dnum = Math.floor(days);
    var hours = (now - grt) / 1000 / 60 / 60 - (24 * dnum);
    var hnum = Math.floor(hours);
    if (String(hnum).length === 1) {
        hnum = "0" + hnum;
    }
    var minutes = (now - grt) / 1000 / 60 - (24 * 60 * dnum) - (60 * hnum);
    var mnum = Math.floor(minutes);
    if (String(mnum).length === 1) {
        mnum = "0" + mnum;
    }
    var seconds = (now - grt) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    var snum = Math.round(seconds);
    if (String(snum).length === 1) {
        snum = "0" + snum;
    }
    document.getElementById("timeDate").innerHTML = /*"本站已运行 " +ynum+" 年 "*/ +dnum + " 天 ";
    /*因为建站时间还没有一年，就将之注释掉了。需要的可以取消*/
    document.getElementById("times").innerHTML = hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
}

setInterval("createtime()", 250);
