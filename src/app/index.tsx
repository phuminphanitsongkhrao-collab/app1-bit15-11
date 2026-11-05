//นําเข้า มุมมอง ข้อความ จาก
import { Image ,StyleSheet, Text, View, } from "react-native";

//ส่งออก เริ่มต้น ฟังชั่น ชื่อฟังชั่น
export default function App(){
    return (
        // ใส่ไตล์ตกเเต่ง
        <View style={myStyle.container}>

         <Text style={myStyle.title}>the best music</Text>
        // รูปภาพเเบบเอามาจากลิงค์
         <Image 
         source={{uri:"https://static.robloxden.com/robloxden-strapi/xsmall_robloxden_generated_180_DAY_32919ae22a3cc70b827582630d9a694b_34a37f3a8f.png"}} 
         style ={{
         width: 200, // กว้าง
         height: 200, // สูง
         borderRadius: 100, // ความโค้งของมุม
         borderWidth: 10, // ความกว้างของขอบ
         borderColor: "red" // สีของขอบ
}}
/>
       // รูปภาพเเบบเอามาใส่
        <Image 
         source={require('@/assets/images/fizz.webp')} 
         style ={{
         width: 200, // กว้าง
         height: 200, // สูง
         borderRadius: 100, // ความโค้งของมุม
         borderWidth: 10, // ความกว้างของขอบ
         borderColor: "red" // สีของขอบ
       
}}
/>
// ข้อความย่อย
<View style={{flexDirection: "row"}}>
     <Text>broken heart</Text>
     <Text>murderer</Text>
     <Text>no remorse</Text>
</View>
</View>
    )
}

const myStyle = StyleSheet.create({
     container:{
        // css = background-color
        backgroundColor:"purple",//สีพื้นหลัง
        flex: 1,//ขยาย
        paddingTop: 80, //เพิ่มช่องว่างด้านในกล่อง
        alignItems: "center"
     },
     title:{
        color:"pink",//สี text
        fontSize:67,// ขนาด text
        fontWeight:700, //ความหนา text
      //  textAlign:"center", จัดเเนวText
        //letterSpacing:15,//
     }
})