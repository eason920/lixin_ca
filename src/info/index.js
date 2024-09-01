const caseName = "一功青"

const address = "台南市善化區自由路13號旁"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address,
    googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3678.489826005084!2d120.289203!3d22.784307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ3JzAzLjUiTiAxMjDCsDE3JzIxLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1721979864766!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/cbM7qbAZhsW1cQXJ9",
    phone: "06-337-6688",
    fbLink: "https://www.facebook.com/61562121533694/",
    fbMessage: "https://m.me/61562121533694/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "升鴻水電工程股份有限公司"],
        ["建築設計", "弘憲聯合建築師事務所"],
        ["企劃銷售", "上旺開發股份有限公司"],
        ["接待中心", address],
        /*,
        ["建照號碼", "(111)桃市都建執照字第會德00701-02號"],
        ["經紀人", "(91)北市經證字第00692號 陳子瑞"], 
        ["建築設計", "弘憲聯合建築師事務所"],
        ["使照號碼", "王朝雍建築師事務所"],
        ["行銷企劃", "自售"],
        */
    ],
    gtmCode: ["GTM-WPMCT7FB"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我想了解",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    room_type: ["兩房","三房"],
    //budget: ["900-1,000萬","1,100-1,200萬","1,200-1,300萬","1,300-1,400萬","1,400-1,500萬"],
    navList: [
        {
            name: "大城之境",
            target: ".s3",
            offset: "",
        },
        {
            name: "大境美宅",
            target: ".s5",
            offset: "",
        },
        {
            name: "工藝嚴選",
            target: ".s7",
            offset: "",
        },
        // {
        //     name: "空間展演",
        //     target: ".s8",
        //     offset: "",
        // },
        {
            name: "預約賞屋",
            target: ".order",
            offset: "",
        },
    ],
}