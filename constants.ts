import { TripData, Phrase } from './types';

export const TRIP_DATA: TripData = {
  "2025-12-21": {
      title: "Day 1 / 抵達首爾",
      subtitle: "Airport to Cheongnyangni",
      weather: { t: "4°C", i: "fa-cloud-moon", tip: "微冷，建議穿著防風外套" },
      discovery: {
          title: "清涼里的老派浪漫",
          desc: "清涼里是通往江原道的鐵路樞紐，這裡有復古的傳統市場。推薦去京東市場尋寶！",
          spots: [{ name: "清涼里奶奶冷麵 (청량리 할머니냉면)", desc: "著名超辣冷麵，在市場巷弄內。" }, { name: "京東市場星巴克1960 (스타벅스 경동1960)", desc: "廢棄老劇院改建的超復古咖啡廳。" }]
      },
      items: [
          { type: "flight", airline: "Scoot 酷航", code: "TR896", from: "TPE", fromCity: "台北桃園", fromTime: "18:15", fromTerm: "T1", to: "ICN", toCity: "首爾仁川", toTime: "21:45", toTerm: "T1", bag: "35kg", gate: "--", title: "Flight TR896" },
          { 
              type: "transport", time: "22:40", title: "機場前往清涼里", sub: "AREX + 地鐵1號線", tags: ["最快路線"], desc: "入境後跟隨黃色文字「Airport Railroad」指標移動。", tips: "AREX直達車末班約 22:48，請務必把握時間。若趕不上，可改搭 6002 號機場巴士。" 
          },
          { type: "transit", title: "Transfer", from: "仁川機場 T1", to: "清涼里站", steps: [{ color: "bg-line-arex", name: "AREX 機場快線", dir: "往 首爾站 (終點)", desc: "直達車 (0中途站)", time: "43分鐘" }, { color: "bg-line-1", name: "1號線", dir: "往 逍遙山/清涼里", desc: "首爾站轉乘 (搭乘6站)", time: "18分鐘" }] },
          { type: "hotel", time: "00:10", title: "入住 Check-in", sub: "Hotel The Designers", address: "226 Wangsan-ro, Dongdaemun-gu, Seoul", mapQuery: "호텔더디자이너스청량리", tags: ["Agoda: 1633690442"], exit: "4號出口", desc: "位於清涼里站 4 號出口，步行約 2 分鐘即達。", tips: "飯店樓下有便利商店，建議先買好隔天早餐與水，因為明天集合時間很早。" },
          { type: "snack", title: "深夜補給 & 宵夜", items: [ { name: "GS25 便利商店", desc: "就在飯店大樓 1樓 或緊鄰的巷子，買水、早餐飯糰。" }, { name: "清涼里炸雞胡同", desc: "傳統市場內有著名的炸雞街，營業至深夜，推薦「南原炸雞」。" }, { name: "布帳馬車 (路邊攤)", desc: "車站前廣場通常有魚板湯、辣炒年糕攤販。" } ] }
      ]
  },
  "2025-12-22": {
      title: "Day 2 / 前往雪場",
      subtitle: "High 1 Resort",
      weather: { t: "-5°C", i: "fa-snowflake", tip: "極冷，請穿發熱衣+雪衣" },
      discovery: { title: "從煤礦到雪場", desc: "High 1 所在的古汗邑曾是繁榮的煤礦村。這裡的韓牛和野菜(Gondre)非常有名。", spots: [{ name: "古汗市場 (Gohan Market)", type: "美食", desc: "距離度假村車程約10分鐘，有便宜的烤肉店和傳統湯飯。" }] },
      items: [
          { type: "transport", time: "07:00", title: "集合 (切勿遲到)", sub: "清涼里站 Olive Young 前", desc: "請在火車站內的 Olive Young 前集合。領隊會在此點名。", tags: ["早起注意"], tips: "7:25 火車準時發車，逾時不候。" },
          { type: "transport", time: "07:25", title: "火車出發", sub: "前往舍北站", desc: "搭乘火車前往江原道，車程約 3.5 小時，可在車上補眠。", tags: ["車程 3.5hr"] },
          { type: "transport", time: "10:55", title: "抵達舍北火車站", sub: "轉乘接駁", desc: "抵達 Sabuk Station，轉乘巴士前往 High 1 滑雪場。", },
          { type: "activity", time: "11:05", title: "抵達 High 1", sub: "滑雪度假村", desc: "抵達 Mountain Ski House。", address: "265 High1-gil, Sabuk-eup, Jeongseon-gun", mapQuery: "하이원리조트 마운틴스키하우스" },
          { type: "activity", time: "11:10", title: "挑選滑雪衣", sub: "租借裝備", desc: "挑選適合尺寸的雪衣、雪褲。記得檢查口袋拉鍊是否正常。", tags: ["租借"] },
          { type: "food", time: "11:40", title: "午餐 / 休息", sub: "自由用餐", desc: "在滑雪場附近或餐廳簡單用餐，補充體力。", },
          { type: "activity", time: "12:30", title: "領取裝備 & 付尾款", sub: "Ski House", desc: "領取滑雪板、雪鞋。**同時需以現金支付尾款**。", tags: ["準備現金"], tips: "需要 500韓元硬幣使用置物櫃。" },
          { type: "activity", time: "12:50", title: "滑雪課程開始", sub: "Day 1 課程", desc: "教練教學：穿脫裝備、安全跌倒、站起、基礎煞車 (Pizza)。", tags: ["教學 3hr"] },
          { type: "hotel", time: "16:30", title: "入住 Ski House", sub: "Check-in", address: "265 High1-gil, Sabuk-eup, Jeongseon-gun", mapQuery: "하이원리조트 마운틴콘도", desc: "辦理入住手續，將行李放入房間。", },
          { type: "activity", time: "18:30", title: "夜間滑雪", sub: "Night Ski", desc: "自由滑雪時間。開放至 22:00。", tags: ["開放至 22:00"] },
          { type: "snack", title: "深夜補給 & 宵夜", items: [ { name: "Mountain Condo 便利商店", desc: "Mountain Ski House 或 Condo B1 通常有 CU 或 GS25，方便買泡麵、啤酒。" }, { name: "古汗九孔炭市場", desc: "搭計程車或接駁車下山，這裡是宵夜一級戰區，有烤肉和炸雞。" }, { name: "外送炸雞", desc: "可請櫃檯幫忙叫 Pelicana 或 Mexicana 炸雞 (需付外送費)，在 Lobby 取餐。" } ] }
      ]
  },
  "2025-12-23": {
      title: "Day 3 / 全日滑雪",
      subtitle: "Ski & Relax",
      weather: { t: "-8°C", i: "fa-snowflake", tip: "山頂風大，務必戴護目鏡" },
      discovery: { title: "雲端上的咖啡廳", desc: "High 1 擁有韓國海拔最高的旋轉咖啡廳 (1340m)。", spots: [{ name: "Top of the Top", type: "景點", desc: "搭纜車上山頂，360度欣賞雪景，就算不滑雪也必去！" }, { name: "古汗邑烤肉", type: "晚餐", desc: "晚餐建議搭接駁車下山去古汗邑吃韓式烤肉(五花肉)，比度假村便宜很多。" }] },
      items: [
          { type: "activity", time: "09:00", title: "滑雪課程 Day 2", sub: "進階技巧", desc: "早上課程開始。練習重心轉移與 S 型轉彎。", tags:["教學 3hr"] },
          { type: "food", time: "12:00", title: "課程結束 & 午餐", sub: "Ski House", desc: "結束所有教學課程。午餐時間。", tags:["休息"] },
          { type: "activity", time: "13:00", title: "自由練習 / 觀光", sub: "Free Time", desc: "下午 13:00 ~ 15:45 為自由時間。可以繼續練習滑雪，或搭纜車觀光。", tags:["自由活動"] },
          { type: "activity", time: "13:30", title: "Top of the Top", sub: "觀光纜車推薦", desc: "若不滑雪，強烈建議搭纜車至 1340m 山頂旋轉咖啡廳拍照。", tags:["必去"] },
          { type: "activity", time: "18:30", title: "夜間滑雪", sub: "Night Ski", desc: "第二天夜滑。把握最後一晚的雪地時光。", tags:["開放至 22:00"] },
          { type: "snack", title: "深夜補給 & 宵夜", items: [ { name: "Mountain Condo 便利商店", desc: "最後一晚可以買些韓國零食、馬格利酒回房間慶祝。" }, { name: "古汗市場 (Gohan Market)", desc: "若想吃熱食，市場內的湯飯 (Gukbap) 是絕佳選擇。" } ] }
      ]
  },
  "2025-12-24": {
      title: "Day 4 / 返回首爾",
      subtitle: "Christmas Eve",
      weather: { t: "-2°C", i: "fa-tree", tip: "平安夜人多，注意保暖" },
      discovery: { title: "平安夜的首爾", desc: "首爾的聖誕氣氛非常濃厚，尤其是明洞教堂和新世界百貨的燈飾。", spots: [{ name: "軍子大韓烤腸", type: "必吃", desc: "MAMAMOO 華莎推薦的烤腸名店！" }, { name: "明洞聖堂", type: "景點", desc: "平安夜最美的地方。" }] },
      items: [
          { type: "hotel", time: "08:20", title: "退房 Check-out", sub: "整理行李", desc: "11:00 前必須完全退房。建議提早整理好行李寄放。", tags:["退房"] },
          { type: "activity", time: "09:00", title: "自由滑雪 / 課程", sub: "最後衝刺", desc: "Day 3 課程或自由練習時間。", tags:["最後滑雪"] },
          { type: "activity", time: "15:45", title: "歸還裝備 & 集合", sub: "Mountain Ski House", desc: "歸還所有租借裝備。在 Ski House 前集合。", tags:["集合"] },
          { type: "transport", time: "16:20", title: "巴士回首爾", sub: "準時發車", desc: "搭乘巴士返回首爾。車程約 3.5 小時。", tags:["回程"] },
          { type: "transport", time: "19:45", title: "抵達 明洞站", sub: "解散", desc: "巴士停靠明洞站。在此下車，直接步行去吃晚餐。", tags:["抵達"] },
          { type: "transit", title: "Walk to Dinner", from: "明洞站 (下車點)", to: "餐廳", steps: [ { color: "bg-line-walk", name: "步行", dir: "往 餐廳", desc: "步行約 5-8 分鐘即可抵達", time: "8分鐘" } ] },
          { 
              type: "food", time: "20:15", title: "晚餐：軍子大韓烤腸", sub: "明洞店", 
              desc: "華莎同款！必點『大韓綜合烤腸』，享受火焰秀表演！", 
              naverLink: "https://map.naver.com/v5/search/군자대한곱창%20명동점", 
              tips: "人潮眾多，建議先去候位。吃完別忘了點炒飯！", tags: ["華莎烤腸", "平安夜大餐"] 
          },
          { 
              type: "list", time: "21:30", title: "明洞購物衝刺", sub: "明洞商圈", 
              list: [
                  "<b>Olive Young</b> 明洞 Town 旗艦店 (貨最齊)",
                  "<b>Olive Young</b> 明洞 Time Walk 店",
                  "<b>NyuNyu</b> 明洞店 (飾品批發價)",
                  "<b>Hemeko</b> 明洞店 (美妝選物, 開到凌晨)"
              ],
              naverLink: "https://map.naver.com/v5/search/올리브영%20명동",
              tags: ["購物", "美妝"] 
          },
          { 
              type: "transit", title: "To Airbnb", from: "明洞 (購物)", to: "上水站 (Airbnb)", 
              steps: [
                  { color: "bg-line-walk", name: "步行", desc: "往 乙支路入口站 (2號線)" },
                  { color: "bg-line-2", name: "2號線", desc: "乙支路入口 ➜ 合井 (轉乘)", time: "12分鐘" },
                  { color: "bg-line-6", name: "6號線", desc: "合井 ➜ 上水站 (1站)", exit: "3號出口" }
              ]
          },
          { type: "hotel", time: "23:45", title: "入住 Airbnb", sub: "Host: Dada", address: "52 Tojeong-ro 11-gil, Mapo-gu, Seoul", mapQuery: "서울 마포구 토정로11길 52", exit: "3號出口", desc: "位於上水站 (Sangsu) 3號出口附近，步行約 3-5 分鐘。密碼鎖入住。", tips: "請確認是否收到房東密碼。" }
      ]
  },
  "2025-12-25": { 
      title: "Day 5 / 聖誕快樂", subtitle: "Seongsu & Dongdaemun", weather: { t: "0°C", i: "fa-gift", tip: "適合大衣，圍巾必備" },
      discovery: {
          title: "聖水洞：首爾的布魯克林",
          desc: "廢棄工廠改建的咖啡廳與潮牌店聚集地，是首爾現在最潮的區域。",
          spots: [
              { name: "NUDAKE", type: "甜點", desc: "Gentle Monster 旗下的藝術甜點店，必點『抹茶岩漿牛角』。" },
              { name: "Dior 聖水", type: "打卡", desc: "超美的玻璃溫室建築，晚上點燈更美。" }
          ]
      },
      items: [
          { 
              type: "transit", title: "Transit", from: "上水站 (Airbnb)", to: "新村 (午餐)", 
              steps: [{ color: "bg-line-6", name: "6號線", desc: "上水 ➜ 合井 (轉乘)" }, { color: "bg-line-2", name: "2號線", desc: "合井 ➜ 新村站 (1站)" }]
          },
          { 
              type: "food", time: "12:00", title: "午餐：春川家辣炒雞排", sub: "新村站", exit: "1號出口",
              desc: "必點『起司辣炒雞排』+ 綜合配料 (麵條/年糕/地瓜)。最後一定要炒飯！", 
              naverLink: "https://map.naver.com/v5/search/춘천집닭갈비막국수",
              tags: ["必吃", "排隊美食"] 
          },
          { 
              type: "transit", title: "Transit", from: "新村 (午餐)", to: "聖水洞 (纛島站)", 
              steps: [{ color: "bg-line-2", name: "2號線", desc: "新村 ➜ 纛島站 7號出口 (25分鐘)" }]
          },
          { 
              type: "list", time: "14:00", title: "聖水洞：經典地標 & 潮牌", sub: "纛島站 7號出口出發", 
              desc: "沿路逛往聖水站方向：",
              list: [
                  "<b>Onion</b> (廢墟風咖啡)",
                  "<b>自然島鹽麵包</b> (必買點心)",
                  "<b>Matin Kim</b> / <b>Musinsa Store</b> (大林倉庫)",
                  "<b>Rolarola</b> / <b>Stand Oil</b> / <b>Rockfish</b>"
              ],
              naverLink: "https://map.naver.com/v5/search/무신사스토어성수대림창고",
              tags:["潮牌", "必逛"] 
          },
          { 
              type: "list", time: "15:30", title: "聖水洞：香氛與生活美學", sub: "演武場街", 
              list: [
                  "<b>Tamburins</b> (Jennie香氛) / <b>Nonfiction</b>",
                  "<b>Point of View</b> (文具) / <b>Kinfolk</b>",
                  "<b>NyuNyu</b> 聖水 / <b>Moot</b> / <b>Dotori Caricature</b>",
                  "<b>Perfumery Blute</b> (小眾香氛)"
              ],
              tags:["質感生活", "香氛"] 
          },
          { 
              type: "transit", title: "Transit", from: "聖水站", to: "馬場洞 (晚餐)", 
              steps: [
                  { color: "bg-line-2", name: "2號線", desc: "聖水 ➜ 往十里 (2站)" },
                  { color: "bg-line-5", name: "轉乘 5號線", desc: "往十里 ➜ 馬場站 (1站)", time: "15分鐘", exit: "2號出口" }
              ]
          },
          { 
              type: "food", time: "19:00", title: "晚餐：馬場洞韓牛村", sub: "馬場站", exit: "2號出口",
              desc: "直接在肉舖選肉 (推薦: 雪花里脊 Salchisal)，再去樓上餐廳烤。CP值最高的韓牛體驗。", 
              naverLink: "https://map.naver.com/v5/search/마장축산물시장",
              tags: ["韓牛", "聖誕大餐"] 
          },
          { 
              type: "transit", title: "Transit", from: "馬場洞", to: "東大門", 
              steps: [
                  { color: "bg-line-5", name: "5號線", desc: "馬場 ➜ 東大門歷史公園 (3站)", time: "6分鐘", exit: "14號出口" }
              ]
          },
          { type: "activity", time: "21:00", title: "東大門夜逛", sub: "東大門歷史公園站", desc: "NyuNyu 飾品批發 (開到凌晨)、DDP 設計廣場夜景。週四晚上批發市場有開。", tags:["夜貓行程"] },
          { type: "snack", title: "聖誕宵夜 (外送推薦)", items: [ { name: "족발의장인 (Jokjang)", desc: "推薦請房東或用外送App點『族長』豬腳，聖誕夜就要大口吃肉！" }, { name: "便利商店", desc: "回 Airbnb 前別忘了買明天早餐和草莓牛奶。" } ] }
      ] 
  },
  "2025-12-26": { 
      title: "Day 6 / 懷舊首爾", subtitle: "Bukchon & Seochon & Ikseon-dong", weather: { t: "2°C", i: "fa-camera", tip: "穿著舒適好走的鞋子" }, 
      discovery: {
          title: "鍾路區的時光旅行",
          desc: "從北村的貴族韓屋，到西村的文青巷弄，最後在益善洞的燈火中結束。一日穿越首爾的過去與現在。",
          spots: [
              { name: "土俗村蔘雞湯", type: "午餐", desc: "景福宮旁最經典的蔘雞湯。" },
              { name: "清水堂 (Cheongsudang)", type: "咖啡", desc: "益善洞最美的燈籠水景咖啡廳。" }
          ]
      },
      items: [
          { 
              type: "transit", title: "Transit", from: "上水站 (Airbnb)", to: "安國站 (北村)", 
              steps: [
                  { color: "bg-line-6", name: "6號線", desc: "上水 ➜ 合井 (轉乘)" }, 
                  { color: "bg-line-2", name: "2號線", desc: "合井 ➜ 乙支路3街 (轉乘)" },
                  { color: "bg-line-3", name: "3號線", desc: "乙支路3街 ➜ 安國站 (2號出口)" }
              ] 
          },
          { 
              type: "food", time: "10:30", title: "早午餐：Artist Bakery", sub: "安國站 1號出口",
              desc: "倫敦貝果博物館的姐妹店，專賣鹽麵包。建議先抽號碼牌或外帶。",
              tags: ["排隊名店", "鹽麵包"],
              naverLink: "https://map.naver.com/v5/search/아티스트베이커리"
          },
          { 
              type: "activity", time: "11:30", title: "北村韓屋村", sub: "嘉會洞",
              desc: "保留最完整的傳統韓屋聚落。請放輕腳步，欣賞古色古香的建築。",
              tags: ["文化體驗", "拍照"]
          },
          { 
              type: "transit", title: "Transit", from: "北村/安國", to: "西村", 
              steps: [{ color: "bg-line-walk", name: "步行", desc: "經光化門/景福宮步行約 15-20 分", time: "20分鐘" }] 
          },
          { 
              type: "food", time: "13:30", title: "午餐：土俗村蔘雞湯", sub: "西村/景福宮站",
              desc: "首爾無人不知的蔘雞湯名店。濃郁的湯頭配上人蔘酒，冬天吃非常過癮。",
              tags: ["必吃", "米其林"],
              naverLink: "https://map.naver.com/v5/search/토속촌삼계탕"
          },
          { 
              type: "list", time: "15:00", title: "西村文青散策", sub: "景福宮西側", 
              desc: "充滿藝廊與選物店的靜謐區域：",
              list: [
                  "<b>Granhand</b> 西村店 (獨棟韓屋香氛)",
                  "<b>Ofr Seoul</b> (巴黎著名的獨立書店)",
                  "<b>Boan Stay</b> (通義洞保安旅館/藝文空間)",
                  "<b>Scoff Bakehouse</b> (英式司康)"
              ],
              tags: ["選物", "文青"]
          },
          { 
              type: "transit", title: "Transit", from: "西村", to: "益善洞", 
              steps: [
                  { color: "bg-line-3", name: "3號線", desc: "景福宮 ➜ 鐘路3街 (Jongno 3-ga) 4號出口" }
              ] 
          },
          { 
              type: "list", time: "17:30", title: "益善洞韓屋迷宮", sub: "鐘路3街", 
              desc: "狹小巷弄內隱藏著無數復古咖啡廳與特色小店：",
              list: [
                  "<b>清水堂</b> (Cheongsudang) - 絕美燈籠海",
                  "<b>小夏鹽田</b> (Soha Salt Pond)",
                  "<b>樂園驛</b> (Nakwon Station) - 鐵軌咖啡",
                  "<b>溫泉家</b> (Oncheonjip) - 日式庭院火鍋"
              ],
              tags: ["網美聖地", "復古"] 
          },
          { 
              type: "food", time: "19:30", title: "晚餐：昌華堂 (Chang Hwa Dang)", sub: "益善洞",
              desc: "復古風裝潢的韓式煎餃名店，推薦綜合煎餃與泡菜炒飯。",
              tags: ["排隊美食", "煎餃"],
              naverLink: "https://map.naver.com/v5/search/창화당%20익선동"
          },
          { 
              type: "transit", title: "To Airbnb", from: "益善洞", to: "上水站", 
              steps: [
                  { color: "bg-line-5", name: "5號線", desc: "鐘路3街 ➜ 孔德 (Gongdeok)" },
                  { color: "bg-line-6", name: "6號線", desc: "孔德 ➜ 上水站 (2站)" },
                  { color: "bg-line-walk", name: "步行", desc: "3號出口 ➜ 住宿" }
              ] 
          }
      ] 
  },
  "2025-12-27": {
      title: "Day 7 / 滿載而歸", subtitle: "Bye Seoul", weather: { t: "3°C", i: "fa-plane", tip: "搭機請穿著舒適寬鬆" },
      discovery: { title: "最後採買清單", desc: "離開前在首爾站把伴手禮一次買齊！", spots: [ { name: "HBAF 杏仁果", desc: "蜂蜜奶油、芥末口味。" }, { name: "海苔 & 泡麵", desc: "整箱直接託運。" } ] },
      items: [
          { type: "hotel", time: "11:00", title: "退房 Check-out", sub: "Airbnb", desc: "11:00 前退房。帶著行李前往首爾站。", tags: ["退房"] },
          { type: "transit", title: "Transit", from: "上水站 (Airbnb)", to: "首爾站", steps: [ { color: "bg-line-6", name: "6號線", desc: "上水 ➜ 三角地 (轉乘)" }, { color: "bg-line-4", name: "4號線", desc: "三角地 ➜ 首爾站" } ] },
          { type: "activity", time: "11:40", title: "首爾站：寄放行李", desc: "利用 Lotte Mart 寄物櫃或 T-Luggage (B2) 寄放 50kg 行李，輕裝去吃飯。", tags: ["重要"] },
          { type: "transit", title: "Transit", from: "首爾站", to: "新村", steps: [ { color: "bg-line-1", name: "1號線", desc: "首爾站 ➜ 市廳" }, { color: "bg-line-2", name: "2號線", desc: "市廳 ➜ 新村站" } ] },
          { 
              type: "food", time: "12:30", title: "午餐：Sosiniso (소신이쏘)", sub: "新村站", exit: "1號出口",
              desc: "必點『奶油燉排骨 (크림소갈비찜)』！辣度可調，排骨軟嫩。(備選: 公陵一隻雞, Shake Shack 弘大)", 
              naverLink: "https://map.naver.com/v5/search/소신이쏘%20신촌본점",
              tags: ["排隊名店", "奶油燉排骨"] 
          },
          { type: "transit", title: "Transit", from: "新村", to: "漢南洞 (Blute)", steps: [ { color: "bg-line-2", name: "2號線", desc: "新村 ➜ 合井 (轉乘)" }, { color: "bg-line-6", name: "6號線", desc: "合井 ➜ 漢江鎮 (Hangangjin) 3號出口" } ] },
          { 
              type: "shopping", time: "14:30", title: "Perfumery Blute", sub: "漢南店 (Hannam)", 
              desc: "充滿法式氛圍的香氛展示間，位於漢南洞的紅磚建築。氛圍感極佳。<br>推薦：Old Teba 護手霜、Pillow Talk 擴香。", 
              address: "서울 용산구 이태원로54길 78",
              mapQuery: "서울 용산구 이태원로54길 78", 
              tags: ["漢南洞", "香氛"] 
          },
          { type: "transit", title: "Transit", from: "漢南洞", to: "首爾站", steps: [ { color: "bg-line-6", name: "6號線", desc: "漢江鎮 ➜ 三角地 (轉乘)" }, { color: "bg-line-4", name: "4號線", desc: "三角地 ➜ 首爾站" } ] },
          { 
              type: "shopping", time: "16:00", title: "樂天超市", sub: "首爾站店", 
              desc: "最後採買伴手禮。可現場退稅。<br><span class=\"text-xs text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded mt-2 inline-block\"><i class=\"fas fa-subway mr-1\"></i>首爾站 1號出口直達</span>", tags: ["必買"] },
          { type: "transport", time: "20:00", title: "前往機場", sub: "AREX 機場快線", desc: "從首爾站搭乘直達車前往仁川機場。" },
          { type: "flight", airline: "Scoot 酷航", code: "TR897", from: "ICN", fromTime: "23:00", to: "TPE", toTime: "00:45", bag: "50kg", title: "Flight TR897" }
      ]
  }
};

export const PHRASES: Phrase[] = [
  { k: "안녕하세요", p: "An-nyeong-ha-se-yo", m: "你好 (Hello)" },
  { k: "감사합니다", p: "Gam-sa-ham-ni-da", m: "謝謝 (Thank you)" },
  { k: "얼마예요?", p: "Eol-ma-ye-yo?", m: "多少錢? (How much?)" },
  { k: "화장실 어디예요?", p: "Hwa-jang-sil eo-di-ye-yo?", m: "廁所在哪? (Where is toilet?)" },
  { k: "이거 주세요", p: "I-geo ju-se-yo", m: "請給我這個 (This one please)" },
  { k: "물 주세요", p: "Mul ju-se-yo", m: "請給我水 (Water please)" },
  { k: "영수증 주세요", p: "Yeong-su-jeung ju-se-yo", m: "請給我收據 (Receipt please)" },
  { k: "죄송합니다", p: "Joe-song-ham-ni-da", m: "對不起/不好意思 (Sorry)" },
  { k: "괜찮아요", p: "Gwaen-chan-a-yo", m: "沒關係/不用了 (It's okay)" },
  { k: "맛있어요", p: "Ma-si-sseo-yo", m: "好吃 (Delicious)" }
];