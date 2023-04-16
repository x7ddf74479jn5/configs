import { moduleInterop } from "@textlint/module-interop";

module.exports = {
  rules: {
    "ja-hiragana-daimeishi": moduleInterop(
      require("textlint-rule-ja-hiragana-daimeishi")
    ),
    "ja-hiragana-fukushi": moduleInterop(
      require("textlint-rule-ja-hiragana-fukushi")
    ),
    "ja-hiragana-hojodoushi": moduleInterop(
      require("textlint-rule-ja-hiragana-hojodoushi")
    ),
    "ja-keishikimeishi": moduleInterop(
      require("textlint-rule-ja-keishikimeishi")
    ),
    "ja-nakaguro-or-halfwidth-space-between-katakana": require("textlint-rule-ja-nakaguro-or-halfwidth-space-between-katakana"),
    "ja-no-abusage": moduleInterop(require("textlint-rule-ja-no-abusage")),
    "ja-no-mixed-period": moduleInterop(
      require("textlint-rule-ja-no-mixed-period")
    ),
    "ja-no-redundant-expression": moduleInterop(
      require("textlint-rule-ja-no-redundant-expression")
    ),
    "ja-no-space-around-parentheses": moduleInterop(
      require("textlint-rule-ja-no-space-around-parentheses")
    ),
    "ja-no-space-between-full-width": moduleInterop(
      require("textlint-rule-ja-no-space-between-full-width")
    ),
    "ja-no-successive-word": moduleInterop(
      require("textlint-rule-ja-no-successive-word")
    ),
    "ja-no-weak-phrase": moduleInterop(
      require("textlint-rule-ja-no-weak-phrase")
    ),
    "ja-space-after-exclamation": moduleInterop(
      require("textlint-rule-ja-space-after-exclamation")
    ),
    "ja-space-after-question": moduleInterop(
      require("textlint-rule-ja-space-after-question")
    ),
    "ja-space-around-code": moduleInterop(
      require("textlint-rule-ja-space-around-code")
    ),
    "ja-space-around-link": require("textlint-rule-ja-space-around-link"),
    "ja-space-between-half-and-full-width": moduleInterop(
      require("textlint-rule-ja-space-between-half-and-full-width")
    ),
    "ja-unnatural-alphabet": moduleInterop(
      require("textlint-rule-ja-unnatural-alphabet")
    ),
    "max-comma": moduleInterop(require("textlint-rule-max-comma")),
    "max-kanji-continuous-len": moduleInterop(
      require("textlint-rule-max-kanji-continuous-len")
    ),
    "max-ten": moduleInterop(require("textlint-rule-max-ten")),
    "no-double-negative-ja": moduleInterop(
      require("textlint-rule-no-double-negative-ja")
    ),
    "no-doubled-conjunction": moduleInterop(
      require("textlint-rule-no-doubled-conjunction")
    ),
    "no-doubled-conjunctive-particle-ga": moduleInterop(
      require("textlint-rule-no-doubled-conjunctive-particle-ga")
    ),
    "no-doubled-joshi": moduleInterop(
      require("textlint-rule-no-doubled-joshi")
    ),
    "no-dropping-the-ra": moduleInterop(
      require("textlint-rule-no-dropping-the-ra")
    ),
    "no-hankaku-kana": moduleInterop(require("textlint-rule-no-hankaku-kana")),
    "no-invalid-control-character": moduleInterop(
      require("@textlint-rule/textlint-rule-no-invalid-control-character")
    ),
    "no-mix-dearu-desumasu": moduleInterop(
      require("textlint-rule-no-mix-dearu-desumasu")
    ),
    "no-mixed-zenkaku-and-hankaku-alphabet": moduleInterop(
      require("textlint-rule-no-mixed-zenkaku-and-hankaku-alphabet")
    ),
    "no-unmatched-pair": moduleInterop(
      require("@textlint-rule/textlint-rule-no-unmatched-pair")
    ),
    "sentence-length": moduleInterop(require("textlint-rule-sentence-length")),
  },

  rulesConfig: {
    "@proofdict/proofdict": {
      dictURL: "https://azu.github.io/proof-dictionary/",
    },
    "@textlint-rule/no-unmatched-pair": true,
    "ja-hiragana-daimeishi": true,
    "ja-hiragana-fukushi": true,
    "ja-hiragana-hojodoushi": true,
    "ja-keishikimeishi": {
      detection_hou_kata: false,
      detection_ue: false,
    },
    "ja-nakaguro-or-halfwidth-space-between-katakana": true,
    "ja-no-abusage": true,
    "ja-no-mixed-period": {
      allowPeriodMarks: [":", "…"],
      allowEmojiAtEnd: true,
    },
    "ja-no-space-around-parentheses": true,
    "ja-no-space-between-full-width": true,
    "ja-no-successive-word": false,
    "ja-no-redundant-expression": true,
    "ja-no-weak-phrase": false,
    "ja-space-between-half-and-full-width": {
      space: "never",
    },
    "ja-space-after-exclamation": true,
    "ja-space-after-question": true,
    "ja-space-around-code": false,
    "ja-space-around-link": false,
    "ja-unnatural-alphabet": true,
    "max-comma": {
      max: 3,
    },
    "max-ten": {
      max: 3,
    },
    "max-kanji-continuous-len": {
      max: 6,
    },
    "no-doubled-conjunction": true,
    "no-doubled-conjunctive-particle-ga": true,
    "no-doubled-joshi": {
      strict: false,
      min_interval: 1,
      allow: ["か", "が", "に"],
    },
    "no-double-negative-ja": true,
    "no-dropping-the-ra": true,
    "no-hankaku-kana": true,
    "no-invalid-control-character": true,
    "no-mix-dearu-desumasu": true,
    "no-mixed-zenkaku-and-hankaku-alphabet": true,
    "no-unmatched-pair": true,
    "sentence-length": {
      max: 150,
    },
  },
};
