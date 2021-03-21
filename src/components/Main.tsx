import React from 'react';
import "@/styles/component/MDArea.scss";

// pictures

interface Props {
}

const Main: React.FC<Props> = () => {

    return (
        <div className="MDArea">
            <h1 > DMCサークルのホームページにようこそ！</h1>

            <img src="/bk.jpg" alt="dmc" width="100%"></img>

            <h2 >🎧サークルについて </h2>

            <h3 >
                DMCサークルは会津大学のDJが楽しめるサークルです。
            </h3>
            <h3>
                ジャンル問わず音楽が好きな人たちなら誰でも歓迎！
            </h3>
            <h2 ></h2>

            <h2 >🐕ジャンル </h2>
            <h3 >
                ● psychedelic trance
            </h3>
            <h3 >
                ● EDM
            </h3>
            <h3 >
                ● breakcore / jungle
            </h3>
            <h3 >
                ● hip hop
            </h3>
            <h3 >
                ● minimal techno
            </h3>
            <h3 >
                ● trap
            </h3>
            <h3 >
                ● dubstep / riddim
            </h3>
            <h3 >
                ● hardcore / speedcore
            </h3>
            <h2 ></h2>
            <h2 id='contact' >🌈連絡先 </h2>
            <h3 >
                TwitterのDMにて質問受け付けてます
            </h3>
            <a href="https://twitter.com/aizudmc"> aizuDMCのtwitter </a>
            <h2 ></h2>
            <h2 id='access'>😻部室へのアクセス　</h2>
            <h3 >
                食堂の３F
            </h3>
            <img src="/room.jpg" alt="dmc" width="100%"></img>
            <h2 ></h2>
            <h2 id='pictures'>🥓写真集　</h2>
            <h3 >
                DMCサークルで行われたイベントの写真集です。
            </h3>
            <h2 ></h2>
            <h3 >
                1. ぶりぶり（？）
            </h3>
            <img src="/buriburi.jpg" alt="dmc" width="100%"></img>
            <h3 >
                2. きれいなDJ機材の写真
            </h3>
            <img src="/djnoice.jpg" alt="dmc" width="100%"></img>
            <h3 >
                3. 美しい日本の文化の尊重
            </h3>
            <img src="/sakura.jpg" alt="dmc" width="100%"></img>
            <h3 >
                4. ボーリング
            </h3>
            <img src="/bowl.jpg" alt="dmc" width="100%"></img>
            <h3 >
                5. 写像
            </h3>
            <img src="/jdjd.jpeg" alt="dmc" width="100%"></img>
            <h3 >
                6. 学祭のポップコーン
            </h3>
            <img src="/popcorn.jpeg" alt="dmc" width="100%"></img>
            <img src="/popc.jpg" alt="dmc" width="100%"></img>
            <h3 >
                7. イベント
            </h3>
            <img src="/people.jpg" alt="dmc" width="100%"></img>
            <h3 >
                8.  卒業した先輩（哀愁）
            </h3>
            <img src="/masa.jpg" alt="dmc" width="100%"></img>
            <h3 >
                9.  DJ神
            </h3>
            <img src="/djkami.jpg" alt="dmc" width="100%"></img>
        </div>
    )
}

export default Main