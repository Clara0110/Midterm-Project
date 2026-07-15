import { dateUtils } from "../tool/dateUtils.js";
const { today, dd, mm, yyyy, hour, minute } = dateUtils();
const gtwTime = JSON.parse(localStorage.getItem("gtwTime") ?? '""'); // gtwTime
const gowTime = JSON.parse(localStorage.getItem("gowTime") ?? '""'); // gowTime
const muciData = JSON.parse(localStorage.getItem("muciData") ?? '""'); // muciInput、muciDate、muciTime
const talData = JSON.parse(localStorage.getItem("talData") ?? '""'); // talCategory、startDay、endDay
const overtimeData = JSON.parse(localStorage.getItem("overtimeData") ?? '""'); // overtimeReason、overtimeStart、overtimeEnd

const psflData = {
  A: {
    出勤日期: `${yyyy}/${mm}/${dd}`,
    上班: "09:00",
    下班: "17:00",
    遲到: "",
    早退: "",
    請假時數: "",
    加班始: "hfh",
    加班末: "serry",
    加班總時數: "btaer",
    實際出勤總時數: "hfg",
    備註: "vdtzy",
  },
  B: {
    出勤日期: `${yyyy}/${mm}/${dd}`,
    上班: "09:00",
    下班: "17:00",
    遲到: "",
    早退: "",
    請假時數: "",
    加班始: "hfh",
    加班末: "serry",
    加班總時數: "btaer",
    實際出勤總時數: "hfg",
    備註: "vdtzy",
  },
  C: {
    出勤日期: `${yyyy}/${mm}/${dd}`,
    上班: "09:00",
    下班: "17:00",
    遲到: "",
    早退: "",
    請假時數: "",
    加班始: "hfh",
    加班末: "serry",
    加班總時數: "btaer",
    實際出勤總時數: "hfg",
    備註: "vdtzy",
  },
  D: {
    出勤日期: `${yyyy}/${mm}/${dd}`,
    上班: `${gtwTime}`,
    下班: `${gowTime}`,
    遲到: "",
    早退: "",
    請假時數: "",
    加班始: "",
    加班末: "",
    加班總時數: "",
    實際出勤總時數: "",
    備註: "",
  },
};

export default psflData;
