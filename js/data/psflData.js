const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();

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