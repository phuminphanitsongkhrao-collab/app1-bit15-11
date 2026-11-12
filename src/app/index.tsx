//นําเข้า มุมมอง ข้อความ จาก
import { Image, StyleSheet, Text, View, } from "react-native";

//ส่งออก เริ่มต้น ฟังชั่น ชื่อฟังชั่น
export default function App() {
    return (
        // ใส่ไตล์ตกเเต่ง
        <View style={myStyle.container}>
            {/* รูปภาพเเบบเอามาใส่ */}
            <Image
                source={require('@/assets/images/xx.jpg')}
                style={{
                    width: 200, // กว้าง
                    height: 200, // สูง
                    borderRadius: 100, // ความโค้งของมุม
                    borderWidth: 10, // ความกว้างของขอบ
                    borderColor: "cyan" // สีของขอบ
                }}
            />

            <Text style={myStyle.title}>phumin phanitsongkhrao</Text>

            <Text style={myStyle.title2}>ชีวิตนี้จะไม่ทําไร เเล้วเล่นเกม นอน กิน</Text>
            <View style={myStyle.container2}>
                <Text style={myStyle.title2}>ห้อง BIT1/5 เลขที่ 11</Text>
                <Text style={myStyle.title2}>Email: phumin.phanitsongkhrao@e-tech.ac.th</Text>
                <Text style={myStyle.title2}>Phone: 083-206-0962</Text>
            </View>
            <Text style={myStyle.title3}>ภาพกิจกรรม</Text>
            {/* // ข้อความย่อย */}
            <View style={{ flexDirection: "row" }}>
                {/* // รูปภาพเเบบเอามาจากลิงค์ */}
                <Image
                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGbSeKkethzHaxgLTPHqH_smG8OIoTVh9iz8s4WXLUXw&s=10" }}
                    style={{
                        width: 150, // กว้าง
                        height: 150, // สูง
                        borderRadius: 10, // ความโค้งของมุม
                        borderWidth: 10, // ความกว้างของขอบ
                        borderColor: "red" // สีของขอบ


                    }}
                />
                {/* // รูปภาพเเบบเอามาจากลิงค์ */}
                <Image
                    source={{ uri: "https://tr.rbxcdn.com/180DAY-f13f55c8998e68be986d5bb46fa03b05/256/256/Image/Webp/noFilter" }}
                    style={{
                        width: 150, // กว้าง
                        height: 150, // สูง
                        borderRadius: 10, // ความโค้งของมุม
                        borderWidth: 10, // ความกว้างของขอบ
                        borderColor: "red" // สีของขอบ

                    }}
                />
                {/* // รูปภาพเเบบเอามาจากลิงค์ */}
                <Image
                    source={{ uri: "https://tr.rbxcdn.com/180DAY-d1a357e51def9d7b58449676ea462407/768/432/Image/Webp/noFilter" }}
                    style={{
                        width: 150, // กว้าง
                        height: 150, // สูง
                        borderRadius: 10, // ความโค้งของมุม
                        borderWidth: 10, // ความกว้างของขอบ
                        borderColor: "red" // สีของขอบ

                    }}
                />
            </View>
        </View>
    )
}

const myStyle = StyleSheet.create({
    container: {
        // css = background-color
        backgroundColor: "red",//สีพื้นหลัง
        flex: 1,//ขยาย
        paddingTop: 80, //เพิ่มช่องว่างด้านในกล่อง
        alignItems: "center"
    },
    container2: {
        width: 390,
        height: 150,
        backgroundColor: "cyan",
        borderRadius: 20,
        borderWidth: 5,
        borderColor: "cyan",
        
    },
    title: {
        color: "yellow",//สี text
        fontSize: 30,// ขนาด text
        fontWeight: 700, //ความหนา text
        alignItems: "center"
    },
    title2: {
        color: "black",//สี text
        fontSize: 20,// ขนาด text
        fontWeight: 700, //ความหนา text
    },
    title3: {
        color: "yellow",//สี text
        fontSize: 30,// ขนาด text
        fontWeight: 700, //ความหนา text
        textAlign: "left",
        width: "100%",
        paddingStart: 20,
    },
})
