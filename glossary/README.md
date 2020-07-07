# W3C関連用語集

W3C関連の用語・略語について定義箇所への参照、日本語訳や解説をまとめたデータファイルを作成することが目標です。

## データ形式

このレポジトリでは、json形式のデータファイル、および表示用のHTMLファイルを提供します。

### jsonフォーマット

```javascript
{
    "languages": { // データ内のエントリに定義される言語のリスト、言語名キーのハッシュ
        // 各項目中、"name"と"dir"は必須
        "en": { "name": "English", "dir": "ltr" }, // 表示名に加え表示方向などのプロパティー
        "ja": { "name": "日本語", "dir": "ltr" }
    },
    "entries" : { // データエントリ本体、略語もしくは英語名称(W3C公式言語として)がキーのハッシュ
        // 各項目中、"desc"は必須、"full"は略語の際は必須でなければキーを利用(キーと"full"が同一でもok)、"def"と"link"はなくてもよい
        "AB": {
            "def": "https://w3c.github.io/w3process/#AB", // 定義へのリンク(URL)
            "full": "Advisory Board", // 略語の場合は省略前の英語名称
            "link": [ // 参照で追加されるべきリンク(URL)の配列
                "https://www.w3.org/2002/ab/"
            ],
            "desc": { // 各言語での名称・説明、"languages"で定義された言語名キーのハッシュ
                // 各項目中、"name"は必須、"desc"はなくてもよい、"en"の項目はなくてもよいがない場合は"name"には一つ上の"full"を利用する(対訳表の生成時などには)
                "en": {
                    "name": "Advisory Board", // 各言語での名称(翻訳名)
                    "desc": "Advisory Board provides ongoing guidance to the Team on issues of strategy, management, legal matters, process, and conflict resolution" // 短い説明
                },
                "ja": {
                    "name": "運営理事会",
                    "desc": "ABは、戦略、管理、法的問題、プロセス、紛争解決の問題について、チームに継続的なガイダンスを提供します"
                }
            }
        }
    }
}
```
