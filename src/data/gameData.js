// 초성 추출 함수
export function getInitialConsonants(text) {
  const initials = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    if (code >= 44032 && code <= 55203) {
      const initialIndex = Math.floor((code - 44032) / 588);
      return initials[initialIndex];
    }
    return char;
  }).join(' ');
}

export const quizData = [
  // ==================== 음료 (Drinks) ====================
  {
    id: 1,
    name: "아메리카노",
    description: "에스프레소에 뜨거운 물을 부어 만든 깔끔한 맛의 커피. 한국 카페에서 가장 많이 주문되는 메뉴입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Caff%C3%A8_americano_in_the_Philippines.jpg/500px-Caff%C3%A8_americano_in_the_Philippines.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㅇ ㅁ ㄹ ㅋ ㄴ",
    choices: ["아메리카노", "에스프레소", "카페라떼", "콜드브루"],
    explanation: "아메리카노는 에스프레소에 뜨거운 물을 추가하여 연하게 만든 커피입니다."
  },
  {
    id: 2,
    name: "카페라떼",
    description: "에스프레소에 스팀 우유를 부어 만든 부드러운 커피. 우유 비율이 높아 고소하고 크리미합니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg/500px-Latte_at_Doppio_Ristretto_Chiang_Mai_01.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㅋ ㅍ ㄹ ㄸ",
    choices: ["카페라떼", "카푸치노", "플랫화이트", "마키아토"],
    explanation: "카페라떼는 이탈리아어로 '커피 우유'라는 뜻으로, 에스프레소와 스팀 우유의 비율이 1:3입니다."
  },
  {
    id: 3,
    name: "카푸치노",
    description: "에스프레소에 스팀 우유와 풍성한 우유 거품을 올린 이탈리아 커피. 시나몬이나 코코아 파우더를 뿌려 먹기도 합니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Cappuccino_in_original.jpg/500px-Cappuccino_in_original.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㅋ ㅍ ㅊ ㄴ",
    choices: ["카푸치노", "카페라떼", "아인슈페너", "모카"],
    explanation: "카푸치노는 에스프레소, 스팀 우유, 우유 거품이 1:1:1 비율로 구성됩니다."
  },
  {
    id: 4,
    name: "에스프레소",
    description: "고압으로 추출한 진하고 농축된 커피. 작은 잔에 소량으로 제공되며 모든 커피 메뉴의 기본이 됩니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Doppio.jpg/500px-Doppio.jpg",
    category: "drink",
    difficulty: "medium",
    hint: "ㅇ ㅅ ㅍ ㄹ ㅅ",
    choices: ["에스프레소", "아메리카노", "리스트레토", "룽고"],
    explanation: "에스프레소는 이탈리아어로 '빠르게'라는 뜻이며, 약 25~30ml의 소량으로 추출됩니다."
  },
  {
    id: 5,
    name: "마키아토",
    description: "에스프레소에 소량의 우유 거품을 얹어 '얼룩진' 모양이 특징인 커피입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Macchiato_%287199366530%29.jpg/500px-Macchiato_%287199366530%29.jpg",
    category: "drink",
    difficulty: "medium",
    hint: "ㅁ ㅋ ㅇ ㅌ",
    choices: ["마키아토", "에스프레소", "플랫화이트", "코르타도"],
    explanation: "마키아토는 이탈리아어로 '얼룩진'이라는 뜻으로, 에스프레소에 우유 한 방울을 떨어뜨린 것이 특징입니다."
  },
  {
    id: 6,
    name: "모카",
    description: "에스프레소에 초콜릿 시럽과 스팀 우유를 넣어 달콤한 맛이 나는 커피. 휘핑크림을 올려 먹기도 합니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Mocaccino-Coffee.jpg/500px-Mocaccino-Coffee.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㅁ ㅋ",
    choices: ["모카", "초코라떼", "핫초코", "카페라떼"],
    explanation: "카페모카는 초콜릿과 커피의 조합으로, 예멘의 '모카' 항구에서 이름이 유래했습니다."
  },
  {
    id: 7,
    name: "플랫화이트",
    description: "에스프레소에 벨벳 같은 질감의 마이크로폼 우유를 부어 만든 호주/뉴질랜드 발 커피입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Flat_white_coffee_with_pretty_feather_pattern.jpg/500px-Flat_white_coffee_with_pretty_feather_pattern.jpg",
    category: "drink",
    difficulty: "hard",
    hint: "ㅍ ㄹ ㅎ ㅇ ㅌ",
    choices: ["플랫화이트", "카페라떼", "카푸치노", "마키아토"],
    explanation: "플랫화이트는 카페라떼보다 우유 거품이 얇고(flat), 커피 맛이 더 진한 것이 특징입니다."
  },
  {
    id: 8,
    name: "초코라떼",
    description: "따뜻한 우유에 초콜릿을 녹여 만든 달콤한 음료. 카페에서 논커피 메뉴의 대표격입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Coffee_Latte_from_Lviv_Handmade_Chocolate.jpg/500px-Coffee_Latte_from_Lviv_Handmade_Chocolate.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㅊ ㅋ ㄹ ㄸ",
    choices: ["초코라떼", "핫초코", "모카", "카페라떼"],
    explanation: "초코라떼는 우유에 초콜릿을 녹인 음료로, 에스프레소가 들어가지 않는 것이 모카와의 차이입니다."
  },
  {
    id: 9,
    name: "딸기라떼",
    description: "신선한 딸기와 우유를 섞어 만든 분홍빛 음료. 봄철 시즌 메뉴로 인기가 많습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Strawberry_milk_shake_%28cropped%29.jpg/500px-Strawberry_milk_shake_%28cropped%29.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㄸ ㄱ ㄹ ㄸ",
    choices: ["딸기라떼", "딸기스무디", "핑크레모네이드", "베리에이드"],
    explanation: "딸기라떼는 딸기 퓨레와 우유를 섞어 만들며, 봄 시즌에 가장 인기 있는 카페 메뉴 중 하나입니다."
  },
  {
    id: 10,
    name: "핫초코",
    description: "뜨거운 우유에 초콜릿을 녹여 만든 겨울 대표 음료. 마시멜로나 휘핑크림을 올려 먹습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Hot-chocolate-1058197.jpg/500px-Hot-chocolate-1058197.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㅎ ㅊ ㅋ",
    choices: ["핫초코", "초코라떼", "모카", "코코아"],
    explanation: "핫초코와 초코라떼는 비슷하지만, 핫초코는 전통적으로 코코아 파우더나 초콜릿을 물이나 우유에 녹인 것입니다."
  },
  {
    id: 11,
    name: "레모네이드",
    description: "레몬즙에 물과 설탕을 섞어 만든 상큼한 음료. 여름에 갈증 해소에 최고입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Lemonade_-_27682817724.jpg/500px-Lemonade_-_27682817724.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㄹ ㅁ ㄴ ㅇ ㄷ",
    choices: ["레모네이드", "에이드", "자몽주스", "라임에이드"],
    explanation: "레모네이드는 세계에서 가장 오래된 음료 중 하나로, 기원전 이집트에서부터 마셨다고 합니다."
  },
  {
    id: 12,
    name: "밀크쉐이크",
    description: "우유와 아이스크림을 블렌더로 갈아 만든 달콤하고 차가운 음료. 다양한 맛으로 즐길 수 있습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Chocolate_milkshake%2C_Good_Stuff_Eatery.jpg/500px-Chocolate_milkshake%2C_Good_Stuff_Eatery.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㅁ ㅋ ㅅ ㅇ ㅋ",
    choices: ["밀크쉐이크", "스무디", "프라페", "요거트"],
    explanation: "밀크쉐이크는 1885년 미국에서 처음 등장했으며, 원래는 위스키 칵테일이었다고 합니다."
  },
  {
    id: 13,
    name: "프라페",
    description: "얼음을 곱게 갈아 에스프레소와 섞고 휘핑크림을 올린 시원한 커피 음료입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Greek_Frappe.jpg/500px-Greek_Frappe.jpg",
    category: "drink",
    difficulty: "medium",
    hint: "ㅍ ㄹ ㅍ",
    choices: ["프라페", "밀크쉐이크", "스무디", "콜드브루"],
    explanation: "프라페는 그리스어로 '얼음에 친'이라는 뜻으로, 1957년 그리스에서 우연히 발명되었습니다."
  },
  // --- 트렌디 음료 ---
  {
    id: 14,
    name: "말차라떼",
    description: "곱게 간 녹차 가루(말차)에 우유를 넣어 만든 음료. 2024~2025년 한국 카페 최대 트렌드입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Matcha_Latte_KF.JPG/500px-Matcha_Latte_KF.JPG",
    category: "drink",
    difficulty: "easy",
    hint: "ㅁ ㅊ ㄹ ㄸ",
    choices: ["말차라떼", "녹차라떼", "그린티프라페", "유자라떼"],
    explanation: "말차는 일본식 녹차 가루로, 일반 녹차보다 카페인과 항산화 성분이 더 풍부합니다."
  },
  {
    id: 15,
    name: "아인슈페너",
    description: "진한 에스프레소 위에 달콤한 생크림을 듬뿍 올린 오스트리아 빈 스타일 커피입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Einsp%C3%A4nner_Kaffee.jpg/500px-Einsp%C3%A4nner_Kaffee.jpg",
    category: "drink",
    difficulty: "hard",
    hint: "ㅇ ㅇ ㅅ ㅍ ㄴ",
    choices: ["아인슈페너", "비엔나커피", "아포가토", "크림라떼"],
    explanation: "아인슈페너는 독일어로 '1두 마차'라는 뜻으로, 마부들이 마차 위에서 흘리지 않게 크림을 올려 마신 것에서 유래했습니다."
  },
  {
    id: 16,
    name: "달고나커피",
    description: "인스턴트 커피와 설탕을 휘핑하여 꾸덕한 크림을 만들고 차가운 우유 위에 올린 음료입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Homemade_Dalgona_Coffee.jpg/500px-Homemade_Dalgona_Coffee.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㄷ ㄱ ㄴ ㅋ ㅍ",
    choices: ["달고나커피", "아인슈페너", "카라멜마키아토", "카페라떼"],
    explanation: "달고나커피는 2020년 코로나 시기 SNS에서 전 세계적으로 유행한 한국발 홈카페 트렌드입니다."
  },
  {
    id: 17,
    name: "버블티",
    description: "밀크티나 과일차에 쫄깃한 타피오카 펄을 넣은 대만식 음료. 흑당 시럽 버전이 특히 인기입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Bubble_tea_served_in_light_bulb_glass.jpg/500px-Bubble_tea_served_in_light_bulb_glass.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㅂ ㅂ ㅌ",
    choices: ["버블티", "밀크티", "타로라떼", "흑당라떼"],
    explanation: "버블티는 1980년대 대만에서 탄생했으며, 동글동글한 타피오카 펄이 '버블' 같다고 해서 붙여진 이름입니다."
  },
  {
    id: 18,
    name: "흑임자라떼",
    description: "볶은 검은 깨(흑임자) 가루에 우유를 넣어 만든 고소하고 부드러운 한국식 라떼입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Xing_Fu_Tang_black_sesame_milk_tea.jpg/500px-Xing_Fu_Tang_black_sesame_milk_tea.jpg",
    category: "drink",
    difficulty: "medium",
    hint: "ㅎ ㅇ ㅈ ㄹ ㄸ",
    choices: ["흑임자라떼", "미숫가루라떼", "곡물라떼", "팥라떼"],
    explanation: "흑임자라떼는 한국 전통 식재료를 활용한 카페 음료로, 고소한 맛이 특징입니다."
  },
  {
    id: 19,
    name: "수정과",
    description: "계피와 생강을 끓인 물에 설탕과 곶감을 넣은 한국 전통 음료. 카페에서 현대적으로 재해석되고 있습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Korean_fruit_punch-Sujeonggwa-02.jpg/500px-Korean_fruit_punch-Sujeonggwa-02.jpg",
    category: "drink",
    difficulty: "medium",
    hint: "ㅅ ㅈ ㄱ",
    choices: ["수정과", "식혜", "매실차", "생강차"],
    explanation: "수정과는 고려시대부터 전해지는 한국 전통 음료로, 겨울철 후식으로 즐겨 마셨습니다."
  },
  {
    id: 20,
    name: "크림라떼",
    description: "에스프레소와 우유 위에 부드러운 생크림을 올린 음료. 다양한 맛의 크림으로 변형됩니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Iced_Coffee_Cream_Latte_-_CK_Bistro_2024-06-23.jpg/500px-Iced_Coffee_Cream_Latte_-_CK_Bistro_2024-06-23.jpg",
    category: "drink",
    difficulty: "easy",
    hint: "ㅋ ㄹ ㄹ ㄸ",
    choices: ["크림라떼", "아인슈페너", "카페라떼", "바닐라라떼"],
    explanation: "크림라떼는 일반 라떼에 다양한 맛의 생크림을 올린 것으로, 한국 카페에서 시그니처 메뉴로 인기입니다."
  },

  // ==================== 디저트 (Desserts) ====================
  {
    id: 21,
    name: "아포가토",
    description: "뜨거운 에스프레소를 바닐라 아이스크림 위에 부어 먹는 이탈리아 디저트입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Affogato.JPG/500px-Affogato.JPG",
    category: "dessert",
    difficulty: "medium",
    hint: "ㅇ ㅍ ㄱ ㅌ",
    choices: ["아포가토", "젤라토", "파르페", "빙수"],
    explanation: "아포가토는 이탈리아어로 '익사한'이라는 뜻으로, 아이스크림이 커피에 '빠진' 모습에서 유래했습니다."
  },
  {
    id: 22,
    name: "티라미수",
    description: "커피 시럽에 적신 비스킷에 마스카르포네 치즈 크림을 올린 이탈리아 대표 디저트입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Tiramisu_dessert.jpg/500px-Tiramisu_dessert.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅌ ㄹ ㅁ ㅅ",
    choices: ["티라미수", "크렘브륄레", "판나코타", "치즈케이크"],
    explanation: "티라미수는 이탈리아어로 '나를 끌어올려줘'라는 뜻으로, 기분을 좋게 해주는 디저트라는 의미입니다."
  },
  {
    id: 23,
    name: "마카롱",
    description: "아몬드 가루로 만든 머랭 쿠키 사이에 크림이나 잼을 넣은 형형색색의 프랑스 디저트입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Macarons%2C_French_made_mini_cakes.JPG/500px-Macarons%2C_French_made_mini_cakes.JPG",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅁ ㅋ ㄹ",
    choices: ["마카롱", "뚱카롱", "쿠키", "다쿠아즈"],
    explanation: "마카롱은 원래 이탈리아에서 시작됐지만, 프랑스 파리의 라뒤레에서 현재 형태로 발전했습니다."
  },
  {
    id: 24,
    name: "크루아상",
    description: "버터를 여러 겹 접어 만든 초승달 모양의 프랑스 빵. 겉은 바삭하고 속은 부드럽습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Croissant_In_Austria.jpg/500px-Croissant_In_Austria.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅋ ㄹ ㅇ ㅅ",
    choices: ["크루아상", "크로플", "크루키", "페이스트리"],
    explanation: "크루아상은 '초승달'이라는 뜻의 프랑스어로, 오스트리아 빈에서 유래했다는 설이 있습니다."
  },
  {
    id: 25,
    name: "에클레어",
    description: "슈 반죽에 커스터드 크림을 채우고 위에 초콜릿 글레이즈를 바른 길쭉한 프랑스 디저트입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Two_Safeway_Chocolate_Eclairs_%2819043880936%29.jpg/500px-Two_Safeway_Chocolate_Eclairs_%2819043880936%29.jpg",
    category: "dessert",
    difficulty: "medium",
    hint: "ㅇ ㅋ ㄹ ㅇ",
    choices: ["에클레어", "슈크림", "프로피테롤", "밀푀유"],
    explanation: "에클레어는 프랑스어로 '번개'라는 뜻으로, 빠르게 먹어야 크림이 흐르지 않기 때문에 붙여진 이름입니다."
  },
  {
    id: 26,
    name: "타르트",
    description: "바삭한 페이스트리 반죽 위에 과일이나 크림을 올린 오픈형 파이. 다양한 맛으로 즐길 수 있습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Fruit_tart_with_kiwi%2C_peach%2C_and_raspberry.jpg/500px-Fruit_tart_with_kiwi%2C_peach%2C_and_raspberry.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅌ ㄹ ㅌ",
    choices: ["타르트", "파이", "키슈", "타르틴"],
    explanation: "타르트는 틀에 반죽을 깔고 토핑을 올려 구운 디저트로, 파이와 달리 위에 반죽 덮개가 없습니다."
  },
  {
    id: 27,
    name: "크렘브륄레",
    description: "부드러운 커스터드 위에 설탕을 뿌려 토치로 캐러멜화한 프랑스 디저트. '불에 탄 크림'이라는 뜻입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cr%C3%A8me_br%C3%BBl%C3%A9e_w._whipped_cream.jpg/500px-Cr%C3%A8me_br%C3%BBl%C3%A9e_w._whipped_cream.jpg",
    category: "dessert",
    difficulty: "hard",
    hint: "ㅋ ㄹ ㅂ ㄹ ㄹ",
    choices: ["크렘브륄레", "판나코타", "푸딩", "무스"],
    explanation: "크렘브륄레는 윗면의 캐러멜을 스푼으로 깨뜨려 먹는 것이 이 디저트를 먹는 묘미입니다."
  },
  {
    id: 28,
    name: "파르페",
    description: "유리컵에 아이스크림, 휘핑크림, 과일, 그래놀라를 층층이 쌓은 디저트입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Parfait_desert.JPG/500px-Parfait_desert.JPG",
    category: "dessert",
    difficulty: "medium",
    hint: "ㅍ ㄹ ㅍ",
    choices: ["파르페", "선데", "요거트볼", "빙수"],
    explanation: "파르페는 프랑스어로 '완벽한'이라는 뜻으로, 여러 재료가 조화를 이루는 디저트입니다."
  },
  {
    id: 29,
    name: "판나코타",
    description: "크림, 우유, 설탕, 젤라틴으로 만든 이탈리아식 푸딩. 과일 소스와 함께 제공됩니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Panna_Cotta_with_cream_and_garnish.jpg/500px-Panna_Cotta_with_cream_and_garnish.jpg",
    category: "dessert",
    difficulty: "hard",
    hint: "ㅍ ㄴ ㅋ ㅌ",
    choices: ["판나코타", "크렘브륄레", "젤리", "푸딩"],
    explanation: "판나코타는 이탈리아어로 '조리된 크림'이라는 뜻이며, 피에몬테 지방의 전통 디저트입니다."
  },
  {
    id: 30,
    name: "아이스크림",
    description: "우유나 크림을 얼려 만든 전 세계인이 사랑하는 냉동 디저트. 수백 가지 맛이 있습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Ice_cream_with_garnish.jpg/500px-Ice_cream_with_garnish.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅇ ㅇ ㅅ ㅋ ㄹ",
    choices: ["아이스크림", "젤라토", "셔벗", "소프트아이스크림"],
    explanation: "아이스크림의 역사는 기원전 중국까지 거슬러 올라가며, 현대적 아이스크림은 17세기 유럽에서 발전했습니다."
  },
  {
    id: 31,
    name: "와플",
    description: "격자무늬 판에 구워 바삭한 벨기에 전통 빵. 시럽, 과일, 아이스크림을 올려 먹습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Waffles_%28Belgium%29.jpg/500px-Waffles_%28Belgium%29.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅇ ㅍ",
    choices: ["와플", "크로플", "팬케이크", "크레페"],
    explanation: "벨기에 와플은 브뤼셀 와플(직사각형)과 리에주 와플(둥글고 달콤)의 두 종류가 대표적입니다."
  },
  {
    id: 32,
    name: "도넛",
    description: "달콤한 반죽을 튀겨 설탕이나 초콜릿으로 장식한 동글한 디저트. 가운데 구멍이 특징입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/500px-Glazed-Donut.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㄷ ㄴ",
    choices: ["도넛", "츄러스", "호떡", "붕어빵"],
    explanation: "도넛의 가운데 구멍은 반죽 중앙까지 고르게 익히기 위해 만든 것이라는 설이 있습니다."
  },
  {
    id: 33,
    name: "브라우니",
    description: "진한 초콜릿으로 만든 정사각형 케이크. 겉은 바삭하고 속은 촉촉한 식감이 특징입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Chocolatebrownie.JPG/500px-Chocolatebrownie.JPG",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅂ ㄹ ㅇ ㄴ",
    choices: ["브라우니", "파운드케이크", "가나슈", "초코케이크"],
    explanation: "브라우니는 1893년 시카고 만국박람회에서 한 손으로 먹을 수 있는 디저트로 처음 만들어졌습니다."
  },
  {
    id: 34,
    name: "쿠키",
    description: "밀가루, 버터, 설탕으로 구운 바삭한 과자. 초코칩, 오트밀 등 다양한 종류가 있습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Choc-Chip-Cookie.jpg/500px-Choc-Chip-Cookie.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅋ ㅋ",
    choices: ["쿠키", "비스킷", "스콘", "크래커"],
    explanation: "쿠키는 네덜란드어 'koekje'(작은 케이크)에서 유래한 이름입니다."
  },
  {
    id: 35,
    name: "츄러스",
    description: "길쭉하게 튀겨 설탕과 시나몬을 뿌린 스페인식 도넛. 초콜릿 소스에 찍어 먹습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Churros_in_the_Philippines_01.jpg/500px-Churros_in_the_Philippines_01.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅊ ㄹ ㅅ",
    choices: ["츄러스", "도넛", "프레첼", "와플스틱"],
    explanation: "츄러스는 스페인과 포르투갈에서 아침 식사로 핫초코에 찍어 먹는 전통이 있습니다."
  },
  // --- 트렌디 디저트 ---
  {
    id: 36,
    name: "두쫀쿠",
    description: "마시멜로를 녹인 쫀득한 반죽 안에 피스타치오 크림과 바삭한 카다이프를 넣은 쿠키. 2025년 SNS 최대 화제 디저트!",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Biscoff_Stuffed_Cookie_-_Max%27d_Out_Cookies_2025-11-13.jpg/500px-Biscoff_Stuffed_Cookie_-_Max%27d_Out_Cookies_2025-11-13.jpg",
    category: "dessert",
    difficulty: "medium",
    hint: "ㄷ ㅉ ㅋ",
    choices: ["두쫀쿠", "두바이초콜릿", "뚱카롱", "쿠키"],
    explanation: "두쫀쿠는 '두바이 쫀득 쿠키'의 줄임말로, 두바이초콜릿의 인기에 이어 한국에서 변형된 디저트입니다."
  },
  {
    id: 37,
    name: "두바이초콜릿",
    description: "초콜릿 속에 바삭한 카다이프(실 모양 면)와 피스타치오 크림을 채운 중동풍 프리미엄 초콜릿입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Dubai_chocolate_on_a_plate_02.jpg/500px-Dubai_chocolate_on_a_plate_02.jpg",
    category: "dessert",
    difficulty: "medium",
    hint: "ㄷ ㅂ ㅇ ㅊ ㅋ ㄹ",
    choices: ["두바이초콜릿", "두쫀쿠", "트러플초콜릿", "파베초콜릿"],
    explanation: "두바이초콜릿은 2024년 한국 디저트 씬에서 가장 핫했던 아이템으로, 카다이프의 바삭한 식감이 특징입니다."
  },
  {
    id: 38,
    name: "크로플",
    description: "크루아상 반죽을 와플 기계에 눌러 구운 하이브리드 디저트. 겉은 바삭하고 속은 버터향 가득합니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Croffles_5.jpg/500px-Croffles_5.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅋ ㄹ ㅍ",
    choices: ["크로플", "와플", "크루아상", "크루키"],
    explanation: "크로플은 크루아상(croissant) + 와플(waffle)의 합성어로, 한국에서 2020년부터 대유행한 디저트입니다."
  },
  {
    id: 39,
    name: "약과",
    description: "밀가루 반죽을 기름에 튀긴 뒤 꿀이나 조청에 적신 한국 전통 과자. MZ세대 사이에서 대유행했습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/KOCIS_yakgwa%2C_honey_cookies_%284646996556%29.jpg/500px-KOCIS_yakgwa%2C_honey_cookies_%284646996556%29.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅇ ㄱ",
    choices: ["약과", "꿀떡", "한과", "강정"],
    explanation: "약과는 고려시대부터 전해져 온 한국 전통 과자로, '할매니얼' 트렌드와 함께 2023년 MZ세대에서 대유행했습니다."
  },
  {
    id: 40,
    name: "탕후루",
    description: "신선한 과일에 설탕 시럽을 코팅하여 굳힌 중국식 과일 사탕. 바삭하게 깨지는 식감이 ASMR 영상으로도 인기입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tanghulu-shanghai.jpg/500px-Tanghulu-shanghai.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅌ ㅎ ㄹ",
    choices: ["탕후루", "과일젤리", "캔디", "사탕"],
    explanation: "탕후루는 중국 전통 간식으로, 2023~2024년 한국 길거리에서 전문점이 급속도로 늘어났습니다."
  },
  {
    id: 41,
    name: "바스크치즈케이크",
    description: "밀가루 없이 크림치즈로만 만들어 고온에서 구운 케이크. 겉은 그을리고 속은 푸딩처럼 촉촉합니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Basque-cheesecake.jpg/500px-Basque-cheesecake.jpg",
    category: "dessert",
    difficulty: "hard",
    hint: "ㅂ ㅅ ㅋ ㅊ ㅈ ㅋ ㅇ ㅋ",
    choices: ["바스크치즈케이크", "뉴욕치즈케이크", "수플레치즈케이크", "레어치즈케이크"],
    explanation: "바스크치즈케이크는 스페인 바스크 지방의 '라 비냐'라는 바에서 1990년에 처음 만들어졌습니다."
  },
  {
    id: 42,
    name: "소금빵",
    description: "겉은 바삭하고 속에 버터가 녹아든 짭짤한 빵. 단순하지만 중독성 있는 맛으로 스테디셀러가 되었습니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%EC%86%8C%EA%B8%88%EB%B9%B5.jpg/500px-%EC%86%8C%EA%B8%88%EB%B9%B5.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅅ ㄱ ㅃ",
    choices: ["소금빵", "크루아상", "바게트", "브리오슈"],
    explanation: "소금빵(시오빵)은 일본에서 시작되어 한국에서 2022년부터 대유행, 현재까지 인기가 이어지고 있습니다."
  },
  {
    id: 43,
    name: "뚱카롱",
    description: "일반 마카롱보다 크기가 크고 필링을 넉넉하게 채운 뚱뚱한 마카롱. 비주얼이 화려해 SNS 인기 디저트입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Macaroons_in_Korea.jpg/500px-Macaroons_in_Korea.jpg",
    category: "dessert",
    difficulty: "medium",
    hint: "ㄸ ㅋ ㄹ",
    choices: ["뚱카롱", "마카롱", "다쿠아즈", "머랭쿠키"],
    explanation: "뚱카롱은 '뚱뚱한 마카롱'의 줄임말로, 한국에서 만들어진 신조어이자 트렌드입니다."
  },
  {
    id: 44,
    name: "까눌레",
    description: "프랑스 보르도 지방의 전통 구움과자. 겉은 캐러멜처럼 단단하고 속은 부드러운 커스터드 식감입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Caneles_stemilion.jpg/500px-Caneles_stemilion.jpg",
    category: "dessert",
    difficulty: "medium",
    hint: "ㄲ ㄴ ㄹ",
    choices: ["까눌레", "마들렌", "피낭시에", "에클레어"],
    explanation: "까눌레는 밀랍을 바른 구리 틀에 구워 겉면의 특유의 캐러멜 크러스트를 만듭니다."
  },
  {
    id: 45,
    name: "크루키",
    description: "크루아상 반죽 위에 쿠키 반죽을 올려 함께 구운 하이브리드 디저트. 바삭함의 이중주입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Crookie_de_Franu%C3%AD_%26_Ninho.jpg/500px-Crookie_de_Franu%C3%AD_%26_Ninho.jpg",
    category: "dessert",
    difficulty: "medium",
    hint: "ㅋ ㄹ ㅋ",
    choices: ["크루키", "크로플", "크루아상", "쿠키"],
    explanation: "크루키는 크루아상(croissant) + 쿠키(cookie)의 합성어로, 2024년 한국 베이커리 트렌드입니다."
  },
  {
    id: 46,
    name: "마들렌",
    description: "조개 모양 틀에 구운 프랑스식 버터 케이크. 부드럽고 촉촉하며 은은한 레몬 향이 특징입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Madeleines_de_Commercy.jpg/500px-Madeleines_de_Commercy.jpg",
    category: "dessert",
    difficulty: "medium",
    hint: "ㅁ ㄷ ㄹ",
    choices: ["마들렌", "피낭시에", "까눌레", "스콘"],
    explanation: "마들렌은 프루스트의 소설 '잃어버린 시간을 찾아서'에서 유명해진 프랑스 전통 과자입니다."
  },
  {
    id: 47,
    name: "꿀떡",
    description: "쫀득한 떡 반죽 안에 달콤한 꿀과 견과류 소를 넣어 만든 한국 전통 간식입니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Kkultteok.jpg/500px-Kkultteok.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㄲ ㄸ",
    choices: ["꿀떡", "약과", "인절미", "송편"],
    explanation: "꿀떡은 한 입 크기의 떡으로, 최근 카페에서 현대적으로 재해석하여 디저트로 제공하고 있습니다."
  },
  {
    id: 48,
    name: "빙수",
    description: "곱게 간 얼음 위에 팥, 떡, 과일, 연유 등을 올린 한국 대표 여름 디저트. 말차, 망고 등 다양하게 변형됩니다.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Bingsu.jpg/500px-Bingsu.jpg",
    category: "dessert",
    difficulty: "easy",
    hint: "ㅂ ㅅ",
    choices: ["빙수", "파르페", "아이스크림", "셔벗"],
    explanation: "빙수는 조선시대 왕실에서 겨울에 채빙한 얼음으로 여름에 만들어 먹던 것이 시초입니다."
  }
];
