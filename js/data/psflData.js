import { dateUtils } from "../tool/dateUtils.js"
const { today, dd, mm, yyyy, hour, minute } = dateUtils();

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
};

export default psflData;