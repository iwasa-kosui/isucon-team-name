import React from 'react';
import {
  TwitterShareButton,
  TwitterIcon
} from 'react-share';

const prefix2Data = [
	"スーパー", "ハイパー", "ウルトラ", "ブリリアント", "冷やし", "大人の", "たのしい", "いつもの", "野生の", "すごい", "かなり", "ちょっと", "すこし", "やっぱり", "スペシャル",
	"プレミアム", "必勝の", "最速の", "勝利の", "あの", "いつかは", "インターナショナル", "ドメスティック", "ベスト", "グローバル", "世界の", "ああ", "ザ・", "THE", "RE:",
	"新しい", "ニュー", "いざ", "さあ", "だいたい", "立派な", "あわよくば", "すべからく", "おしなべて", "はやくも", "がんばれ", "さよなら", "ようこそ", "こんにちは", "朝の",
	"昼の", "夜の", "終末の", "異世界", "アイドル", "ハッピー", "ラッキー", "パッション", "マネージド", "エンベデッド", "モディファイド", "エフェクティブ", "エラスティック",
	"ウェブスケール", "中華風", "洋風", "地中海風", "和風", "中世", "令和", "昭和", "レガシー", "古代", "伝説の", "立体的", "平面的", "海の", "山の", "川の", "日本の",
	"電気仕掛けの", "手仕込み", "ロイヤル", "アポカリプティック", "破壊的", "動的", "静的", "センシティブ", "リアクティブ", "自動", "手動", "大きな", "小さな", "ふつうの",
	"サルでもわかる", "たべられる", "たべられない", "ゆっくり", "天から", "空から", "魁！", "仮面", "よしなに", "激辛", "甘口", "やわらか", "アルティメット", "羽つき", "MC",
	"DJ", "Dr.", "金で", "絶対", "システム", "東", "西", "北", "南", "滑り込み", "椅子", "アラフォーだって", "いい感じに", "スライディング", "本番", "ステージング", "rm",
	"-rf", "100日後に", "限界集落", "いっけな〜い", "おしゃれ", "リッチ", "実質", "実用段階", "即", "出会って5秒で", "まじめに", "2段飛ばし", "隠れ家的", "ビストロ",
	"レストラン", "街中華", "ハリガネ", "箱出し", "かため", "ふつう", "やわらかめ", "やわやわ", "大盛り", "高速", "リサイクル", "徹底的", "元祖", "本家", "非同期",
	"魔法のような", "ファッション", "カジュアル", "エンジョイ", "第3", "第5", "生焼け", "あなたと", "私と", "俺の", "私の", "新卒", "こだわり", "実は", "できたて", "白",
	"赤", "青", "黒", "肉の", "焼き", "あんかけ", "麻婆", "台湾", "信頼の", "新", "真", "マジック", "奇跡の", "多段", "マルチ", "並列", "並行", "顔が良い", "夏の",
	"春の", "秋の", "冬の", "ステルス", "待って", "埼玉の", "千葉の", "栃木の", "群馬の", "買える", "会える", "影の", "闇の", "光の", "聖なる", "炎の", "よくわかる",
	"子供用", "大人用", "のびる", "よく効く", "当たる", "勝てる", "魔の", "スキニー", "丸腰", "宇宙の", "事実上", "リアル", "バーチャル", "肉体", "筋肉", "ロック",
	"メタル", "ヤバ", "多重", "全二重", "半二重", "I/O", "XSUCON", "最高", "マスクド", "天然", "無農薬", "偽", "業務中に", "比較的", "ノンアル", "無限", "一生",
	"100万回", "無料", "パッと見", "究極の", "至高の", "スピリチュアル", "特殊", "あつまれ", "三度の飯より", "メイン", "サブ", "大統一", "週末", "量子", "放課後",
	"朝から晩まで", "朝まで", "今夜は", "自称", "天才",
]
const middleData = [
	"いちご", "桃", "梨", "マスカット", "ぶどう", "みかん", "マンゴー", "スイカ", "パイナップル", "メロン", "りんご", "さくらんぼ", "バナナ", "キウイ", "柿", "ライチ",
	"グレープフルーツ", "洋梨", "ざくろ", "ラズベリー", "ドラゴンフルーツ", "デコポン", "すもも", "アメリカンチェリー", "レモン", "マンゴスチン", "いよかん", "パパイヤ",
	"オレンジ", "びわ", "パッションフルーツ", "ブルーベリー", "いちじく", "夏みかん", "ゆず", "ミニトマト", "晩白柚", "シークワーサー", "ランブータン", "ポンカン",
	"ココナッツ", "スターフルーツ", "餃子", "カレー", "ラーメン", "寿司", "ビーフ", "ポーク", "ミルク", "ミックス", "エビチリ", "チャーシュー", "バンバンジー",
	"ハンバーガー", "トンポーロー", "ホイコーロー", "ピザ", "春巻き", "エビ", "カニ", "アワビ", "フカヒレ", "豆腐", "トーフ", "カルボナーラ", "ペペロンチーノ",
	"ミネストローネ", "リゾット", "パエリア", "フィッシュ", "ツナ", "みたらし", "カスタード", "じゃがいも", "キャベツ", "大根", "たまねぎ", "白菜", "トマト", "にんじん",
	"レタス", "きゅうり", "ネギ", "もやし", "なす", "ほうれん草", "かぼちゃ", "里芋", "ピーマン", "ブロッコリー", "ごぼう", "レンコン", "枝豆", "横浜", "恵比寿",
	"吉祥寺", "大宮", "目黒", "品川", "新宿", "池袋", "中目黒", "浦和", "渋谷", "東京", "鎌倉", "中野", "表参道", "自由が丘", "赤羽", "二子玉川", "さいたま新都心",
	"武蔵小杉", "船橋", "北千住", "立川", "たまプラーザ", "柏", "川崎", "海老名", "荻窪", "三軒茶屋", "藤沢", "千葉", "桜木町", "三鷹", "上野", "津田沼", "秋葉原",
	"舞浜", "みなとみらい", "つくば", "青山一丁目", "下北沢", "広尾", "川越", "和光市", "川口", "浦安", "目白", "代々木", "町田", "流山おおたかの森", "ビール",
	"ワイン", "酎ハイ", "リキュール", "清酒", "焼酎", "ブランデー", "ウィスキー", "エール", "ラガー", "ピルスナー", "IPA", "コク", "キレ", "酸味", "苦み", "甘み",
	"パブ", "タゴ", "モリス", "ミラ", "クイ", "ロージー", "リリー", "ソラ", "ハー", "くしい", "ドイツビール", "ペールエール", "ベルギービール", "カメラ", "コーヒー",
	"ルービックキューブ", "バ美肉", "おじさん", "おばさん", "鏡", "家", "運営", "運用", "ソフトウェア", "ハードウェア", "FPGA", "gRPC", "データベース",
	"ネットワーク", "HTTP/2", "たんぽぽ", "薔薇", "チューリップ", "サッカー", "ボルダリング", "相撲", "タブレット", "センシティブ", "スマホ", "ダッシュ", "マスク",
	"チーズ", "ペットボトル", "自作キーボード", "イス", "土下座", "うどん", "そば", "きしめん", "スパゲッティ", "細麺", "太麺", "始末書", "サービス", "マーケティング",
	"魔剤", "アロエ", "ライブ", "ハック", "チェンソー", "パワー", "おにぎり", "筋肉", "NAT", "解体", "ロードアベレージ", "パフォーマンス", "インスタンス",
	"サーバレス", "ノーコード", "プロセス", "C10K", "サーバ", "クライアント", "キャッシュ", "浸透", "年収", "高学歴", "無職", "エラー", "アラート", "オンコール",
	"インデックス", "Cache-Control", "Protocol", "Buffers", "プロファイリング", "ベンチマーク", "fail", "blazingly", "fast", "CPU", "メモリ", "GPU",
	"GPGPU", "JSON色付け", "コンテナ", "モンゴ", "デブオプス", "マッスル", "腹筋", "上腕二頭筋", "大臀筋", "課金", "無課金",
]
const suffixData = [
	"部", "会", "劇場", "団", "太郎", "工場", "委員会", "倶楽部", "クラブ", "計画", "屋", "家", "の楽園", "の世界", "ドロップ", "ボックス", "亭", "の晩餐", "乃月",
	"！", "ごはん", "めし", "工房", "姉妹", "ブラザーズ", "シスターズ", "ファミリー", "家族", "中毒", "スターズ", "のーと", "食べたい", "依存症", "絵本", "茶",
	"人生", "キック", "パンチ", "フォビア", "株式会社", "（株）", "店", "ヶ丘", "堂", "の日", "館", "党", "本舗", "煮", "組", "理論", "式", "夜会", "組合",
	"文庫", "荘", "の会", "商事", "週間", "協奏曲", "鎮魂歌", "序曲", "の森", "役場", "乙女", "動物園", "研究所", "風", "屋台", "小屋", "日記", "連合",
	"シンポジウム", "野郎", "神社", "の部屋", "ゲート", "コミック", "派", "サンドイッチ", "人", "本部", "支部", "帝国", "共和国", "合衆国", "でごめん", "軒", "道場",
	"教室", "出張所", "派出所", "のお茶会", "の音", "興信所", "事務所", "探偵", "図鑑", "戦線", "同盟", "食堂", "製菓", "まんじゅう", "図書館", "の中", "の缶詰",
	"爆弾", "の惨劇", "同好会", "ドーナツ", "都市", "基地", "メランコリー", "マニア", "バトル", "オンライン", "オフライン", "プリン", "賛歌", "天国", "地獄",
	"の5秒前", "のプロ", "効果", "がいる", "同位体", "通信社", "の彼方", "酒店", "MIX", "整骨院", "書房", "百貨店", "雑貨店", "牧場", "症候群", "醸造", "製作所",
	"企画", "チャンプルー", "のおうち", "で解決", "クラッシャー", "は卒業しました", ".dev", "に全振り", "テクノロジーズ", "山", "穏健派", "過激派", "はバランスいい",
	"〜♪", "係", "丼", "は命より重い", "激アツ", "ドリブン", "もどき", "から始めるXSUCON", "IS", "BETTER", "THAN", "PERFECT", "乗り過ごし", "ください",
	"こわれました", "イーツ", "乃風", "レンジャー", "ネイティブ", "ヒーローズ", "駆動開発", "テーマパーク", "がヤバい", ".go", ".rb", ".py", ".js", ".java",
	".rs", ".pl", ".php", "エンジニア", "はともだち", "でごめんなさい", "土下座", "で再起動", "騎士団", "卒", "入門", "屋さん", "の上の刺身", "ラボ", "ビーチ",
	"海岸", "田中", "方式", "は飲み物です", "カレー", "ラーメン", "ロワイヤル", "物語", "学園", "大学", "大好き", "マン", "完全理解", "システム", "王国",
	"を信じろ", "_all", "段階", "不足", "ず", "ズ", "勢", "5期生", "タウン", "シティ", "高校", "します", "だねえ", "だもの", "しかねえ", "厳しい", "大全",
	"だらけ", "と俺", "なら負けない", "しか勝たん", "してもろて", "90%オフ", "氏", "以外", "ゼロ", "の如し", "ガチ勢", "一択", "できた", "は諦めた", "する方法",
	"ようちえん", "無双", "づくし", "単推し", "まみれ", "のオタク", "ざんまい", "オペレーションズ", "（仮）", "君", "さん", "ちゃん",
]

