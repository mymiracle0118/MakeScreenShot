import {useState, useEffect} from "react";

const NFTCharacter = ({name, propfunc, ...restProps})=>{
    const [active, setActive] = useState('');
    const [layer_img, setLayerImg] = useState({
        background: "",
        accessories: "",
        claws: "",
        clothes: "",
        head: "",
        neck: "",
        pedestal: "",
        skins: ""
    });

    useEffect(() => {
        setLayerImg({
            ...layer_img,
            background: "img/1.png",
            claws: "img/claws_black.png",
            pedestal: "img/lavarock.png",
            skins: "img/kitsune_red.png"
        })
    }, [])


    const initCharacter = () => {
        setLayerImg({
            background: "",
            accessories: "",
            claws: "",
            clothes: "",
            head: "",
            neck: "",
            pedestal: "",
            skins: ""
        })
    }

    return(
        <div id="screenshot" className="character" {...restProps}>
            <div id="background_layer" className="nft_layer">
                {layer_img['background'] !== "" && <img src={layer_img['background']} alt="no img" />}
            </div>
            <div id="accessories_layer" className="nft_layer">
                {layer_img['accessories'] !== "" &&<img src={layer_img['accessories']} alt="no img" />}
            </div>
            <div id="claws_layer" className="nft_layer">
                {layer_img['claws'] !== "" &&<img src={layer_img['claws']} alt="no img" />}
            </div>
            <div id="clothes_layer" className="nft_layer">
                {layer_img['clothes'] !== "" &&<img src={layer_img['clothes']} alt="no img" />}
            </div>
            <div id="head_layer" className="nft_layer">
                {layer_img['head'] !== "" &&<img src={layer_img['head']} alt="no img" />}
            </div>
            <div id="neck_layer" className="nft_layer">
                {layer_img['neck'] !== "" &&<img src={layer_img['neck']} alt="no img" />}
            </div>
            <div id="pedestal_layer" className="nft_layer">
                {layer_img['pedestal'] !== "" &&<img src={layer_img['pedestal']} alt="no img" />}
            </div>
            <div id="skins_layer" className="nft_layer">
                {layer_img['skins'] !== "" &&<img src={layer_img['skins']} alt="no img" />}
            </div>
        </div>
    );
}

export default NFTCharacter;