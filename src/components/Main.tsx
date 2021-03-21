import React from 'react';
import "@/styles/component/MDArea.scss";
import Image from "@/components/Image"

interface Props {
}

const Main: React.FC<Props> = () => {

    return (
        <div className="MDArea">
            <h1 > DMCサークルのホームページにようこそ！</h1>

            <Image src="bk.jpg" alt="dmc"></Image>

            <h2 >🎧サークルについて </h2>

            <h3 >
                DMCサークルは会津大学のDJが楽しめるサークルです。
            </h3>
            <h3>
                ジャンル問わず音楽が好きな人たちなら誰でも歓迎！
            </h3>

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


            <h2 id='contact' >🌈連絡先 </h2>
            <h3 >
                TwitterのDMにて質問受け付けてます
            </h3>
            <a href="https://twitter.com/aizudmc"> aizuDMCのtwitter </a>

            <h2 id='access'>😻部室へのアクセス　</h2>
            <h3 >
                食堂の３F
            </h3>
            <Image src="room.JPG" alt="dmc" ></Image>
            <h2 id='pictures'>🥓写真集　</h2>
            <h3 >
                DMCサークルで行われたイベントの写真集です。
            </h3>

            <h3 >
                1. ぶりぶり（？）
            </h3>
            <Image src="buriburi.jpg" alt="dmc" ></Image>
            <h3 >
                2. きれいなDJ機材の写真
            </h3>
            <Image src="djnoice.jpg" alt="dmc" ></Image>
            <h3 >
                3. 美しい日本の文化の尊重
            </h3>
            <Image src="sakura.jpg" alt="dmc" ></Image>
            <h3 >
                4. ボーリング
            </h3>
            <Image src="bowl.JPG" alt="dmc" ></Image>
            <h3 >
                5. 写像
            </h3>
            <Image src="jdjd.JPEG" alt="dmc" ></Image>
            <h3 >
                6. 学祭のポップコーン
            </h3>
            <Image src="popcorn.jpeg" alt="dmc" ></Image>
            <Image src="popc.jpg" alt="dmc" ></Image>
            <h3 >
                7. イベント
            </h3>
            <Image src="people.JPG" alt="dmc" ></Image>
            <h3 >
                8.  卒業した先輩（哀愁）
            </h3>
            <Image src="masa.JPG" alt="dmc" ></Image>
            <h3 >
                9.  DJ神
            </h3>
            <Image src="djkami.JPG" alt="dmc" ></Image>
        </div>
    )
}

export default Main