const randomN = (n: number) => Math.floor( Math.random() * n ) 

const generatePrefix1 = () => {
  if (randomN(10) < 2) {
    return "チーム"
  } else {
    return ""
  }
}

const generatePrefix2 = () => {
  if (randomN(2) < 1) {
    return prefix2Data[randomN(prefix2Data.length)]
  } else {
    return ""
  }
}

const generateMiddle = () => {
  return middleData[randomN(middleData.length)]
}

const generateSuffix = () => {
  return suffixData[randomN(suffixData.length)]
}

const generateTeamName = () => {
  return generatePrefix1() + generatePrefix2() + generateMiddle() + generateSuffix()
}

function App() {
  const [teamName, setTeamName] = React.useState(generateTeamName());
  const onClick = () => {
    setTeamName(generateTeamName());
  }
  const title = `あなたのチーム名は ${teamName} です - ${window.document.title}`

  return (
    <div className="App">
      <h1>ISUCON チーム名ジェネレータ</h1>
      <p><a href="https://github.com/isucon/isucon10-final/blob/b2d2291d9938fefc879a6c8a2f65bd6335f2b873/benchmarker/random/team_name.go">ISUCON 10 本戦のチーム名ジェネレータ</a>の React 移植実装です <a href="https://github.com/iwasa-kosui/isucon-team-name">[repo]</a></p>
      <p>あなたのチーム名は...</p>
      <p className="teamName">{teamName}</p>
      <p>です</p>
      <br />
      <input type="button" value="生成" onClick={onClick} />
      <TwitterShareButton url={window.location.href} title={title}>
          <TwitterIcon size={32} round />
      </TwitterShareButton>
    </div>
  );
}

export default App;
