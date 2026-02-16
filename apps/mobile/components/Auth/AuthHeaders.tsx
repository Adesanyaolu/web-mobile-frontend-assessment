import { Image, useWindowDimensions, View } from "react-native";
import { images } from "@/assets/images";


export default function AuthHeaders() {
    const { width, height } = useWindowDimensions();

    // Cap image size so it never upscales beyond its native resolution
    const maxImageWidth = width * 0.85;
    const imageHeight = height * 0.45;
    return (
        <View style={{ position: 'absolute', top: 0, left: 0, right: 0, alignItems: 'center' }}>
            <Image
                source={images.logo}
                resizeMode="contain"
                style={{
                    width: maxImageWidth,
                    height: imageHeight,
                }}
            />
        </View>
    );
}